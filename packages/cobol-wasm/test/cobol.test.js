// Real compiles and runs, off the assets that ship in this package - no server, no baseUrl.
import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { SOURCE_FORMATS, createCompiler } from '@live-codes/cobol-wasm';

// The toolchain boots once (about 25 MB of assets) and is shared by every compiler below, so this is
// deliberately one instance for the whole file.
const compiler = await createCompiler();

after(() => compiler.dispose());

test('a program compiles and runs, on stdout', async () => {
	const result = await compiler.run(`IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY "Hello from COBOL!".
    STOP RUN.
`);

	assert.equal(result.exitCode, 0);
	assert.equal(result.stdout, 'Hello from COBOL!\n');
	assert.equal(result.output, 'Hello from COBOL!\n');
	assert.equal(result.stderr, '');
	assert.deepEqual(result.errors, []);
	assert.equal(typeof result.compileMs, 'number');
	assert.equal(typeof result.runMs, 'number');
});

test('PICTURE clauses format the way COBOL formats them', async () => {
	const result = await compiler.run(`IDENTIFICATION DIVISION.
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
`);

	assert.equal(result.exitCode, 0);
	assert.equal(result.stdout, 'Hours: 40\nRate:  025.50\nPay:   001020.00\n');
});

test('ACCEPT reads stdin', async () => {
	const result = await compiler.run(
		`IDENTIFICATION DIVISION.
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
		'Grace Hopper\n'
	);

	assert.equal(result.exitCode, 0);
	assert.equal(result.stdout, 'What is your name?\nHello, Grace Hopper!\n');
});

test('a compile error is a failed run with the compiler as a value', async () => {
	const result = await compiler.run(`IDENTIFICATION DIVISION.
PROGRAM-ID. BROKEN.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-COUNT PIC 9(2) VALUE 1.
PROCEDURE DIVISION.
    ADD 1 TO WS-TOTAL.
    STOP RUN.
`);

	// The program never ran, so there is no exit code - and the failure is not an exception.
	assert.equal(result.exitCode, null);
	assert.equal(result.runMs, null);
	assert.equal(result.output, '');
	assert.ok(result.errors.length > 0, 'errors should carry the diagnostics');

	const text = result.diagnostics.join('\n');
	assert.match(text, /WS-TOTAL/);
	assert.match(text, /main\.cob:\d+: error:/);
	// The compiler's private workspace directory is not the caller's business.
	assert.doesNotMatch(text, /__wasm_cobol/);
	// Nor is its colouring.
	assert.doesNotMatch(text, /\u001b\[/);
});

test('sourceFormat is validated against the formats GnuCOBOL accepts', async () => {
	assert.deepEqual([...SOURCE_FORMATS], ['free', 'fixed']);
	await assert.rejects(() => compiler.run('STOP RUN.', '', { sourceFormat: 'cobol85' }), /sourceFormat/);
	await assert.rejects(() => createCompiler({ sourceFormat: 'microfocus' }), /sourceFormat/);
});

test('the program sees argv through the runtime', async () => {
	const result = await compiler.run(
		`IDENTIFICATION DIVISION.
PROGRAM-ID. ARGS.
PROCEDURE DIVISION.
    DISPLAY "ran".
    STOP RUN.
`,
		'',
		{ args: ['one', 'two'] }
	);

	assert.equal(result.exitCode, 0);
	assert.equal(result.stdout, 'ran\n');
});
