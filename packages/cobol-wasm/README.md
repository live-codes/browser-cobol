# @live-codes/cobol-wasm

Run **COBOL** with one API, on the real GnuCOBOL 3.2 compiler compiled to WebAssembly. No native
toolchain, no server, and no cross-origin isolation.

```js
import { createCompiler } from '@live-codes/cobol-wasm';

const compiler = await createCompiler();

const { stdout, errors, exitCode } = await compiler.run(`
IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY "Hello from COBOL!".
    STOP RUN.
`);

console.log(stdout);   // "Hello from COBOL!\n"
console.log(exitCode); // 0
```

That is Node, where the packaged assets can be read off disk. In a browser there is no filesystem, so
a page has to be given a URL — copy the assets somewhere it can fetch, and pass that directory:

```bash
npx --package @live-codes/cobol-wasm cobol-wasm-copy-assets public/cobol
```

```js
const compiler = await createCompiler({ baseUrl: new URL('/cobol/', location.href) });
```

Either way the package is bundled like any other npm package, because it imports
`@wasm-idle/llvm-core` by name.

## What it runs

The pipeline is the compiler, not an interpreter or a subset:

```
COBOL  →  GnuCOBOL `cobc` (wasm)  →  C  →  Clang 22 (wasm)  →  wasm-ld  →  WASI module  →  runs
```

