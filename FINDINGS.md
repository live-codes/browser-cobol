# Spike findings — COBOL in the browser

**Status: spike complete.** The page compiles and runs COBOL typed into it, in the tab, with no
server-side compilation and **no cross-origin isolation**. Everything below was **run**, in headless
Chrome — not inferred from docs.

> **Update — the runtime is now a package.** The work this document recommends in §7 has been done:
> the runtime lives in [`packages/cobol-wasm`](packages/cobol-wasm) as `@live-codes/cobol-wasm`,
> which ships the GnuCOBOL assets, boots the toolchain, and shapes the output, and the demo in
> `public/` is a thin page on top of it. Its assets are copied into `vendor/` by its own
> `cobol-wasm-copy-assets`, so **nothing is fetched from a third-party host any more** — §6's table
> describes the arrangement the spike was measured against, and is kept as the record of what the
> pipeline actually loads. The isolation finding in §2 is unchanged.

## 1. The pipeline, and why it is this one

```
COBOL source
  → GnuCOBOL 3.2 `cobc` (wasm32-wasi)   translates to C
  → Clang 22.1.8 (wasm-llvm)            compiles that C against a WASI sysroot
  → wasm-ld                             links libcob, GMP, WASI emulation libs
  → WASI preview 1 module               instantiated and run in this tab
```

This is the real GnuCOBOL frontend, not a subset interpreter. That mattered, because every
cheaper-looking alternative fails for a browser playground:

| Candidate | Why it does not work here |
| --- | --- |
| `cloudflare/cobweb`, `caarmen/cobol-wasm`, `makalin/cobol2wasm` | Build-time pipelines. `cobc` and `emcc` run in Docker, not in the browser, so there is no "type code and run it" — and cobweb's output targets a Worker. |
| `cobol`, `node-cobol` (npm) | Shell out to a **native** `cobc` binary. Node + a local compiler, not a browser. |
| COBOL.js (`coboljs.com/core/cobol.js`) | A hand-written regex/"interpreter" (~500 lines, `Function()` over user text, no license file, its own editor page references DOM it does not have). Not a real runtime — and the ecosystem's own policy forbids subset executors as language support. |

