import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Reveal, T as ButtonLink, b as Section, g as CTASection, v as FAQ, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CareerDetail-CRI4sFeV.js
var import_jsx_runtime = require_jsx_runtime();
function CareerDetail({ job }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: `${job.type} · ${job.department}`,
			title: job.title,
			description: job.summary,
			breadcrumbs: [
				{
					label: "Departments",
					to: "/departments"
				},
				{
					label: "Careers",
					to: "/careers"
				},
				{ label: job.title }
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/apply",
				size: "lg",
				children: "Apply Now"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/careers",
				variant: "light",
				size: "lg",
				children: "All Positions"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Role Overview",
					title: `About the ${job.title} role`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 leading-relaxed text-muted-foreground",
					children: job.summary
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: "Responsibilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: job.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold",
								"aria-hidden": "true"
							}), r]
						}, r))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: "Required Skills"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: job.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold",
								"aria-hidden": "true"
							}), s]
						}, s))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: "Preferred Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: job.preferred.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold",
								"aria-hidden": "true"
							}), p]
						}, p))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: "Application Process"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 space-y-4",
						children: job.application.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-bold text-gold",
								children: String(i + 1).padStart(2, "0")
							}), step]
						}, step))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: "FAQ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: job.faq })
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "sticky top-28 rounded-lg border border-gold/30 bg-card p-7 shadow-elevate",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Apply for this position"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Department"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/departments",
										className: "hover:underline",
										children: job.department
									})
								})] }),
								job.service && job.serviceSlug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Associated Service"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: `/services/${job.serviceSlug}`,
										className: "hover:underline",
										children: job.service
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Employment type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: job.type
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: job.location
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Team"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: "Fredacorpal Delivery Network"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: "Applications are submitted through our secure inquiry form. Select the relevant service area and reference this role in your message."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/apply",
								size: "lg",
								children: "Apply Now"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/about",
								variant: "outline",
								size: "sm",
								children: "About Fredacorpal"
							})]
						})
					]
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Elite talent. Remote opportunity. Global impact.",
			description: "Explore every open position across the Fredacorpal delivery network.",
			primary: {
				label: "Apply Now",
				to: "/apply"
			},
			secondary: {
				label: "Hire Us",
				to: "/contact"
			}
		})
	] });
}
//#endregion
export { CareerDetail as t };
