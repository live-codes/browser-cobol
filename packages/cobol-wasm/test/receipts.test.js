// The receipts are the package's only defence against a tampered or partial install, so they are
// checked against the bytes they name - including the Clang half, which comes from a pinned
// @live-codes/clang-wasm. If that dependency is bumped without refreshing these, this fails here
// rather than in someone's browser.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ASSET_RECEIPTS } from '../src/asset-receipts.js';
import { sha256Hex } from '../src/assets.js';
import { packagedAssets } from '../src/packaged.node.js';

for (const [path, receipt] of Object.entries(ASSET_RECEIPTS)) {
	test(`the asset ${path} matches its pinned receipt`, async () => {
		const bytes = await packagedAssets.readFile(path);
		assert.equal(bytes.byteLength, receipt.bytes, `${path} has the wrong size`);
		assert.equal(await sha256Hex(bytes), receipt.sha256, `${path} has the wrong digest`);
	});
}

test('every asset the COBOL host asks for is covered by a receipt', async () => {
	// What `@wasm-idle/llvm-core/cobol` requests from the COBOL tree, and what the Clang runtime
	// requests from the Clang tree. Anything missing here would reach the fetch interceptor only to
	// fail with "No pinned receipt", so the names are asserted rather than discovered.
	const expected = [
		'cobol/runtime-manifest.v1.json',
		'cobol/cobc.wasm.gz',
		'cobol/rootfs.tar.gz',
		'cobol/c-sysroot.tar.gz',
		'clang/runtime-manifest.v1.json',
		'clang/bin/memfs.wasm.gz',
		'clang/bin/clang.wasm.gz',
		'clang/bin/lld.wasm.gz'
	];
	for (const path of expected) {
		assert.ok(ASSET_RECEIPTS[path], `no receipt for ${path}`);
	}
});
