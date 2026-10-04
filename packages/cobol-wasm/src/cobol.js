// The COBOL driver: one compile, then one run.
//
// Unlike C or Objective-C there is no link line to assemble here - `@wasm-idle/llvm-core/cobol` owns
// that, because it is the same three steps for every COBOL program (translate with cobc, compile the
// generated C with clang, link libcob and GMP). What this module adds is the shape a caller wants:
// diagnostics separated from program output, the two streams interleaved in write order, and timings.
import { executeBrowserCobolArtifact } from '@wasm-idle/llvm-core/cobol';
import { cleanProgramOutput, compilerDiagnostics, makeStdin } from './output.js';

export async function runCobol(record, params) {
	const { code, fileName, sourceFormat, compileArgs, cCompileArgs, args, input } = params;

	const compileStarted = performance.now();
	const result = await record.compiler.compile({
		code,
		fileName,
		sourceFormat,
		compileArgs,
		cCompileArgs,
		log: false
	});
	const compileMs = Math.round(performance.now() - compileStarted);

	// On failure the host returns the compiler's output in `stdout` *and* repeats it in `stderr` (or
	// puts the runtime's own error there when the compiler said nothing), so only one is used.
	const raw = result.success
		? (result.stdout ?? '')
		: result.stdout?.trim()
			? result.stdout
			: (result.stderr ?? '');
	const diagnostics = compilerDiagnostics(raw);

	if (!result.success || !result.artifact) {
		const errors = diagnostics.length ? diagnostics : ['Compilation failed.'];
		return {
			stdout: '',
			stderr: '',
			output: '',
			errors,
			diagnostics,
			exitCode: null,
			compileMs,
			runMs: null
		};
	}

	const execution = await execute(result.artifact, { args, input });
	return { ...execution, errors: [], diagnostics, compileMs };
}

async function execute(artifact, { args, input }) {
	const order = [];
	const stdout = [];
	const stderr = [];

	const runStarted = performance.now();
	const result = await executeBrowserCobolArtifact(artifact, {
		args,
		stdin: makeStdin(input),
		stdout: (chunk) => {
			order.push(chunk);
			stdout.push(chunk);
		},
		stderr: (chunk) => {
			order.push(chunk);
			stderr.push(chunk);
		}
	});
	const runMs = Math.round(performance.now() - runStarted);

	// `output` is the two streams in the order the program wrote them, which is what a terminal
	// would have shown.
	return {
		stdout: cleanProgramOutput(stdout.join('')),
		stderr: cleanProgramOutput(stderr.join('')),
		output: cleanProgramOutput(order.join('')),
		exitCode: result.exitCode,
		runMs
	};
}
