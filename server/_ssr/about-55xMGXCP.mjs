import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Reveal, T as ButtonLink, _ as Eyebrow, b as Section, g as CTASection, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-55xMGXCP.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		title: "Digital Infrastructure",
		body: "The technical substrate behind visibility, measurement and delivery."
	},
	{
		title: "Performance Marketing",
		body: "Search, social and paid acquisition operated as one accountable system."
	},
	{
		title: "Technical Expertise",
		body: "Senior engineering judgement applied to growth-critical systems."
	},
	{
		title: "Remote Talent",
		body: "A vetted global network deployed inside managed operating frameworks."
	},
	{
		title: "Enterprise Growth",
		body: "Programs designed for governance, scale and multi-market complexity."
	},
	{
		title: "Automation",
		body: "Repeatable frameworks that reduce manual load and key-person risk."
	}
];
var values = [
	{
		title: "Operational Reliability",
		body: "Documented process over improvisation, on every engagement."
	},
	{
		title: "Verified Outcomes",
		body: "Measurement corrected before spend or effort is scaled."
	},
	{
		title: "Exclusivity of Talent",
		body: "Specialists selected through structured technical assessment."
	},
	{
		title: "Security Discipline",
		body: "Least-privilege access, confidentiality and controlled change."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "About Fredacorpal™",
			title: "Engineering Growth. Connecting Talent. Building the Future.",
			description: "We are not a conventional marketing agency. Fredacorpal is an integrated infrastructure for enterprise growth, technical capability and elite human talent.",
			breadcrumbs: [{ label: "About" }],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/contact",
				size: "lg",
				children: "Hire Us"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/services",
				variant: "light",
				size: "lg",
				children: "See Services"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Our Position",
			title: "Operating at the intersection of six disciplines",
			description: "Enterprises rarely fail from a lack of tactics. They stall because the infrastructure connecting talent, technology and measurement was never built."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-bold",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: p.body
					})]
				})
			}, p.title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-lg border border-gold/30 bg-card p-8 shadow-elevate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Mission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-relaxed",
						children: "Connect elite remote technical talent networks with enterprise digital infrastructures to drive operational acceleration and verified search equity."
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-lg border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Vision" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed",
							children: "Establish Fredacorpal as a global standard for integrated service delivery through automated frameworks and specialized human talent."
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Principles",
				title: "How we operate",
				invert: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold text-white",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-white/60",
							children: v.body
						})]
					})
				}, v.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Build with an integrated partner",
			primary: {
				label: "Hire Us",
				to: "/contact"
			},
			secondary: {
				label: "Apply Now",
				to: "/apply"
			}
		})
	] });
}
//#endregion
export { About as component };
