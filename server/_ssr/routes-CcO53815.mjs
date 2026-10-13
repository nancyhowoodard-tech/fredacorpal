import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as ArrowRight, c as ShieldCheck, k as Earth, n as Workflow } from "../_libs/lucide-react.mjs";
import { A as services, C as Reveal, M as testimonials, S as Counter, T as ButtonLink, _ as Eyebrow, b as Section, g as CTASection, j as stats, x as SectionHeader } from "./router-BbgvGFdP.mjs";
import { i as TestimonialCard, r as ServiceCard } from "./Cards-B8kG2dTy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CcO53815.js
var import_jsx_runtime = require_jsx_runtime();
var hero_infrastructure_default = "/assets/hero-infrastructure-Cx-ufrR2.jpg";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_infrastructure_default,
					alt: "Enterprise data infrastructure with illuminated network connections",
					width: 1920,
					height: 1088,
					className: "absolute inset-0 h-full w-full object-cover opacity-40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/70",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "node-grid absolute inset-0 opacity-30",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x relative py-24 lg:py-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-4xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Enterprise Digital Infrastructure" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-4xl leading-[1.03] font-bold text-balance sm:text-6xl lg:text-7xl",
								children: [
									"Fredacorpal",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "™"
									}),
									" Integrated Services"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-display text-lg font-semibold text-gold sm:text-2xl",
								children: "Connecting Talents, Building the Future."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl leading-relaxed text-white/70 lg:text-lg",
								children: "We integrate elite multi-channel performance marketing infrastructures to scale enterprises globally. From technical engine validation to complete organic platform architecture management, we construct the underlying pipelines that secure brand dominance."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
										to: "/contact",
										size: "lg",
										children: "Hire Us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
										to: "/apply",
										variant: "light",
										size: "lg",
										children: "Apply Now"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/services",
										className: "group inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold text-gold",
										children: ["Explore Our Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
											"aria-hidden": "true"
										})]
									})
								]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l-2 border-gold/50 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl font-bold lg:text-4xl",
								children: s.value > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "Global"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-sm font-semibold",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.detail
							})
						]
					})
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "About Fredacorpal",
					title: "Engineering Growth. Connecting Talent. Building the Future.",
					description: "Fredacorpal operates at the intersection of digital infrastructure, performance marketing, technical expertise, remote talent, enterprise growth and automation — delivering integrated systems rather than isolated campaigns."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-3",
					children: [
						{
							icon: ShieldCheck,
							label: "Security-minded delivery"
						},
						{
							icon: Workflow,
							label: "Automated frameworks"
						},
						{
							icon: Earth,
							label: "Global talent network"
						}
					].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-card p-5 transition-colors duration-300 hover:border-gold/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-5 w-5 text-gold",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold",
							children: label
						})]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/about",
						children: "Discover Fredacorpal"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-gold/30 bg-card p-7 shadow-elevate",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Mission" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: "Connect elite remote technical talent networks with enterprise digital infrastructures to drive operational acceleration and verified search equity."
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Vision" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: "Establish Fredacorpal as a global standard for integrated service delivery through automated frameworks and specialized human talent."
						})]
					})
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Services",
					title: "Integrated Digital Infrastructure",
					description: "Five delivery pillars, operated as one system across search, social, media acquisition, support and technical implementation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
					}, service.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/services",
						children: "See Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/pricing",
						variant: "outline",
						children: "View Pricing"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Social Proof",
			title: "Trusted by operators building at scale",
			align: "center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { item: t })
			}, t.name))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "navy",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Partnerships",
					title: "Build More. Deliver More. Scale Together.",
					description: "An infrastructure partner for verified business ecosystems, B2B resellers, international vendor pools and white-label agencies.",
					invert: true
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "flex flex-wrap gap-3 lg:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/partnerships",
						size: "lg",
						children: "Partner With Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						to: "/industries",
						variant: "light",
						size: "lg",
						children: "View Industries"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Home as component };
