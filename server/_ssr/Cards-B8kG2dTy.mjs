import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as ArrowRight, o as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Cards-B8kG2dTy.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-bold tracking-[0.2em] text-gold",
					children: service.index
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase",
					children: service.department
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-xl font-bold",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: service.short
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: service.to,
				className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover",
				children: [service.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
					"aria-hidden": "true"
				})]
			})
		]
	});
}
function TestimonialCard({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elevate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/10 font-display text-sm font-bold text-gold",
					children: item.initials
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "truncate font-display text-base font-bold",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: [
							item.position,
							", ",
							item.company
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex items-center gap-1",
				"aria-label": `Rated ${item.rating} out of 5`,
				children: Array.from({ length: item.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: "h-4 w-4 fill-gold text-gold",
					"aria-hidden": "true"
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: [
					"“",
					item.quote,
					"”"
				]
			}),
			item.metric ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 rounded-md border border-gold/30 bg-gold/5 px-4 py-3 text-sm font-semibold text-accent-foreground",
				children: item.metric
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase",
				children: item.service
			})
		]
	});
}
function JobCard({ job }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-gold/40 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-gold uppercase",
					children: job.type
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-muted-foreground uppercase",
					children: job.location
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[0.7rem] font-semibold tracking-wider text-muted-foreground uppercase",
				children: job.department
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-xl font-bold",
				children: job.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: job.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex-1 space-y-2 text-sm text-muted-foreground",
				children: job.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-gold",
						"aria-hidden": "true"
					}), r]
				}, r))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: job.to,
				className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover",
				children: [job.to === "/apply" ? "Apply Now" : "View Position", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
					"aria-hidden": "true"
				})]
			})
		]
	});
}
function PartnerCard({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-lg font-bold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted-foreground",
			children: body
		})]
	});
}
//#endregion
export { TestimonialCard as i, PartnerCard as n, ServiceCard as r, JobCard as t };
