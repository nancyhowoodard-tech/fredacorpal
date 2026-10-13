import { r as __toESM } from "../_runtime.mjs";
import { n as CONTACT_EMAIL } from "./constants-BLFC116i.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as stringType, i as objectType, r as literalType } from "../_libs/zod.mjs";
import { _ as MapPin, p as Phone, v as Mail } from "../_libs/lucide-react.mjs";
import { b as Section, w as Button, x as SectionHeader, y as PageHero } from "./router-BbgvGFdP.mjs";
import { i as createServerFn } from "./server-CPFmogoR.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-BtABw72d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-lE0tR34S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inquirySchema = objectType({
	name: stringType().trim().min(2).max(100),
	company: stringType().trim().min(1).max(120),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().max(40).optional().or(literalType("")),
	service: stringType().trim().min(1).max(60),
	budget: stringType().trim().min(1).max(60),
	message: stringType().trim().min(20).max(1500)
});
var submitInquiry = createServerFn({ method: "POST" }).inputValidator((input) => inquirySchema.parse(input)).handler(createSsrRpc("91320a5771b7bd16fea166384a6f51abe2a881df9a7d3131cad1b3f7d9e6a608"));
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(100),
	company: stringType().trim().min(1, "Company is required").max(120),
	email: stringType().trim().email("Enter a valid email address").max(255),
	phone: stringType().trim().max(40).optional().or(literalType("")),
	service: stringType().min(1, "Select a service"),
	budget: stringType().min(1, "Select a budget range"),
	message: stringType().trim().min(20, "Please provide at least 20 characters").max(1500)
});
var serviceOptions = [
	"SEO",
	"Social Media",
	"Paid Media",
	"Customer Support",
	"Technical Solutions",
	"Partnership",
	"Other"
];
var budgetOptions = [
	"Under $5,000",
	"$5,000 – $15,000",
	"$15,000 – $50,000",
	"$50,000+",
	"To be determined"
];
var fieldClass = "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none";
function Contact() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const send = useServerFn(submitInquiry);
	const onSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form));
		const result = schema.safeParse(data);
		if (!result.success) {
			const next = {};
			result.error.issues.forEach((i) => {
				const key = String(i.path[0]);
				if (!next[key]) next[key] = i.message;
			});
			setErrors(next);
			setStatus("error");
			return;
		}
		setErrors({});
		setServerError(null);
		setStatus("sending");
		try {
			await send({ data: result.data });
			setStatus("success");
			form.reset();
		} catch (err) {
			setServerError(err instanceof Error ? err.message : "We could not send your inquiry. Please try again.");
			setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Request an Enterprise Consultation",
		description: "Tell us about your infrastructure requirement and a strategist will respond with next steps.",
		breadcrumbs: [{ label: "Contact" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[1.15fr_0.85fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Inquiry",
			title: "Submit your requirement"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			noValidate: true,
			className: "mt-8 grid gap-5 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "name",
						className: "text-sm font-semibold",
						children: "Full Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "name",
						name: "name",
						className: fieldClass,
						placeholder: "Jane Okoro"
					}),
					errors["name"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-destructive",
						children: errors["name"]
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "company",
						className: "text-sm font-semibold",
						children: "Company"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "company",
						name: "company",
						className: fieldClass,
						placeholder: "Acme Group"
					}),
					errors["company"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-destructive",
						children: errors["company"]
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "email",
						className: "text-sm font-semibold",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "email",
						name: "email",
						type: "email",
						className: fieldClass,
						placeholder: "you@company.com"
					}),
					errors["email"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-destructive",
						children: errors["email"]
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: "phone",
					className: "text-sm font-semibold",
					children: ["Phone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "(optional)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "phone",
					name: "phone",
					type: "tel",
					className: fieldClass,
					placeholder: "+1 555 000 1234"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "service",
						className: "text-sm font-semibold",
						children: "Service Required"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "service",
						name: "service",
						defaultValue: "",
						className: fieldClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Select a service"
						}), serviceOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o,
							children: o
						}, o))]
					}),
					errors["service"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-destructive",
						children: errors["service"]
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "budget",
						className: "text-sm font-semibold",
						children: "Budget Range"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "budget",
						name: "budget",
						defaultValue: "",
						className: fieldClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Select a range"
						}), budgetOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o,
							children: o
						}, o))]
					}),
					errors["budget"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-destructive",
						children: errors["budget"]
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "message",
							className: "text-sm font-semibold",
							children: "Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							name: "message",
							rows: 6,
							className: fieldClass,
							placeholder: "Describe your current infrastructure and the outcome you need."
						}),
						errors["message"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-destructive",
							children: errors["message"]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: status === "sending",
						children: status === "sending" ? "Sending…" : "Submit Inquiry"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					"aria-live": "polite",
					children: [status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm font-semibold text-accent-foreground",
						children: "Inquiry received. A Fredacorpal strategist will respond shortly."
					}) : null, status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive",
						children: serverError ?? "Please correct the highlighted fields and submit again."
					}) : null]
				})
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-lg border border-border bg-card p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-bold",
				children: "Alternate channels"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 space-y-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "mt-0.5 h-4 w-4 shrink-0 text-gold",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT_EMAIL}`,
							className: "text-muted-foreground transition-colors hover:text-gold",
							children: CONTACT_EMAIL
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "mt-0.5 h-4 w-4 shrink-0 text-gold",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold",
							children: "Support"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT_EMAIL}`,
							className: "text-muted-foreground transition-colors hover:text-gold",
							children: CONTACT_EMAIL
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "mt-0.5 h-4 w-4 shrink-0 text-gold",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold",
							children: "Operations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Remote-first, delivering across global time zones."
						})] })]
					})
				]
			})]
		})]
	}) })] });
}
//#endregion
export { Contact as component };
