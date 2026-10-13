import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as ButtonLink, b as Section, h as Breadcrumbs } from "./router-BbgvGFdP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-GuI1HgvX.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		h: "Information We Collect",
		p: "We collect the information you provide through our inquiry and application forms, including name, company, email address, phone number, service interest and message content. We also collect limited technical data such as browser type and pages visited."
	},
	{
		h: "How We Use Information",
		p: "Information is used to respond to inquiries, evaluate applications, deliver contracted services, improve our website and meet legal or contractual obligations. We do not sell personal data."
	},
	{
		h: "Legal Basis",
		p: "We process personal data on the basis of legitimate business interest, contractual necessity, or your consent where required by applicable law."
	},
	{
		h: "Data Retention",
		p: "Personal data is retained only for as long as necessary to fulfil the purpose for which it was collected, or as required by law."
	},
	{
		h: "Security",
		p: "We apply least-privilege access controls, encryption in transit and confidentiality obligations across our delivery network to protect client and candidate information."
	},
	{
		h: "Your Rights",
		p: "Subject to applicable law, you may request access to, correction of, or deletion of your personal data, and object to certain processing activities."
	},
	{
		h: "Contact",
		p: "Questions regarding this policy can be submitted through our contact page and will be routed to the responsible team."
	}
];
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Privacy Policy" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-6 font-display text-4xl font-bold",
			children: "Privacy Policy"
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
export { Privacy as component };
