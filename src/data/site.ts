export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Departments", to: "/departments" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export type Service = {
  slug: string;
  index: string;
  department: string;
  departmentSlug: string;
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
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
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
      {
        step: "01",
        title: "Discovery",
        body: "Baseline analysis of infrastructure, market and competitive position.",
      },
      {
        step: "02",
        title: "Audit",
        body: "Technical validation across crawl, render, index and performance layers.",
      },
      {
        step: "03",
        title: "Architecture",
        body: "Keyword, content and internal link structures are designed.",
      },
      {
        step: "04",
        title: "Implementation",
        body: "Our engineers deploy alongside your team or independently.",
      },
      { step: "05", title: "Validation", body: "Continuous measurement, reporting and iteration." },
    ],
    why: [
      "Engineering-led rather than content-led execution",
      "Dedicated technical specialists, not generalist account managers",
      "Documentation your developers can actually ship",
    ],
    faq: [
      {
        q: "How long until results appear?",
        a: "Technical remediation often shows indexation improvements within weeks; competitive ranking movement typically compounds over two to three quarters.",
      },
      {
        q: "Do you work with our in-house developers?",
        a: "Yes. We deliver specifications, tickets and review support so your team can implement, or we implement directly.",
      },
      {
        q: "Do you require a long contract?",
        a: "Engagements are scoped to the infrastructure requirement. Request a consultation for a tailored proposal.",
      },
    ],
    metaTitle: "Enterprise SEO & Search Infrastructure | Fredacorpal™",
    metaDescription:
      "Technical SEO, infrastructure audits, keyword architecture and structured data engineered for long-term enterprise search visibility.",
  },
  {
    slug: "social-media",
    index: "02",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
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
      {
        title: "Content Systems",
        body: "Editorial calendars, pillars and formats aligned to platform-native behaviour.",
      },
      {
        title: "Scheduling & Distribution",
        body: "Centralized publishing workflows with approvals and version control.",
      },
      {
        title: "Engagement Operations",
        body: "Response protocols, escalation paths and service-level targets for community.",
      },
      {
        title: "Audience Growth",
        body: "Creative testing and distribution strategy that expands qualified reach.",
      },
      {
        title: "Community Development",
        body: "Programs that convert followers into advocates and pipeline.",
      },
      {
        title: "Measurement",
        body: "Reporting on reach, engagement quality and downstream conversion.",
      },
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
      {
        q: "Which platforms do you manage?",
        a: "We prioritise the platforms where your buyers concentrate, commonly LinkedIn, Instagram, X, Facebook, TikTok and YouTube.",
      },
      {
        q: "Do you produce the creative?",
        a: "Yes — we can operate with your existing assets or produce content within an agreed scope.",
      },
      {
        q: "How is quality controlled?",
        a: "Every piece flows through an approval workflow with brand and compliance checkpoints.",
      },
    ],
    metaTitle: "Social Media Management & Architecture | Fredacorpal™",
    metaDescription:
      "Multi-platform content management, scheduling, engagement systems and audience growth operated as managed infrastructure.",
  },
  {
    slug: "paid-media",
    index: "03",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
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
      {
        title: "Channel Strategy",
        body: "Budget allocation modelled against margin, intent and incrementality.",
      },
      {
        title: "Creative Testing",
        body: "Structured A/B and multivariate testing programs with statistical discipline.",
      },
      {
        title: "Conversion Optimization",
        body: "Landing experience, offer and funnel improvements tied to measured lift.",
      },
      {
        title: "Measurement",
        body: "Server-side tracking, attribution hygiene and clean reporting.",
      },
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
      {
        step: "02",
        title: "Instrumentation",
        body: "Measurement is corrected before spend is scaled.",
      },
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
      {
        q: "Which platforms do you buy on?",
        a: "Google, Meta, LinkedIn, Microsoft, YouTube and programmatic partners, selected by where your demand exists.",
      },
      {
        q: "What is the minimum spend?",
        a: "We scope engagements to the infrastructure requirement rather than a fixed floor. Request a consultation.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do. We operate inside your accounts with full transparency.",
      },
    ],
    metaTitle: "Paid Media & Performance Advertising | Fredacorpal™",
    metaDescription:
      "Performance advertising, A/B testing, conversion optimization and multi-channel media acquisition engineered for efficient scale.",
  },
  {
    slug: "customer-support",
    index: "04",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
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
      {
        title: "Operating Model",
        body: "Coverage windows, staffing ratios and service-level targets.",
      },
      {
        title: "Tooling",
        body: "Helpdesk configuration, routing rules, macros and knowledge base.",
      },
      {
        title: "Talent Deployment",
        body: "Vetted remote agents onboarded to your brand and product.",
      },
      {
        title: "Quality Assurance",
        body: "Ticket scoring, coaching cycles and satisfaction tracking.",
      },
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
      {
        q: "Which channels are covered?",
        a: "Email, live chat, ticketing systems and social inboxes, with voice available on request.",
      },
      {
        q: "How quickly can agents be deployed?",
        a: "Typical onboarding runs a few weeks depending on product complexity and certification requirements.",
      },
      {
        q: "How is data handled?",
        a: "Agents operate inside your systems under your access controls and confidentiality terms.",
      },
    ],
    metaTitle: "Remote Customer Support Deployment | Fredacorpal™",
    metaDescription:
      "Managed remote customer-care systems, trained agents, QA frameworks and support operations deployed for growing enterprises.",
  },
  {
    slug: "technical-solutions",
    index: "05",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
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
      {
        title: "Performance Engineering",
        body: "Core Web Vitals, caching, asset strategy and rendering improvements.",
      },
      {
        title: "Integrations",
        body: "CRM, CDP, analytics and workflow systems connected reliably.",
      },
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
      {
        q: "Do you work inside our stack?",
        a: "Yes. We adapt to your existing platforms and access model rather than forcing migration.",
      },
      {
        q: "Can you support ongoing maintenance?",
        a: "Retained technical support is available as part of an integrated engagement.",
      },
      {
        q: "How do you manage risk?",
        a: "Staged deployment, review gates and rollback plans on every change.",
      },
    ],
    metaTitle: "Technical Solutions & Digital Implementation | Fredacorpal™",
    metaDescription:
      "Technical infrastructure, performance engineering, integrations, automation and digital implementation for enterprise growth.",
  },
  {
    slug: "financial-advisory",
    index: "06",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    title: "Strategic Financial Advisory & Management",
    short:
      "Empower your organization with rigorous capital planning, financial governance, and operational oversight to drive sustainable growth and enterprise value.",
    to: "/services/financial-advisory",
    ctaLabel: "Explore Financial Advisory",
    headline: "Financial Infrastructure Built for Enterprise Value",
    problem:
      "Rapidly scaling enterprises and complex business operations frequently encounter strategic drag due to fragmented financial planning, opaque cash-flow visibility, and ad-hoc governance. Without institutional-grade oversight, organizations risk capital inefficiency, compliance exposure, and poor strategic decision-making that erodes profit margins.",
    whatWeDo:
      "We provide end-to-end financial stewardship, aligning your balance sheet with long-term commercial strategy. Our practice delivers high-level corporate finance advisory, capital structure optimization, continuous treasury management, and executive-level financial reporting tailored to your corporate goals.",
    methodology: [
      {
        title: "Data Aggregation & Integration",
        body: "Unifying disparate accounting ERPs and banking streams into a central financial intelligence platform.",
      },
      {
        title: "Custom Risk & Ratio Models",
        body: "Tailoring risk-mitigation frameworks and performance metrics specific to your operational vertical.",
      },
      {
        title: "Governance Integration",
        body: "Embedding automated controls, approval hierarchies, and reporting cadences into your daily workflows.",
      },
    ],
    deliverables: [
      "Executive Financial Dashboard: Real-time visibility into liquidity, EBITDA, working capital, and operational burn rates.",
      "Rolling 13-Week & Multi-Year Forecasts: Dynamic cash-flow modeling and scenario analyses for revenue projections and capital requirements.",
      "Board-Ready Reporting Packs: Comprehensive monthly and quarterly financial review decks designed for stakeholders and investors.",
      "Custom Financial Policies: Formalized operational procedures covering expense management, risk policy, and capital allocation.",
    ],
    benefits: [
      "Capital Efficiency: Optimized working capital cycles that unlock dormant cash reserves.",
      "Strategic Precision: Fact-based financial modeling that eliminates guesswork in investment decisions.",
      "Governance & Compliance: Institutional-grade audit readiness and robust internal risk controls.",
      "Predictable Scalability: Clear unit economics and forecasting models built to support sustainable growth.",
    ],
    process: [
      {
        step: "01",
        title: "Diagnostic Assessment",
        body: "Complete review of historical financials, operational structure, and existing software systems.",
      },
      {
        step: "02",
        title: "Infrastructure Design",
        body: "Development of customized financial models, reporting templates, and risk control matrices.",
      },
      {
        step: "03",
        title: "Integration & Deployment",
        body: "Streamlining tool integrations, establishing data pipelines, and onboarding financial operations.",
      },
      {
        step: "04",
        title: "Active Management & Strategy",
        body: "Ongoing monitoring, monthly performance reviews, and active strategic advisory sessions.",
      },
    ],
    why: [
      "We do not deliver static, advisory-only reports",
      "We embed directly alongside your executive team as an execution-oriented financial partner",
      "Institutional corporate finance expertise combined with modern technology stacks",
      "Scalable financial infrastructure that operates continuously on your behalf",
    ],
    faq: [
      {
        q: "How does this service integrate with our existing accounting team or software?",
        a: "We work on top of your current operational infrastructure. We integrate seamlessly with standard ERPs and accounting systems, acting as strategic advisers and financial architects without disrupting daily bookkeeping operations.",
      },
      {
        q: "Is this service designed for early-stage companies or established enterprises?",
        a: "Our model is designed to scale with your organization. Whether you are scaling rapidly and need fractional executive finance support, or are an established firm requiring sophisticated capital management, our engagement model adapts to your operational scale.",
      },
    ],
    metaTitle: "Strategic Financial Advisory & Management | Fredacorpal™",
    metaDescription:
      "Capital planning, financial governance and operational oversight — executive dashboards, rolling forecasts and board-ready reporting for scaling enterprises.",
  },
  {
    slug: "strategy-consulting",
    index: "07",
    department: "Business Strategy & Consulting",
    departmentSlug: "business-strategy-consulting",
    title: "Business Strategy & Consulting",
    short:
      "Enterprise corporate roadmapping, business process re-engineering (BPR), organizational transformation, and strategic market intelligence.",
    to: "/services/strategy-consulting",
    ctaLabel: "Explore Strategy & Consulting",
    headline: "Enterprise Strategy Engineered for Sustainable Transformation",
    problem:
      "Scaling enterprises often encounter operational bottlenecks, misaligned commercial models, and legacy process inertia that degrade margins and inhibit agile growth.",
    whatWeDo:
      "We design and execute actionable strategic blueprints — restructuring workflows, architecting business process transformations, and providing executive advisory that drives measurable enterprise value.",
    methodology: [
      {
        title: "Commercial Roadmapping",
        body: "Rigorous diagnostic of enterprise models, capital allocation, unit economics, and scalable market vectors.",
      },
      {
        title: "Process Re-engineering (BPR)",
        body: "Workflow decomposition to eliminate redundancies, reduce cycle times, and automate mission-critical handoffs.",
      },
      {
        title: "Transformation Frameworks",
        body: "Structured change management frameworks ensuring seamless execution across executive leadership and operational units.",
      },
      {
        title: "Strategic Market Intelligence",
        body: "Deep competitive positioning, regulatory landscape evaluation, and predictive demand modeling.",
      },
    ],
    deliverables: [
      "Enterprise strategic transformation blueprint and multi-quarter roadmap",
      "End-to-end business process re-engineering (BPR) documentation and SOPs",
      "Executive decision frameworks and governance scorecards",
      "Quarterly market intelligence and competitive positioning analyses",
    ],
    benefits: [
      "Accelerated organizational agility and streamlined operational velocity",
      "Measurable margin expansion through workflow optimization",
      "De-risked capital investments and strategic initiative deployment",
      "Cross-functional alignment across executive leadership and delivery teams",
    ],
    process: [
      {
        step: "01",
        title: "Diagnostic Audit",
        body: "Comprehensive evaluation of operating model, cost drivers, and organizational structure.",
      },
      {
        step: "02",
        title: "Blueprint Design",
        body: "Formulation of bespoke strategic initiatives, milestone metrics, and resource requirements.",
      },
      {
        step: "03",
        title: "Implementation Orchestration",
        body: "Direct embedding with business unit leaders to drive operational transformation.",
      },
      {
        step: "04",
        title: "Performance Governance",
        body: "Continuous review against quantitative outcome benchmarks and efficiency KPIs.",
      },
    ],
    why: [
      "Execution-first advisory rather than academic slide decks",
      "Deep integration with modern digital technologies and automation",
      "Proven frameworks for mid-market and enterprise scale",
      "Direct accountability to quantitative business outcomes",
    ],
    faq: [
      {
        q: "How does Fredacorpal’s strategy consulting differ from traditional management consultancies?",
        a: "We do not leave you with unexecutable slide decks. Our team works directly alongside your leadership to re-engineer workflows, integrate digital infrastructure, and measure operational outcomes.",
      },
      {
        q: "What typical engagement durations do you support?",
        a: "We support focused 90-day transformation sprints as well as ongoing multi-quarter retainer partnerships.",
      },
    ],
    metaTitle: "Business Strategy & Consulting | Fredacorpal™",
    metaDescription:
      "Enterprise corporate roadmapping, business process re-engineering (BPR), organizational transformation, and strategic market intelligence.",
  },
  {
    slug: "business-development",
    index: "08",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    title: "Business Development & Partnerships",
    short:
      "Strategic institutional alliances, enterprise account acquisition, B2B commercial pipelines, and structured deal facilitation.",
    to: "/services/business-development",
    ctaLabel: "Explore Business Development",
    headline: "Commercial Acquisition & Strategic Alliance Architecture",
    problem:
      "High-potential organizations frequently struggle to access institutional enterprise accounts, lack structured joint-venture ecosystems, and face unpredictable commercial conversion cycles.",
    whatWeDo:
      "We architect predictable enterprise acquisition funnels, broker strategic industry partnerships, and structure commercial proposals that secure high-value contracts.",
    methodology: [
      {
        title: "Ecosystem Mapping",
        body: "Identifying strategic distribution partners, institutional channels, and high-synergy joint venture targets.",
      },
      {
        title: "Commercial Deal Structuring",
        body: "Designing mutual-gain partnership frameworks, revenue-share models, and enterprise commercial proposals.",
      },
      {
        title: "Inbound & Outbound Architecture",
        body: "Building targeted B2B account acquisition pipelines powered by multi-channel relationship nurturing.",
      },
      {
        title: "Account Stewardship",
        body: "Establishing governance protocols that turn pilot projects into long-term enterprise contracts.",
      },
    ],
    deliverables: [
      "Institutional partnership ecosystem architecture and target mapping",
      "Enterprise proposal templates, commercial matrices, and pitch collateral",
      "Multi-channel B2B lead generation funnels and CRM pipeline setup",
      "Strategic alliance joint go-to-market execution plans",
    ],
    benefits: [
      "Rapid access to high-value enterprise accounts and distribution channels",
      "Higher deal win-rates through structured commercial proposals",
      "Sustainable revenue expansion through recurring partner ecosystems",
      "Accelerated market entry through credible institutional co-delivery",
    ],
    process: [
      {
        step: "01",
        title: "Commercial Assessment",
        body: "Auditing your target customer profile, value proposition, and competitor channel strategies.",
      },
      {
        step: "02",
        title: "Alliance Architecture",
        body: "Developing co-delivery proposals, partnership agreements, and value-sharing models.",
      },
      {
        step: "03",
        title: "Target Outreach",
        body: "Executing executive-level introductions, exploratory workshops, and commercial presentations.",
      },
      {
        step: "04",
        title: "Contract & Scaling",
        body: "Finalizing institutional agreements and operationalizing ongoing partner workflows.",
      },
    ],
    why: [
      "Extensive enterprise network across tech, finance, e-commerce, and healthcare",
      "Rigorous commercial deal engineering focused on margin retention",
      "Holistic approach combining business development with technical delivery",
      "Transparent pipeline analytics and revenue attribution",
    ],
    faq: [
      {
        q: "What types of partnerships does Fredacorpal structure?",
        a: "We structure co-delivery alliances, technology reseller agreements, enterprise channel distribution, and corporate joint ventures.",
      },
      {
        q: "Do you assist with client negotiations and RFP submissions?",
        a: "Yes. Our team actively crafts competitive tender submissions, RFP documentation, and executive deal presentations.",
      },
    ],
    metaTitle: "Business Development & Partnerships | Fredacorpal™",
    metaDescription:
      "Strategic institutional alliances, enterprise account acquisition, B2B commercial pipelines, and structured deal facilitation.",
  },
  {
    slug: "operations-delivery",
    index: "09",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    title: "Operations & Service Delivery",
    short:
      "Cross-department delivery governance, Standard Operating Procedure (SOP) architecture, agile workflows, and SLA quality assurance.",
    to: "/services/operations-delivery",
    ctaLabel: "Explore Operations & Delivery",
    headline: "Precision Operational Delivery & Cross-Functional Governance",
    problem:
      "Rapid business expansion often breeds delivery fragmentation, inconsistent client outcomes, operational waste, and unmonitored SLA breaches.",
    whatWeDo:
      "We design standard operating frameworks, coordinate cross-functional delivery squads, implement rigorous quality assurance gates, and enforce enterprise-grade SLAs.",
    methodology: [
      {
        title: "SOP Architecture",
        body: "Codifying end-to-end delivery processes into unambiguous standard operating procedures and runbooks.",
      },
      {
        title: "Cross-Functional Coordination",
        body: "Synchronizing project schedules, capacity allocation, and milestone dependencies across departments.",
      },
      {
        title: "SLA & QA Governance",
        body: "Implementing automated telemetry, quality scorecards, and proactive escalation matrices.",
      },
      {
        title: "Capacity & Workforce Planning",
        body: "Forecasting operational workload to balance team capacity and guarantee on-time delivery.",
      },
    ],
    deliverables: [
      "Standard Operating Procedure (SOP) repository and process runbooks",
      "Cross-functional delivery dashboard and SLA tracking system",
      "Quality assurance scorecards and audit framework",
      "Resource allocation and distributed capacity forecasting models",
    ],
    benefits: [
      "Consistent, predictable delivery quality across all client engagements",
      "Zero-defect operational culture backed by measurable SLA compliance",
      "Reduced operational overhead and streamlined cross-team communication",
      "Scalable delivery foundations that grow smoothly with client demand",
    ],
    process: [
      {
        step: "01",
        title: "Workflow Mapping",
        body: "Analyzing current delivery cycles, handoffs, and quality variance points.",
      },
      {
        step: "02",
        title: "Framework Design",
        body: "Architecting standardized SOPs, quality gates, and SLA thresholds.",
      },
      {
        step: "03",
        title: "System Integration",
        body: "Configuring project tracking, ticketing systems, and telemetry dashboards.",
      },
      {
        step: "04",
        title: "Continuous QA",
        body: "Conducting regular delivery audits and proactive workflow retrospectives.",
      },
    ],
    why: [
      "Proven track record managing complex distributed delivery teams",
      "Enterprise SLA adherence with automated metric verification",
      "Elimination of single points of failure through documented runbooks",
      "Seamless interoperability with client project management tools",
    ],
    faq: [
      {
        q: "Can this service integrate into our existing Jira / Asana / ClickUp systems?",
        a: "Yes. We configure and standardize workflows directly inside your current collaboration and issue-tracking platforms.",
      },
      {
        q: "How do you guarantee quality across distributed teams?",
        a: "Every deliverable passes through codified QA checkpoints and peer reviews before client sign-off, backed by real-time SLA metrics.",
      },
    ],
    metaTitle: "Operations & Service Delivery | Fredacorpal™",
    metaDescription:
      "Cross-department delivery governance, Standard Operating Procedure (SOP) architecture, agile workflows, and SLA quality assurance.",
  },
  {
    slug: "talent-solutions",
    index: "10",
    department: "People & Corporate Services",
    departmentSlug: "people-corporate-services",
    title: "Talent Acquisition & Workforce Solutions",
    short:
      "Global specialist talent sourcing, multi-stage vetting, structured onboarding, and distributed workforce infrastructure.",
    to: "/services/talent-solutions",
    ctaLabel: "Explore Talent Solutions",
    headline: "Global Talent Sourcing, Vetting & Workforce Infrastructure",
    problem:
      "Locating, vetting, and retaining elite specialized professionals across distributed geographies is complex, costly, and subject to high failure rates.",
    whatWeDo:
      "We source vetted specialists, conduct rigorous technical and cognitive screenings, manage compliance verification, and deliver seamless onboarding to augment your workforce.",
    methodology: [
      {
        title: "Targeted Global Sourcing",
        body: "Accessing pre-qualified talent networks across North America, Europe, Latin America, and worldwide hubs.",
      },
      {
        title: "Multi-Tier Vetting",
        body: "Administering live practical skills assessments, communication audits, and identity verification.",
      },
      {
        title: "Structured Onboarding",
        body: "Providing customized role ramp-up, tool certification, and integration into client operating standards.",
      },
      {
        title: "Retention & People Ops",
        body: "Managing ongoing talent satisfaction, performance reviews, and operational support.",
      },
    ],
    deliverables: [
      "Pre-vetted specialist candidate dossiers with objective competency ratings",
      "Customized candidate screening rubrics and technical assessment scorecards",
      "Structured role onboarding playbooks and tool access checklists",
      "Comprehensive workforce compliance and identity verification documentation",
    ],
    benefits: [
      "70% reduction in time-to-hire for critical technical and operational roles",
      "Verified quality through practical assessments and identity verification",
      "Zero compliance headaches with standardized international screening",
      "High retention rates supported by structured onboarding and continuous oversight",
    ],
    process: [
      {
        step: "01",
        title: "Role Specification",
        body: "Defining exact technical competencies, communication standards, and timezone overlap requirements.",
      },
      {
        step: "02",
        title: "Screening & Assessment",
        body: "Filtering applicants through background verification, cognitive assessments, and technical tests.",
      },
      {
        step: "03",
        title: "Candidate Matching",
        body: "Presenting top-tier shortlists for final interview and client selection.",
      },
      {
        step: "04",
        title: "Onboarding & Integration",
        body: "Facilitating setup, equipment verification, and initial sprint orientation.",
      },
    ],
    why: [
      "Specialized in high-performing distributed and remote talent",
      "Complete identity and background verification before placement",
      "Seamless replacement guarantee if candidate does not meet expectations",
      "Transparent fee structure with zero hidden agency markups",
    ],
    faq: [
      {
        q: "What roles can Fredacorpal source and place?",
        a: "We source across all our organizational domains: technical engineers, customer care specialists, SEO & paid media managers, financial analysts, and project managers.",
      },
      {
        q: "How fast can you place a qualified specialist?",
        a: "From initial specification to candidate placement typically takes 5 to 10 business days for vetted pipeline roles.",
      },
    ],
    metaTitle: "Talent Acquisition & Workforce Solutions | Fredacorpal™",
    metaDescription:
      "Global specialist talent sourcing, multi-stage vetting, structured onboarding, and distributed workforce infrastructure.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export type Department = {
  index: string;
  slug: string;
  name: string;
  purpose: string;
  status: "active" | "organizational_capability";
  statusBadge: string;
  activeServiceSlugs: string[];
  openCareerSlugs: string[];
  capabilities: string[];
  pipelineRoles: string[];
  regulatoryNotice?: string;
  notice?: string;
};

