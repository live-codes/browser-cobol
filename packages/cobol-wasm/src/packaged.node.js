// The Node half of the packaged-asset source: reading the files, from two places.
//
// This module is only reachable through the `node` condition in package.json, so a browser bundle
// never includes it and never trips over `node:fs`.
import { readFile } from 'node:fs/promises';

export const PACKAGED_ROOT = new URL('../assets/', import.meta.url);

const COBOL_ROOT = new URL('cobol/', PACKAGED_ROOT);

// The Clang half belongs to `@live-codes/clang-wasm`, not to this package: shipping a second ~29 MB
// copy so that a page running both C and COBOL could load it twice is exactly what that package's
// shared-runtime design exists to avoid. The dependency is pinned to an exact version in
// package.json and `test/receipts.test.js` re-derives these files' digests from it, so the two
// cannot drift apart silently.
const clangWasmEntry = new URL(import.meta.resolve('@live-codes/clang-wasm'));
const CLANG_ROOT = new URL('../assets/', clangWasmEntry);

const ROOTS = { cobol: COBOL_ROOT, clang: CLANG_ROOT };

export const packagedAssets = {
	root: PACKAGED_ROOT,
	// Exposed so `cobol-wasm-copy-assets` can publish both trees under one directory.
	roots: ROOTS,
	readFile: async (path) => {
		const [tree, ...rest] = String(path).split('/');
		const root = ROOTS[tree];
		if (!root) {
			throw new Error(`Unknown asset tree "${tree}": expected one of ${Object.keys(ROOTS).join(', ')}`);
		}
		return new Uint8Array(await readFile(new URL(rest.join('/'), root)));
	}
};
