/**
 * A static server for this demo.
 *
 * It exists because `file://` cannot run ES modules or fetch the wasm assets.
 * Nothing else is needed: the page runs with NO cross-origin isolation.
 *
 *   node serve.js [port] [root] [--isolation]
 *
 * `root` defaults to `public/` and is resolved against this file.
 *
 * `--isolation` adds COOP/COEP, which is what a threaded WebAssembly runtime
 * would need. This toolchain is not threaded — its clang, lld and memfs modules
 * define their own unshared memories and import only functions — so the headers
 * are unnecessary. The flag is kept so the difference can still be demonstrated;
 * see FINDINGS.md for the measurements.
 */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const argv = process.argv.slice(2);
const isolation = argv.includes('--isolation');
const positional = argv.filter((arg) => !arg.startsWith('-'));

const PORT = Number(positional[0] ?? 8126);
const ROOT = resolve(fileURLToPath(new URL('./', import.meta.url)), positional[1] ?? 'public');

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
  const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
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
    // Nothing here is content-pinned, so serve everything fresh; the browser
    // caches the CDN assets instead.
    'Cache-Control': 'no-store',
  };

  if (isolation) {
    headers['Cross-Origin-Opener-Policy'] = 'same-origin';
    headers['Cross-Origin-Embedder-Policy'] = 'require-corp';
  }

  res.writeHead(200, headers).end(body);
});

server.listen(PORT, () => {
  console.log(`browser-cobol: http://localhost:${PORT}/`);
  console.log(
    `serving ${ROOT} — cross-origin isolation ${isolation ? 'ON (--isolation)' : 'off (not needed)'}`,
  );
  console.log('the GnuCOBOL/Clang toolchain comes from a runtime mirror on first run');
  console.log('press Ctrl+C to stop');
});
