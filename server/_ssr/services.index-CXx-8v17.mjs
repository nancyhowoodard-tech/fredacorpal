import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as Funnel } from "../_libs/lucide-react.mjs";
import { A as services, C as Reveal, O as departments, T as ButtonLink, b as Section, g as CTASection, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
import { r as ServiceCard } from "./Cards-B8kG2dTy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-CXx-8v17.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	const [selectedDept, setSelectedDept] = (0, import_react.useState)("all");
	const deptsWithServices = departments.filter((d) => d.activeServiceSlugs.length > 0);
	const filteredServices = services.filter((service) => {
		if (selectedDept === "all") return true;
		return service.departmentSlug === selectedDept;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Services & Solutions",
			title: "Integrated Digital Infrastructure",
			description: "Comprehensive delivery pillars operated across our specialized corporate departments — engineered, documented and measured against enterprise outcomes.",
			breadcrumbs: [{ label: "Services" }],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/contact",
				size: "lg",
				children: "Hire Us"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/departments",
				variant: "light",
				size: "lg",
				children: "Explore Departments"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Delivery Pillars",
				title: "All Services Rendered by Fredacorpal™",
				description: "Each pillar can be deployed independently or integrated into a single managed program."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
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
							"All Services (",
							services.length,
							")"
						]
					}),
					deptsWithServices.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSelectedDept(d.slug),
						className: `rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-colors ${selectedDept === d.slug ? "bg-gold text-primary shadow-sm" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`,
						children: [
							d.name.split("&")[0].trim(),
							" (",
							d.activeServiceSlugs.length,
							")"
						]
					}, d.slug))
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: filteredServices.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 50,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
			}, service.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Engagement Model",
				title: "How work is scoped and delivered",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						step: "01",
						title: "Consultation",
						body: "We review your systems, market and constraints."
					},
					{
						step: "02",
						title: "Scope",
						body: "A tailored proposal defining deliverables and cadence."
					},
					{
						step: "03",
						title: "Deployment",
						body: "Specialists are assigned and infrastructure is built."
					},
					{
						step: "04",
						title: "Measurement",
						body: "Reporting against agreed operational outcomes."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					as: "li",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-lg border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-bold text-gold",
								children: s.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-bold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: s.body
							})
						]
					})
				}, s.step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Services as component };