export const departments: Department[] = [
  {
    index: "01",
    slug: "digital-growth-marketing",
    name: "Digital Growth & Marketing",
    purpose:
      "Drive client visibility, audience growth, acquisition and digital market performance.",
    status: "active",
    statusBadge: "Active Operations & Practice",
    activeServiceSlugs: ["seo", "social-media", "paid-media"],
    openCareerSlugs: [
      "seo-expert",
      "social-media-manager",
      "paid-media-specialist",
      "performance-marketing-specialist",
      "content-strategist",
      "growth-marketing-specialist",
      "community-manager",
      "digital-marketing-analyst",
      "ppc-specialist",
      "cro-specialist",
    ],
    capabilities: [
      "Technical SEO, crawl architecture & structured data",
      "Multi-platform social infrastructure & audience scaling",
      "Paid ads, media acquisition & conversion rate optimization",
      "Content strategy & algorithmic search demand engineering",
    ],
    pipelineRoles: [],
  },
  {
    index: "02",
    slug: "client-experience-support",
    name: "Client Experience & Support",
    purpose: "Deliver managed customer-care, support and client-experience operations.",
    status: "active",
    statusBadge: "Active Operations & Practice",
    activeServiceSlugs: ["customer-support"],
    openCareerSlugs: [
      "customer-care",
      "customer-support-specialist",
      "customer-success-specialist",
      "customer-experience-specialist",
      "live-chat-support-agent",
      "technical-support-specialist",
      "customer-support-team-lead",
      "customer-support-quality-analyst",
    ],
    capabilities: [
      "Managed remote customer-care & helpdesk operations",
      "Omnichannel ticketing, live chat & escalation frameworks",
      "SLA monitoring, quality assurance & agent certification",
      "Client satisfaction tracking & continuous service improvement",
    ],
    pipelineRoles: [],
  },
  {
    index: "03",
    slug: "technology-digital-solutions",
    name: "Technology & Digital Solutions",
    purpose:
      "Deliver technical infrastructure, software, automation, integrations and digital implementation.",
    status: "active",
    statusBadge: "Active Operations & Practice",
    activeServiceSlugs: ["technical-solutions"],
    openCareerSlugs: [
      "technical-solutions-specialist",
      "web-developer",
      "frontend-developer",
      "backend-developer",
      "full-stack-developer",
      "software-engineer",
      "automation-specialist",
      "systems-integration-specialist",
      "devops-specialist",
      "cloud-solutions-specialist",
      "qa-test-analyst",
      "technical-project-manager",
    ],
    capabilities: [
      "Enterprise performance engineering & Core Web Vitals optimization",
      "Platform integrations, API development & middleware architecture",
      "Business workflow automation & script orchestration",
      "Platform hardening, analytics instrumentation & server-side tracking",
    ],
    pipelineRoles: [],
  },
  {
    index: "04",
    slug: "financial-advisory-management",
    name: "Financial Advisory & Management",
    purpose:
      "Provide financial planning, governance, analysis and operational financial oversight.",
    status: "active",
    statusBadge: "Active Operations & Practice",
    activeServiceSlugs: ["financial-advisory"],
    openCareerSlugs: [
      "financial-analyst",
      "financial-advisor",
      "financial-planning-specialist",
      "management-accountant",
      "financial-controller",
      "business-finance-analyst",
      "financial-operations-specialist",
      "risk-compliance-analyst",
    ],
    capabilities: [
      "Capital allocation, liquidity management & working capital optimization",
      "Dynamic rolling 13-week & multi-year financial forecasting",
      "Internal financial controls, risk matrices & governance integration",
      "Executive dashboards & board-ready financial reporting packs",
    ],
    pipelineRoles: [],
    regulatoryNotice:
      "Important: Fredacorpal™ provides strategic financial management, operational modeling, and governance advisory. We do not provide unauthorized or regulated retail investment advisory services. All engagements adhere strictly to applicable corporate compliance and jurisdictional regulatory guidelines.",
  },
  {
    index: "05",
    slug: "business-strategy-consulting",
    name: "Business Strategy & Consulting",
    purpose:
      "Provide strategic planning, transformation, process improvement and business advisory.",
    status: "active",
    statusBadge: "Active Operations & Practice",
    activeServiceSlugs: ["strategy-consulting"],
    openCareerSlugs: [
      "business-analyst",
      "strategy-consultant",
      "management-consultant",
      "digital-transformation-consultant",
      "process-improvement-specialist",
      "business-intelligence-analyst",
      "strategy-analyst",
    ],
    capabilities: [
      "Enterprise corporate strategy & commercial roadmapping",
      "Organizational transformation & change management frameworks",
      "Business process re-engineering (BPR) & workflow modernization",
      "Strategic market intelligence & competitive positioning analytics",
    ],
    pipelineRoles: [],
  },
  {
    index: "06",
    slug: "business-development-partnerships",
    name: "Business Development & Partnerships",
    purpose:
      "Drive client acquisition, strategic partnerships, account development and corporate relationships.",
    status: "active",
    statusBadge: "Active Operations & Practice",
    activeServiceSlugs: ["business-development"],
    openCareerSlugs: [
      "business-development-executive",
      "business-development-specialist",
      "sales-executive",
      "partnerships-manager",
      "account-executive",
      "account-manager",
      "client-relationship-manager",
      "lead-generation-specialist",
      "proposal-tender-specialist",
      "market-research-analyst",
    ],
    capabilities: [
      "Strategic partner ecosystems, joint ventures & institutional alliances",
      "Enterprise account expansion & client relationship stewardship",
      "Inbound & outbound commercial acquisition architecture",
      "Proposal development, competitive tenders & commercial deal structuring",
    ],
    pipelineRoles: [],
  },
  {
    index: "07",
    slug: "operations-service-delivery",
    name: "Operations & Service Delivery",
    purpose: "Coordinate delivery operations, workflows, projects, workforce and quality.",
    status: "active",
    statusBadge: "Active Operations & Practice",
    activeServiceSlugs: ["operations-delivery"],
    openCareerSlugs: [
      "operations-manager",
      "operations-coordinator",
      "service-delivery-manager",
      "project-manager",
      "project-coordinator",
      "program-manager",
      "quality-assurance-specialist",
      "workforce-coordinator",
      "process-analyst",
      "operations-analyst",
    ],
    capabilities: [
      "Cross-department service delivery governance & SLA compliance",
      "Global distributed workforce scheduling & capacity planning",
      "Standard Operating Procedure (SOP) design & rigorous QA frameworks",
      "Agile project management, resource allocation & milestone tracking",
    ],
    pipelineRoles: [],
  },
  {
    index: "08",
    slug: "people-corporate-services",
    name: "People & Corporate Services",
    purpose:
      "Provide global talent acquisition, candidate vetting, structured onboarding, and workforce infrastructure.",
    status: "active",
    statusBadge: "Active Operations & Practice",
    activeServiceSlugs: ["talent-solutions"],
    openCareerSlugs: [
      "human-resources-specialist",
      "recruitment-specialist",
      "talent-acquisition-specialist",
      "people-operations-coordinator",
      "training-development-specialist",
      "hr-operations-specialist",
      "compliance-officer",
    ],
    capabilities: [
      "Global talent acquisition, skills assessment & vetting pipelines",
      "Structured specialist onboarding, training & enterprise brand certification",
      "People operations, culture, retention & performance evaluation systems",
      "Corporate governance, compliance assurance & legal administrative operations",
    ],
    pipelineRoles: [],
  },
];

