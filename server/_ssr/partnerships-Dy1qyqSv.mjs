import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Reveal, T as ButtonLink, b as Section, g as CTASection, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
import { n as PartnerCard } from "./Cards-B8kG2dTy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partnerships-Dy1qyqSv.js
var import_jsx_runtime = require_jsx_runtime();
var models = [
	{
		title: "White-Label Services",
		body: "Deliver SEO, social, paid media and support under your brand, backed by our delivery network and documented processes."
	},
	{
		title: "Talent Infrastructure",
		body: "Access vetted remote specialists on demand without carrying recruitment, onboarding or permanent headcount cost."
	},
	{
		title: "Enterprise Packages",
		body: "Multi-service programs with governance, consolidated reporting and dedicated delivery leadership."
	},
	{
		title: "Strategic Collaboration",
		body: "Joint go-to-market arrangements with verified partners, vendors and international ecosystems."
	}
];
var audiences = [
	"Verified business ecosystems",
	"B2B resellers",
	"International vendor pools",
	"White-label agencies",
	"Strategic partners"
];
function Partnerships() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Partnerships",
			title: "Build More. Deliver More. Scale Together.",
			description: "Fredacorpal operates as an infrastructure partner — extending your delivery capacity with enterprise-grade systems and specialist talent.",
			breadcrumbs: [{ label: "Partnerships" }],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/contact",
				size: "lg",
				children: "Become a Partner"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/services",
				variant: "light",
				size: "lg",
				children: "See Services"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Partnership Model",
				title: "An enterprise-grade delivery layer behind your brand",
				description: "Partners retain the client relationship. We supply the infrastructure, specialists and documented process that make delivery predictable at scale."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-gold/30 bg-card p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-bold",
						children: "Who we partner with"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: audiences.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold",
								"aria-hidden": "true"
							}), a]
						}, a))
					})]
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Structures",
				title: "Four ways to work together"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2",
				children: models.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerCard, {
						title: m.title,
						body: m.body
					})
				}, m.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Become a Fredacorpal partner",
			description: "Tell us about your delivery capacity and client base, and we will propose a partnership structure.",
			primary: {
				label: "Become a Partner",
				to: "/contact"
			},
			secondary: {
				label: "View Pricing",
				to: "/pricing"
			}
		})
	] });
}
//#endregion
export { Partnerships as component };
