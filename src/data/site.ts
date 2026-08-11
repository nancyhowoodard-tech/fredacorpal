export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  to: string;
  ctaLabel: string;
  headline: string;
  problem: string;
  whatWeDo: string;
  methodology: { title: string; body: string }[];
  deliverables: string[];
  benefits: string[];
  process: { step: string; title: string; body: string }[];
  why: string[];
  faq: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "seo",
    index: "01",
    title: "Search Engine Optimization",
    short:
      "Technical SEO, infrastructure audits, algorithmic keyword strategy, structured data, technical optimization and visibility architecture.",
    to: "/services/seo",
    ctaLabel: "Explore SEO",
    headline: "Search Visibility Engineered for Long-Term Growth",
    problem:
      "Most organizations invest in content while their underlying search infrastructure quietly fails: crawl waste, unstable rendering, fractured internal linking and unstructured data prevent search engines from validating authority.",
    whatWeDo:
      "We engineer the technical foundation of organic visibility — validating crawl paths, architecting keyword coverage, implementing structured data and aligning site performance with search engine expectations.",
    methodology: [
      {
        title: "Technical SEO",
        body: "Crawl, index and render validation across templates, plus resolution of duplication, canonical and pagination conflicts.",
      },
      {
        title: "Infrastructure Audits",
        body: "Full-stack review of hosting, rendering strategy, response codes, log files and Core Web Vitals.",
      },
      {
        title: "Keyword Architecture",
        body: "Algorithmic clustering of demand into hub-and-spoke topical structures mapped to commercial intent.",
      },
      {
        title: "Structured Data",
        body: "Schema implementation and validation so entities are machine-readable and eligible for enhanced results.",
      },
      {
        title: "On-Page Optimization",
        body: "Heading hierarchy, semantic HTML, internal link equity distribution and metadata systems.",
      },
      {
        title: "Search Visibility Strategy",
        body: "Quarterly roadmaps tying technical performance to pipeline and revenue outcomes.",
      },
    ],
    deliverables: [
      "Technical audit with prioritized remediation backlog",
      "Keyword and topical architecture map",
      "Structured data implementation specification",
      "Internal linking and information architecture plan",
      "Core Web Vitals performance report",
      "Monthly visibility and ranking reporting",
    ],
    benefits: [
      "Compounding organic acquisition independent of ad spend",
      "Verified search equity that survives algorithm updates",
      "Faster indexation of new commercial pages",
      "Engineering-ready specifications, not vague advice",
    ],
    process: [
      { step: "01", title: "Discovery", body: "Baseline analysis of infrastructure, market and competitive position." },
      { step: "02", title: "Audit", body: "Technical validation across crawl, render, index and performance layers." },
      { step: "03", title: "Architecture", body: "Keyword, content and internal link structures are designed." },
      { step: "04", title: "Implementation", body: "Our engineers deploy alongside your team or independently." },
      { step: "05", title: "Validation", body: "Continuous measurement, reporting and iteration." },
    ],
    why: [
      "Engineering-led rather than content-led execution",
      "Dedicated technical specialists, not generalist account managers",
      "Documentation your developers can actually ship",
    ],
    faq: [
      { q: "How long until results appear?", a: "Technical remediation often shows indexation improvements within weeks; competitive ranking movement typically compounds over two to three quarters." },
      { q: "Do you work with our in-house developers?", a: "Yes. We deliver specifications, tickets and review support so your team can implement, or we implement directly." },
      { q: "Do you require a long contract?", a: "Engagements are scoped to the infrastructure requirement. Request a consultation for a tailored proposal." },
    ],
    metaTitle: "Enterprise SEO & Search Infrastructure | Fredacorpal™",
    metaDescription:
      "Technical SEO, infrastructure audits, keyword architecture and structured data engineered for long-term enterprise search visibility.",
  },
  {
    slug: "social-media",
    index: "02",
    title: "Social Media Architecture",
    short:
      "Multi-platform content management, scheduling, engagement systems, audience growth and community development.",
    to: "/services/social-media",
    ctaLabel: "Explore Social Media",
    headline: "Multi-Platform Presence, Operated as Infrastructure",
    problem:
      "Social presence fails when it is treated as a publishing task rather than an operating system. Inconsistent cadence, fragmented tone and unmanaged engagement erode brand equity.",
    whatWeDo:
      "We build and operate the content pipeline: editorial systems, asset distribution, scheduling automation, community response protocols and growth measurement across every relevant platform.",
    methodology: [
      { title: "Content Systems", body: "Editorial calendars, pillars and formats aligned to platform-native behaviour." },
      { title: "Scheduling & Distribution", body: "Centralized publishing workflows with approvals and version control." },
      { title: "Engagement Operations", body: "Response protocols, escalation paths and service-level targets for community." },
      { title: "Audience Growth", body: "Creative testing and distribution strategy that expands qualified reach." },
      { title: "Community Development", body: "Programs that convert followers into advocates and pipeline." },
      { title: "Measurement", body: "Reporting on reach, engagement quality and downstream conversion." },
    ],
    deliverables: [
      "Platform strategy and channel architecture",
      "Monthly editorial calendar and asset pipeline",
      "Scheduling and approval workflow setup",
      "Community management and escalation playbook",
      "Growth and engagement reporting dashboard",
    ],
    benefits: [
      "Consistent, on-brand presence across every channel",
      "Reduced internal coordination overhead",
      "Measurable audience growth rather than vanity output",
      "A managed team instead of a fragmented freelancer pool",
    ],
    process: [
      { step: "01", title: "Audit", body: "Channel, competitor and content performance baseline." },
      { step: "02", title: "Strategy", body: "Positioning, pillars and platform allocation." },
      { step: "03", title: "Build", body: "Workflows, templates and asset systems are stood up." },
      { step: "04", title: "Operate", body: "Daily publishing, engagement and moderation." },
      { step: "05", title: "Scale", body: "Iteration against growth and conversion targets." },
    ],
    why: [
      "Operated by trained remote specialists under managed supervision",
      "Documented workflows that survive team changes",
      "Aligned with your wider acquisition infrastructure",
    ],
    faq: [
      { q: "Which platforms do you manage?", a: "We prioritise the platforms where your buyers concentrate, commonly LinkedIn, Instagram, X, Facebook, TikTok and YouTube." },
      { q: "Do you produce the creative?", a: "Yes — we can operate with your existing assets or produce content within an agreed scope." },
      { q: "How is quality controlled?", a: "Every piece flows through an approval workflow with brand and compliance checkpoints." },
    ],
    metaTitle: "Social Media Management & Architecture | Fredacorpal™",
    metaDescription:
      "Multi-platform content management, scheduling, engagement systems and audience growth operated as managed infrastructure.",
  },
  {
    slug: "paid-media",
    index: "03",
    title: "Paid Ads & Media Acquisition",
    short:
      "Performance advertising, A/B testing, conversion optimization and multi-channel media acquisition.",
    to: "/services/paid-media",
    ctaLabel: "Explore Paid Media",
    headline: "Media Acquisition Built for Efficient Scale",
    problem:
      "Paid programs plateau when creative, targeting and measurement are managed in isolation. Rising acquisition costs are usually a systems problem, not a bidding problem.",
    whatWeDo:
      "We architect the full acquisition system: channel mix, creative testing frameworks, landing experience optimization and conversion measurement that survives privacy constraints.",
    methodology: [
      { title: "Channel Strategy", body: "Budget allocation modelled against margin, intent and incrementality." },
      { title: "Creative Testing", body: "Structured A/B and multivariate testing programs with statistical discipline." },
      { title: "Conversion Optimization", body: "Landing experience, offer and funnel improvements tied to measured lift." },
      { title: "Measurement", body: "Server-side tracking, attribution hygiene and clean reporting." },
      { title: "Scaling", body: "Controlled expansion once efficiency thresholds are validated." },
      { title: "Governance", body: "Spend controls, brand safety and weekly performance review." },
    ],
    deliverables: [
      "Account structure and channel plan",
      "Creative testing roadmap",
      "Conversion tracking implementation",
      "Landing page optimization recommendations",
      "Weekly performance and spend efficiency reporting",
    ],
    benefits: [
      "Lower conversion overhead at equal or greater volume",
      "Clear visibility into what is actually driving revenue",
      "Creative velocity without internal bottlenecks",
      "Disciplined scaling instead of speculative spend",
    ],
    process: [
      { step: "01", title: "Assessment", body: "Historic account, creative and tracking review." },
      { step: "02", title: "Instrumentation", body: "Measurement is corrected before spend is scaled." },
      { step: "03", title: "Launch", body: "Structured campaigns with controlled test cells." },
      { step: "04", title: "Optimize", body: "Iterative creative and bidding refinement." },
      { step: "05", title: "Scale", body: "Expansion into new channels and audiences." },
    ],
    why: [
      "Performance engineers, not media buyers alone",
      "Measurement-first: no spend without validated tracking",
      "Transparent reporting on efficiency, not impressions",
    ],
    faq: [
      { q: "Which platforms do you buy on?", a: "Google, Meta, LinkedIn, Microsoft, YouTube and programmatic partners, selected by where your demand exists." },
      { q: "What is the minimum spend?", a: "We scope engagements to the infrastructure requirement rather than a fixed floor. Request a consultation." },
      { q: "Who owns the ad accounts?", a: "You do. We operate inside your accounts with full transparency." },
    ],
    metaTitle: "Paid Media & Performance Advertising | Fredacorpal™",
    metaDescription:
      "Performance advertising, A/B testing, conversion optimization and multi-channel media acquisition engineered for efficient scale.",
  },
  {
    slug: "customer-support",
    index: "04",
    title: "Customer Support Deployment",
    short: "Remote customer-care systems and support operations.",
    to: "/services/customer-support",
    ctaLabel: "Explore Customer Support",
    headline: "Remote Support Operations, Deployed and Managed",
    problem:
      "Support quality collapses under growth when hiring, training and tooling are improvised. Response delays quietly cost retention and revenue.",
    whatWeDo:
      "We deploy trained remote support agents inside a managed operating framework: ticketing configuration, macros, escalation tiers, quality assurance and reporting.",
    methodology: [
      { title: "Operating Model", body: "Coverage windows, staffing ratios and service-level targets." },
      { title: "Tooling", body: "Helpdesk configuration, routing rules, macros and knowledge base." },
      { title: "Talent Deployment", body: "Vetted remote agents onboarded to your brand and product." },
      { title: "Quality Assurance", body: "Ticket scoring, coaching cycles and satisfaction tracking." },
      { title: "Escalation", body: "Tiered pathways into technical and account ownership." },
      { title: "Reporting", body: "Volume, resolution time and satisfaction visibility." },
    ],
    deliverables: [
      "Support operating manual and SLA definition",
      "Helpdesk configuration and macro library",
      "Trained, deployed remote agents",
      "QA scorecards and coaching cadence",
      "Monthly performance reporting",
    ],
    benefits: [
      "Faster resolution without permanent headcount cost",
      "Consistent brand voice across every channel",
      "Coverage that scales with demand peaks",
      "Documented processes that reduce key-person risk",
    ],
    process: [
      { step: "01", title: "Discovery", body: "Volume, channel and complexity analysis." },
      { step: "02", title: "Design", body: "Operating model, SLAs and tooling plan." },
      { step: "03", title: "Onboard", body: "Agent selection, training and certification." },
      { step: "04", title: "Deploy", body: "Live operations with supervision." },
      { step: "05", title: "Improve", body: "QA-driven refinement and expansion." },
    ],
    why: [
      "Managed teams, not marketplace freelancers",
      "Operational reliability backed by documented process",
      "Global talent network with flexible coverage windows",
    ],
    faq: [
      { q: "Which channels are covered?", a: "Email, live chat, ticketing systems and social inboxes, with voice available on request." },
      { q: "How quickly can agents be deployed?", a: "Typical onboarding runs a few weeks depending on product complexity and certification requirements." },
      { q: "How is data handled?", a: "Agents operate inside your systems under your access controls and confidentiality terms." },
    ],
    metaTitle: "Remote Customer Support Deployment | Fredacorpal™",
    metaDescription:
      "Managed remote customer-care systems, trained agents, QA frameworks and support operations deployed for growing enterprises.",
  },
  {
    slug: "technical-solutions",
    index: "05",
    title: "Technical Solutions",
    short: "Technical infrastructure, optimization and digital implementation.",
    to: "/services/technical-solutions",
    ctaLabel: "Explore Technical Solutions",
    headline: "Digital Infrastructure, Implemented Properly",
    problem:
      "Marketing performance is frequently blocked by technical debt: slow templates, brittle integrations, unreliable tracking and undocumented systems.",
    whatWeDo:
      "We implement and optimize the technical layer — performance engineering, integrations, automation, analytics instrumentation and platform hardening.",
    methodology: [
      { title: "Performance Engineering", body: "Core Web Vitals, caching, asset strategy and rendering improvements." },
      { title: "Integrations", body: "CRM, CDP, analytics and workflow systems connected reliably." },
      { title: "Automation", body: "Repeatable operational workflows replacing manual effort." },
      { title: "Instrumentation", body: "Accurate, privacy-aware event and conversion tracking." },
      { title: "Hardening", body: "Access control, monitoring and resilience improvements." },
      { title: "Documentation", body: "Handover material your team can operate from." },
    ],
    deliverables: [
      "Technical assessment and remediation roadmap",
      "Implementation of prioritized fixes",
      "Integration and automation build-out",
      "Analytics and tracking specification",
      "System documentation and handover",
    ],
    benefits: [
      "Removal of the technical blockers limiting growth",
      "Reliable data underpinning every marketing decision",
      "Reduced manual operational load",
      "Infrastructure your team can maintain",
    ],
    process: [
      { step: "01", title: "Assess", body: "Systems, performance and integration review." },
      { step: "02", title: "Prioritize", body: "Impact-ranked remediation plan." },
      { step: "03", title: "Build", body: "Implementation in controlled increments." },
      { step: "04", title: "Verify", body: "Testing, monitoring and validation." },
      { step: "05", title: "Handover", body: "Documentation and enablement." },
    ],
    why: [
      "Senior specialists across performance, data and platform",
      "Change delivered in controlled, reversible increments",
      "Documentation as a standard deliverable",
    ],
    faq: [
      { q: "Do you work inside our stack?", a: "Yes. We adapt to your existing platforms and access model rather than forcing migration." },
      { q: "Can you support ongoing maintenance?", a: "Retained technical support is available as part of an integrated engagement." },
      { q: "How do you manage risk?", a: "Staged deployment, review gates and rollback plans on every change." },
    ],
    metaTitle: "Technical Solutions & Digital Implementation | Fredacorpal™",
    metaDescription:
      "Technical infrastructure, performance engineering, integrations, automation and digital implementation for enterprise growth.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export type Testimonial = {
  name: string;
  position: string;
  company: string;
  service: string;
  rating: number;
  quote: string;
  metric?: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Vance",
    position: "COO",
    company: "TechCorp Global Solutions",
    service: "SEO",
    rating: 5,
    quote:
      "Fredacorpal rebuilt our search infrastructure from the crawl layer upward. The engineering discipline was closer to a platform team than an agency.",
    metric: "340% growth inside 9 months",
    initials: "MV",
  },
  {
    name: "Sarah Jenkins",
    position: "VP of Acquisition",
    company: "Apex Ventures",
    service: "Paid Media",
    rating: 5,
    quote:
      "They corrected our measurement before touching spend. That single decision changed how we allocate budget across every channel.",
    metric: "42% reduction in conversion overhead",
    initials: "SJ",
  },
  {
    name: "David Sterling",
    position: "Director of Strategy",
    company: "Omnicor Group",
    service: "Customer Support Deployment",
    rating: 5,
    quote:
      "The deployed support team operates to a documented standard. Coverage scaled with demand without adding permanent headcount.",
    initials: "DS",
  },
  {
    name: "Elena Rostova",
    position: "Founder",
    company: "Rostova Design Lab",
    service: "Social Media Management",
    rating: 5,
    quote:
      "Our channels finally run like a system — consistent cadence, real engagement and a community that compounds.",
    metric: "80K audience growth",
    initials: "ER",
  },
  {
    name: "Julian Thorne",
    position: "Principal Consultant",
    company: "Thorne Advisors",
    service: "Technical SEO",
    rating: 5,
    quote:
      "Access to genuinely senior technical thinking, delivered as specifications my clients' developers could implement immediately.",
    metric: "High-tier architecture consulting without enterprise budget overhead",
    initials: "JT",
  },
  {
    name: "Clara Amari",
    position: "E-Commerce Merchant",
    company: "Amari Collections",
    service: "Operational Reliability",
    rating: 5,
    quote:
      "Reliable, responsive and precise. Everything they set up still runs exactly as documented months later.",
    initials: "CA",
  },
];

