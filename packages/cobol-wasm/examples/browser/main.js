// A page that consumes @live-codes/cobol-wasm the way a bundler-less site has to: an import map for
// the package's bare specifiers, and a `baseUrl` pointing at the tree `cobol-wasm-copy-assets`
// wrote into ./vendor. Nothing here is fetched from anyone else's site.
import { SOURCE_FORMATS, createCompiler } from '@live-codes/cobol-wasm';

// Both trees - `cobol/` and `clang/` - sit under this one directory.
const BASE_URL = new URL('./vendor/', location.href);

const EXAMPLES = [
	{
		name: 'Hello world',
		code: `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY "Hello from COBOL!".
    STOP RUN.
`,
	},
	{
		name: 'PICTURE clauses',
		code: `IDENTIFICATION DIVISION.
PROGRAM-ID. PAYROLL.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-HOURS PIC 9(2)     VALUE 40.
01 WS-RATE  PIC 9(3)V99  VALUE 25.50.
01 WS-PAY   PIC 9(6)V99.
PROCEDURE DIVISION.
    COMPUTE WS-PAY = WS-HOURS * WS-RATE.
    DISPLAY "Rate: " WS-RATE.
    DISPLAY "Pay:  " WS-PAY.
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
		name: 'A compile error',
		code: `IDENTIFICATION DIVISION.
PROGRAM-ID. BROKEN.
PROCEDURE DIVISION.
    ADD 1 TO WS-TOTAL.
    STOP RUN.
`,
	},
];

const el = {
	editor: document.getElementById('editor'),
	examples: document.getElementById('examples'),
	format: document.getElementById('format'),
	stdin: document.getElementById('stdin'),
	run: document.getElementById('run'),
	output: document.getElementById('output'),
	errors: document.getElementById('errors'),
	status: document.getElementById('status'),
	timings: document.getElementById('timings'),
};

Object.assign(window, el);

let compiler = null;
let running = false;

function setStatus(token, label) {
	el.status.textContent = label;
	document.documentElement.dataset.status = token;
}

function loadExample(index) {
	el.editor.value = EXAMPLES[index].code;
	el.examples.value = String(index);
}

async function run() {
	if (running) return;
	const code = el.editor.value;
	if (code.trim() === '') return;

	running = true;
	el.run.disabled = true;
	el.output.textContent = '';
	el.errors.textContent = '';
	el.timings.textContent = '';

	try {
		if (!compiler) {
			setStatus('booting', 'booting…');
			compiler = await createCompiler({ baseUrl: BASE_URL });
		}
		setStatus('running', 'running…');

		const result = await compiler.run(code, el.stdin.value, { sourceFormat: el.format.value });

		el.output.textContent = result.output;
		el.errors.textContent = result.diagnostics.join('\n');
		el.timings.textContent = `compile ${result.compileMs} ms · run ${result.runMs ?? '—'} ms`;
		document.documentElement.dataset.exitCode = String(result.exitCode);
		document.documentElement.dataset.compileMs = String(result.compileMs);
		document.documentElement.dataset.errorCount = String(result.errors.length);
		setStatus(result.exitCode === 0 ? 'done' : 'failed', result.exitCode === 0 ? 'done' : 'failed');
	} catch (error) {
		el.errors.textContent = error instanceof Error ? error.message : String(error);
		setStatus('failed', 'failed');
	} finally {
		running = false;
		el.run.disabled = false;
		document.documentElement.dataset.runs = String(
			Number(document.documentElement.dataset.runs ?? 0) + 1
		);
	}
}

EXAMPLES.forEach((example, index) => {
	el.examples.append(new Option(example.name, String(index)));
});
SOURCE_FORMATS.forEach((format) => el.format.append(new Option(format, format)));

el.examples.addEventListener('change', () => loadExample(Number(el.examples.value)));
el.run.addEventListener('click', run);
el.editor.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
		event.preventDefault();
		run();
	}
});

document.documentElement.dataset.source = 'packaged';
loadExample(0);
setStatus('ready', 'ready');
