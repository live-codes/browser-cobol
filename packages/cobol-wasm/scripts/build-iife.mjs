// Builds the IIFE bundle: one classic script, for workers and pages that cannot use ES modules.
//
//   npm run build:iife
//
// The output is committed, because a classic worker can only `importScripts()` a URL and consumers
// should not need a bundler to get one. It is built from the browser entry, so it never pulls in the
// Node-only packaged-assets code - and because the whole `@wasm-idle/llvm-core` host is bundled,
// a page using this build needs no import map at all.
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const entry = fileURLToPath(new URL('../src/index.js', import.meta.url));
const outfile = fileURLToPath(new URL('../dist/cobol-wasm.global.js', import.meta.url));

const banner = `/*! @live-codes/cobol-wasm - MIT. IIFE build, sets self.cobolWasm.
 *  importScripts('cobol-wasm.global.js') then self.cobolWasm.createCompiler({ baseUrl }).
 *  Bundles @wasm-idle/llvm-core (MIT AND Apache-2.0 WITH LLVM-exception),
 *  @live-codes/clang-wasm (MIT), @bjorn3/browser_wasi_shim (MIT OR Apache-2.0) and fflate (MIT).
 *  The compiler this loads is GnuCOBOL (GPL-3.0-or-later) with its runtime (LGPL-3.0-or-later),
 *  which ships in assets/ rather than in this bundle; see THIRD-PARTY-NOTICES.md. */`;

await build({
	entryPoints: [entry],
	outfile,
	bundle: true,
	format: 'iife',
	globalName: 'cobolWasm',
	minify: true,
	platform: 'browser',
	target: 'es2022',
	// Keeps any third-party @license comments in a sidecar rather than in the payload.
	legalComments: 'external',
	banner: { js: banner }
});

console.log(`dist/cobol-wasm.global.js  ${(statSync(outfile).size / 1024).toFixed(1)} KB (minified)`);
