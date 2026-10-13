import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Reveal, T as ButtonLink, b as Section, g as CTASection, v as FAQ, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceDetail-l_hZM1kE.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail({ service }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: `Service ${service.index} · ${service.department}`,
			title: service.headline,
			description: service.short,
			breadcrumbs: [
				{
					label: "Departments",
					to: "/departments"
				},
				{
					label: "Services",
					to: "/services"
				},
				{ label: service.title }
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
				to: "/contact",
				size: "lg",
				children: [
					"Request ",
					service.title.split(" ")[0],
					" Consultation"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/services",
				variant: "light",
				size: "lg",
				children: "All Services"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "The Problem",
				title: "Why this matters"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 leading-relaxed text-muted-foreground",
				children: service.problem
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "What We Do",
					title: "Our remit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 leading-relaxed text-muted-foreground",
					children: service.whatWeDo
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Methodology",
				title: "How the infrastructure is built",
				description: "Every engagement follows a documented, engineering-led methodology."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: service.methodology.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-elevate",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold",
							children: m.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: m.body
						})]
					})
				}, m.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Deliverables",
				title: "What you receive"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-4",
				children: service.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold",
						"aria-hidden": "true"
					}), d]
				}, d))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Benefits",
					title: "Operational outcomes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4",
					children: service.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold",
							"aria-hidden": "true"
						}), b]
					}, b))
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Process",
				title: "Delivery sequence",
				invert: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5",
				children: service.process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					as: "li",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-bold text-gold",
								children: p.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-bold text-white",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-white/60",
								children: p.body
							})
						]
					})
				}, p.step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Why Fredacorpal",
				title: "The difference in execution"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-4",
				children: service.why.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold",
						"aria-hidden": "true"
					}), w]
				}, w))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "FAQ",
					title: "Common questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: service.faq })
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: `Request a ${service.title} consultation`,
			description: "We will review your current infrastructure and return a scoped, tailored proposal.",
			primary: {
				label: "Contact Us",
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
export { ServiceDetail as t };
