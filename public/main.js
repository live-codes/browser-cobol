/* global cobolWasm */
/**
 * The demo driver.
 *
 * Everything that used to live here — booting the toolchain, compiling, running, stdin plumbing,
 * ANSI and workspace-prefix scrubbing, the SharedArrayBuffer stub — now lives in
 * `@live-codes/cobol-wasm`, which is loaded above as the IIFE bundle. What is left is the page:
 * examples, a source box, a stdin box, and a run button.
 *
 * The assets come from `vendor/`, written by the package's own `cobol-wasm-copy-assets`. Nothing in
 * this page — and nothing in the package — is fetched from anyone else's site.
 */

const ASSETS_URL = new URL('/vendor/', location.href);

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
  assetsUrl: document.getElementById('assets-url'),
};

// The browser probes drive the page by element id rather than by evaluating string literals, which
// some shells mangle when passing arguments.
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

function clearOutput() {
  el.output.textContent = '';
  el.diagnostics.textContent = '';
  el.duration.textContent = '';
}

function loadExample(index) {
  el.editor.value = EXAMPLES[index].code;
  el.examples.value = String(index);
}

/** The toolchain is large, so it is created on first use and kept for the session. */
async function ensureCompiler() {
  if (compiler) return compiler;
  setStatus('loading', 'loading toolchain…', 'busy');
  setProgress('Downloading and instantiating GnuCOBOL and Clang…');
  const started = performance.now();
  compiler = await cobolWasm.createCompiler({ baseUrl: ASSETS_URL });
  document.documentElement.dataset.toolchainMs = String(Math.round(performance.now() - started));
  setProgress(null);
  return compiler;
}

async function run() {
  if (running) return;

  const source = el.editor.value;
  if (source.trim() === '') return;

  running = true;
  el.run.disabled = true;
  clearOutput();
  // Per-run metrics are read by the browser probes; stale values would lie.
  for (const key of ['toolchainMs', 'compileMs', 'runMs', 'exitCode', 'errorCount']) {
    delete document.documentElement.dataset[key];
  }

  const started = performance.now();
  try {
    const active = await ensureCompiler();
    setStatus('running', 'running…', 'busy');

    const result = await active.run(source, el.stdin.value.replace(/\r\n/g, '\n'), {
      sourceFormat: el.format.value,
    });

    el.output.textContent = result.output;
    el.diagnostics.textContent = result.diagnostics.join('\n');
    document.documentElement.dataset.exitCode = String(result.exitCode);
    document.documentElement.dataset.compileMs = String(result.compileMs);
    document.documentElement.dataset.runMs = String(result.runMs);
    document.documentElement.dataset.errorCount = String(result.errors.length);

    const ok = result.exitCode === 0;
    setStatus(ok ? 'done' : 'error', ok ? 'exit 0' : `exit ${result.exitCode}`, ok ? 'ok' : 'err');
    el.duration.textContent = `${Math.round(performance.now() - started)} ms`;
  } catch (error) {
    setProgress(null);
    el.diagnostics.textContent = error instanceof Error ? error.message : String(error);
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

el.assetsUrl.textContent = ASSETS_URL.pathname;
loadExample(0);
setStatus('ready', 'ready');
