import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as ButtonLink, b as Section, h as Breadcrumbs } from "./router-BbgvGFdP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-L6mxy4jC.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		h: "Acceptance of Terms",
		p: "By accessing this website or engaging Fredacorpal™ Integrated Services, you agree to these terms in full. If you do not agree, please discontinue use of the site."
	},
	{
		h: "Services",
		p: "Services are delivered under individually agreed proposals or statements of work that define scope, deliverables, cadence and commercial terms. Website content is informational and does not constitute an offer."
	},
	{
		h: "Intellectual Property",
		p: "All brand assets, written content, frameworks and methodologies presented on this website remain the property of Fredacorpal™ unless otherwise agreed in writing."
	},
	{
		h: "Client Responsibilities",
		p: "Clients are responsible for providing timely access, accurate information and required approvals so that contracted work can proceed as scheduled."
	},
	{
		h: "Confidentiality",
		p: "Both parties agree to protect confidential information exchanged during an engagement and to limit access to those with a legitimate need."
	},
	{
		h: "Limitation of Liability",
		p: "To the maximum extent permitted by law, Fredacorpal™ is not liable for indirect or consequential losses arising from use of this website."
	},
	{
		h: "Governing Terms",
		p: "Where a signed agreement exists between you and Fredacorpal™, that agreement takes precedence over these website terms."
	}
];
function Terms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Terms" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-6 font-display text-4xl font-bold",
			children: "Terms of Service"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: "Last updated: January 2026"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 max-w-3xl space-y-8",
			children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: s.h
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 leading-relaxed text-muted-foreground",
				children: s.p
			})] }, s.h))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/",
				children: "Return Home"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/contact",
				variant: "outline",
				children: "Contact Us"
			})]
		})
	] });
}
//#endregion
export { Terms as component };
