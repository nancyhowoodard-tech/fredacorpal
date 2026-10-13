globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2004-WnPd88YfIJqwauY90qgrlQHL4kA\"",
		"mtime": "2026-10-13T18:32:52.350Z",
		"size": 8196,
		"path": "../public/.DS_Store"
	},
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"c25c-phozvE0PGUKeAh0IqLRCnR6vwoo\"",
		"mtime": "2026-10-13T18:32:52.349Z",
		"size": 49756,
		"path": "../public/apple-touch-icon.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"23ae-vONUQf4Se4gD4OW/27n+o2q1Hi4\"",
		"mtime": "2026-10-13T18:32:52.351Z",
		"size": 9134,
		"path": "../public/favicon.png"
	},
	"/favicons.png": {
		"type": "image/png",
		"etag": "\"1c22-43XsLc7Z5We7WfEJWpphV1rdEus\"",
		"mtime": "2026-10-13T18:32:52.352Z",
		"size": 7202,
		"path": "../public/favicons.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"d0-ZeKLY2LEZrmEwrJTPol/dh45bQ8\"",
		"mtime": "2026-10-13T18:32:52.356Z",
		"size": 208,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"e97-RH5ArV2ijmUqEKl3klxS0pt6rcQ\"",
		"mtime": "2026-10-13T18:32:52.357Z",
		"size": 3735,
		"path": "../public/sitemap.xml"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"3bb13-roN1/5/PBG8mGcV6/8avQVl5N7g\"",
		"mtime": "2026-10-13T18:32:52.352Z",
		"size": 244499,
		"path": "../public/favicon.svg"
	},
	"/fredlogo.png": {
		"type": "image/png",
		"etag": "\"40e8f-bp+zDn9iTqNRI2iT9PIuEA2RV2U\"",
		"mtime": "2026-10-13T18:32:52.355Z",
		"size": 265871,
		"path": "../public/fredlogo.png"
	},
	"/fredlogo_Images/fredlogo_ImgID2.png": {
		"type": "image/png",
		"etag": "\"49808-6VuH6SG1kCmqe/Ny2AAY/TUH/OU\"",
		"mtime": "2026-10-13T18:32:52.351Z",
		"size": 301064,
		"path": "../public/fredlogo_Images/fredlogo_ImgID2.png"
	},
	"/assets/Cards-DRP0U7b_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132a-c3FAc0TnrjdFYkdHfNJyQ+FSTZc\"",
		"mtime": "2026-10-13T18:32:51.326Z",
		"size": 4906,
		"path": "../public/assets/Cards-DRP0U7b_.js"
	},
	"/assets/CareerDetail-Lk0tETUl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124a-cjMq/MDdmT9+wP3wKVhEKE54gqY\"",
		"mtime": "2026-10-13T18:32:51.326Z",
		"size": 4682,
		"path": "../public/assets/CareerDetail-Lk0tETUl.js"
	},
	"/assets/ServiceDetail-BoTr00gp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1017-sARjaH35ZvPCrfCl4MSUQkaID5I\"",
		"mtime": "2026-10-13T18:32:51.326Z",
		"size": 4119,
		"path": "../public/assets/ServiceDetail-BoTr00gp.js"
	},
	"/assets/about-B7WqE5pA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd5-hQ5/tITf/CUsc16aox+sqz0FtwM\"",
		"mtime": "2026-10-13T18:32:51.327Z",
		"size": 4053,
		"path": "../public/assets/about-B7WqE5pA.js"
	},
	"/assets/Primitives-BAmySuA4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114b8-inuK14+/Cxf5QzExbwvDLludbQM\"",
		"mtime": "2026-10-13T18:32:51.326Z",
		"size": 70840,
		"path": "../public/assets/Primitives-BAmySuA4.js"
	},
	"/assets/apply-0zymdKAB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d291-bbdKJLI26xBik1nR9Odcl2dsz6k\"",
		"mtime": "2026-10-13T18:32:51.327Z",
		"size": 53905,
		"path": "../public/assets/apply-0zymdKAB.js"
	},
	"/assets/careers.customer-care-DSr6c7Zc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0-RdugN67BswUhZW21yuBxlbQRon4\"",
		"mtime": "2026-10-13T18:32:51.327Z",
		"size": 192,
		"path": "../public/assets/careers.customer-care-DSr6c7Zc.js"
	},
	"/assets/arrow-right-CK46iqov.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-eQSmww+tUyH0+4IVR8Xo6C1HKuY\"",
		"mtime": "2026-10-13T18:32:51.327Z",
		"size": 154,
		"path": "../public/assets/arrow-right-CK46iqov.js"
	},
	"/assets/careers.seo-expert-CeRgzqOW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0-Gs7jDHe+sKlnoUkUepbgpBfw2t0\"",
		"mtime": "2026-10-13T18:32:51.328Z",
		"size": 192,
		"path": "../public/assets/careers.seo-expert-CeRgzqOW.js"
	},
	"/assets/careers.index-BwQ-44wG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18af-9mFrozC3QLBRtef5qeAtI49kues\"",
		"mtime": "2026-10-13T18:32:51.328Z",
		"size": 6319,
		"path": "../public/assets/careers.index-BwQ-44wG.js"
	},
	"/assets/circle-check-VmEIqLHq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e-6wR+j/P+9vEpPt6cSJknYIrBUbs\"",
		"mtime": "2026-10-13T18:32:51.328Z",
		"size": 334,
		"path": "../public/assets/circle-check-VmEIqLHq.js"
	},
	"/assets/contact-oIskX7Eo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c3d-+rY5DOJXSnwvqAlkbhS3qjNWj0c\"",
		"mtime": "2026-10-13T18:32:51.329Z",
		"size": 7229,
		"path": "../public/assets/contact-oIskX7Eo.js"
	},
	"/assets/careers.social-media-manager-CDhoS5Bi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0-XE1PRAORRkWb7K3Lj98PIrSGljU\"",
		"mtime": "2026-10-13T18:32:51.328Z",
		"size": 192,
		"path": "../public/assets/careers.social-media-manager-CDhoS5Bi.js"
	},
	"/fredlogo.svg": {
		"type": "image/svg+xml",
		"etag": "\"1721f9-G7Md8xWWNtbmLspw35p+Yz6Q+WY\"",
		"mtime": "2026-10-13T18:32:52.357Z",
		"size": 1516025,
		"path": "../public/fredlogo.svg"
	},
	"/assets/departments-BnwuT5e7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"338d-ZmT3NeGF91EwEppOsClp/4zaJOo\"",
		"mtime": "2026-10-13T18:32:51.330Z",
		"size": 13197,
		"path": "../public/assets/departments-BnwuT5e7.js"
	},
	"/assets/funnel-Dc6j5yOj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5-7YrJohf2p8iUhajw069oMby9A4E\"",
		"mtime": "2026-10-13T18:32:51.330Z",
		"size": 245,
		"path": "../public/assets/funnel-Dc6j5yOj.js"
	},
	"/assets/hero-infrastructure-Cx-ufrR2.jpg": {
		"type": "image/jpeg",
		"etag": "\"301e9-rqACC83lxpCxKprHw87IZ9+Exes\"",
		"mtime": "2026-10-13T18:32:51.333Z",
		"size": 197097,
		"path": "../public/assets/hero-infrastructure-Cx-ufrR2.jpg"
	},
	"/assets/industries-BPOdKvj7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df-tn+w8lq4NbxkedI3MuT5ulR/zF4\"",
		"mtime": "2026-10-13T18:32:51.330Z",
		"size": 1503,
		"path": "../public/assets/industries-BPOdKvj7.js"
	},
	"/assets/partnerships-DN1jkyFw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"acb-GU0iErxHysGnCVPxjlz/ohNU1t4\"",
		"mtime": "2026-10-13T18:32:51.330Z",
		"size": 2763,
		"path": "../public/assets/partnerships-DN1jkyFw.js"
	},
	"/assets/pricing-DlHh56k6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d2f-WaucyaH+cdFuOLsgbA8A8x6XO1g\"",
		"mtime": "2026-10-13T18:32:51.330Z",
		"size": 3375,
		"path": "../public/assets/pricing-DlHh56k6.js"
	},
	"/assets/privacy-BWFNmloD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87e-oCDbndNEAgGih6KnXLCLZ11PlSw\"",
		"mtime": "2026-10-13T18:32:51.331Z",
		"size": 2174,
		"path": "../public/assets/privacy-BWFNmloD.js"
	},
	"/assets/routes-MIJixCCE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b53-pjbUpSteH1Z/KqJwOh4UqPybJlA\"",
		"mtime": "2026-10-13T18:32:51.331Z",
		"size": 6995,
		"path": "../public/assets/routes-MIJixCCE.js"
	},
	"/assets/services.business-development-MpJHgN9v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-AlIUcJV4h213l1cLKpvbWav5HZI\"",
		"mtime": "2026-10-13T18:32:51.331Z",
		"size": 197,
		"path": "../public/assets/services.business-development-MpJHgN9v.js"
	},
	"/assets/services.customer-support-BmboKL1y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-aTu4/6QgcMpaQQ1YjcJWKyUZfuk\"",
		"mtime": "2026-10-13T18:32:51.331Z",
		"size": 197,
		"path": "../public/assets/services.customer-support-BmboKL1y.js"
	},
	"/assets/services.financial-advisory-DqOYpMHM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-23RMhFvAGu8cIJrxkfurXsKUYvQ\"",
		"mtime": "2026-10-13T18:32:51.331Z",
		"size": 197,
		"path": "../public/assets/services.financial-advisory-DqOYpMHM.js"
	},
	"/assets/services.index--JeG3mKU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d58-0avW9YZhuvXowO6MEREW02CTcio\"",
		"mtime": "2026-10-13T18:32:51.332Z",
		"size": 3416,
		"path": "../public/assets/services.index--JeG3mKU.js"
	},
	"/assets/services.seo-4USLomAm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-6gbfZUIwUkOh8yhTzJQPobXY36A\"",
		"mtime": "2026-10-13T18:32:51.332Z",
		"size": 197,
		"path": "../public/assets/services.seo-4USLomAm.js"
	},
	"/assets/services.operations-delivery-DP0ewOT1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-k/TN90sf+fkwgaB6DxwEZQBQUEw\"",
		"mtime": "2026-10-13T18:32:51.332Z",
		"size": 197,
		"path": "../public/assets/services.operations-delivery-DP0ewOT1.js"
	},
	"/assets/services.paid-media-Dok_gpzH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-lKWmUkEm9dMOk/ng66pwTpWGYTQ\"",
		"mtime": "2026-10-13T18:32:51.332Z",
		"size": 197,
		"path": "../public/assets/services.paid-media-Dok_gpzH.js"
	},
	"/assets/services.social-media-DgtEx1wd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-vnIwCiOa/ahrMsKLbcjFHdY2v6c\"",
		"mtime": "2026-10-13T18:32:51.332Z",
		"size": 197,
		"path": "../public/assets/services.social-media-DgtEx1wd.js"
	},
	"/assets/services.strategy-consulting-B8eWHj2X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-UaPMWgB8xawA2VSjyDLfLtKW4xo\"",
		"mtime": "2026-10-13T18:32:51.332Z",
		"size": 197,
		"path": "../public/assets/services.strategy-consulting-B8eWHj2X.js"
	},
	"/assets/services.talent-solutions-ykv20cpT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-mK+QrUCbQkMvHt0MQknOFdt8WOA\"",
		"mtime": "2026-10-13T18:32:51.333Z",
		"size": 197,
		"path": "../public/assets/services.talent-solutions-ykv20cpT.js"
	},
	"/assets/services.technical-solutions-soKL7axK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0-VrSvSmldi10V+xIAPxMIID94/Ws\"",
		"mtime": "2026-10-13T18:32:51.333Z",
		"size": 192,
		"path": "../public/assets/services.technical-solutions-soKL7axK.js"
	},
	"/assets/shield-check-B6b0bWvT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-+xAEZ1dBiU21xjQjR1GSAKX0Xwk\"",
		"mtime": "2026-10-13T18:32:51.333Z",
		"size": 309,
		"path": "../public/assets/shield-check-B6b0bWvT.js"
	},
	"/assets/styles-CIgTLbJ7.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18667-tRyxz7p1WwdpvrpU4arSs8pXaRg\"",
		"mtime": "2026-10-13T18:32:51.334Z",
		"size": 99943,
		"path": "../public/assets/styles-CIgTLbJ7.css"
	},
	"/favicon_Images/favicon_ImgID1.png": {
		"type": "image/png",
		"etag": "\"266d98-h2TgG+irnQQaF1lw0ySl2YO+/HA\"",
		"mtime": "2026-10-13T18:32:52.357Z",
		"size": 2518424,
		"path": "../public/favicon_Images/favicon_ImgID1.png"
	},
	"/fredlogo_Images/fredlogo_ImgID1.png": {
		"type": "image/png",
		"etag": "\"266d98-h2TgG+irnQQaF1lw0ySl2YO+/HA\"",
		"mtime": "2026-10-13T18:32:52.357Z",
		"size": 2518424,
		"path": "../public/fredlogo_Images/fredlogo_ImgID1.png"
	},
	"/assets/index-BQ4b9KLU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"858e0-TphiBJ3ur4yNhJU2xShmKjOM4NU\"",
		"mtime": "2026-10-13T18:32:51.325Z",
		"size": 547040,
		"path": "../public/assets/index-BQ4b9KLU.js"
	},
	"/assets/terms-CXqdU3p0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"854-/FRWC5YcvHlP64qOk3aWPm7pSCM\"",
		"mtime": "2026-10-13T18:32:51.333Z",
		"size": 2132,
		"path": "../public/assets/terms-CXqdU3p0.js"
	},
	"/assets/types-DTPYi-BA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee85-K5Sg+QeyhMwXZFoxIXmlNtMOXSA\"",
		"mtime": "2026-10-13T18:32:51.333Z",
		"size": 61061,
		"path": "../public/assets/types-DTPYi-BA.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_QMrseB = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_QMrseB
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
