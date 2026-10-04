// Everything a caller is shown goes through here.
//
// GnuCOBOL and the runtime's clang invocation both colour their output, and the COBOL host builds
// each program in a private workspace directory whose name leaks into every diagnostic. None of that
// is worth showing, and the escapes defeat anything matching on the text.
const ANSI = /\u001b\[[0-9;]*[A-Za-z]/g;
const WORKSPACE_PREFIX = /__wasm_cobol_\d+\//g;

const stripAnsi = (text) => String(text ?? '').replace(ANSI, '');

// cobc and clang write to the same stream the runtime logs its own steps to, and it has to, because
// with logging off the linker's errors are not forwarded at all. Diagnostics are what is left once
// those lines are dropped. cobc's own output never starts a line with `>`, so this cannot eat one.
const RUNTIME_LINE = /^\s*>|^\s*done\.?\s*$/;

export const compilerDiagnostics = (raw) =>
	stripAnsi(raw)
		.replace(WORKSPACE_PREFIX, '')
		.split(/\r?\n/)
		.map((line) => line.replace(/\s+$/, ''))
		.filter((line) => line && !RUNTIME_LINE.test(line));

// Program output keeps its formatting, so only the ANSI escapes go.
export const cleanProgramOutput = (text) => stripAnsi(text);

// stdin is read in chunks: whatever is handed over is consumed before the next read, and `null`
// means EOF. The whole input is offered once, so a program that reads more than it was given sees
// EOF rather than a repeat of its own input.
//
// It must never return an empty string on every call: the reader refills by calling this while its
// buffer is empty, so a callback that always yields '' would spin.
export const makeStdin = (input) => {
	if (input == null || input.length === 0) return () => null;
	let sent = false;
	return () => {
		if (sent) return null;
		sent = true;
		return input;
	};
};
