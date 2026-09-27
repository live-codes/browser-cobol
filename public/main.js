import { createCobolCompiler, executeBrowserCobolArtifact } from '@wasm-idle/llvm-core/cobol';

/**
 * Compiles and runs COBOL in the browser.
 *
 * The pipeline is the real one, and none of it is a subset interpreter:
 *
 *   1. GnuCOBOL 3.2 `cobc` (compiled to wasm32-wasi) translates the source to C
 *   2. Clang 22.1.8 (wasm-llvm) compiles that C against a WASI sysroot
 *   3. wasm-ld links it against libcob, GMP and the WASI emulation libraries
 *   4. the resulting WASI module is instantiated and run in this tab
 *
 * The compiler and its assets are static files fetched over HTTP — this page
 * has no build step and needs no server-side compilation. The toolchain is
 * loaded lazily on the first Run, because it is much heavier than the page.
 *
 * Override either mirror with `?cobolBaseUrl=` / `?clangBaseUrl=` (absolute, or
 * relative to this page with a trailing slash).
 */

const DEFAULT_COBOL_BASE_URL = 'https://seorii.page/wasm-idle/wasm-cobol/';
const DEFAULT_CLANG_BASE_URL = 'https://seorii.page/wasm-idle/clang/';

// Each build gets a private workspace directory; the compiler's diagnostics
// name the source through it, which is noise for someone reading the output.
const WORKSPACE_PREFIX = /__wasm_cobol_\d+\//g;

const EXAMPLES = [
  {
    name: 'Hello world',
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY "Hello from COBOL!".
    DISPLAY "Compiled and run in your browser, with no server.".
    STOP RUN.
`,
  },
  {
    name: 'PICTURE clauses and COMPUTE',
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. PAYROLL.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-HOURS PIC 9(2)     VALUE 40.
01 WS-RATE  PIC 9(3)V99  VALUE 25.50.
01 WS-PAY   PIC 9(6)V99.
PROCEDURE DIVISION.
    COMPUTE WS-PAY = WS-HOURS * WS-RATE.
    DISPLAY "Hours: " WS-HOURS.
    DISPLAY "Rate:  " WS-RATE.
    DISPLAY "Pay:   " WS-PAY.
    STOP RUN.
`,
  },
  {
    name: 'PERFORM VARYING (loop)',
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. SQUARES.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-N  PIC 9(2).
01 WS-SQ PIC 9(4).
PROCEDURE DIVISION.
    PERFORM VARYING WS-N FROM 1 BY 1 UNTIL WS-N > 10
        COMPUTE WS-SQ = WS-N * WS-N
        DISPLAY "n=" WS-N "  n squared=" WS-SQ
    END-PERFORM.
    DISPLAY "Done.".
    STOP RUN.
`,
  },
  {
    name: 'ACCEPT from stdin',
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. GREET.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-NAME PIC X(30).
PROCEDURE DIVISION.
    DISPLAY "What is your name?".
    ACCEPT WS-NAME.
    DISPLAY "Hello, " FUNCTION TRIM(WS-NAME) "!".
    STOP RUN.
`,
  },
  {
    name: 'Tables and paragraphs',
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. ROSTER.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-NAMES.
   05 WS-NAME PIC X(10) OCCURS 3 TIMES.
01 WS-I PIC 9.
PROCEDURE DIVISION.
    MOVE "ALICE" TO WS-NAME(1).
    MOVE "BOB" TO WS-NAME(2).
    MOVE "CAROL" TO WS-NAME(3).
    PERFORM SHOW-ROSTER.
    STOP RUN.
SHOW-ROSTER.
    PERFORM VARYING WS-I FROM 1 BY 1 UNTIL WS-I > 3
        DISPLAY WS-I ": " FUNCTION TRIM(WS-NAME(WS-I))
    END-PERFORM.
`,
  },
  {
    name: 'A compile error (shown as diagnostics)',
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. BROKEN.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-COUNT PIC 9(2) VALUE 1.
PROCEDURE DIVISION.
    ADD 1 TO WS-TOTAL.
    DISPLAY WS-TOTAL.
    STOP RUN.
`,
  },
];

function resolveBaseUrl(param, fallback) {
  const override = (new URLSearchParams(location.search).get(param) ?? '').trim();
  const base = override === '' ? fallback : override;
  return { baseUrl: base.endsWith('/') ? base : `${base}/`, isOverride: override !== '' };
}

const cobolMirror = resolveBaseUrl('cobolBaseUrl', DEFAULT_COBOL_BASE_URL);
const clangMirror = resolveBaseUrl('clangBaseUrl', DEFAULT_CLANG_BASE_URL);

const el = {
  editor: document.getElementById('editor'),
  filename: document.getElementById('filename'),
  examples: document.getElementById('examples'),
  format: document.getElementById('format'),
  run: document.getElementById('run'),
  clear: document.getElementById('clear'),
  status: document.getElementById('status'),
  duration: document.getElementById('duration'),
  progress: document.getElementById('progress'),
  progressText: document.getElementById('progress-text'),
  stdin: document.getElementById('stdin'),
  output: document.getElementById('output'),
  diagnostics: document.getElementById('diagnostics'),
  cobolUrl: document.getElementById('cobol-url'),
  cobolOverride: document.getElementById('cobol-override'),
};

// The browser probes drive the page by element id rather than by evaluating
// string literals, which some shells mangle when passing arguments.
Object.assign(window, el);

