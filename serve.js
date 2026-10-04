/**
 * A static server for this demo.
 *
 * It is rooted at the repository, not at `public/`, because the page needs three things from three
 * places: its own files under `public/`, the package's IIFE bundle under
 * `packages/cobol-wasm/dist/`, and the runtime assets `cobol-wasm-copy-assets` writes into `vendor/`.
 * One root serves all three.
 *
 *   node serve.js [port] [--isolation]
 *
 * No cross-origin isolation is needed — and `--isolation` is only here to show that adding it
 * changes nothing. The toolchain is single-threaded, and the package installs the SharedArrayBuffer
 * stub the host's memory wrapper expects, so the page runs on a plain origin. See FINDINGS.md.
 */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const argv = process.argv.slice(2);
const isolation = argv.includes('--isolation');
const PORT = Number(argv.find((arg) => !arg.startsWith('-')) ?? 8126);
const ROOT = resolve(fileURLToPath(new URL('./', import.meta.url)));

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm',
  '.gz': 'application/gzip',
  '.tar': 'application/x-tar',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.md': 'text/markdown; charset=utf-8',
};

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);

  // `/` redirects rather than serving the page directly: relative URLs in it (`./main.js`) resolve
  // against the request path, so serving it at `/` would ask for `/main.js`.
  if (path === '/') {
    res.writeHead(302, { Location: '/public/' }).end();
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

  const headers = {
    'Content-Type': TYPES[extname(filePath).toLowerCase()] ?? 'application/octet-stream',
    'Content-Length': body.length,
    // The copied assets are content-pinned by the package's receipts, so they can cache hard;
    // everything else is served fresh.
    'Cache-Control': /^vendor[\\/]/.test(rel) ? 'public, max-age=31536000, immutable' : 'no-store',
  };

  if (isolation) {
    headers['Cross-Origin-Opener-Policy'] = 'same-origin';
    headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
  }

  res.writeHead(200, headers).end(body);
});

server.listen(PORT, () => {
  console.log(`browser-cobol: http://localhost:${PORT}/`);
  console.log(`serving ${ROOT}`);
  console.log(`cross-origin isolation ${isolation ? 'ON (--isolation)' : 'off (not needed)'}`);
  console.log('run `npm run vendor` first if the asset requests 404');
  console.log('press Ctrl+C to stop');
});
