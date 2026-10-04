// Where the runtime's assets come from, and how they are read.
//
// Two sources behind one shape, because everything downstream only needs the two base URLs the COBOL
// host takes and "give me this asset":
//
//   hosted   - a directory you serve, holding `cobol/` and `clang/`. The runtime fetches from it.
//   packaged - the assets that ship in this package (`cobol/`) plus the Clang set that ships in
//              `@live-codes/clang-wasm` (`clang/`). The runtime only accepts http(s), so a fetch
//              interceptor maps a reserved origin onto those files. That is why the origin is under
//              .invalid: if the interceptor is ever missing, the request fails loudly rather than
//              quietly reaching a real host.
//
// Clang is deliberately not duplicated here. A page that runs C and COBOL should pay for one Clang,
// and `@live-codes/clang-wasm` already ships it.
import { resolveRuntimeBaseUrl } from '@wasm-idle/llvm-core/clang';
import { ASSET_RECEIPTS } from './asset-receipts.js';

// Reserved by RFC 2606 and guaranteed not to resolve.
const PACKAGED_ORIGIN = 'https://cobol-wasm-assets.invalid/';

export function resolveAssetSource(options, packaged) {
	if (options.baseUrl != null && options.baseUrl !== '') {
		return createHostedSource(options);
	}
	if (!packaged) {
		throw new Error(
			'baseUrl is required here. The assets that ship in this package can only be read where ' +
				'there is a filesystem, and a browser cannot reach a file inside an npm package - copy ' +
				'them somewhere your page can fetch with `npx --package @live-codes/cobol-wasm ' +
				'cobol-wasm-copy-assets <dir>` and pass that directory as baseUrl.'
		);
	}
	return createPackagedSource(packaged);
}

function createHostedSource(options) {
	let baseUrl;
	try {
		baseUrl = resolveRuntimeBaseUrl(options.baseUrl);
	} catch (error) {
		throw new Error(
			`baseUrl must be an absolute http(s) URL, or relative to the page in a browser: ${error.message}`,
			{ cause: error }
		);
	}
	// `clangBaseUrl` exists so the Clang half can come from somewhere else - a CDN, or a second copy
	// of the tree - without moving the COBOL half with it.
	const clangBaseUrl = options.clangBaseUrl
		? resolveRuntimeBaseUrl(options.clangBaseUrl)
		: new URL('clang/', baseUrl).href;
	const cobolBaseUrl = new URL('cobol/', baseUrl).href;

	return {
		kind: 'hosted',
		key: `${cobolBaseUrl}\u0000${clangBaseUrl}`,
		cobolBaseUrl,
		clangBaseUrl,
		description: baseUrl,
		// The runtime fetches its own assets from the host, so there is nothing to intercept.
		installFetch() {}
	};
}

function createPackagedSource(packaged) {
	const source = {
		kind: 'packaged',
		key: `packaged\u0000${packaged.root.href}`,
		cobolBaseUrl: new URL('cobol/', PACKAGED_ORIGIN).href,
		clangBaseUrl: new URL('clang/', PACKAGED_ORIGIN).href,
		description: `the assets packaged with this library (${packaged.root.href})`,
		readAsset: (path) => readPackagedAsset(packaged, path),
		installFetch: () => installPackagedFetch(source)
	};
	return source;
}

let fetchingSource = null;

function installPackagedFetch(source) {
	if (fetchingSource === source) return;
	const original = globalThis.fetch;
	globalThis.fetch = (input, init) => {
		const url =
			typeof input === 'string' ? input : input instanceof URL ? input.href : (input?.url ?? '');
		if (url.startsWith(PACKAGED_ORIGIN)) {
			return source
				.readAsset(url.slice(PACKAGED_ORIGIN.length))
				.then((bytes) => new Response(bytes));
		}
		return original.call(globalThis, input, init);
	};
	fetchingSource = source;
}

async function readPackagedAsset(packaged, path) {
	let bytes;
	try {
		bytes = await packaged.readFile(path);
	} catch (error) {
		throw new Error(
			`Failed to read the packaged asset ${path} from ${packaged.root.href}: ${error.message}`,
			{ cause: error }
		);
	}
	return verifyReceipt(path, bytes);
}

async function verifyReceipt(path, bytes) {
	const receipt = ASSET_RECEIPTS[path];
	if (!receipt) throw new Error(`No pinned receipt for the runtime asset ${path}`);
	if (bytes.byteLength !== receipt.bytes) {
		throw new Error(`The runtime asset ${path} is ${bytes.byteLength} bytes, expected ${receipt.bytes}`);
	}
	const digest = await sha256Hex(bytes);
	if (digest !== receipt.sha256) {
		throw new Error(
			`The runtime asset ${path} failed SHA-256 verification: expected ${receipt.sha256}, got ${digest}`
		);
	}
	return bytes;
}

export async function sha256Hex(bytes) {
	const subtle = globalThis.crypto?.subtle;
	if (!subtle) {
		throw new Error(
			'Verifying the runtime assets needs crypto.subtle: a secure context in the browser, or ' +
				'Node 20 and later.'
		);
	}
	const digest = await subtle.digest('SHA-256', bytes);
	return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}
