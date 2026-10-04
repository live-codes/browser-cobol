// One implementation, two entry points: `index.js` for anything without a filesystem, and
// `index.node.js` for Node, which can also read the assets that ship in this package.
import { resolveAssetSource } from './assets.js';
import { runCobol } from './cobol.js';
import { acquireCompiler, releaseCompiler, withCompilerLock } from './runtime.js';

/** The source formats GnuCOBOL accepts, for building a picker before creating a compiler. */
export const SOURCE_FORMATS = Object.freeze(['free', 'fixed']);

function resolveSourceFormat(value) {
	const format = value == null ? 'free' : String(value).trim().toLowerCase();
	if (!SOURCE_FORMATS.includes(format)) {
		throw new Error(
			`sourceFormat must be one of ${SOURCE_FORMATS.join(', ')} (got ${JSON.stringify(value)}).`
		);
	}
	return format;
}

export function createApi({ packaged }) {
	/**
	 * Create a COBOL compiler.
	 *
	 * The toolchain is shared between every compiler created against the same assets, so a page that
	 * creates more than one pays for the ~25 MB boot once.
	 *
	 * @param {object} [options]
	 * @param {string} [options.baseUrl] - the directory holding `cobol/` and `clang/`. In Node this
	 *   can be omitted to use the assets that ship in this package and its `@live-codes/clang-wasm`
	 *   dependency; anywhere else it is required.
	 * @param {string} [options.clangBaseUrl] - where the Clang half is served from, if not
	 *   `clang/` under `baseUrl`.
	 * @param {'free'|'fixed'} [options.sourceFormat] - default for `run()`, `free` unless set.
	 * @param {string[]} [options.compileArgs] - extra GnuCOBOL (`cobc`) flags.
	 * @param {string[]} [options.cCompileArgs] - extra clang flags for the generated C.
	 * @param {string[]} [options.args] - default program argv.
	 * @param {string} [options.fileName] - the name the source is compiled under.
	 * @param {number} [options.maxAssetBytes] - ceiling for a decompressed asset.
	 */
	async function createCompiler(options = {}) {
		const source = resolveAssetSource(options, packaged);
		const record = await acquireCompiler(source, options);
		const sourceFormat = resolveSourceFormat(options.sourceFormat);

		const defaults = {
			fileName: options.fileName ?? 'main.cob',
			compileArgs: options.compileArgs ?? [],
			cCompileArgs: options.cCompileArgs ?? [],
			args: options.args ?? []
		};

		let disposed = false;

		return {
			/** The source format this compiler defaults to, `free` or `fixed`. */
			sourceFormat,

			/** Every source format this package accepts, for building a picker. */
			sourceFormats: [...SOURCE_FORMATS],

			/**
			 * Compile and run a program.
			 *
			 * @param {string} code - the program source.
			 * @param {string|Uint8Array} [input] - stdin, handed to the program once and then closed.
			 * @param {object} [runOptions] - per-run overrides: `sourceFormat`, `args`,
			 *   `compileArgs`, `cCompileArgs`, `fileName`.
			 * @returns {Promise<{stdout: string, stderr: string, output: string, errors: string[],
			 *   diagnostics: string[], exitCode: number|null, compileMs: number, runMs: number|null}>}
			 *   `output` is stdout and stderr in the order the program wrote them. `errors` holds the
			 *   compiler's diagnostics and is empty when it compiled; `diagnostics` holds them either
			 *   way, so warnings from a successful compile are not lost. `exitCode` is null when the
			 *   program never ran.
			 */
			async run(code, input, runOptions = {}) {
				if (disposed) throw new Error('This compiler has been disposed.');
				if (typeof code !== 'string') {
					throw new Error('run() needs the program source as its first argument.');
				}

				const params = {
					code,
					input: input ?? '',
					fileName: runOptions.fileName ?? defaults.fileName,
					sourceFormat:
						'sourceFormat' in runOptions
							? resolveSourceFormat(runOptions.sourceFormat)
							: sourceFormat,
					compileArgs: [...defaults.compileArgs, ...(runOptions.compileArgs ?? [])],
					cCompileArgs: [...defaults.cCompileArgs, ...(runOptions.cCompileArgs ?? [])],
					args: runOptions.args ?? defaults.args
				};

				return withCompilerLock(record, () => runCobol(record, params));
			},

			/** Release this compiler's hold on the shared toolchain. Further runs throw. */
			dispose() {
				if (disposed) return;
				disposed = true;
				releaseCompiler(record);
			}
		};
	}

	return { createCompiler, SOURCE_FORMATS };
}
