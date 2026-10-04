// A static server for the browser example.
//
//   node examples/browser/serve.mjs [port]
//
// It is rooted at the package, not at this directory, because the example loads the package's own
// source (`/src/index.js`) through its import map as well as the copied assets under
// `examples/browser/vendor/`. No cross-origin isolation is needed: the package installs the
// SharedArrayBuffer stub the runtime's memory wrapper expects.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('../../', import.meta.url)));
const PORT = Number(process.argv[2] ?? 8127);

const TYPES = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.wasm': 'application/wasm',
	'.gz': 'application/gzip',
	'.tar': 'application/x-tar'
};

const server = createServer(async (req, res) => {
	const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);

	// `/` redirects rather than serving index.html directly: relative URLs in the page (`./main.js`,
	// `./vendor/`) resolve against the request path, so serving it at `/` would ask for `/main.js`.
	if (path === '/') {
		res.writeHead(302, { Location: '/examples/browser/' }).end();
		return;
	}

	const rel = (path.endsWith('/') ? `${path}index.html` : path).replace(/^\/+/, '');
	const filePath = normalize(join(ROOT, rel));

	if (!filePath.startsWith(normalize(ROOT))) {
		res.writeHead(403, { 'Content-Type': 'text/plain' }).end('Forbidden');
		return;
	}

	let body;
	try {
		body = await readFile(filePath);
	} catch {
		res.writeHead(404, { 'Content-Type': 'text/plain' }).end(`Not found: /${rel}`);
		return;
	}

	res.writeHead(200, {
		'Content-Type': TYPES[extname(filePath).toLowerCase()] ?? 'application/octet-stream',
		'Content-Length': body.length,
		'Cache-Control': 'no-store'
	}).end(body);
});

server.listen(PORT, () => {
	console.log(`cobol-wasm browser example: http://localhost:${PORT}/`);
	console.log(`serving ${ROOT}`);
});
