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

The browser-side host is [`@wasm-idle/llvm-core`](https://www.npmjs.com/package/@wasm-idle/llvm-core)
(MIT); the compiler artifacts are produced by
[`seo-rii/wasm-llvm`](https://github.com/seo-rii/wasm-llvm) and loaded from a CDN mirror.

## Demo

```bash
npm start          # → http://localhost:8126/
```

Pick an example (or type your own), press **Run** — or `Ctrl`/`Cmd` + `Enter` in the editor.
Program output appears as it is produced; `cobc` and clang diagnostics appear below it; `ACCEPT`
reads from the stdin box.

A static server is required, because `file://` cannot run ES modules or fetch the wasm assets —
but it needs no special headers. `npm start` is a plain file server.

**The toolchain comes from a CDN.** ~26 MB is fetched on the first Run and cached afterwards.
There is no build step and no `node_modules`: `public/index.html` uses an import map to load the
host module straight from jsDelivr.

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
- **Lazy toolchain load** — the page itself is ~16 KB, and the ~26 MB of compiler is fetched on
  first use rather than on page load.

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

So `public/index.html` defines a `SharedArrayBuffer` constructor purely to give that check something
to compare against, and the page runs anywhere. The stub throws if anything ever tries to construct
one, so a future version that genuinely wants shared memory fails loudly instead of quietly
misbehaving.

The full evidence — the bundle search, the parsed wasm memory types, and before/after measurements
— is in [FINDINGS.md](FINDINGS.md) §2.

## Verified

Every row below was run through the page in headless Chrome **with isolation off**
(`crossOriginIsolated === false`); outputs are verbatim.

| program | result | compile | run |
| --- | --- | --- | --- |
| `DISPLAY "Hello from COBOL!"` | `Hello from COBOL!` | 763 ms | 12 ms |
| `PIC 9(3)V99` + `COMPUTE WS-PAY = WS-HOURS * WS-RATE` | `Hours: 40` / `Rate:  025.50` / `Pay:   001020.00` | — | — |
| `PERFORM VARYING WS-N FROM 1 BY 1 UNTIL WS-N > 10` | ten zero-padded `n=NN  n squared=NNNN` lines | — | — |
| `OCCURS 3` table + `PERFORM SHOW-ROSTER` paragraph | `1: ALICE` / `2: BOB` / `3: CAROL` | — | — |
| `ACCEPT WS-NAME` (stdin `Grace Hopper`) | `What is your name?` / `Hello, Grace Hopper!` | — | — |
| `ADD 1 TO WS-TOTAL` (undefined field) | `main.cob:7: error: 'WS-TOTAL' is not defined` + excerpt | — | — |

Toolchain load: **~1 s warm, ~6 s in a freshly launched browser**.

## Limitations

- **No dynamic `CALL`, `CALL SYSTEM`, `fork`, `SCREEN SECTION` or indexed I/O.** The runtime profile
  declares these unsupported, as expected for a WASI module.
- **~26 MB on first run.** It works on a laptop; it is not a small download. Subsequent runs reuse
  the HTTP cache.
- **~0.8 s to compile**, dominated by clang on the generated C. Fine for a playground; noticeable
  in a tight edit-run loop.
- **stdin is all-or-nothing per run.** The stdin box is read once when the program starts; there is
  no interactive terminal.
- **The shim depends on the toolchain staying single-threaded.** If a future `@wasm-idle/llvm-core`
  starts using shared memory, the stub throws and the isolation headers come back.

## Layout

```
public/index.html     the harness page (examples, format, stdin, output, diagnostics, shim)
public/main.js        the driver: loads the toolchain, compiles, runs, streams output
serve.js              static server: MIME types, caching, --isolation (off by default)
FINDINGS.md           the spike log: what was verified, what breaks, what it means
```

There is no bundler and no `node_modules`.

## Verifying

| what | command |
| --- | --- |
| serve the page | `npm start` → http://localhost:8126/ |
| check syntax | `npm run check` |
| serve with COOP/COEP instead | `npm run start:isolation` |

The page exposes `document.documentElement.dataset` (`status`, `stage`, `runs`, `exitCode`,
`toolchainMs`, `compileMs`, `execMs`) and its element ids as globals, so scripted checks can read
state without string literals.

## Status

Spike complete. The page compiles and runs COBOL client-side, verified end to end in headless
Chrome against the pinned CDN, with no cross-origin isolation. Next: mirror the six compiler assets
and add the `lang-cobol` entry to LiveCodes.

## License

MIT © Hatem Hosny. The compiler artifacts are governed by their own licenses — GnuCOBOL (GPL-3.0),
libcob (LGPL-3.0), GMP (LGPL/GPL) and LLVM (Apache-2.0 WITH LLVM-exception). See [LICENSE](LICENSE).
