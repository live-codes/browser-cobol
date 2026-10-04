#!/usr/bin/env node
// Copies the runtime assets into a directory you serve.
//
// This is the browser story: a page cannot read a file inside node_modules, so the assets have to be
// published by whatever serves the page. One command drops a complete, self-describing copy into
// your public directory - both trees, because COBOL needs the GnuCOBOL frontend in `cobol/` and the
// Clang toolchain in `clang/`; point `baseUrl` at the directory and nothing else has to be hosted.
//
// What gets copied is exactly what `ASSET_RECEIPTS` names, not whole source trees: the Clang package
// also carries an Objective-C runtime that COBOL never loads, and a copy whose contents match its
// receipts is one where `asset-receipts.json` describes the whole directory.
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ASSET_RECEIPTS } from '../src/asset-receipts.js';
import { packagedAssets } from '../src/packaged.node.js';

const USAGE = `Copy the runtime assets that ship with this package, and the Clang assets it depends
on, into a directory you serve.

  cobol-wasm-copy-assets [directory]

  directory   where to write them (default: ./cobol)

  --print-path   print the packaged assets directories and exit
  --help         print this
`;

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
	console.log(USAGE);
	process.exit(0);
}
if (args.includes('--print-path')) {
	for (const [tree, root] of Object.entries(packagedAssets.roots)) {
		console.log(`${tree}  ${fileURLToPath(root)}`);
	}
	process.exit(0);
}

const target = resolve(args.find((arg) => !arg.startsWith('-')) ?? 'cobol');

for (const path of Object.keys(ASSET_RECEIPTS)) {
	const [tree, ...rest] = path.split('/');
	const root = packagedAssets.roots[tree];
	if (!root) throw new Error(`No asset root for "${tree}" (from ${path})`);

	const destination = resolve(target, path);
	await mkdir(dirname(destination), { recursive: true });
	await copyFile(fileURLToPath(new URL(rest.join('/'), root)), destination);
}

// The copy carries the receipts for its own bytes, so whoever serves it can check it.
await writeFile(
	resolve(target, 'asset-receipts.json'),
	`${JSON.stringify(ASSET_RECEIPTS, null, 2)}\n`
);

console.log(`Runtime assets copied to ${target}`);
console.log('Serve that directory and pass its URL as baseUrl, for example:');
console.log("  await createCompiler({ baseUrl: new URL('/cobol/', location.href) });");