export const getDepartment = (slug: string) => departments.find((d) => d.slug === slug);
export const getServicesByDepartment = (deptSlug: string) =>
  services.filter((s) => s.departmentSlug === deptSlug);
export const getCareersByDepartment = (deptSlug: string) =>
  careers.filter((c) => c.departmentSlug === deptSlug);

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
  id: string;
  slug: string;
  title: string;
  department: string;
  departmentSlug: string;
  service?: string;
  serviceSlug?: string;
  to: string;
  type: string;
  employmentType: string;
  status: "open" | "pipeline" | "closed";
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
    id: "seo-expert",
    slug: "seo-expert",
    title: "SEO Expert",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/careers/seo-expert",
    type: "Contract Basis",
    employmentType: "Contract Basis Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Deliver technical SEO for enterprise infrastructure: code-level optimization, structural audits and visibility mapping.",
    responsibilities: [
      "Technical SEO audits",
      "Crawl optimization",
      "Log file analysis",
      "Core Web Vitals remediation",
    ],
    skills: [
      "Deep technical SEO expertise",
      "HTML, JavaScript & server responses",
      "Log file & CWV analysis",
      "Technical documentation",
    ],
    preferred: [
      "Multi-market site experience",
      "Schema.org implementation",
      "Agency delivery background",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "SEO Expert — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Deliver technical SEO for enterprise infrastructure: code-level optimization, structural audits and visibility mapping.",
  },
  {
    id: "social-media-manager",
    slug: "social-media-manager",
    title: "Social Media Manager",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/careers/social-media-manager",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Own multi-platform content operations for enterprise clients: scheduling, asset distribution, engagement and audience growth.",
    responsibilities: [
      "Content scheduling & distribution",
      "Multi-platform brand management",
      "Audience engagement protocols",
      "Performance reporting",
    ],
    skills: [
      "Proven multi-platform social management",
      "Editorial judgment & brand voice",
      "Analytics tooling expertise",
      "Data-informed growth tactics",
    ],
    preferred: [
      "Multi-account management experience",
      "Short-form video editing",
      "Paid social familiarity",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Social Media Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Own multi-platform content operations for enterprise clients: scheduling, asset distribution, engagement and audience growth.",
  },
  {
    id: "paid-media-specialist",
    slug: "paid-media-specialist",
    title: "Paid Media Specialist",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Manage high-volume performance advertising across Google Ads, Meta, and programmatic acquisition channels.",
    responsibilities: [
      "Campaign structure & budget pacing",
      "Ad creative performance testing",
      "Conversion tracking & attribution",
      "ROAS optimization",
    ],
    skills: [
      "Proven track record with 6-figure budgets",
      "Deep expertise in Google Ads & Meta Ads",
      "Conversion API & GA4 tracking",
      "Quantitative analytics",
    ],
    preferred: [
      "B2B lead generation experience",
      "Programmatic DSP exposure",
      "A/B landing page testing",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Paid Media Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Manage high-volume performance advertising across Google Ads, Meta, and programmatic acquisition channels.",
  },
  {
    id: "performance-marketing-specialist",
    slug: "performance-marketing-specialist",
    title: "Performance Marketing Specialist",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Drive multi-channel acquisition modeling, CAC reduction, and full-funnel customer journey optimization.",
    responsibilities: [
      "Cross-channel acquisition modeling",
      "Attribution modeling & incrementality",
      "Creative iteration & hook testing",
      "Retention & CAC optimization",
    ],
    skills: [
      "Data-driven performance mindset",
      "Advanced Excel / SQL or BI dashboards",
      "Channel synergy optimization",
      "LTV:CAC ratio mastery",
    ],
    preferred: [
      "SaaS or E-Commerce experience",
      "Customer data platform (CDP) familiarity",
      "Rapid creative deployment",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Performance Marketing Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Drive multi-channel acquisition modeling, CAC reduction, and full-funnel customer journey optimization.",
  },
  {
    id: "content-strategist",
    slug: "content-strategist",
    title: "Content Strategist",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Design research-backed content architectures that capture organic search demand and convert enterprise buyers.",
    responsibilities: [
      "Topical authority mapping",
      "Content gap analysis",
      "Editorial briefing & style enforcement",
      "Search intent alignment",
    ],
    skills: [
      "Exceptional analytical writing",
      "Search intent & entity SEO understanding",
      "Content audit methodology",
      "Editorial calendar leadership",
    ],
    preferred: [
      "B2B technology domain expertise",
      "Whitepaper & case study production",
      "Distribution repurposing frameworks",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Content Strategist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Design research-backed content architectures that capture organic search demand and convert enterprise buyers.",
  },
  {
    id: "growth-marketing-specialist",
    slug: "growth-marketing-specialist",
    title: "Growth Marketing Specialist",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Execute rapid experimentation loops across acquisition, onboarding, referral, and conversion mechanics.",
    responsibilities: [
      "Growth sprint experimentation",
      "Funnel conversion rate optimization",
      "Referral & viral loop mechanics",
      "User onboarding optimization",
    ],
    skills: [
      "Hypothesis-driven testing mindset",
      "Analytics & event instrumentation",
      "Product-led growth understanding",
      "Rapid execution ability",
    ],
    preferred: [
      "FinTech or High-Growth Startup background",
      "Mixpanel/Amplitude experience",
      "No-code automation tooling",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Growth Marketing Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Execute rapid experimentation loops across acquisition, onboarding, referral, and conversion mechanics.",
  },
  {
    id: "community-manager",
    slug: "community-manager",
    title: "Community Manager",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Build and nurture engaged brand communities across LinkedIn, Discord, Twitter/X, and industry forums.",
    responsibilities: [
      "Daily community moderation & dialogue",
      "Brand ambassador coordination",
      "Discussion prompts & thought leadership",
      "Sentiment tracking & feedback synthesis",
    ],
    skills: [
      "Impeccable communication tone",
      "Experience running tech/B2B communities",
      "Conflict de-escalation skills",
      "Event and AMA coordination",
    ],
    preferred: [
      "Executive ghostwriting familiarity",
      "Discord server architecture",
      "Webinar / live stream hosting",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Community Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Build and nurture engaged brand communities across LinkedIn, Discord, Twitter/X, and industry forums.",
  },
  {
    id: "digital-marketing-analyst",
    slug: "digital-marketing-analyst",
    title: "Digital Marketing Analyst",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Instrument multi-touch attribution, data hygiene, and executive performance dashboards across marketing initiatives.",
    responsibilities: [
      "Marketing attribution dashboard design",
      "Tag management & data hygiene",
      "Campaign ROI & cohort analysis",
      "Executive insight reporting",
    ],
    skills: [
      "Advanced Google Analytics 4 & GTM",
      "Looker Studio, Tableau, or Power BI",
      "Statistical significance evaluation",
      "SQL & data transformation",
    ],
    preferred: [
      "Server-side GTM implementation",
      "BigQuery marketing data warehouse",
      "Python for marketing data",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Digital Marketing Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Instrument multi-touch attribution, data hygiene, and executive performance dashboards across marketing initiatives.",
  },
  {
    id: "ppc-specialist",
    slug: "ppc-specialist",
    title: "PPC Specialist",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Architect and scale high-intent paid search campaigns across Google Search, Bing, and commercial intent networks.",
    responsibilities: [
      "Search query analysis & negative keyword lists",
      "Quality Score & auction dynamics optimization",
      "Ad copy testing & extension management",
      "Bid automation & Smart Bidding oversight",
    ],
    skills: [
      "Deep Google Ads search expertise",
      "High-intent keyword harvesting",
      "Landing page relevance alignment",
      "Search console & auction insights",
    ],
    preferred: [
      "Local service ads exposure",
      "Multi-lingual campaign structure",
      "Scripts & automation for PPC",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "PPC Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Architect and scale high-intent paid search campaigns across Google Search, Bing, and commercial intent networks.",
  },
  {
    id: "cro-specialist",
    slug: "cro-specialist",
    title: "Conversion Rate Optimization Specialist",
    department: "Digital Growth & Marketing",
    departmentSlug: "digital-growth-marketing",
    service: "Search Engine Optimization",
    serviceSlug: "seo",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Optimize enterprise landing pages and conversion funnels through rigorous A/B testing and behavioral analytics.",
    responsibilities: [
      "Quantitative funnel drop-off analysis",
      "Heatmap & user session recording review",
      "A/B test design & statistical validation",
      "UX copy & layout recommendations",
    ],
    skills: [
      "Expertise in Optimizely, VWO, or PostHog",
      "Behavioral psychology & UX principles",
      "Statistical analysis of test outcomes",
      "HTML/CSS prototyping for tests",
    ],
    preferred: [
      "Enterprise B2B lead gen funnels",
      "Checkout flow optimization",
      "Form UX friction elimination",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Conversion Rate Optimization Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Optimize enterprise landing pages and conversion funnels through rigorous A/B testing and behavioral analytics.",
  },
  {
    id: "customer-care",
    slug: "customer-care",
    title: "Customer Care Assistant",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
    service: "Customer Support Deployment",
    serviceSlug: "customer-support",
    to: "/careers/customer-care",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
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
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Customer Care Assistant — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Support enterprise clients across ticketing, live chat and cross-channel communication inside a managed, quality-assured support operation.",
  },
  {
    id: "customer-support-specialist",
    slug: "customer-support-specialist",
    title: "Customer Support Specialist",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
    service: "Customer Support Deployment",
    serviceSlug: "customer-support",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Deliver frontline technical and operational customer support with rapid resolution and exceptional empathy.",
    responsibilities: [
      "Omnichannel ticket triage and resolution",
      "Knowledge base article authorship",
      "Customer issue escalation handling",
      "CSAT and first-response SLA targets",
    ],
    skills: [
      "Zendesk, Freshdesk, or Intercom mastery",
      "Strong analytical troubleshooting",
      "High EQ and professional empathy",
      "Clear technical explanation skills",
    ],
    preferred: [
      "SaaS B2B support background",
      "Tier 2 escalation experience",
      "Video call screen-share troubleshooting",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Customer Support Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Deliver frontline technical and operational customer support with rapid resolution and exceptional empathy.",
  },
  {
    id: "customer-success-specialist",
    slug: "customer-success-specialist",
    title: "Customer Success Specialist",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
    service: "Customer Support Deployment",
    serviceSlug: "customer-support",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Drive customer adoption, proactive health check-ins, product onboarding, and account retention.",
    responsibilities: [
      "Client onboarding walkthroughs",
      "Account health monitoring & risk flagging",
      "QBR preparation & adoption metrics",
      "Renewal & expansion advocacy",
    ],
    skills: [
      "Proven customer success experience",
      "Strong relationship building & presentation",
      "Product adoption telemetry analysis",
      "Proactive problem identification",
    ],
    preferred: [
      "Enterprise SaaS account exposure",
      "Gainsight or Totango familiarity",
      "Contract renewal negotiation",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Customer Success Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Drive customer adoption, proactive health check-ins, product onboarding, and account retention.",
  },
  {
    id: "customer-experience-specialist",
    slug: "customer-experience-specialist",
    title: "Customer Experience Specialist",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
    service: "Customer Support Deployment",
    serviceSlug: "customer-support",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Analyze user journey friction, survey feedback, and support telemetry to redesign client touchpoints.",
    responsibilities: [
      "NPS, CSAT & CES survey analysis",
      "Customer journey mapping",
      "Root cause failure analysis",
      "Cross-functional feedback advocacy",
    ],
    skills: [
      "CX methodology & voice-of-customer",
      "Data synthesis across qualitative/quantitative",
      "Cross-functional communication",
      "UX empathy & process design",
    ],
    preferred: [
      "Journey mapping software proficiency",
      "Service design workshop facilitation",
      "Executive CX presentation skills",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Customer Experience Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Analyze user journey friction, survey feedback, and support telemetry to redesign client touchpoints.",
  },
  {
    id: "live-chat-support-agent",
    slug: "live-chat-support-agent",
    title: "Live Chat Support Agent",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
    service: "Customer Support Deployment",
    serviceSlug: "customer-support",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Provide real-time, high-accuracy conversational support and conversion assistance across digital channels.",
    responsibilities: [
      "Real-time chat triage & resolution",
      "Simultaneous chat concurrency handling",
      "Pre-sales product inquiry assistance",
      "Knowledge base quick-reference routing",
    ],
    skills: [
      "Fast typing speed (60+ WPM) & accuracy",
      "Crisp, concise written English",
      "Rapid problem comprehension",
      "Positive and calm demeanor under volume",
    ],
    preferred: [
      "LiveChat, Drift, or Intercom experience",
      "E-commerce order assistance",
      "B2B qualification routing",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Live Chat Support Agent — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Provide real-time, high-accuracy conversational support and conversion assistance across digital channels.",
  },
  {
    id: "technical-support-specialist",
    slug: "technical-support-specialist",
    title: "Technical Support Specialist",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
    service: "Customer Support Deployment",
    serviceSlug: "customer-support",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Resolve complex product bugs, API configuration challenges, and data sync issues for enterprise clients.",
    responsibilities: [
      "Log inspection & error replication",
      "API endpoint testing & webhook debugging",
      "Bug ticket documentation for engineering",
      "Tier 2 and 3 customer escalation calls",
    ],
    skills: [
      "Understanding of REST APIs & JSON",
      "Browser dev tools & network tab inspection",
      "Strong diagnostic logic & persistence",
      "Clear bug report drafting",
    ],
    preferred: [
      "Postman or curl familiarity",
      "SQL database query basics",
      "Webhook & integration troubleshooting",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Technical Support Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Resolve complex product bugs, API configuration challenges, and data sync issues for enterprise clients.",
  },
  {
    id: "customer-support-team-lead",
    slug: "customer-support-team-lead",
    title: "Customer Support Team Lead",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
    service: "Customer Support Deployment",
    serviceSlug: "customer-support",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Lead, mentor, and schedule a dedicated squad of remote support specialists while upholding SLA commitments.",
    responsibilities: [
      "Shift scheduling & queue load balancing",
      "Daily ticket review & real-time mentoring",
      "Escalation point for high-stakes accounts",
      "Weekly performance 1-on-1s and coaching",
    ],
    skills: [
      "Prior leadership in remote support teams",
      "SLA monitoring & metric accountability",
      "Empathetic leadership & team empowerment",
      "Conflict resolution & de-escalation",
    ],
    preferred: [
      "COPC or HDI certification",
      "Workforce management software experience",
      "Cross-timezone team leadership",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Customer Support Team Lead — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Lead, mentor, and schedule a dedicated squad of remote support specialists while upholding SLA commitments.",
  },
  {
    id: "customer-support-quality-analyst",
    slug: "customer-support-quality-analyst",
    title: "Customer Support Quality Analyst",
    department: "Client Experience & Support",
    departmentSlug: "client-experience-support",
    service: "Customer Support Deployment",
    serviceSlug: "customer-support",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Audit customer interactions, evaluate adherence to brand standards, and drive continuous support excellence.",
    responsibilities: [
      "Weekly interaction auditing against rubrics",
      "Calibration sessions with team leads",
      "Identification of training gaps & coaching needs",
      "Quality score trend reporting",
    ],
    skills: [
      "High attention to detail & fairness",
      "Deep knowledge of support best practices",
      "Constructive feedback delivery",
      "Quality management software proficiency",
    ],
    preferred: [
      "MaestroQA or Klaus experience",
      "Training material development",
      "Statistical sample sizing",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Customer Support Quality Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Audit customer interactions, evaluate adherence to brand standards, and drive continuous support excellence.",
  },
  {
    id: "technical-solutions-specialist",
    slug: "technical-solutions-specialist",
    title: "Technical Solutions Specialist",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Bridge client requirements with scalable software architectures, integrations, and automation workflows.",
    responsibilities: [
      "Solution architecture design & documentation",
      "Client technical discovery workshops",
      "Third-party platform integrations",
      "Technical feasibility validation",
    ],
    skills: [
      "Broad understanding of cloud & web stacks",
      "Strong client-facing technical communication",
      "API architecture & data modeling",
      "Agile project decomposition",
    ],
    preferred: [
      "Enterprise integration experience",
      "Cloud architect certification",
      "Pre-sales technical engineering",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Technical Solutions Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Bridge client requirements with scalable software architectures, integrations, and automation workflows.",
  },
  {
    id: "web-developer",
    slug: "web-developer",
    title: "Web Developer",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Build and maintain high-performance, responsive web applications with semantic HTML, modern CSS, and clean JavaScript.",
    responsibilities: [
      "Responsive web page development",
      "Cross-browser & mobile optimization",
      "Performance tuning & image optimization",
      "CMS and headless integration",
    ],
    skills: [
      "Proficiency in HTML5, CSS3, modern JS/TS",
      "Responsive design & mobile-first development",
      "SEO & accessibility (a11y) awareness",
      "Version control with Git",
    ],
    preferred: [
      "Tailwind CSS & CSS Modules",
      "Headless CMS (Sanity/Strapi/Contentful)",
      "Vite or Webpack build tooling",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Web Developer — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Build and maintain high-performance, responsive web applications with semantic HTML, modern CSS, and clean JavaScript.",
  },
  {
    id: "frontend-developer",
    slug: "frontend-developer",
    title: "Frontend Developer",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Architect polished, interactive user interfaces using React, Next.js / TanStack, TypeScript, and modern component systems.",
    responsibilities: [
      "Component library development",
      "State management & data fetching hooks",
      "Micro-interactions & animation tuning",
      "Client-side performance profiling",
    ],
    skills: [
      "Deep React & TypeScript expertise",
      "Modern CSS (Tailwind, Radix, shadcn)",
      "Core Web Vitals & bundle optimization",
      "REST & GraphQL consumption",
    ],
    preferred: [
      "TanStack Router / Start experience",
      "Design systems leadership",
      "Framer Motion or canvas animations",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Frontend Developer — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Architect polished, interactive user interfaces using React, Next.js / TanStack, TypeScript, and modern component systems.",
  },
  {
    id: "backend-developer",
    slug: "backend-developer",
    title: "Backend Developer",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Engineer resilient server-side architectures, RESTful/GraphQL APIs, database models, and background task queues.",
    responsibilities: [
      "API design, development & versioning",
      "Database schema modeling & indexing",
      "Authentication, RBAC & security hardening",
      "Asynchronous job processing",
    ],
    skills: [
      "Proficiency in Node.js/TypeScript, Python, or Go",
      "PostgreSQL / MySQL relational mastery",
      "Redis caching & message queues",
      "Clean architecture principles",
    ],
    preferred: [
      "Docker & containerization",
      "Supabase / Firebase serverless architecture",
      "High-concurrency distributed systems",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Backend Developer — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Engineer resilient server-side architectures, RESTful/GraphQL APIs, database models, and background task queues.",
  },
  {
    id: "full-stack-developer",
    slug: "full-stack-developer",
    title: "Full-Stack Developer",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Deliver complete end-to-end features spanning database architecture, server functions, and modern frontend interfaces.",
    responsibilities: [
      "End-to-end feature implementation",
      "Database migrations & ORM modeling",
      "Secure API endpoints & UI integration",
      "Automated unit & integration testing",
    ],
    skills: [
      "Full-stack TypeScript (Node & React)",
      "Database design & SQL optimization",
      "Modern web performance standards",
      "Pragmatic problem-solving",
    ],
    preferred: [
      "Next.js / TanStack Start full-stack apps",
      "Cloud deployment (AWS/Cloudflare/Vercel)",
      "CI/CD pipeline configuration",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Full-Stack Developer — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Deliver complete end-to-end features spanning database architecture, server functions, and modern frontend interfaces.",
  },
  {
    id: "software-engineer",
    slug: "software-engineer",
    title: "Software Engineer",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Design, build, and maintain mission-critical software systems following strict engineering standards and testing rigor.",
    responsibilities: [
      "System architecture & microservice design",
      "Robust unit, integration & regression tests",
      "Code reviews & architectural RFCs",
      "Production incident debugging",
    ],
    skills: [
      "Strong computer science fundamentals",
      "Clean code & SOLID principles",
      "Proficiency in modern typed languages",
      "Test-driven development (TDD)",
    ],
    preferred: [
      "Distributed systems experience",
      "Performance profiling & memory leak fixes",
      "Open-source contributions",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Software Engineer — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Design, build, and maintain mission-critical software systems following strict engineering standards and testing rigor.",
  },
  {
    id: "automation-specialist",
    slug: "automation-specialist",
    title: "Automation Specialist",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Design automated business workflows, data synchronizations, and script orchestrations that eliminate manual overhead.",
    responsibilities: [
      "Workflow automation architecture",
      "Webhook handling & data transformation",
      "RPA & API script orchestration",
      "Monitoring & error alert setup",
    ],
    skills: [
      "Expertise with Make, n8n, or Zapier",
      "Python / TypeScript scripting for APIs",
      "JSON data manipulation & regex",
      "Error handling & retry logic",
    ],
    preferred: [
      "CRM & ERP automation experience",
      "Custom webhook servers",
      "Headless browser automation (Puppeteer/Playwright)",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Automation Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Design automated business workflows, data synchronizations, and script orchestrations that eliminate manual overhead.",
  },
  {
    id: "systems-integration-specialist",
    slug: "systems-integration-specialist",
    title: "Systems Integration Specialist",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Connect disparate enterprise enterprise platforms (CRMs, ERPs, billing, marketing) into unified, real-time data pipelines.",
    responsibilities: [
      "Middleware & integration architecture",
      "Data schema mapping & validation",
      "Bi-directional sync orchestration",
      "Integration security & token management",
    ],
    skills: [
      "Deep understanding of enterprise APIs",
      "Data pipeline design & ETL concepts",
      "Token management & OAuth2 flows",
      "Data reconciliation & deduplication",
    ],
    preferred: [
      "Salesforce / HubSpot integration",
      "Segment / Reverse ETL tooling",
      "Kafka or message bus exposure",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Systems Integration Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Connect disparate enterprise enterprise platforms (CRMs, ERPs, billing, marketing) into unified, real-time data pipelines.",
  },
  {
    id: "devops-specialist",
    slug: "devops-specialist",
    title: "DevOps Specialist",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Maintain cloud infrastructure, automate CI/CD deployments, and ensure high availability, security, and observability.",
    responsibilities: [
      "CI/CD pipeline construction & optimization",
      "Infrastructure as Code (Terraform/CloudFormation)",
      "Cloud security & IAM least privilege",
      "System monitoring, alerting & logging",
    ],
    skills: [
      "AWS, GCP, or Cloudflare architecture",
      "Docker containerization & orchestration",
      "Linux systems administration",
      "Observability (Datadog/Prometheus/Sentry)",
    ],
    preferred: [
      "Kubernetes management",
      "Zero-downtime deployment strategies",
      "SOC 2 infrastructure compliance",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "DevOps Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Maintain cloud infrastructure, automate CI/CD deployments, and ensure high availability, security, and observability.",
  },
  {
    id: "cloud-solutions-specialist",
    slug: "cloud-solutions-specialist",
    title: "Cloud Solutions Specialist",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Architect and optimize scalable cloud environments, serverless computing, and distributed storage systems.",
    responsibilities: [
      "Cloud workload architecture & migration",
      "Serverless function optimization",
      "Cost optimization & resource rightsizing",
      "Disaster recovery & backup architectures",
    ],
    skills: [
      "Cloud platform certifications (AWS/GCP/Azure)",
      "Serverless frameworks & edge computing",
      "Cloud networking & VPC configurations",
      "Cloud economics & FinOps",
    ],
    preferred: [
      "Edge runtime architectures (Cloudflare Workers)",
      "Multi-region deployments",
      "Enterprise cloud migration",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Cloud Solutions Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Architect and optimize scalable cloud environments, serverless computing, and distributed storage systems.",
  },
  {
    id: "qa-test-analyst",
    slug: "qa-test-analyst",
    title: "QA/Test Analyst",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Ensure software reliability, verify complex user flows, and automate functional and regression testing suites.",
    responsibilities: [
      "Test plan & scenario authoring",
      "Automated end-to-end testing (Playwright/Cypress)",
      "Cross-browser & mobile viewport testing",
      "Regression testing before production deploys",
    ],
    skills: [
      "Strong attention to edge cases",
      "Proficiency in Playwright or Cypress",
      "API testing with Postman",
      "Clear, reproducible bug reporting",
    ],
    preferred: [
      "Performance testing (k6 / Lighthouse)",
      "Accessibility (a11y) audit tooling",
      "CI/CD test automation integration",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "QA/Test Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Ensure software reliability, verify complex user flows, and automate functional and regression testing suites.",
  },
  {
    id: "technical-project-manager",
    slug: "technical-project-manager",
    title: "Technical Project Manager",
    department: "Technology & Digital Solutions",
    departmentSlug: "technology-digital-solutions",
    service: "Technical Solutions",
    serviceSlug: "technical-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Manage technical deliverables, sprint backlogs, dependency paths, and engineering milestones for enterprise clients.",
    responsibilities: [
      "Sprint planning & backlog grooming",
      "Technical milestone tracking & burndown",
      "Cross-team dependency resolution",
      "Client milestone reporting & demos",
    ],
    skills: [
      "Deep understanding of software development cycles",
      "Agile, Scrum, and Kanban methodologies",
      "Outstanding technical articulation",
      "Risk anticipation & mitigation",
    ],
    preferred: [
      "PMP or PMI-ACP certification",
      "Jira / Linear administration",
      "Experience managing remote squads",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Technical Project Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Manage technical deliverables, sprint backlogs, dependency paths, and engineering milestones for enterprise clients.",
  },
  {
    id: "financial-analyst",
    slug: "financial-analyst",
    title: "Financial Analyst",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    service: "Strategic Financial Advisory & Management",
    serviceSlug: "financial-advisory",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Develop quantitative financial models, conduct variance analyses, and evaluate operational revenue streams.",
    responsibilities: [
      "Dynamic financial model construction",
      "Budget vs. actual variance analysis",
      "Unit economics & margin evaluation",
      "Executive presentation decks",
    ],
    skills: [
      "Advanced financial modeling in Excel/Sheets",
      "Strong grasp of GAAP and financial statements",
      "Quantitative analytical precision",
      "Clear communication of financial data",
    ],
    preferred: [
      "SQL for financial data extraction",
      "Experience in high-growth companies",
      "CFA / CPA candidate",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Financial Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Develop quantitative financial models, conduct variance analyses, and evaluate operational revenue streams.",
  },
  {
    id: "financial-advisor",
    slug: "financial-advisor",
    title: "Financial Advisor",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    service: "Strategic Financial Advisory & Management",
    serviceSlug: "financial-advisory",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Provide strategic financial planning, capital efficiency guidance, and operational liquidity management to enterprise clients.",
    responsibilities: [
      "Capital allocation strategies",
      "Working capital & cash runway optimization",
      "Scenario planning & sensitivity modeling",
      "Board & investor reporting packs",
    ],
    skills: [
      "Corporate financial strategy experience",
      "Executive presence & presentation skills",
      "Strong analytical & strategic perspective",
      "Compliance & governance rigor",
    ],
    preferred: [
      "Investment banking or corporate development background",
      "MBA or advanced finance degree",
      "Private equity portfolio support",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Financial Advisor — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Provide strategic financial planning, capital efficiency guidance, and operational liquidity management to enterprise clients.",
  },
  {
    id: "financial-planning-specialist",
    slug: "financial-planning-specialist",
    title: "Financial Planning Specialist",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    service: "Strategic Financial Advisory & Management",
    serviceSlug: "financial-advisory",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Architect rolling 13-week cash forecasts, multi-year operating plans, and departmental headcount budgets.",
    responsibilities: [
      "Rolling 13-week cash flow forecasts",
      "Annual and multi-year budgeting cycles",
      "Departmental budget allocation & tracking",
      "Scenario modeling for hiring and capital spend",
    ],
    skills: [
      "Deep FP&A expertise",
      "Three-statement financial modeling",
      "Hyperion, Adaptive Insights, or modern FP&A software",
      "Proactive variance investigation",
    ],
    preferred: [
      "Venture-backed company FP&A",
      "SaaS metrics (ARR, CAC, LTV, Churn)",
      "Automated budget integration",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Financial Planning Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Architect rolling 13-week cash forecasts, multi-year operating plans, and departmental headcount budgets.",
  },
  {
    id: "management-accountant",
    slug: "management-accountant",
    title: "Management Accountant",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    service: "Strategic Financial Advisory & Management",
    serviceSlug: "financial-advisory",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Oversee cost accounting, internal management reporting, and operational efficiency analysis across business units.",
    responsibilities: [
      "Cost center allocation & overhead analysis",
      "Monthly management accounts preparation",
      "KPI scorecard generation",
      "Internal control adherence monitoring",
    ],
    skills: [
      "CIMA, CMA, or CPA qualification",
      "Strong cost accounting background",
      "ERP software mastery (NetSuite/QuickBooks)",
      "Process improvement orientation",
    ],
    preferred: [
      "Inventory & supply chain accounting",
      "Multi-currency consolidation",
      "Audit readiness preparation",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Management Accountant — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Oversee cost accounting, internal management reporting, and operational efficiency analysis across business units.",
  },
  {
    id: "financial-controller",
    slug: "financial-controller",
    title: "Financial Controller",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    service: "Strategic Financial Advisory & Management",
    serviceSlug: "financial-advisory",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Lead accounting operations, financial close integrity, audit preparation, and corporate compliance controls.",
    responsibilities: [
      "Month-end and year-end close oversight",
      "Financial governance & internal control matrices",
      "Audit coordination & tax compliance",
      "Balance sheet integrity and reconciliation",
    ],
    skills: [
      "Proven controller or senior accounting manager experience",
      "CPA or chartered accountant status",
      "Comprehensive knowledge of regulatory standards",
      "Strong team leadership",
    ],
    preferred: [
      "Big 4 accounting firm foundation",
      "NetSuite enterprise implementation",
      "SOC compliance oversight",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Financial Controller — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Lead accounting operations, financial close integrity, audit preparation, and corporate compliance controls.",
  },
  {
    id: "business-finance-analyst",
    slug: "business-finance-analyst",
    title: "Business Finance Analyst",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    service: "Strategic Financial Advisory & Management",
    serviceSlug: "financial-advisory",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Partner with sales and operations to evaluate contract pricing, customer lifetime value, and deal margins.",
    responsibilities: [
      "Commercial deal pricing modeling",
      "Customer profitability & cohort analysis",
      "Sales incentive & commission modeling",
      "Contract terms review for financial impact",
    ],
    skills: [
      "Commercial acumen & pricing strategy",
      "Advanced analytical modeling",
      "Cross-functional collaboration with sales/marketing",
      "Clear executive summaries",
    ],
    preferred: [
      "B2B SaaS pricing models",
      "Enterprise RFP financial responses",
      "CRM revenue tracking",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Business Finance Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Partner with sales and operations to evaluate contract pricing, customer lifetime value, and deal margins.",
  },
  {
    id: "financial-operations-specialist",
    slug: "financial-operations-specialist",
    title: "Financial Operations Specialist",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    service: "Strategic Financial Advisory & Management",
    serviceSlug: "financial-advisory",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Manage billing cycles, accounts receivable/payable automation, and payment gateway reconciliations.",
    responsibilities: [
      "Billing system automation & management",
      "AR collection workflows & aging reduction",
      "AP verification & payment approvals",
      "Payment gateway reconciliation (Stripe/Wise)",
    ],
    skills: [
      "Meticulous reconciliation skills",
      "Experience with modern billing platforms (Stripe Billing/Chargebee)",
      "Process automation mindset",
      "Vendor & customer communication",
    ],
    preferred: [
      "Global tax (VAT/GST/Sales Tax) familiarity",
      "Treasury & FX reconciliation",
      "Accounting software integrations",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Financial Operations Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Manage billing cycles, accounts receivable/payable automation, and payment gateway reconciliations.",
  },
  {
    id: "risk-compliance-analyst",
    slug: "risk-compliance-analyst",
    title: "Risk & Compliance Analyst",
    department: "Financial Advisory & Management",
    departmentSlug: "financial-advisory-management",
    service: "Strategic Financial Advisory & Management",
    serviceSlug: "financial-advisory",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Identify corporate risk factors, monitor regulatory adherence, and maintain operational compliance frameworks.",
    responsibilities: [
      "Risk matrix creation & annual review",
      "Regulatory compliance tracking across jurisdictions",
      "Internal audit testing of financial controls",
      "Vendor due diligence & KYC reviews",
    ],
    skills: [
      "Strong understanding of corporate compliance & risk frameworks",
      "Analytical diligence & documentation skills",
      "Knowledge of anti-fraud & data governance",
      "High ethical integrity",
    ],
    preferred: [
      "CRISC, CAMS, or compliance certifications",
      "Global financial regulatory knowledge",
      "Policy drafting experience",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Risk & Compliance Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Identify corporate risk factors, monitor regulatory adherence, and maintain operational compliance frameworks.",
  },
  {
    id: "business-analyst",
    slug: "business-analyst",
    title: "Business Analyst",
    department: "Business Strategy & Consulting",
    departmentSlug: "business-strategy-consulting",
    service: "Business Strategy & Consulting",
    serviceSlug: "strategy-consulting",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Deconstruct complex business problems, gather requirements, and formulate quantitative models for operational transformation.",
    responsibilities: [
      "Requirement gathering & stakeholder interviews",
      "Process flow documentation & gap analysis",
      "Data analysis & benchmark reporting",
      "Business case formulation",
    ],
    skills: [
      "Strong structured analytical thinking",
      "Process mapping (BPMN / Lucidchart)",
      "Data analysis with SQL/Excel",
      "Excellent business writing",
    ],
    preferred: [
      "Agile backlog writing",
      "Management consulting background",
      "Financial impact modeling",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Business Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Deconstruct complex business problems, gather requirements, and formulate quantitative models for operational transformation.",
  },
  {
    id: "strategy-consultant",
    slug: "strategy-consultant",
    title: "Strategy Consultant",
    department: "Business Strategy & Consulting",
    departmentSlug: "business-strategy-consulting",
    service: "Business Strategy & Consulting",
    serviceSlug: "strategy-consulting",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Advise executive teams on corporate positioning, commercial strategy, operational scale, and competitive moats.",
    responsibilities: [
      "Enterprise strategic roadmapping",
      "Market entry & competitive positioning strategy",
      "Executive workshop facilitation",
      "Commercial model redesign",
    ],
    skills: [
      "Top-tier consulting or corporate strategy experience",
      "Hypothesis-driven problem solving",
      "Executive presentation & storytelling",
      "Deep business model acumen",
    ],
    preferred: [
      "Experience in tech or professional services",
      "Postgraduate business degree (MBA)",
      "M&A strategy exposure",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Strategy Consultant — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Advise executive teams on corporate positioning, commercial strategy, operational scale, and competitive moats.",
  },
  {
    id: "management-consultant",
    slug: "management-consultant",
    title: "Management Consultant",
    department: "Business Strategy & Consulting",
    departmentSlug: "business-strategy-consulting",
    service: "Business Strategy & Consulting",
    serviceSlug: "strategy-consulting",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Lead organizational transformation programs, operational redesigns, and corporate performance initiatives.",
    responsibilities: [
      "Organizational restructure design",
      "Operational change management leadership",
      "Cost optimization & efficiency programs",
      "Milestone governance & senior stakeholder alignment",
    ],
    skills: [
      "Proven track record in management consulting",
      "Change management frameworks",
      "Structured program management",
      "Influential executive presence",
    ],
    preferred: [
      "Prosci or Lean Six Sigma certification",
      "Private equity portfolio turnaround",
      "Cross-border corporate operations",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Management Consultant — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Lead organizational transformation programs, operational redesigns, and corporate performance initiatives.",
  },
  {
    id: "digital-transformation-consultant",
    slug: "digital-transformation-consultant",
    title: "Digital Transformation Consultant",
    department: "Business Strategy & Consulting",
    departmentSlug: "business-strategy-consulting",
    service: "Business Strategy & Consulting",
    serviceSlug: "strategy-consulting",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Guide legacy organizations through technology adoption, workflow modernization, and digital platform transition.",
    responsibilities: [
      "Digital maturity assessments",
      "Technology roadmap development",
      "Legacy system replacement strategy",
      "Digital culture & adoption workshops",
    ],
    skills: [
      "Deep knowledge of modern enterprise tech stacks",
      "Balance of technical and business acumen",
      "Change management in technology rollouts",
      "Executive advisory capability",
    ],
    preferred: [
      "Cloud migration advisory",
      "AI/Automation adoption roadmaps",
      "Enterprise architecture alignment",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Digital Transformation Consultant — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Guide legacy organizations through technology adoption, workflow modernization, and digital platform transition.",
  },
  {
    id: "process-improvement-specialist",
    slug: "process-improvement-specialist",
    title: "Process Improvement Specialist",
    department: "Business Strategy & Consulting",
    departmentSlug: "business-strategy-consulting",
    service: "Business Strategy & Consulting",
    serviceSlug: "strategy-consulting",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Identify operational bottlenecks, eliminate process waste, and engineer streamlined standard workflows.",
    responsibilities: [
      "Value stream mapping & bottleneck identification",
      "Time-and-motion process studies",
      "Root cause elimination workshops",
      "Standardized operating metric design",
    ],
    skills: [
      "Lean Six Sigma Green or Black Belt",
      "Process optimization frameworks",
      "Analytical root cause identification",
      "Collaborative coaching with frontline teams",
    ],
    preferred: [
      "Kaizen event facilitation",
      "RPA integration with process improvement",
      "Healthcare or service sector BPR",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Process Improvement Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Identify operational bottlenecks, eliminate process waste, and engineer streamlined standard workflows.",
  },
  {
    id: "business-intelligence-analyst",
    slug: "business-intelligence-analyst",
    title: "Business Intelligence Analyst",
    department: "Business Strategy & Consulting",
    departmentSlug: "business-strategy-consulting",
    service: "Business Strategy & Consulting",
    serviceSlug: "strategy-consulting",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Transform raw organizational data into intuitive executive dashboards, KPI monitors, and predictive models.",
    responsibilities: [
      "Executive BI dashboard design & maintenance",
      "Data modeling & semantic layer architecture",
      "Automated alert configurations for anomalous KPIs",
      "Ad-hoc deep dive analytics",
    ],
    skills: [
      "Proficiency in Power BI, Tableau, or Looker",
      "Advanced SQL query writing & performance tuning",
      "Data warehouse principles (star schema)",
      "Business metric interpretation",
    ],
    preferred: [
      "dbt / Snowflake / BigQuery experience",
      "Python for exploratory data analysis",
      "Self-service BI enablement",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Business Intelligence Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Transform raw organizational data into intuitive executive dashboards, KPI monitors, and predictive models.",
  },
  {
    id: "strategy-analyst",
    slug: "strategy-analyst",
    title: "Strategy Analyst",
    department: "Business Strategy & Consulting",
    departmentSlug: "business-strategy-consulting",
    service: "Business Strategy & Consulting",
    serviceSlug: "strategy-consulting",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Conduct market research, competitor benchmarking, industry trend analysis, and strategic valuation models.",
    responsibilities: [
      "Competitor benchmarking & intelligence briefs",
      "Industry market sizing (TAM/SAM/SOM)",
      "Strategic financial valuation & DCF models",
      "Board strategy presentation support",
    ],
    skills: [
      "Research rigor & investigative persistence",
      "Financial & statistical modeling",
      "Clear presentation deck structuring",
      "Fast synthesis of complex industries",
    ],
    preferred: [
      "Boutique strategy firm background",
      "Published market intelligence",
      "Secondary research database expertise",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Strategy Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Conduct market research, competitor benchmarking, industry trend analysis, and strategic valuation models.",
  },
  {
    id: "business-development-executive",
    slug: "business-development-executive",
    title: "Business Development Executive",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Drive new enterprise client acquisition, lead exploratory discussions, and close strategic corporate contracts.",
    responsibilities: [
      "Enterprise deal pipeline management",
      "High-level consultative discovery meetings",
      "Contract negotiation & closing",
      "Revenue quota attainment",
    ],
    skills: [
      "Proven track record in enterprise B2B sales",
      "Consultative selling methodologies (Challenger/MEDDPICC)",
      "Executive negotiation skills",
      "High stamina & closing discipline",
    ],
    preferred: [
      "Agency or digital infrastructure sales experience",
      "Large enterprise contract closing ($100k+)",
      "C-suite network",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Business Development Executive — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Drive new enterprise client acquisition, lead exploratory discussions, and close strategic corporate contracts.",
  },
  {
    id: "business-development-specialist",
    slug: "business-development-specialist",
    title: "Business Development Specialist",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Identify target accounts, cultivate outbound relationships, and coordinate prospective client discovery.",
    responsibilities: [
      "Target account research & qualification",
      "Outbound multi-touch outreach campaigns",
      "Initial discovery qualification calls",
      "Pipeline handoff to executives",
    ],
    skills: [
      "Strong outbound sales execution",
      "Apollo, ZoomInfo, or Sales Navigator mastery",
      "Articulate phone and email communication",
      "Tenacious follow-up discipline",
    ],
    preferred: [
      "B2B services prospecting experience",
      "Video outreach proficiency",
      "CRM hygiene and pipeline reporting",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Business Development Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Identify target accounts, cultivate outbound relationships, and coordinate prospective client discovery.",
  },
  {
    id: "sales-executive",
    slug: "sales-executive",
    title: "Sales Executive",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Manage qualified inbound enterprise leads, present tailored solution proposals, and convert prospects into long-term clients.",
    responsibilities: [
      "Consultative demo & proposal presentations",
      "Objection handling & value articulation",
      "Commercial scope tailoring",
      "Sales cycle velocity optimization",
    ],
    skills: [
      "Demonstrated closing record in consultative sales",
      "Solution presentation mastery",
      "Active listening and problem diagnosis",
      "CRM pipeline management",
    ],
    preferred: [
      "Experience selling recurring retainer services",
      "Contract negotiation experience",
      "Cross-selling technical services",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Sales Executive — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Manage qualified inbound enterprise leads, present tailored solution proposals, and convert prospects into long-term clients.",
  },
  {
    id: "partnerships-manager",
    slug: "partnerships-manager",
    title: "Partnerships Manager",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Build and nurture institutional relationships, co-delivery agreements, and technology partner alliances.",
    responsibilities: [
      "Partner ecosystem strategy & outreach",
      "Co-delivery & joint-venture structuring",
      "Partner enablement & reciprocal referrals",
      "Partnership quarterly reviews",
    ],
    skills: [
      "Proven experience in B2B partner management",
      "Relationship building & alliance structuring",
      "Commercial deal framework design",
      "Cross-organizational diplomacy",
    ],
    preferred: [
      "SaaS partner ecosystem background",
      "Channel sales management",
      "Joint marketing campaign execution",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Partnerships Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Build and nurture institutional relationships, co-delivery agreements, and technology partner alliances.",
  },
  {
    id: "account-executive",
    slug: "account-executive",
    title: "Account Executive",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Own end-to-end sales cycles from qualified stage through negotiation, legal review, and signed service agreements.",
    responsibilities: [
      "Full sales cycle execution",
      "Custom proposal engineering & ROI justification",
      "Multi-stakeholder consensus building",
      "Pipeline forecasting accuracy",
    ],
    skills: [
      "B2B mid-market / enterprise sales experience",
      "Strong commercial acumen",
      "CRM pipeline discipline",
      "Consistent quota over-achievement",
    ],
    preferred: [
      "Professional services sales background",
      "Complex legal & procurement navigation",
      "Solution selling certification",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Account Executive — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Own end-to-end sales cycles from qualified stage through negotiation, legal review, and signed service agreements.",
  },
  {
    id: "account-manager",
    slug: "account-manager",
    title: "Account Manager",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Nurture existing enterprise client relationships, manage satisfaction, and drive account expansion and renewals.",
    responsibilities: [
      "Client relationship stewardship & check-ins",
      "Account retention & contract renewals",
      "Cross-sell & upsell identifying",
      "Escalation advocacy for client satisfaction",
    ],
    skills: [
      "Proven B2B account management experience",
      "High relationship intelligence & empathy",
      "Commercial expansion identification",
      "Strong organizational communication",
    ],
    preferred: [
      "Enterprise client portfolio management",
      "Contract extension negotiations",
      "Client retention above 95%",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Account Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Nurture existing enterprise client relationships, manage satisfaction, and drive account expansion and renewals.",
  },
  {
    id: "client-relationship-manager",
    slug: "client-relationship-manager",
    title: "Client Relationship Manager",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Serve as the executive liaison for premier accounts, ensuring alignment on strategic goals and long-term retention.",
    responsibilities: [
      "Executive stakeholder relationship cadence",
      "Strategic partnership alignment reviews",
      "Client advocacy across internal delivery teams",
      "Long-term partnership roadmapping",
    ],
    skills: [
      "Senior client engagement experience",
      "Executive communication & presence",
      "Conflict resolution & diplomatic negotiation",
      "Strategic account planning",
    ],
    preferred: [
      "Enterprise tier client management",
      "C-level relationship stewardship",
      "White-glove service standards",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Client Relationship Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Serve as the executive liaison for premier accounts, ensuring alignment on strategic goals and long-term retention.",
  },
  {
    id: "lead-generation-specialist",
    slug: "lead-generation-specialist",
    title: "Lead Generation Specialist",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Generate steady streams of verified enterprise leads through sophisticated list building, enrichment, and outreach.",
    responsibilities: [
      "Ideal Customer Profile (ICP) list building",
      "Data enrichment & verification protocols",
      "Cold email deliverability & copy testing",
      "Meeting booking & qualification confirmation",
    ],
    skills: [
      "Data mining & list building tools",
      "Cold outreach deliverability knowledge",
      "Strong written copywriting skills",
      "Metrics-driven outreach approach",
    ],
    preferred: [
      "Clay.com or advanced enrichment tools",
      "Multi-channel outreach automation",
      "A/B copy optimization",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Lead Generation Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Generate steady streams of verified enterprise leads through sophisticated list building, enrichment, and outreach.",
  },
  {
    id: "proposal-tender-specialist",
    slug: "proposal-tender-specialist",
    title: "Proposal & Tender Specialist",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Author winning commercial proposals, RFP responses, tender submissions, and executive pitch collateral.",
    responsibilities: [
      "RFP / RFI / Tender response authoring",
      "Commercial proposal formatting & polish",
      "Case study & credential integration",
      "Compliance with tender requirements",
    ],
    skills: [
      "Flawless business writing & formatting",
      "Ability to synthesize technical specifications",
      "Strict adherence to deadlines",
      "Proposal management software mastery",
    ],
    preferred: [
      "Enterprise RFP win rate above 40%",
      "Graphic layout skills (InDesign / Figma)",
      "Public sector or institutional tender experience",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Proposal & Tender Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Author winning commercial proposals, RFP responses, tender submissions, and executive pitch collateral.",
  },
  {
    id: "market-research-analyst",
    slug: "market-research-analyst",
    title: "Market Research Analyst",
    department: "Business Development & Partnerships",
    departmentSlug: "business-development-partnerships",
    service: "Business Development & Partnerships",
    serviceSlug: "business-development",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Analyze industry verticals, buying trends, competitor positioning, and addressable enterprise market opportunities.",
    responsibilities: [
      "Vertical industry deep dives & TAM models",
      "Competitor offering & pricing audits",
      "Prospective buyer persona profiling",
      "Commercial intelligence briefings",
    ],
    skills: [
      "Rigorous qualitative and quantitative research",
      "Secondary research database analysis",
      "Market sizing methodologies",
      "Synthesized executive briefings",
    ],
    preferred: [
      "Gartner/Forrester data analysis",
      "B2B tech market insights",
      "Statistical trend modeling",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Market Research Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Analyze industry verticals, buying trends, competitor positioning, and addressable enterprise market opportunities.",
  },
  {
    id: "operations-manager",
    slug: "operations-manager",
    title: "Operations Manager",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Oversee cross-department delivery infrastructure, workforce allocation, SLA compliance, and operational excellence.",
    responsibilities: [
      "Cross-department delivery operations oversight",
      "Workforce capacity & allocation modeling",
      "SLA monitoring & operational bottleneck removal",
      "Operational budget & tool efficiency",
    ],
    skills: [
      "Proven operations management experience",
      "Strong systems thinking & process rigor",
      "Distributed team leadership",
      "Data-driven decision making",
    ],
    preferred: [
      "Scaling operations from mid-market to enterprise",
      "P&L operations oversight",
      "Agile delivery frameworks",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Operations Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Oversee cross-department delivery infrastructure, workforce allocation, SLA compliance, and operational excellence.",
  },
  {
    id: "operations-coordinator",
    slug: "operations-coordinator",
    title: "Operations Coordinator",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Coordinate daily project handoffs, resource scheduling, operational tools, and delivery communication across teams.",
    responsibilities: [
      "Daily operational task scheduling",
      "Resource booking & calendar coordination",
      "Delivery team tool onboarding & licenses",
      "Cross-team meeting synchronization",
    ],
    skills: [
      "Exceptional organizational & scheduling skills",
      "High attention to detail",
      "Clear cross-team communication",
      "Comfort with project management software",
    ],
    preferred: [
      "Remote operations coordination experience",
      "Asana / ClickUp super-user",
      "Process documentation",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Operations Coordinator — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Coordinate daily project handoffs, resource scheduling, operational tools, and delivery communication across teams.",
  },
  {
    id: "service-delivery-manager",
    slug: "service-delivery-manager",
    title: "Service Delivery Manager",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Ensure client contracts are fulfilled with uncompromising quality, punctuality, and SLA adherence.",
    responsibilities: [
      "Client delivery milestone governance",
      "SLA tracking & breach prevention",
      "Quality audit review before deliverable dispatch",
      "Client delivery escalation handling",
    ],
    skills: [
      "Demonstrated service delivery leadership",
      "Contract & SLA understanding",
      "Risk anticipation & problem resolution",
      "Client relationship management",
    ],
    preferred: [
      "ITIL foundation certification",
      "Enterprise delivery track record",
      "Quality management systems",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Service Delivery Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Ensure client contracts are fulfilled with uncompromising quality, punctuality, and SLA adherence.",
  },
  {
    id: "project-manager",
    slug: "project-manager",
    title: "Project Manager",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Lead multi-disciplinary delivery projects from kickoff to completion on time, within budget, and to specification.",
    responsibilities: [
      "Project scoping, schedule & milestone planning",
      "Sprint management & team task delegation",
      "Budget & resource tracking",
      "Client progress updates & sprint reviews",
    ],
    skills: [
      "Proven project management experience",
      "Proficiency in Jira, Linear, or ClickUp",
      "Risk management & issue resolution",
      "Stakeholder management & transparent reporting",
    ],
    preferred: [
      "PMP or Prince2 certification",
      "Agile / Scrum Master experience",
      "Digital agency or software project delivery",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Project Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Lead multi-disciplinary delivery projects from kickoff to completion on time, within budget, and to specification.",
  },
  {
    id: "project-coordinator",
    slug: "project-coordinator",
    title: "Project Coordinator",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Support project managers with documentation, task tracking, timeline updates, and milestone verification.",
    responsibilities: [
      "Project status report preparation",
      "Meeting minutes & action item tracking",
      "Deliverable asset collection & organization",
      "Project timeline monitoring",
    ],
    skills: [
      "Diligent follow-through on action items",
      "Strong administrative & coordination skills",
      "Clear written & verbal updates",
      "Proactive assistance to project leads",
    ],
    preferred: [
      "Project management software familiarity",
      "Junior PM track record",
      "Document management proficiency",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Project Coordinator — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Support project managers with documentation, task tracking, timeline updates, and milestone verification.",
  },
  {
    id: "program-manager",
    slug: "program-manager",
    title: "Program Manager",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Orchestrate complex multi-project strategic programs, overarching enterprise accounts, and long-term initiatives.",
    responsibilities: [
      "Multi-project program roadmap management",
      "Cross-project resource & budget balancing",
      "Executive steering committee reporting",
      "Strategic program risk mitigation",
    ],
    skills: [
      "Proven program management leadership",
      "Senior stakeholder communication",
      "Strategic resource optimization",
      "Complex dependency mapping",
    ],
    preferred: [
      "PgMP certification",
      "Enterprise digital transformation management",
      "Global multi-team orchestration",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Program Manager — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Orchestrate complex multi-project strategic programs, overarching enterprise accounts, and long-term initiatives.",
  },
  {
    id: "quality-assurance-specialist",
    slug: "quality-assurance-specialist",
    title: "Quality Assurance Specialist",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Audit deliverables across departments to ensure strict adherence to quality rubrics, client briefs, and SOPs.",
    responsibilities: [
      "Pre-delivery deliverable inspection & testing",
      "Quality rubric creation & updates",
      "Defect tracking & feedback loop to teams",
      "Delivery audit reporting",
    ],
    skills: [
      "Meticulous eye for detail and standards",
      "Analytical defect categorization",
      "Constructive feedback communication",
      "Quality management framework understanding",
    ],
    preferred: [
      "ISO 9001 / quality systems exposure",
      "Digital product inspection experience",
      "Automated QA checklist workflows",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Quality Assurance Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Audit deliverables across departments to ensure strict adherence to quality rubrics, client briefs, and SOPs.",
  },
  {
    id: "workforce-coordinator",
    slug: "workforce-coordinator",
    title: "Workforce Coordinator",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Manage global specialist schedules, shift coverage, capacity forecasting, and time-tracking compliance.",
    responsibilities: [
      "Global shift scheduling & coverage verification",
      "Time tracking & billable hours auditing",
      "Leave & absence calendar management",
      "Capacity bottleneck alerting",
    ],
    skills: [
      "Workforce management (WFM) scheduling tools",
      "Data accuracy and precision",
      "Cross-timezone scheduling understanding",
      "Empathy and clear team communication",
    ],
    preferred: [
      "Experience scheduling 50+ remote contractors",
      "WFM software optimization",
      "Overtime & capacity planning",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Workforce Coordinator — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Manage global specialist schedules, shift coverage, capacity forecasting, and time-tracking compliance.",
  },
  {
    id: "process-analyst",
    slug: "process-analyst",
    title: "Process Analyst",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Analyze operational workflows, document Standard Operating Procedures, and identify automation opportunities.",
    responsibilities: [
      "Current-state workflow documentation",
      "Standard Operating Procedure (SOP) authoring",
      "Efficiency gain measurement",
      "Automation candidate identification",
    ],
    skills: [
      "Process mapping (BPMN / Visio / Miro)",
      "Technical documentation writing",
      "Analytical logic & optimization focus",
      "Interviews and observation techniques",
    ],
    preferred: ["Six Sigma Yellow/Green Belt", "RPA workflow design", "Knowledge base management"],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Process Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Analyze operational workflows, document Standard Operating Procedures, and identify automation opportunities.",
  },
  {
    id: "operations-analyst",
    slug: "operations-analyst",
    title: "Operations Analyst",
    department: "Operations & Service Delivery",
    departmentSlug: "operations-service-delivery",
    service: "Operations & Service Delivery",
    serviceSlug: "operations-delivery",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Track operational metrics, resource utilization, delivery cost variances, and SLA fulfillment trends.",
    responsibilities: [
      "Operational KPI dashboards & reporting",
      "Utilization & billability trend analysis",
      "Cost per deliverable calculations",
      "Operational anomaly investigation",
    ],
    skills: [
      "Strong quantitative data analysis (SQL/Excel)",
      "BI dashboard creation (Tableau/Power BI)",
      "Attention to operational drivers",
      "Insightful data presentation",
    ],
    preferred: [
      "Operations research or industrial engineering background",
      "Predictive capacity modeling",
      "Financial operations analysis",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Operations Analyst — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Track operational metrics, resource utilization, delivery cost variances, and SLA fulfillment trends.",
  },
  {
    id: "human-resources-specialist",
    slug: "human-resources-specialist",
    title: "Human Resources Specialist",
    department: "People & Corporate Services",
    departmentSlug: "people-corporate-services",
    service: "Talent Acquisition & Workforce Solutions",
    serviceSlug: "talent-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Manage people operations, employee inquiries, policy adherence, and positive remote company culture.",
    responsibilities: [
      "Employee lifecycle coordination",
      "HR policy communication & adherence",
      "Performance review cycle support",
      "Culture and remote team engagement initiatives",
    ],
    skills: [
      "Strong foundation in HR principles & compliance",
      "Empathy and conflict resolution skills",
      "High confidentiality standards",
      "Clear written and verbal communication",
    ],
    preferred: [
      "SHRM-CP or PHR certification",
      "Remote team HR management",
      "HRIS administration (BambooHR/Rippling)",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Human Resources Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Manage people operations, employee inquiries, policy adherence, and positive remote company culture.",
  },
  {
    id: "recruitment-specialist",
    slug: "recruitment-specialist",
    title: "Recruitment Specialist",
    department: "People & Corporate Services",
    departmentSlug: "people-corporate-services",
    service: "Talent Acquisition & Workforce Solutions",
    serviceSlug: "talent-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Manage full-cycle recruitment pipelines from initial applicant screening to final offer acceptance.",
    responsibilities: [
      "Applicant tracking system (ATS) management",
      "Resume screening & candidate shortlisting",
      "Initial screening interviews",
      "Interview scheduling and candidate feedback",
    ],
    skills: [
      "Proven full-cycle recruiting experience",
      "Structured interviewing methodology",
      "Clear and persuasive candidate communication",
      "ATS software mastery",
    ],
    preferred: [
      "Technical or specialized talent recruiting",
      "High-volume recruitment management",
      "Candidate experience optimization",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Recruitment Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Manage full-cycle recruitment pipelines from initial applicant screening to final offer acceptance.",
  },
  {
    id: "talent-acquisition-specialist",
    slug: "talent-acquisition-specialist",
    title: "Talent Acquisition Specialist",
    department: "People & Corporate Services",
    departmentSlug: "people-corporate-services",
    service: "Talent Acquisition & Workforce Solutions",
    serviceSlug: "talent-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Proactively source, engage, and recruit top-tier global professionals for active and pipeline roles.",
    responsibilities: [
      "Passive candidate sourcing & outreach",
      "Talent pipeline building across departments",
      "Employer brand advocacy on LinkedIn and career boards",
      "Offer negotiation & closing",
    ],
    skills: [
      "Advanced talent sourcing techniques (Boolean search)",
      "Persuasive outreach copy",
      "Market compensation benchmarking",
      "Tenacious candidate relationship building",
    ],
    preferred: [
      "Global remote talent hiring experience",
      "Executive search background",
      "Diversity and inclusion recruiting",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Talent Acquisition Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Proactively source, engage, and recruit top-tier global professionals for active and pipeline roles.",
  },
  {
    id: "people-operations-coordinator",
    slug: "people-operations-coordinator",
    title: "People Operations Coordinator",
    department: "People & Corporate Services",
    departmentSlug: "people-corporate-services",
    service: "Talent Acquisition & Workforce Solutions",
    serviceSlug: "talent-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Facilitate seamless candidate onboarding, contract logistics, tool provisioning, and workforce records.",
    responsibilities: [
      "New hire onboarding workflows & tool setup",
      "Contractor agreement & document tracking",
      "HRIS profile creation & record maintenance",
      "First-week check-ins & orientation support",
    ],
    skills: [
      "Superb organizational & administrative skills",
      "Process-driven mindset with high accuracy",
      "Friendly, welcoming interpersonal style",
      "Familiarity with digital signature workflows",
    ],
    preferred: [
      "Remote onboarding experience",
      "Knowledge of global contractor compliance",
      "HRIS super-user",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "People Operations Coordinator — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Facilitate seamless candidate onboarding, contract logistics, tool provisioning, and workforce records.",
  },
  {
    id: "training-development-specialist",
    slug: "training-development-specialist",
    title: "Training & Development Specialist",
    department: "People & Corporate Services",
    departmentSlug: "people-corporate-services",
    service: "Talent Acquisition & Workforce Solutions",
    serviceSlug: "talent-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Design training materials, brand certification modules, and skill assessment programs for specialists.",
    responsibilities: [
      "Onboarding training curriculum design",
      "Standard Operating Procedure training modules",
      "Skill assessment rubrics & quizzes",
      "Training effectiveness evaluation",
    ],
    skills: [
      "Instructional design & adult learning principles",
      "Engaging training material creation",
      "LMS (Learning Management System) administration",
      "Clear presentation & teaching skills",
    ],
    preferred: [
      "Video training creation (Loom/Camtasia)",
      "Technical training background",
      "Certification program design",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Training & Development Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Design training materials, brand certification modules, and skill assessment programs for specialists.",
  },
  {
    id: "hr-operations-specialist",
    slug: "hr-operations-specialist",
    title: "HR Operations Specialist",
    department: "People & Corporate Services",
    departmentSlug: "people-corporate-services",
    service: "Talent Acquisition & Workforce Solutions",
    serviceSlug: "talent-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Maintain global contractor compliance records, benefits administration, and HR data integrity.",
    responsibilities: [
      "Contractor compliance documentation auditing",
      "HR metrics & turnover analysis",
      "Global payroll & stipend coordination",
      "HR system data accuracy and audits",
    ],
    skills: [
      "Knowledge of international contractor compliance",
      "Data precision & confidentiality",
      "Analytical reporting on people metrics",
      "Cross-border payment understanding",
    ],
    preferred: [
      "Deel / Remote.com platform experience",
      "Global employment law awareness",
      "HR workflow automation",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "HR Operations Specialist — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Maintain global contractor compliance records, benefits administration, and HR data integrity.",
  },
  {
    id: "compliance-officer",
    slug: "compliance-officer",
    title: "Compliance Officer",
    department: "People & Corporate Services",
    departmentSlug: "people-corporate-services",
    service: "Talent Acquisition & Workforce Solutions",
    serviceSlug: "talent-solutions",
    to: "/apply",
    type: "Full-Time",
    employmentType: "Full-Time Remote",
    status: "open",
    location: "Remote — Global",
    summary:
      "Enforce enterprise regulatory compliance, data privacy standards, and internal corporate governance policies.",
    responsibilities: [
      "Corporate compliance policy oversight",
      "Data privacy (GDPR / CCPA) monitoring",
      "Vendor & client contract compliance review",
      "Compliance audit preparation & reporting",
    ],
    skills: [
      "Deep knowledge of corporate compliance frameworks",
      "Legal & contractual comprehension",
      "Ethical vigilance & risk assessment",
      "Structured policy authoring",
    ],
    preferred: [
      "Certified Compliance Professional (CCEP)",
      "Data Protection Officer (DPO) experience",
      "Cross-jurisdiction regulatory advisory",
    ],
    application: [
      "Submit your application through our comprehensive 5-step intake portal",
      "Practical skills & communication assessment based on real-world scenarios",
      "Interview with the practice lead and delivery director",
      "Offer, identity verification, onboarding and brand certification",
    ],
    faq: [
      {
        q: "Is this role fully remote?",
        a: "Yes. All Fredacorpal delivery roles are 100% remote with defined core US working hours overlap.",
      },
      {
        q: "What equipment is required?",
        a: "A reliable modern computer, high-speed fiber/cable internet, and a quiet workspace suitable for remote operations.",
      },
    ],
    metaTitle: "Compliance Officer — Remote | Fredacorpal™ Careers",
    metaDescription:
      "Enforce enterprise regulatory compliance, data privacy standards, and internal corporate governance policies.",
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
  {
    value: 42,
    suffix: "%",
    label: "Conversion Efficiency",
    detail: "Reduction in conversion overhead",
  },
  { value: 80, suffix: "K+", label: "Audience Growth", detail: "Community expansion delivered" },
  {
    value: 0,
    suffix: "",
    label: "Global Talent Network",
    detail: "Vetted remote specialists worldwide",
  },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Departments", to: "/departments" },
      { label: "Services", to: "/services" },
      { label: "Industries", to: "/industries" },
      { label: "Partnerships", to: "/partnerships" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", to: "/services" },
      { label: "SEO", to: "/services/seo" },
      { label: "Social Media", to: "/services/social-media" },
      { label: "Paid Media", to: "/services/paid-media" },
      { label: "Customer Support", to: "/services/customer-support" },
      { label: "Technical Solutions", to: "/services/technical-solutions" },
      { label: "Financial Advisory", to: "/services/financial-advisory" },
      { label: "Business Strategy", to: "/services/strategy-consulting" },
      { label: "Business Development", to: "/services/business-development" },
      { label: "Operations & Delivery", to: "/services/operations-delivery" },
      { label: "Talent Solutions", to: "/services/talent-solutions" },
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

export type BenefitCategory = {
  slug: string;
  title: string;
  description: string;
  subcategories: string[];
  details: { title: string; body: string }[];
};

export const careerBenefits: BenefitCategory[] = [
  {
    slug: "compensation",
    title: "Core Compensation & Time Off",
    description:
      "Reward your time and expertise with competitive pay, performance rewards, and genuine time away from work.",
    subcategories: [
      "Competitive Base Salary",
      "Performance Bonuses",
      "Generous Paid Vacation",
      "Sick & Personal Days",
    ],
    details: [
      {
        title: "Competitive Base Salary",
        body: "Starting at $40/hr, with compensation calibrated directly to your experience and expertise.",
      },
      {
        title: "Performance Bonuses",
        body: "Earn quarterly incentives tied directly to your customer satisfaction ratings and response time metrics.",
      },
      {
        title: "Generous Paid Vacation",
        body: "Take dedicated paid time off each year to recharge, along with paid leave for all major national holidays.",
      },
      {
        title: "Sick & Personal Days",
        body: "Access annual designated paid days off whenever you need to rest, recover, or handle personal matters.",
      },
    ],
  },
  {
    slug: "remote-flexibility",
    title: "Remote Work & Flexibility",
    description:
      "Empower your workday with modern hardware, recurring stipends, and freedom over your daily schedule.",
    subcategories: [
      "Home Office Setup Stipend",
      "Tech & Connectivity Allowance",
      "Company Equipment",
      "Flexible Scheduling",
    ],
    details: [
      {
        title: "Home Office Setup Stipend",
        body: "Receive a one-time allowance upon joining to build a comfortable, ergonomic, and productive home workspace.",
      },
      {
        title: "Tech & Connectivity Allowance",
        body: "Enjoy a recurring monthly stipend to cover high-speed home internet and mobile phone costs.",
      },
      {
        title: "Company Equipment",
        body: "Work with top-tier hardware, including a fully loaded laptop and a premium noise-canceling headset.",
      },
      {
        title: "Flexible Scheduling",
        body: "Autonomy over your daily hours outside of our core team collaboration windows.",
      },
    ],
  },
  {
    slug: "health-wellness",
    title: "Health & Wellness",
    description:
      "Prioritize your physical and mental well-being through comprehensive insurance and dedicated wellness perks.",
    subcategories: [
      "Comprehensive Health Coverage",
      "Mental Health Support",
      "Monthly Wellness Stipend",
    ],
    details: [
      {
        title: "Comprehensive Health Coverage",
        body: "Choose from robust medical, dental, and vision insurance plans tailored to your needs.",
      },
      {
        title: "Mental Health Support",
        body: "Take dedicated mental health rest days each year alongside access to wellness support programs.",
      },
      {
        title: "Monthly Wellness Stipend",
        body: "Utilize a dedicated allowance for gym memberships, fitness classes, wellness apps, or sporting goods.",
      },
    ],
  },
  {
    slug: "growth",
    title: "Growth & Development",
    description:
      "Invest in your career with education funding, internal advancement paths, and hands-on skill expansion.",
    subcategories: [
      "Annual Learning Budget",
      "Clear Career Advancement",
      "Mentorship & Skill Building",
    ],
    details: [
      {
        title: "Annual Learning Budget",
        body: "Access dedicated annual funding to pursue courses, attend workshops, or purchase books for your career.",
      },
      {
        title: "Clear Career Advancement",
        body: "Grow into leadership or specialized roles as our expanding team scales its customer care processes.",
      },
      {
        title: "Mentorship & Skill Building",
        body: "Participate in structured internal guidance and cross-functional project opportunities to broaden your skill set.",
      },
    ],
  },
  {
    slug: "retirement",
    title: "Retirement & Financial Security",
    description:
      "Plan for your financial future with generous matching, expert advisory tools, and transparent vesting.",
    subcategories: [
      "Employer-Sponsored 401(k)",
      "Competitive Match",
      "Immediate Vesting",
      "Financial Advisory Services",
    ],
    details: [
      {
        title: "Employer-Sponsored 401(k)",
        body: "Build long-term security with a retirement plan designed to help you prepare for the future.",
      },
      {
        title: "Competitive Match",
        body: "Maximize your savings with a 100% match on your first 3% of contributions, plus 50% on the next 2%.",
      },
      {
        title: "Immediate Vesting",
        body: "Benefit from employee-first vesting schedules that let you keep matching contributions from day one.",
      },
      {
        title: "Financial Advisory Services",
        body: "Access free financial planning tools and quarterly consultations with certified financial planners.",
      },
    ],
  },
];
