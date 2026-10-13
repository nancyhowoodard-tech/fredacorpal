import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { R as Check } from "../_libs/lucide-react.mjs";
import { C as Reveal, T as ButtonLink, b as Section, g as CTASection, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-D3Jd6ZwK.js
var import_jsx_runtime = require_jsx_runtime();
var tiers = [
	{
		name: "Strategic",
		for: "For businesses beginning their digital transformation.",
		includes: [
			"Infrastructure and visibility assessment",
			"Single-pillar delivery focus",
			"Monthly reporting and review",
			"Documented remediation roadmap"
		],
		featured: false
	},
	{
		name: "Growth",
		for: "For organizations scaling existing digital operations.",
		includes: [
			"Multi-pillar integrated delivery",
			"Dedicated specialist allocation",
			"Creative and testing programs",
			"Bi-weekly performance governance"
		],
		featured: true
	},
	{
		name: "Enterprise",
		for: "For organizations requiring integrated infrastructure.",
		includes: [
			"Full-stack infrastructure programs",
			"Deployed remote delivery teams",
			"Multi-market and multi-brand governance",
			"Executive reporting and strategic advisory"
		],
		featured: false
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Pricing",
			title: "Engagements Scoped to Your Infrastructure",
			description: "Every enterprise has different infrastructure requirements. Request a consultation for a tailored proposal.",
			breadcrumbs: [{ label: "Pricing" }],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/contact",
				size: "lg",
				children: "Request Pricing"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/contact",
				variant: "light",
				size: "lg",
				children: "Talk to an Expert"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Engagement Tiers",
				title: "Three levels of integrated delivery",
				align: "center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: tiers.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex h-full flex-col rounded-lg border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate " + (tier.featured ? "border-gold shadow-elevate" : "border-border hover:border-gold/60"),
						children: [
							tier.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-4 inline-flex w-fit rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase",
								children: "Most Selected"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: tier.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: tier.for
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-display text-3xl font-bold text-gold",
								children: "Custom Pricing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex-1 space-y-3",
								children: tier.includes.map((inc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-gold",
										"aria-hidden": "true"
									}), inc]
								}, inc))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
									to: "/contact",
									variant: tier.featured ? "gold" : "outline",
									children: "Request Pricing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
									to: "/contact",
									variant: "ghost",
									size: "sm",
									children: "Talk to an Expert"
								})]
							})
						]
					})
				}, tier.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground",
					children: "Every enterprise has different infrastructure requirements. Pricing is determined by scope, delivery cadence and the specialists deployed — request a consultation for a tailored proposal."
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Request a tailored proposal",
			primary: {
				label: "Request Pricing",
				to: "/contact"
			},
			secondary: {
				label: "See Services",
				to: "/services"
			}
		})
	] });
}
//#endregion
export { Pricing as component };