let compiler = null;
let running = false;

function setStatus(token, label, kind = '') {
  el.status.textContent = label;
  el.status.className = `badge ${kind}`;
  document.documentElement.dataset.status = token;
}

function setProgress(text) {
  el.progress.hidden = text === null;
  if (text !== null) el.progressText.textContent = text;
}

function append(node, text) {
  if (!text) return;
  node.appendChild(document.createTextNode(text));
  node.scrollTop = node.scrollHeight;
}

// The compiler colours its output and names the source through its private
// workspace directory; the pane renders plain text, so strip both.
const ANSI = /\x1B\[[0-9;]*m/g;

function appendDiagnostics(text) {
  append(el.diagnostics, text.replace(ANSI, '').replace(WORKSPACE_PREFIX, ''));
}

function clearOutput() {
  el.output.replaceChildren();
  el.diagnostics.replaceChildren();
  el.duration.textContent = '';
}

function loadExample(index) {
  el.editor.value = EXAMPLES[index].code;
  el.examples.value = String(index);
}

/** The toolchain is large, so it is fetched on first use and then reused. */
async function ensureCompiler() {
  if (compiler) return compiler;
  setStatus('loading', 'loading toolchain…', 'busy');
  setProgress('Downloading GnuCOBOL, Clang and the WASI sysroot…');
  const started = performance.now();
  compiler = await createCobolCompiler({
    runtimeBaseUrl: cobolMirror.baseUrl,
    clangRuntimeBaseUrl: clangMirror.baseUrl,
  });
  document.documentElement.dataset.toolchainMs = String(Math.round(performance.now() - started));
  setProgress(null);
  return compiler;
}

/**
 * COBOL reads stdin through ACCEPT. The runtime pulls chunks until the callback
 * returns null, so this yields the buffer once and then reports end-of-input.
 * It must never return an empty string repeatedly — the reader would spin.
 */
function oneShotStdin(text) {
  let sent = false;
  return () => {
    if (sent || text === '') return null;
    sent = true;
    return text.endsWith('\n') ? text : `${text}\n`;
  };
}

async function run() {
  if (running) return;

  const source = el.editor.value;
  if (source.trim() === '') return;
  // GnuCOBOL warns about an unterminated final line, so end it explicitly
  // rather than trimming the newline away.
  const code = source.endsWith('\n') ? source : `${source}\n`;

  running = true;
  el.run.disabled = true;
  clearOutput();
  // Per-run metrics are read by the browser probes; stale values would lie.
  for (const key of ['stage', 'compileMs', 'execMs', 'exitCode']) {
    delete document.documentElement.dataset[key];
  }

  const started = performance.now();
  try {
    await ensureCompiler();

    setStatus('compiling', 'compiling…', 'busy');
    const compileStarted = performance.now();
    const result = await compiler.compile({
      code,
      fileName: 'main.cob',
      sourceFormat: el.format.value,
      onProgress: (progress) => {
        document.documentElement.dataset.stage = progress.stage;
        setProgress(`${progress.message} (${progress.percent}%)`);
      },
    });
    document.documentElement.dataset.compileMs = String(Math.round(performance.now() - compileStarted));
    setProgress(null);
    appendDiagnostics(result.stdout ?? '');

    if (!result.success || !result.artifact) {
      // stderr repeats the compiler output when the failure came from the
      // compile itself, so only surface it when it adds something.
      if (result.stderr && result.stderr !== result.stdout) appendDiagnostics(result.stderr);
      setStatus('error', 'compile error', 'err');
      el.duration.textContent = `${Math.round(performance.now() - started)} ms`;
      return;
    }

    setStatus('running', 'running…', 'busy');
    const execStarted = performance.now();
    const execution = await executeBrowserCobolArtifact(result.artifact, {
      stdin: oneShotStdin(el.stdin.value.replace(/\r\n/g, '\n')),
      stdout: (chunk) => append(el.output, chunk),
      stderr: (chunk) => appendDiagnostics(chunk),
    });
    document.documentElement.dataset.execMs = String(Math.round(performance.now() - execStarted));
    document.documentElement.dataset.exitCode = String(execution.exitCode ?? 'null');

    setStatus(execution.exitCode === 0 ? 'done' : 'error', `exit ${execution.exitCode}`, execution.exitCode === 0 ? 'ok' : 'err');
    el.duration.textContent = `${Math.round(performance.now() - started)} ms`;
  } catch (error) {
    setProgress(null);
    appendDiagnostics(error instanceof Error ? error.message : String(error));
    setStatus('error', 'failed', 'err');
    el.duration.textContent = `${Math.round(performance.now() - started)} ms`;
  } finally {
    running = false;
    el.run.disabled = false;
    document.documentElement.dataset.runs = String(
      Number(document.documentElement.dataset.runs ?? 0) + 1,
    );
  }
}

EXAMPLES.forEach((example, index) => {
  el.examples.append(new Option(example.name, String(index)));
});

el.examples.addEventListener('change', () => loadExample(Number(el.examples.value)));
el.run.addEventListener('click', run);
el.clear.addEventListener('click', clearOutput);
el.editor.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    run();
  }
});

el.cobolUrl.textContent = cobolMirror.baseUrl;
el.cobolOverride.textContent = cobolMirror.isOverride ? '(from ?cobolBaseUrl)' : '(default)';
document.documentElement.dataset.status = 'ready';
loadExample(0);