The one stack that does the whole thing client-side is
[`seo-rii/wasm-llvm`](https://github.com/seo-rii/wasm-llvm) (produces the GnuCOBOL/Clang wasm
artifacts) plus [`seo-rii/wasm-idle`](https://github.com/seo-rii/wasm-idle), which consumes them
through `@wasm-idle/llvm-core` — MIT-licensed browser host code, with the compiler assets loaded
from an HTTP(S) URL you supply.

Two of the three stages already come from packages in our own scope: Clang and lld arrive from
[`@live-codes/clang-wasm`](https://www.npmjs.com/package/@live-codes/clang-wasm), which wraps the
same `llvm-core` Clang host. Only the GnuCOBOL frontend (`cobc` + its rootfs) is still fetched from
the producer's site — §6 covers what that costs and what is left to mirror.

## 2. Cross-origin isolation is NOT required — the requirement is an upstream bug

This was the biggest surprise, and it inverts the first version of this document.

**The symptom.** Served the page *without* COOP/COEP, the toolchain downloads fine and then dies:

```
SharedArrayBuffer is not defined
```

which reads like the usual "you need a threaded runtime" failure. It is not.

**The evidence, in the order it was gathered:**

1. **The host bundle references `SharedArrayBuffer` exactly once** — and it is not an allocation:

   ```js
   write(e, n) {
     return n instanceof ArrayBuffer ? this.writeUint8(e, new Uint8Array(n))
          : n instanceof SharedArrayBuffer ? this.writeUint8(e, new Uint8Array(n))
          : typeof n == "string" ? this.writeUint8(e, n.split("").map(t => t.charCodeAt(0)))
          : this.writeUint8(e, n);
   }
   ```

   `instanceof` evaluates its **right-hand operand**, so the moment this runs on a `Uint8Array` in a
   document where the global does not exist, it throws `ReferenceError: SharedArrayBuffer is not
   defined`. It is a type-check that only ever needed to answer "no".

2. **There is no other isolation dependency in the host.** Grepping the bundle: `new
   SharedArrayBuffer` → 0, `new WebAssembly.Memory` → 0, `crossOriginIsolated` → 0, `new Worker` → 0.
   The only `Atomics` uses are the worker stdin ring (used by the BQN/Forth/Tcl static workers) and
   the trace debugger — both behind guards this page never enters.

3. **The compiler artifacts are not threaded.** Parsed from the actual bytes:

   | module | memory | shared | imports |
   | --- | --- | --- | --- |
   | `clang.wasm` (44.2 MB) | *defined*, min 234 pages, max 65536 | **false** | 26, all functions |
   | `lld.wasm` (20.8 MB) | *defined*, min 163 pages, max 65536 | **false** | 25, all functions |
   | `memfs.wasm` (345 KB) | *defined*, min 6 pages | **false** | 5, all functions |

   No module imports a memory, none declares one shared, and no import is thread-related. A shared
   memory is what would genuinely force `SharedArrayBuffer`; there is none to be found.

**The fix.** Give the check something to compare against, before the host module evaluates:

```js
if (typeof SharedArrayBuffer === 'undefined') {
  globalThis.SharedArrayBuffer = class SharedArrayBuffer {
    constructor() {
      throw new Error('SharedArrayBuffer is not available in this context');
    }
  };
}
```

A class rather than an alias to `ArrayBuffer`, so `instanceof` stays false for ordinary buffers and
nothing can silently receive something pretending to be shared. If a future version of the host
does start using shared memory, this fails loudly at the construction site instead of corrupting
behaviour.

**Measured, with the headers off** (`crossOriginIsolated === false`):

| | isolation on | isolation off + shim |
| --- | --- | --- |
| compile | 801–809 ms | 763 ms |
| run | 12–14 ms | 12 ms |
| all six examples (see §3) | pass | **pass** |

Every example in §3 was re-run under `crossOriginIsolated === false`. Isolation has no effect on
correctness, and none on per-run cost — the only cost either way is the one-time asset download in
§6, which happens before either mode diverges.

**Worth passing upstream.** The real fix is one line in the WASI host's memory-write path —
`typeof SharedArrayBuffer !== 'undefined' && n instanceof SharedArrayBuffer` — which would remove a
phantom isolation requirement for every consumer of this stack, not just this page.

## 3. Verified working

Each row was run through the page (select the example, click Run) and the output pane read back —
under **no** cross-origin isolation.

| snippet | result | compile | run |
| --- | --- | --- | --- |
| `DISPLAY "Hello from COBOL!"` | `Hello from COBOL!` / `Compiled and run in your browser, with no server.` | 763 ms | 12 ms |
| `PIC 9(3)V99` + `COMPUTE WS-PAY = WS-HOURS * WS-RATE` | `Hours: 40` / `Rate:  025.50` / `Pay:   001020.00` | — | — |
| `PERFORM VARYING WS-N FROM 1 BY 1 UNTIL WS-N > 10` | ten `n=NN  n squared=NNNN` lines, zero-padded | — | — |
| `MOVE "ALICE" TO WS-NAME(1)` + `OCCURS 3` + `PERFORM SHOW-ROSTER` | `1: ALICE` / `2: BOB` / `3: CAROL` | — | — |
| `ACCEPT WS-NAME` with stdin `Grace Hopper` | `What is your name?` / `Hello, Grace Hopper!` | — | — |
| `PROGRAM-ID. MAIN.` | runs (see §5) | — | — |
| `ADD 1 TO WS-TOTAL` (undefined) | compile error, exact `cobc` diagnostic — see §4 | — | — |

Floating-point `PIC` arithmetic is formatted in *fixed-point* COBOL style (`025.50`, `001020.00`),
which is the clearest evidence the real runtime library is doing the work.

Compile cost is dominated by clang compiling the generated C, so it barely varies with program size
at this scale.

**Toolchain load is network-bound, and it is the whole cost of a cold start.** ~25 MB (§6), measured
at **73 s** from a cold cache on the ~350 KB/s connection this was developed on, then **~1 s** once
the browser has the assets. An earlier revision of this document claimed "~6 s cold"; that was a warm
HTTP cache in a reused browser profile, not a cold start, and 73 s is the corrected figure. The
number is a property of the connection, not of the runtime — but it is the honest one to plan for,
and it is why `largeDownload: true` is the right LiveCodes flag.

## 4. What the compiler tells the user

Diagnostics are genuine `cobc` output with source excerpts. They arrive with the compiler's private
workspace prefix and ANSI colour, both of which the driver strips for display:

```
main.cob:7: error: 'WS-TOTAL' is not defined
    5 | 01 WS-COUNT PIC 9(2) VALUE 1.
    6 | PROCEDURE DIVISION.
    7 >     ADD 1 TO WS-TOTAL.
    8 |     DISPLAY WS-TOTAL.
    9 |     STOP RUN.
```

Two driver-level details this forced:

- An unterminated final line produces `-Wmissing-newline`. The first version of the driver
  `trim()`ed the editor contents, which meant **every** run emitted that warning. It now appends
  the newline instead of stripping it.
- On failure the host returns the compiler output in `stdout` *and* the same text in `stderr`, so
  naively printing both duplicates the error. The driver prints `stderr` only when it differs.

## 5. Behaviour worth knowing

- **stdin works.** `ACCEPT` reads from a callback the driver supplies. Unlike the AtomVM runtime
  behind `browser-elixir` (no file descriptor 0), COBOL programs can be written as
  filter-style/competitive-programming-shaped programs.
- **The stdin callback is a pull loop, and must not return `''` forever.** The runtime refills by
  calling it repeatedly while the buffer is empty, so a callback that always returns an empty
  string spins forever. The driver yields its buffer once and then returns `null` (EOF).
- **A top-level `PROGRAM-ID. MAIN` is renamed internally** to `WASM-IDLE-MAIN`, with `END PROGRAM
  MAIN` rewritten to match. Verified transparent: a program with `PROGRAM-ID. MAIN.` compiles and
  runs normally. Worth knowing because `MAIN` is a likely thing for a user to type.
- **Unsupported by this runtime profile** (declared by `COBOL_LLVM_PROFILE`, and consistent with
  what a WASI module can do): dynamic `CALL`, `CALL SYSTEM`, `fork`, `SCREEN SECTION`, indexed
  I/O. Subprograms via static `CALL` in a single compile unit are unaffected.
- **The Clang runtime's own `sysroot.tar.gz` is never downloaded.** The COBOL host overrides the
  sysroot with its `c-sysroot.tar.gz`; the network log confirms the Clang one is not requested.
  Fetching it would add 5.1 MB for nothing.

## 6. Payload, and where each half comes from

Compressed bytes actually transferred on a first run, and the host that serves each:

| asset | bytes | served from |
| --- | --- | --- |
| `bin/clang.wasm.gz` | 15,721,977 | `@live-codes/clang-wasm@0.3.0` (jsDelivr) |
| `bin/lld.wasm.gz` | 7,837,837 | ″ |
| `bin/memfs.wasm.gz` | 38,702 | ″ |
| `c-sysroot.tar.gz` | 1,216,964 | `seorii.page/wasm-idle/wasm-cobol/` |
| `cobc.wasm.gz` | 600,296 | ″ |
| `rootfs.tar.gz` | 530,360 | ″ |
| host JS (`llvm-core/cobol/+esm`, `browser_wasi_shim`) | ~250,000 | jsDelivr |
| **total** | **~26 MB (25.0 MiB)** | |

Nothing is committed to this repo: the page is two files, and every byte above is fetched from a
CDN. Decompressed, clang alone is 44 MB of memory, which is why the toolchain is loaded lazily on
the first Run rather than on page load.

### Clang now comes from our own package

The Clang build in [`@live-codes/clang-wasm`](https://www.npmjs.com/package/@live-codes/clang-wasm)
is the same one the producer's mirror serves. Its `assets/runtime-manifest.v1.json` declares the
same `llvmorg-22.1.8` and the same provenance revision (`ca7933e4…`), and `clang.wasm.gz` and
`lld.wasm.gz` are byte-identical in size to the mirror's copies. Two files differ:

- **`memfs.wasm.gz`** — 38,702 B against the mirror's 18,974 B, a different build of the small
  filesystem shim. This is the one swap that could plausibly break the runtime, so it was verified
  by running, not by inspection: compile and run both succeed with it (exit 0, output identical).
- **`bin/sysroot.tar.gz`** — irrelevant here, because the COBOL host overrides the Clang sysroot
  with its own `c-sysroot.tar.gz`. It is not fetched at all.

So the 23 MB bulk arrives from a package in our scope, pinned to an exact version, served by
jsDelivr. Swapping it meant changing one URL constant; `?clangBaseUrl=` overrides it.

**What is still third-party.** There is no `@live-codes/cobol-wasm` on npm, so the three GnuCOBOL
artifacts still come from `seorii.page`. They are 2.3 MB of the 25 MB — small, but they are the
frontend, so nothing runs without them. `clang-wasm-copy-assets` exists for the Clang half and has
no COBOL equivalent, which is exactly the gap a `@live-codes/cobol-wasm` package would fill.

### A note on jsDelivr

It serves the 15.7 MB asset fine (`Content-Type: application/gzip`, `Access-Control-Allow-Origin: *`,
raw gzip with no `Content-Encoding`, which the host's loader handles). It was also *faster* than the
mirror here — 460 KB/s against 305 KB/s. But a free public CDN is not the right place to put 23 MB
per user for a product; LiveCodes' own vendor CDN is.

## 7. Recommendation for LiveCodes

- **Shape:** `lang-cobol` as an identity-ish compiler factory with
  `scripts: [baseUrl + '{{hash:lang-cobol-script.js}}']` and `scriptType: 'text/cobol'`. Unlike
  `lang-elixir`, there is no worker/bundle sibling to keep in step — the host JS and the toolchain
  are independent, so pinning is simpler.
- **The isolation blocker is gone.** This was the reason `browser-elixir` could not be embedded
  cleanly: its runtime genuinely needs `SharedArrayBuffer`, so the result document had to be
  cross-origin isolated and the top-level headers are not ours to choose. This runtime does not,
  thanks to §2. A COBOL result page can be served from an ordinary CDN with no special headers.
- **`largeDownload: true`.** ~25 MB on first run.
- **Keep the shim with the language module**, since it is what stands in for the isolation headers;
  it is 6 lines and belongs next to the driver rather than in a shared bundle. If the host is ever
  updated to use shared memory, the shim throws at the construction site — a loud, early failure
  rather than a wrong answer.
- **Assets:** done — see the update at the top. Clang, lld and memfs come from
  `@live-codes/clang-wasm`, and the three GnuCOBOL artifacts now ship inside
  `@live-codes/cobol-wasm` (`packages/cobol-wasm`), with SHA-256 receipts verified on every load and
  a `cobol-wasm-copy-assets` bin that publishes both trees for a page to serve. The one thing left
  for a real deployment is to move all of it off jsDelivr and onto LiveCodes' vendor CDN (`getUrl`),
  because 23 MB per user is not a free-tier workload — `vendors.ts` already has the pattern:
  `clangWasmBaseUrl = getUrl('@live-codes/clang-wasm@0.2.0/')`.
- **Hosting the host code:** `@wasm-idle/llvm-core` is a normal npm dependency for a bundled build.
  The demo loads the package's IIFE bundle (`packages/cobol-wasm/dist/cobol-wasm.global.js`), which
  bundles the host, so it needs no import map and no bundler of its own.
- **Contract mapping:** program output is stdout; compiler diagnostics are stderr; `exitCode` is
  the guest's, and a compile failure is a *successful* compile call with `success: false`, which a
  driver must check before executing.

## 8. Reproducing the verification

```bash
npm start                   # → http://localhost:8126/   (no isolation — the default)
npm run check               # syntax-check serve.js and public/main.js
npm run start:isolation     # same page with COOP/COEP, to compare
```

Driven here with the `agent-browser` CLI against headless Chrome: select the example, click Run,
and read `document.documentElement.dataset` (`status` / `stage` / `runs` / `exitCode` /
`toolchainMs` / `compileMs` / `execMs`) plus the `#output` and `#diagnostics` panes. Element ids
are exposed as globals (`editor`, `run`, `stdin`, `output`, `diagnostics`, `examples`) so probes
can avoid string literals — shells mangle quotes in native-command arguments.

Artifact inspection (§2, evidence 3) used a small wasm section parser plus
`WebAssembly.Module.imports`/`exports` over the decompressed modules; the bundle was checked with a
substring search over the minified source.