export type Career = {
  slug: string;
  title: string;
  to: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  preferred: string[];
  application: string[];
  faq: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const careers: Career[] = [
  {
    slug: "customer-care",
    title: "Customer Care Assistant",
    to: "/careers/customer-care",
    type: "Full-Time",
    location: "Remote — Global",
    summary:
      "Support enterprise clients across ticketing, live chat and cross-channel communication inside a managed, quality-assured support operation.",
    responsibilities: [
      "Customer ticket management",
      "Live support",
      "Client satisfaction",
      "Cross-channel communication",
    ],
    skills: [
      "Excellent written and verbal English",
      "Experience with helpdesk or ticketing software",
      "Calm, structured problem solving under volume",
      "Reliable remote working environment",
    ],
    preferred: [
      "Prior B2B or e-commerce support experience",
      "Familiarity with SLA-driven environments",
      "Experience supporting multiple time zones",
    ],
    application: [
      "Submit your application with a short summary of your support experience",
      "Screening interview with the operations team",
      "Practical assessment based on real support scenarios",
      "Offer, onboarding and brand certification",
    ],
    faq: [
      { q: "Is this role fully remote?", a: "Yes. All Fredacorpal delivery roles are remote with defined coverage windows." },
      { q: "What equipment is required?", a: "A reliable computer, stable high-speed internet and a quiet working environment." },
    ],
    metaTitle: "Customer Care Assistant — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Join Fredacorpal as a remote Customer Care Assistant managing tickets, live support and cross-channel client communication.",
  },
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    to: "/careers/social-media-manager",
    type: "Full-Time",
    location: "Remote — Global",
    summary:
      "Own multi-platform content operations for enterprise clients: scheduling, asset distribution, engagement and audience growth.",
    responsibilities: [
      "Content scheduling",
      "Asset distribution",
      "Engagement",
      "Multi-platform management",
    ],
    skills: [
      "Proven multi-platform social management experience",
      "Strong editorial judgement and brand voice control",
      "Comfort with scheduling and analytics tooling",
      "Data-informed approach to growth",
    ],
    preferred: [
      "Experience managing several client accounts concurrently",
      "Basic design or short-form video editing capability",
      "Paid social familiarity",
    ],
    application: [
      "Submit your application with links to channels you have managed",
      "Portfolio and strategy review",
      "Scenario-based interview with the delivery lead",
      "Offer and onboarding",
    ],
    faq: [
      { q: "How many accounts would I manage?", a: "Allocation is set to protect quality, typically a small portfolio of clients per manager." },
      { q: "Do you provide creative support?", a: "Yes. Managers work alongside content and design resources within the delivery network." },
    ],
    metaTitle: "Social Media Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Join Fredacorpal as a remote Social Media Manager owning content scheduling, distribution, engagement and multi-platform growth.",
  },
  {
    slug: "seo-expert",
    title: "SEO Expert",
    to: "/careers/seo-expert",
    type: "Contract Basis",
    location: "Remote — Global",
    summary:
      "Deliver technical SEO for enterprise infrastructure: code-level optimization, structural audits and visibility mapping.",
    responsibilities: [
      "Technical SEO",
      "Code optimization",
      "Structural audits",
      "Visibility mapping",
    ],
    skills: [
      "Deep technical SEO expertise across crawl, render and index",
      "Comfort reading HTML, JavaScript and server responses",
      "Log file and Core Web Vitals analysis",
      "Clear written specification writing",
    ],
    preferred: [
      "Experience with large or multi-market sites",
      "Structured data implementation background",
      "Agency or consulting delivery experience",
    ],
    application: [
      "Submit your application with examples of technical audits delivered",
      "Technical screening with a senior SEO lead",
      "Practical audit exercise",
      "Contract offer and onboarding",
    ],
    faq: [
      { q: "Is this a contract role?", a: "Yes — this position is engaged on a contract basis with scope agreed per engagement." },
      { q: "Can I work with other clients?", a: "Yes, subject to confidentiality and non-conflict terms." },
    ],
    metaTitle: "SEO Expert — Remote Contract | Fredacorpal™ Careers",
    metaDescription:
      "Contract SEO Expert role at Fredacorpal covering technical SEO, code optimization, structural audits and visibility mapping.",
  },
];

