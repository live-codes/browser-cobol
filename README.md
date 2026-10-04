# Browser COBOL

Run **COBOL entirely in the browser** — no server, no upload, no install, and no cross-origin
isolation headers. The compiler itself runs in WebAssembly, so a program typed into the page is
compiled and executed in that tab.

It is a proof of concept for adding a `cobol` language to [LiveCodes](https://livecodes.io), in the
same shape as [`browser-haskell`](https://github.com/live-codes/browser-haskell) and
[`browser-elixir`](https://github.com/live-codes/browser-elixir) were for their languages.

This is the **real GnuCOBOL 3.2 compiler**, not a subset or an interpreter:

```
COBOL  →  GnuCOBOL `cobc` (wasm)  →  C  →  Clang 22 (wasm)  →  wasm-ld  →  WASI module  →  runs
```

**The runtime is a package, and this repo holds it.** [`packages/cobol-wasm`](packages/cobol-wasm) is
`@live-codes/cobol-wasm`, which is what actually runs COBOL: it ships the GnuCOBOL assets, boots the
toolchain, compiles, runs, and hands back shaped output. The page in `public/` is a thin demo on top
of it — examples, an editor, a stdin box, and a run button. Nothing is fetched from anyone else's
site: the assets are copied out of the package into `vendor/` by the package's own bin.

## Demo

```bash
npm run vendor     # copy the runtime assets from packages/cobol-wasm into vendor/
npm start          # → http://localhost:8126/
```

Pick an example (or type your own), press **Run** — or `Ctrl`/`Cmd` + `Enter` in the editor.
Program output appears in one pane, `cobc` and clang diagnostics in the other, and `ACCEPT` reads
from the stdin box.

`npm run vendor` is the only setup step, and it is a copy, not a build: a browser cannot read a file
inside an npm package, so the assets have to be published by whatever serves the page. It writes
`vendor/cobol/` and `vendor/clang/` (about 25 MB), both ignored by git.

A static server is required, because `file://` cannot run ES modules or fetch the wasm assets —
but it needs no special headers. `serve.js` is a plain file server.

## What you get

- **Client-side compilation and execution.** Nothing is uploaded; `cobc`, clang and the linked
  program all run in the tab.
- **Real COBOL semantics.** `PICTURE` clauses with fixed-point arithmetic and field padding
  (`PIC 9(3)V99` holding `25.50` displays as `025.50`), `COMPUTE`, `PERFORM` (inline, `VARYING`,
  `THRU`, paragraph), `OCCURS` tables and subscripts, `STRING`/`INSPECT`, `FUNCTION` intrinsics,
  `EVALUATE`, `GO TO`, and `ACCEPT` from stdin.
- **Genuine compiler diagnostics**, with source excerpts and the offending line marked.
- **Free and fixed source format.**
- **No cross-origin isolation.** See below — this is the interesting part.
- **Self-hosted assets.** The package ships them; `npm run vendor` publishes them next to the page.

## No cross-origin isolation

Threaded WebAssembly runtimes need `SharedArrayBuffer`, which browsers only expose to
cross-origin-isolated documents — so such a page must be served with `Cross-Origin-Opener-Policy`
and `Cross-Origin-Embedder-Policy`. That requirement is a real obstacle for embedding a playground
in someone else's page, where the top-level headers are not yours to choose.

**This page does not need it.** Served with no isolation headers at all, `crossOriginIsolated` is
`false` and everything still compiles and runs.

The apparent requirement was an upstream bug. The host's memory-write path contains:

```js
n instanceof ArrayBuffer ? ... : n instanceof SharedArrayBuffer ? ... : ...
```

`instanceof` evaluates its right-hand operand, so in a document without the global this throws
`ReferenceError: SharedArrayBuffer is not defined` on the first `Uint8Array` written — which looks
exactly like a threaded runtime refusing to boot. It is not one:

- the host never calls `new SharedArrayBuffer`, `new WebAssembly.Memory`, or `new Worker`, and never
  reads `crossOriginIsolated`;
- `clang.wasm`, `lld.wasm` and `memfs.wasm` each **define their own memory, all `shared: false`**,
  and import only functions — no shared memory, no threads.

So the package defines a `SharedArrayBuffer` constructor purely to give that check something to
compare against, and the page runs anywhere. The stub throws if anything ever tries to construct
one, so a future version that genuinely wants shared memory fails loudly instead of quietly
misbehaving. The stub lives in the package now (`src/runtime.js`), not in the page — which is where
it belongs, since the bug it works around is the runtime's.

The full evidence — the bundle search, the parsed wasm memory types, and before/after measurements
— is in [FINDINGS.md](FINDINGS.md) §2.

## Verified

Every row below was run through the demo page in headless Chrome **with isolation off**
(`crossOriginIsolated === false`); outputs are verbatim, and the assets were served from `vendor/`.

| program | result | compile | run |
| --- | --- | --- | --- |
| `DISPLAY "Hello from COBOL!"` | `Hello from COBOL!` / `Compiled and run in your browser, with no server.` | 1040 ms | 17 ms |
| `PIC 9(3)V99` + `COMPUTE WS-PAY = WS-HOURS * WS-RATE` | `Hours: 40` / `Rate:  025.50` / `Pay:   001020.00` | — | — |
| `PERFORM VARYING WS-N FROM 1 BY 1 UNTIL WS-N > 10` | ten zero-padded `n=NN  n squared=NNNN` lines | — | — |
| `ACCEPT WS-NAME` (stdin `Ada Lovelace`) | `What is your name?` / `Hello, Ada Lovelace!` | — | — |
| `ADD 1 TO WS-TOTAL` (undefined field) | `main.cob:7: error: 'WS-TOTAL' is not defined` + excerpt | — | — |

`packages/cobol-wasm` is verified twice over: `npm test` there runs the whole pipeline in Node
against the packaged assets (16 tests, including every asset receipt), and the demo above is the
browser path.

## Limitations

- **No dynamic `CALL`, `CALL SYSTEM`, `fork`, `SCREEN SECTION` or indexed I/O.** The runtime profile
  declares these unsupported, as expected for a WASI module.
- **About 25 MB of assets.** They are copied once by `npm run vendor` and then served locally, so the
  page's own first load is fast; the cost moves to install time.
- **~1 s to compile**, dominated by clang on the generated C. Fine for a playground; noticeable in a
  tight edit-run loop.
- **stdin is all-or-nothing per run.** The stdin box is read once when the program starts; there is
  no interactive terminal.
- **The stub depends on the toolchain staying single-threaded.** If a future `@wasm-idle/llvm-core`
  starts using shared memory, the stub throws and the isolation headers come back.

## Layout

```
public/index.html            the demo page (examples, format, stdin, output, diagnostics)
public/main.js               the demo driver — everything hard now lives in the package
serve.js                     static server: MIME types, caching, --isolation (off by default)
packages/cobol-wasm/         @live-codes/cobol-wasm — the runtime, its assets and its tests
FINDINGS.md                  the spike log: what was verified, what breaks, what it means
```

`vendor/` is generated by `npm run vendor` and ignored.

## Verifying

| what | command |
| --- | --- |
| copy the assets the demo serves | `npm run vendor` |
| serve the page | `npm start` → http://localhost:8126/ |
| check the demo's syntax | `npm run check` |
| test the package | `npm test --prefix packages/cobol-wasm` |
| serve with COOP/COEP instead | `npm run start:isolation` |

The page exposes `document.documentElement.dataset` (`status`, `runs`, `exitCode`, `toolchainMs`,
`compileMs`, `runMs`, `errorCount`) and its element ids as globals, so scripted checks can read state
without string literals.

## Status

Spike complete, and the runtime is now a package rather than a page. The demo compiles and runs COBOL
client-side, verified end to end in headless Chrome, with no cross-origin isolation and no
third-party host. Next: the `lang-cobol` entry in LiveCodes, loading this package's IIFE bundle.

## License

The demo and the package's own code are MIT. The package also ships GnuCOBOL, so it declares
`(MIT AND GPL-3.0-or-later)` — see [LICENSE](LICENSE) and
[packages/cobol-wasm/THIRD-PARTY-NOTICES.md](packages/cobol-wasm/THIRD-PARTY-NOTICES.md).
