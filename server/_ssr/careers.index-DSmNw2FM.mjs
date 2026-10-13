import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as Funnel, d as Search, s as Sparkles } from "../_libs/lucide-react.mjs";
import { C as Reveal, D as careers, E as careerBenefits, O as departments, T as ButtonLink, b as Section, g as CTASection, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
import { t as JobCard } from "./Cards-B8kG2dTy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers.index-DSmNw2FM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Careers() {
	const [selectedDept, setSelectedDept] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const deptsWithOpenRoles = departments.filter((d) => d.openCareerSlugs.length > 0);
	const filteredCareers = careers.filter((job) => {
		const matchesDept = selectedDept === "all" || job.departmentSlug === selectedDept;
		const matchesSearch = searchQuery.trim() === "" || job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.department.toLowerCase().includes(searchQuery.toLowerCase()) || job.summary.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesDept && matchesSearch;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Careers & Talent",
			title: "Join the Workforce",
			description: "Elite Talent. Remote Opportunity. Global Impact. Explore all open positions across our eight specialized operating departments.",
			breadcrumbs: [{ label: "Careers" }],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/apply",
				size: "lg",
				children: "Apply Now"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/departments",
				variant: "light",
				size: "lg",
				children: "Explore Departments"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "open-positions",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "Active Hiring",
						title: "Open Positions Across Departments",
						description: "Every position is 100% remote, managed, and supported by documented operating frameworks and US time-zone collaboration."
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search by role or keyword...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-full border border-border bg-card py-2 pl-10 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase mr-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {
								className: "h-3.5 w-3.5 text-gold",
								"aria-hidden": "true"
							}), "Department:"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelectedDept("all"),
							className: `rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-colors ${selectedDept === "all" ? "bg-gold text-primary shadow-sm" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`,
							children: [
								"All Open Roles (",
								careers.length,
								")"
							]
						}),
						deptsWithOpenRoles.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelectedDept(d.slug),
							className: `rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-colors ${selectedDept === d.slug ? "bg-gold text-primary shadow-sm" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`,
							children: [
								d.name.split("&")[0].trim(),
								" (",
								d.openCareerSlugs.length,
								")"
							]
						}, d.slug))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Showing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: filteredCareers.length
						}),
						" of",
						" ",
						careers.length,
						" open positions"
					] }), searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSearchQuery(""),
						className: "text-gold hover:underline",
						children: "Clear search filter"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: filteredCareers.map((job, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: Math.min(i * 30, 600),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JobCard, { job })
					}, job.slug))
				}),
				filteredCareers.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 rounded-lg border border-border bg-card p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-semibold text-foreground",
							children: "No roles matched your search."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								"Try a different keyword or reset the department filter to view all ",
								careers.length,
								" ",
								"openings."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setSelectedDept("all");
								setSearchQuery("");
							},
							className: "mt-4 rounded-md bg-gold px-4 py-2 text-xs font-semibold text-primary",
							children: "Reset Filters"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "surface",
			id: "general-application",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl rounded-xl border border-gold/30 bg-card p-8 md:p-12 shadow-elevate",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "h-6 w-6",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold text-foreground",
							children: "Don’t see your exact role title?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground",
							children: "We are constantly expanding our global specialist roster across all eight departments. Submit your resume, experience, and credentials through our 5-step intake portal to be matched with active and upcoming initiatives."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-4 justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/apply",
								size: "lg",
								children: "Apply Now"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/departments",
								variant: "light",
								size: "lg",
								children: "Explore Departments"
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Why Fredacorpal",
			title: "Engineered for high-performing remote specialists",
			description: "We provide the stability, operational infrastructure, and tools necessary for exceptional professionals to thrive globally.",
			align: "center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: careerBenefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-elevate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-bold text-foreground",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: b.body
					})]
				})
			}, b.title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Ready to join the network?",
			description: "Complete our comprehensive 5-step verification application to access global enterprise opportunities.",
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
export { Careers as component };
