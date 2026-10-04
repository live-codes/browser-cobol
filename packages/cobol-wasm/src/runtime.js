// One COBOL toolchain per asset source, shared by every compiler created against it.
//
// Booting it is the expensive part - ~25 MB of assets, and a 44 MB clang module to instantiate - so
// creating one per compiler would pay that again for every language entry on a page. Compilers hold
// a reference; `dispose()` drops it when the last one goes.
import { createCobolCompiler } from '@wasm-idle/llvm-core/cobol';

const compilers = new Map();

export async function acquireCompiler(source, options = {}) {
	let pending = compilers.get(source.key);
	if (!pending) {
		pending = createRecord(source, options).catch((error) => {
			// A failed load must not poison the cache - the next caller should be able to retry.
			compilers.delete(source.key);
			throw error;
		});
		compilers.set(source.key, pending);
	}

	const record = await pending;
	record.references += 1;
	return record;
}

export function releaseCompiler(record) {
	record.references -= 1;
	if (record.references <= 0) compilers.delete(record.key);
}

// The toolchain owns one memfs and one compiler process, so two runs at once would write over each
// other's files and redirect each other's output. Runs queue on the record instead.
export async function withCompilerLock(record, work) {
	const previous = record.queue;
	let release;
	record.queue = new Promise((resolve) => {
		release = resolve;
	});
	await previous;
	try {
		return await work();
	} finally {
		release();
	}
}

// The host's memory wrapper does `buf instanceof SharedArrayBuffer` unconditionally, which throws
// "SharedArrayBuffer is not defined" on a page that is not cross-origin isolated - the failure looks
// like a threaded runtime refusing to boot, and it is not one. Nothing on this path allocates a real
// shared buffer: clang, lld and memfs each define their own unshared memory and import only
// functions, and the host's only other SharedArrayBuffer reference sits behind its debug runtime,
// which this package does not use. A stub is therefore enough to keep that branch from throwing and
// let a plain origin work.
//
// On an isolated origin, or in Node, the real constructor is already there and this does nothing.
// The stub throws if anything ever tries to construct one, so a runtime that genuinely starts using
// shared memory fails loudly here instead of quietly misbehaving.
function ensureSharedArrayBufferStub() {
	if (typeof globalThis.SharedArrayBuffer === 'undefined') {
		globalThis.SharedArrayBuffer = class SharedArrayBuffer {
			constructor() {
				throw new Error('SharedArrayBuffer is not available in this context');
			}
		};
	}
}

async function createRecord(source, options) {
	ensureSharedArrayBufferStub();
	// Must happen before the compiler exists: it fetches both manifests and every asset itself.
	source.installFetch();

	const compiler = await createCobolCompiler({
		runtimeBaseUrl: source.cobolBaseUrl,
		clangRuntimeBaseUrl: source.clangBaseUrl,
		...(options.maxAssetBytes ? { maxAssetBytes: options.maxAssetBytes } : {})
	});

	return {
		key: source.key,
		source,
		references: 0,
		queue: Promise.resolve(),
		compiler
	};
}