`cobc` translates the source to C, Clang compiles that C against a WASI sysroot, wasm-ld links libcob
and GMP, and the resulting WASI module is instantiated. The browser-side host is
[`@wasm-idle/llvm-core`](https://www.npmjs.com/package/@wasm-idle/llvm-core); the Clang half is
[`@live-codes/clang-wasm`](https://www.npmjs.com/package/@live-codes/clang-wasm). Licensed MIT, with
one copyleft caveat for the GnuCOBOL binaries — see [Licensing](#licensing).

## API

### `createCompiler(options)`

Returns a promise for a compiler. The heavy part — about 25 MB of assets, of which ~23 MB is Clang
— is fetched here, so a bad `baseUrl` fails at this point rather than at the first `run`.

| Option | Meaning |
| --- | --- |
| `baseUrl` | Where the runtime assets are served from, as a directory holding `cobol/` and `clang/`. **Optional in Node**, where omitting it uses the assets the package ships; required anywhere else, and absolute http(s) except in a browser, where it may be relative to the page. |
| `clangBaseUrl` | Where the Clang half is served from, if it is not `clang/` under `baseUrl`. |
| `sourceFormat` | `'free'` (default) or `'fixed'`. |
| `compileArgs` | Extra GnuCOBOL (`cobc`) flags. |
| `cCompileArgs` | Extra clang flags for the generated C. |
| `args` | Default program argv. |
| `fileName` | The name the source is compiled under (`main.cob`). |
| `maxAssetBytes` | Ceiling for a decompressed asset. |

Every compiler created against the same assets shares one toolchain, so creating more than one pays
for that boot once.

### `compiler.run(code, input, runOptions?)`

Compiles and runs. `input` is stdin as a string or `Uint8Array`, handed to the program once and then
closed. `runOptions` may override `sourceFormat`, `args`, `compileArgs`, `cCompileArgs` and
`fileName` for that run.

| Field | Meaning |
| --- | --- |
| `stdout` | Everything the program wrote to fd 1. |
| `stderr` | Everything it wrote to fd 2. |
| `output` | Both, in the order the program wrote them — what a terminal would have shown. |
| `errors` | The compiler's diagnostics. **Empty when the program compiled**, so `errors.length` is a reliable failure test. |
| `diagnostics` | The same diagnostics whether it compiled or not — so a warning from a *successful* compile is not lost. This is the one field `@live-codes/clang-wasm` does not have; its README names it as the natural place for warnings, and GnuCOBOL emits them. |
| `exitCode` | The program's exit status, or `null` if it never ran because the compile or link failed. |
| `compileMs` | Wall clock for the whole compile: `cobc`, clang and wasm-ld. |
| `runMs` | Wall clock for the run, or `null` if it did not run. |

Diagnostics arrive with the compiler's ANSI colouring and its private per-build workspace directory
stripped, because neither is the caller's business:

```
main.cob:4: error: 'WS-TOTAL' is not defined
    2 | PROGRAM-ID. BROKEN.
    3 | PROCEDURE DIVISION.
    4 >     ADD 1 TO WS-TOTAL.
    5 |     STOP RUN.
    6 | <EOF>
```

Failure is a value, not an exception: a program that does not compile resolves with `errors` filled
and `exitCode: null`. Only misuse (`run()` after `dispose()`, an unknown `sourceFormat`) rejects.

### `compiler.dispose()`

The toolchain is shared, so each compiler holds a reference; `dispose()` drops it, and the runtime is
released when the last one goes. Further runs on a disposed compiler throw.

### `SOURCE_FORMATS`

`['free', 'fixed']`, for building a picker without creating a compiler. Passing anything else is
rejected with the values that would have worked.

## Where the assets come from

Two trees, because COBOL needs two toolchains:

```
vendor/
  cobol/                       <- ships in this package (2.3 MB)
    runtime-manifest.v1.json
    cobc.wasm.gz
    rootfs.tar.gz
    c-sysroot.tar.gz
  clang/                       <- read from @live-codes/clang-wasm (23 MB)
    runtime-manifest.v1.json
    bin/clang.wasm.gz
    bin/lld.wasm.gz
    bin/memfs.wasm.gz
  asset-receipts.json
```

Three ways to reach it:

- **In Node, nothing.** Omit `baseUrl` and the package reads `cobol/` from itself and `clang/` from
  its `@live-codes/clang-wasm` dependency. The runtime insists on http(s) for its assets, so the
  package maps a reserved `.invalid` origin onto the files with a narrow `fetch` shim — which is
  also why that origin is `.invalid`: if the shim were ever missing, the request fails loudly
  instead of quietly reaching a real host.
- **In a browser, one command.** `cobol-wasm-copy-assets <dir>` writes the tree above.
- **Or point `baseUrl` at a host you already have** — a CDN, an S3 bucket, whatever serves that
  tree. `clangBaseUrl` overrides just the Clang half.

**Clang is not duplicated here.** It belongs to `@live-codes/clang-wasm`, which is pinned to an exact
version in `package.json`; `test/receipts.test.js` re-derives those files' digests from the installed
package, so a version bump fails a test rather than breaking at run time. Shipping a second ~23 MB
copy so a page running both C and COBOL could load it twice is what the shared-runtime design exists
to avoid.

Every asset served from the packaged tree is checked against a pinned SHA-256 receipt before it is
used. In hosted mode the runtime fetches the assets itself and this package cannot intercept that, so
a host is trusted for them — the same boundary `clang-wasm` documents, and why
`cobol-wasm-copy-assets` writes `asset-receipts.json` next to the copy.

### Size

2.3 MB of assets ship in this package; the ~23 MB Clang half comes from the `@live-codes/clang-wasm`
dependency. Unpacked that is roughly 44 MB of clang plus the GnuCOBOL frontend, resident between
runs, which is what makes a warm compile about a second rather than ten.

## Verified

`npm test` runs the whole pipeline in Node against the packaged assets — 16 tests, including all
nine asset receipts:

| what | result |
| --- | --- |
| compile and run, stdout | `Hello from COBOL!\n`, `exitCode 0`, `errors []` |
| `PIC 9(3)V99` + `COMPUTE` | `Rate:  025.50` / `Pay:   001020.00` (fixed-point, zero-padded) |
| `ACCEPT` from stdin | `Hello, Grace Hopper!` |
| a compile error | `errors` carries the diagnostic, `exitCode null`, `runMs null` |
| `sourceFormat` validation | rejects `cobol85` naming the accepted values |

`examples/browser/` is the same thing in a browser, off `cobol-wasm-copy-assets` output, with **no
cross-origin isolation** (`crossOriginIsolated === false`, and it still compiles and runs):

```bash
node bin/copy-assets.mjs examples/browser/vendor
node examples/browser/serve.mjs        # → http://localhost:8127/
```

## Limitations

- **No dynamic `CALL`, `CALL SYSTEM`, `fork`, `SCREEN SECTION` or indexed I/O.** The runtime profile
  declares these unsupported, as expected for a WASI module.
- **stdin is all-or-nothing per run.** It is handed to the program once and then closed; there is no
  interactive terminal.
- **No asset-load progress callback.** The COBOL host does not expose one, unlike `clang-wasm`'s
  `onProgress`. `compileMs` is the per-run timing that is available.
- **Using this alongside `@live-codes/clang-wasm` costs two Clang runtimes.** `llvm-core`'s COBOL host
  creates its own `BrowserClangRuntime` rather than acquiring `clang-wasm`'s pooled one, so a page
  that runs C *and* COBOL loads `clang.wasm` twice. Sharing would mean driving COBOL through
  `clang-wasm`'s `/toolchain` entry instead — translate with `cobc` via `runCommand`, link libcob by
  hand — which is a real option and the reason that entry exists, but it means owning the link line
  and the header-renaming the host does today.

## Loading it without a bundler

`dist/cobol-wasm.global.js` is a **minified IIFE bundle** — one classic script, 337 KB — for anywhere
an ES module cannot go: a classic (non-module) worker, a plain `<script>`, a CDN URL handed to
`importScripts()`. It bundles the whole `@wasm-idle/llvm-core` host, so it needs no import map and no
bundler of your own.

```html
<script src="cobol-wasm.global.js"></script>
<script>
  cobolWasm.createCompiler({ baseUrl: '/vendor/' }).then((compiler) => compiler.run(code));
</script>
```

It sets `self.cobolWasm` to the same exports the module has — `createCompiler` and `SOURCE_FORMATS`
— so the API above is unchanged. A worker uses `importScripts` in the same way, and still needs a
`baseUrl`, because a worker has no filesystem either.

It is reachable as `@live-codes/cobol-wasm/iife` if you want your tooling to find it, and it is
committed rather than built on install, so a consumer never needs esbuild. Rebuild it with
`npm run build:iife`.

## Licensing

The package's own code — `src/`, `bin/`, `scripts/` and the `dist/` bundle — is **MIT**. The compiler
it ships in `assets/cobol/` is not, and cannot be: `cobc` is **GPL-3.0-or-later** and `libcob`/GMP
are **LGPL-3.0-or-later**, so `package.json` declares `(MIT AND GPL-3.0-or-later)` and both texts
ship — [LICENSE](LICENSE) and [LICENSE.GPL](LICENSE.GPL).

| part | license |
| --- | --- |
| `src/`, `bin/`, `scripts/`, `dist/` | MIT |
| `assets/cobol/cobc.wasm.gz` — GnuCOBOL compiler | GPL-3.0-or-later |
| `assets/cobol/rootfs.tar.gz` — `libcob`, GMP | LGPL-3.0-or-later |
| `assets/cobol/c-sysroot.tar.gz` — WASI libc | Apache-2.0 WITH LLVM-exception, MIT |
| `@live-codes/clang-wasm` — a dependency, whose assets are fetched at run time and not shipped here | MIT |

**Why not LGPL, or one license for the whole thing.** The LGPL is the GPL *plus* permissions: they
can be added to GPL code, never removed from it. GnuCOBOL's compiler therefore cannot be conveyed
under LGPL, and a package that ships it can honestly be declared GPL or a mix — not LGPL. Our own
code can be MIT regardless because it is not a derivative work of GnuCOBOL: it runs the compiler as
a separate WASI module, so the two are separate works distributed together.

Conveying this package — publishing it, or serving its `assets/` — carries GPL-3.0's obligations, so
pass the license on and make the corresponding source available. That source is GnuCOBOL 3.2 and GMP
6.3.0 from upstream, together with the build recipe and patches in `seo-rii/wasm-llvm`'s
`producer/cobol-browser` — the exact form these binaries were built from.

**Compiled programs are unaffected.** A compiler's output is not a derivative work of the compiler,
and the only GnuCOBOL part that ends up in a program — `libcob` — is LGPL-3.0-or-later, whose
section 4 exists to let a combined work be conveyed under terms of your choice: a COBOL program a
user compiles through this package belongs to them, under whatever license they pick.

[THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) has the per-file detail. This is the one place the
package differs from `@live-codes/clang-wasm`, which is all-permissive — for COBOL that was not a
choice, since the compiler *is* GnuCOBOL.

## Development

```bash
npm install
npm test
npm run build:iife     # rebuild dist/ after changing src/
```

The suite needs `crypto.subtle` (Node 20 and later) and runs the real compiler, so it takes a few
seconds rather than milliseconds. Note that esbuild is a dev dependency: under `NODE_ENV=production`
npm omits those, so build with `npm install --include=dev` if `build:iife` cannot find it.