export const getCareer = (slug: string) => careers.find((c) => c.slug === slug);

export const industries = [
  {
    name: "Technology",
    body: "Search architecture, demand generation and technical documentation infrastructure for software and platform businesses.",
  },
  {
    name: "E-Commerce",
    body: "Catalogue-scale SEO, feed integrity, paid acquisition efficiency and support operations that hold through peak demand.",
  },
  {
    name: "Professional Services",
    body: "Authority-led visibility, qualified lead pipelines and reputation infrastructure for advisory and consulting firms.",
  },
  {
    name: "Startups",
    body: "Fast-deployed acquisition foundations and fractional senior expertise without permanent headcount cost.",
  },
  {
    name: "Corporate Enterprises",
    body: "Governed multi-market delivery, integrated reporting and compliance-aware implementation at organizational scale.",
  },
  {
    name: "Creative Businesses",
    body: "Audience growth, community development and distribution systems that turn creative output into measurable reach.",
  },
  {
    name: "B2B Organizations",
    body: "Intent-mapped content architecture, precision paid media and CRM-integrated measurement across long sales cycles.",
  },
];

export const stats = [
  { value: 340, suffix: "%", label: "Growth", detail: "Verified client search growth in 9 months" },
  { value: 42, suffix: "%", label: "Conversion Efficiency", detail: "Reduction in conversion overhead" },
  { value: 80, suffix: "K+", label: "Audience Growth", detail: "Community expansion delivered" },
  { value: 0, suffix: "", label: "Global Talent Network", detail: "Vetted remote specialists worldwide" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Industries", to: "/industries" },
      { label: "Partnerships", to: "/partnerships" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "SEO", to: "/services/seo" },
      { label: "Social Media", to: "/services/social-media" },
      { label: "Paid Media", to: "/services/paid-media" },
      { label: "Customer Support", to: "/services/customer-support" },
      { label: "Technical Solutions", to: "/services/technical-solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", to: "/pricing" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];
