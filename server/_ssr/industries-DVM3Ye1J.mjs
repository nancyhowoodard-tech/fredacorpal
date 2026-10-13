import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Reveal, T as ButtonLink, b as Section, g as CTASection, k as industries, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-DVM3Ye1J.js
var import_jsx_runtime = require_jsx_runtime();
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			eyebrow: "Industries",
			title: "Infrastructure Built for Your Operating Context",
			description: "Delivery models adapted to the regulatory, commercial and technical realities of each sector we serve.",
			breadcrumbs: [{ label: "Industries" }],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/contact",
				size: "lg",
				children: "Discuss Your Industry"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				to: "/services",
				variant: "light",
				size: "lg",
				children: "See Services"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Sectors",
			title: "Where Fredacorpal delivers",
			description: "Every engagement is scoped to the buying cycle, compliance posture and technical stack of your industry."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: industries.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: ind.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: ind.body
					})]
				})
			}, ind.name))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			title: "Discuss your industry with a strategist",
			primary: {
				label: "Contact Us",
				to: "/contact"
			},
			secondary: {
				label: "Partner With Us",
				to: "/partnerships"
			}
		})
	] });
}
//#endregion
export { Industries as component };
