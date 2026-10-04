// Receipts for every asset this package serves, keyed by its path under the served root.
//
// There are two trees because COBOL needs two toolchains: `cobol/` is the GnuCOBOL frontend, which
// this package ships, and `clang/` is the Clang/lld/memfs set, which belongs to
// `@live-codes/clang-wasm` and is read from that package rather than duplicated here.
//
// In packaged mode this package serves both trees through its own fetch interceptor, so both are
// checked before any bytes are used. In hosted mode the runtime fetches the assets itself and this
// package cannot intercept that, so a host is trusted for them - the same boundary clang-wasm
// documents. `cobol-wasm-copy-assets` writes these receipts next to the copy for exactly that case.
//
// The `clang/` entries are pinned to the exact `@live-codes/clang-wasm` version in package.json, and
// `test/receipts.test.js` re-reads them from the installed package, so a version bump fails a test
// rather than breaking at run time.

export const ASSET_RECEIPTS = Object.freeze({
	// GnuCOBOL 3.2 frontend and runtime, built by `seo-rii/wasm-llvm`'s cobol-browser producer.
	'cobol/runtime-manifest.v1.json': Object.freeze({
		bytes: 573,
		sha256: '83dd3ba5d09b9d8fdb7b0200793f664e7b7dc5d62aa18d38730fa82a341c7c67'
	}),
	'cobol/cobc.wasm.gz': Object.freeze({
		bytes: 600296,
		sha256: '92bfb399d5e5a7add7a11f4e1eca786312f4cd1010c06001f85f11d5f2bca12b'
	}),
	'cobol/rootfs.tar.gz': Object.freeze({
		bytes: 530360,
		sha256: '13bdf0fa99247694405352576ea9b3251640ff51a92a44de84623756e8983578'
	}),
	'cobol/c-sysroot.tar.gz': Object.freeze({
		bytes: 1216964,
		sha256: '0bba0b9290add72f2ee5fafed18cd464ddb126dc8eb1729b97f708b80ffb868e'
	}),

	// Clang 22.1.8 + lld + memfs, from `@live-codes/clang-wasm`'s own `assets/` tree.
	'clang/runtime-manifest.v1.json': Object.freeze({
		bytes: 876,
		sha256: '1420808d0391ff2d8a2fdf2a9f6bbce8f728e06b1ed1651029ed80b226101444'
	}),
	'clang/bin/memfs.wasm.gz': Object.freeze({
		bytes: 38702,
		sha256: 'cbca9e27ceafbca840603a39fc71e4f83bfb085237c8eab84fd0401ac76806c7'
	}),
	'clang/bin/clang.wasm.gz': Object.freeze({
		bytes: 15721977,
		sha256: 'b1174438d9a67b7ff11e623541b9a0572c024a9e798084b9b021dd9da2da0874'
	}),
	'clang/bin/lld.wasm.gz': Object.freeze({
		bytes: 7837837,
		sha256: 'f842a9b5df3c6d326f0260bfd313c11c2e22bc8b8ae0387deede9a4af55779cd'
	}),
	// Not fetched while the COBOL host overrides the Clang sysroot with its own `c-sysroot`, but
	// pinned so that a path which does reach for it is still checked.
	'clang/bin/sysroot.tar.gz': Object.freeze({
		bytes: 5401380,
		sha256: '195e8083bace1baf86014f134a210db354cd77825988eaac7d262161cf496c4f'
	})
});
