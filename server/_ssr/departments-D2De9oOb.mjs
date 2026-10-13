import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Briefcase, L as ChevronDown, N as CircleCheck, V as ArrowRight, j as Compass, l as ShieldAlert, s as Sparkles, x as Layers, z as Building2 } from "../_libs/lucide-react.mjs";
import { A as services, C as Reveal, D as careers, O as departments, T as ButtonLink, b as Section, g as CTASection, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments-D2De9oOb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DepartmentsPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("all");
	const [expandedDept, setExpandedDept] = (0, import_react.useState)(null);
	const filteredDepartments = departments.filter((dept) => {
		if (activeTab === "active") return dept.status === "active";
		if (activeTab === "capability") return dept.status === "organizational_capability";
		return true;
	});
	const toggleDept = (slug) => {
		setExpandedDept((prev) => prev === slug ? null : slug);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Corporate Architecture",
			title: "Departments & Taxonomy",
			description: "The canonical organizational structure connecting eight specialized departments to our active public services, technical delivery capabilities, and global talent pipelines.",
			breadcrumbs: [{ label: "Departments" }],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/services",
				size: "lg",
				children: "View Active Services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/careers",
				variant: "light",
				size: "lg",
				children: "Explore Careers"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Architectural Principle",
					title: "Organized by specialization, executed as one system"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 leading-relaxed text-muted-foreground",
					children: "At Fredacorpal™, services and career roles do not exist as disjointed silos. Every client engagement, infrastructure deployment, and talent placement is anchored to one of our eight core departments."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted-foreground",
					children: "This master taxonomy guarantees institutional quality, documented operating procedures, and seamless multi-disciplinary synergy across digital growth, engineering, customer care, and strategic operations."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-gold/30 bg-card/60 p-8 backdrop-blur-sm shadow-elevate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
							className: "h-6 w-6",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Canonical Structural Flow"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4 rounded-md border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-bold text-gold",
									children: "01"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold text-foreground",
									children: "Specialized Department"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "The institutional domain defining domain authority, standards, and strategic remit."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4 rounded-md border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-bold text-gold",
									children: "02"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold text-foreground",
									children: "Delivery Services"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Commercial, measurable solutions engineered and deployed directly for enterprise clients."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4 rounded-md border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-bold text-gold",
									children: "03"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold text-foreground",
									children: "Global Career Roles"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Vetted distributed talent executing inside documented standard operating frameworks."
								})] })]
							})
						]
					})]
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			id: "directory",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Organizational Directory",
					title: "The Eight Canonical Departments",
					description: "Review operational scopes, active public services, and talent pipelines for each functional department."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex rounded-lg border border-border bg-card p-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("all"),
							className: `rounded-md px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${activeTab === "all" ? "bg-gold text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: [
								"All (",
								departments.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("active"),
							className: `rounded-md px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${activeTab === "active" ? "bg-gold text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: "Active Operations (4)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("capability"),
							className: `rounded-md px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors ${activeTab === "capability" ? "bg-gold text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: "Enterprise Capabilities (4)"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-6",
				children: filteredDepartments.map((dept, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepartmentCard, {
						department: dept,
						isExpanded: expandedDept === dept.slug,
						onToggle: () => toggleDept(dept.slug)
					})
				}, dept.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Ready to partner with an integrated enterprise?",
			description: "Whether you require end-to-end digital infrastructure deployment or are applying to join our global network.",
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
function DepartmentCard({ department, isExpanded, onToggle }) {
	const deptServices = services.filter((s) => department.activeServiceSlugs.includes(s.slug));
	const deptCareers = careers.filter((c) => department.openCareerSlugs.includes(c.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-elevate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-gold/40 bg-gold/10 font-display text-base font-bold text-gold",
						children: department.index
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl",
						children: department.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs tracking-wider text-muted-foreground uppercase",
						children: department.slug
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: department.status === "active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400" }), "Active Operations"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }), "Enterprise Capability"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs font-semibold tracking-wider text-gold uppercase",
					children: "Department Purpose"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: department.purpose
				})]
			}),
			deptServices.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 border-t border-border pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
					className: "flex items-center gap-2 text-xs font-semibold tracking-wider text-foreground uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
							className: "h-4 w-4 text-gold",
							"aria-hidden": "true"
						}),
						"Active Public Services (",
						deptServices.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: deptServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: service.to,
						className: "group/srv flex items-center justify-between rounded-lg border border-border bg-card/60 p-3.5 text-sm transition-all hover:border-gold/60 hover:bg-gold/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground group-hover/srv:text-gold",
							children: service.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover/srv:translate-x-1 group-hover/srv:text-gold",
							"aria-hidden": "true"
						})]
					}, service.slug))
				})]
			}),
			deptCareers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 border-t border-border pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
					className: "flex items-center gap-2 text-xs font-semibold tracking-wider text-foreground uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
							className: "h-4 w-4 text-gold",
							"aria-hidden": "true"
						}),
						"Currently Hiring (",
						deptCareers.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-3",
					children: deptCareers.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: job.to,
						className: "group/job inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: job.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs opacity-75",
								children: [
									"(",
									job.type,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "h-3.5 w-3.5 transition-transform duration-200 group-hover/job:translate-x-0.5",
								"aria-hidden": "true"
							})
						]
					}, job.slug))
				})]
			}),
			department.regulatoryNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
					className: "mt-0.5 h-4 w-4 shrink-0 text-amber-400",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "leading-relaxed",
					children: department.regulatoryNotice
				})]
			}),
			department.notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-start gap-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 text-xs text-blue-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
					className: "mt-0.5 h-4 w-4 shrink-0 text-blue-400",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "leading-relaxed",
					children: department.notice
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onToggle,
					"aria-expanded": isExpanded,
					className: "flex w-full cursor-pointer items-center justify-between text-xs font-semibold tracking-wider text-gold uppercase transition-colors hover:text-gold-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isExpanded ? "Hide Department Details" : "View Capabilities & Future Roles" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						className: `h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`,
						"aria-hidden": "true"
					})]
				}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-8 rounded-lg border border-border bg-surface p-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
						className: "flex items-center gap-2 font-display text-sm font-bold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "h-4 w-4 text-gold",
							"aria-hidden": "true"
						}), "Core Department Capabilities"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: department.capabilities.map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cap })]
						}, cap))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
							className: "flex items-center gap-2 font-display text-sm font-bold text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "h-4 w-4 text-gold",
									"aria-hidden": "true"
								}),
								"Active Open Positions (",
								deptCareers.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "All primary specialist roles for this department are currently accepting applications through our comprehensive 5-step portal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [deptCareers.slice(0, 8).map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground",
								children: job.title
							}, job.slug)), deptCareers.length > 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-md border border-gold/30 bg-gold/5 px-2.5 py-1 text-xs text-gold",
								children: [
									"+",
									deptCareers.length - 8,
									" more open roles"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								to: "/apply",
								variant: "outline",
								size: "sm",
								children: "Apply Now"
							})
						})
					] })]
				})]
			})
		]
	});
}
//#endregion
export { DepartmentsPage as component };
