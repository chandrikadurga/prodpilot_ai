export const learningPathsData = [
  {
    id: "lp-beginner",
    title: "Product Manager Associate (Beginner)",
    description: "Build a strong foundation in product management. Learn core product discovery, user research, agile delivery, and metrics.",
    duration: "4 weeks",
    progress: 70,
    rating: 4.8,
    tags: ["Foundation", "Career Starter", "APM"],
    certificate: true,
    modules: [
      { title: "Introduction to Product Management", lessonsCount: 6, progress: 100 },
      { title: "User Research & Customer Interviews", lessonsCount: 8, progress: 100 },
      { title: "Prioritization & Backlog Management", lessonsCount: 5, progress: 80 },
      { title: "Agile Development & Handoffs", lessonsCount: 6, progress: 0 }
    ]
  },
  {
    id: "lp-intermediate",
    title: "Product Manager Core (Intermediate)",
    description: "Take the next step in product management. Master product strategy, growth loops, feature flags, and product design systems.",
    duration: "6 weeks",
    progress: 25,
    rating: 4.7,
    tags: ["Core", "SaaS Strategy", "PM Growth"],
    certificate: true,
    modules: [
      { title: "Defining Product Strategy & Kernels", lessonsCount: 7, progress: 100 },
      { title: "SaaS Analytics & Funnel Optimization", lessonsCount: 9, progress: 0 },
      { title: "A/B Testing & Variant Experimentation", lessonsCount: 6, progress: 0 },
      { title: "UI/UX & Design Systems for PMs", lessonsCount: 8, progress: 0 }
    ]
  },
  {
    id: "lp-senior",
    title: "Senior Product Manager Leadership",
    description: "Designed for mid-level PMs preparing for leadership roles. Covers stakeholder alignment, portfolio metrics, risk assessment, and career coaching.",
    duration: "8 weeks",
    progress: 0,
    rating: 4.9,
    tags: ["Leadership", "Stakeholders", "Senior PM"],
    certificate: true,
    modules: [
      { title: "Strategic Stakeholder Management", lessonsCount: 8, progress: 0 },
      { title: "Product Risk Management & Audit Systems", lessonsCount: 6, progress: 0 },
      { title: "Organizing Multi-team Dependencies", lessonsCount: 7, progress: 0 },
      { title: "Coaching & Mentoring Junior PMs", lessonsCount: 5, progress: 0 }
    ]
  },
  {
    id: "lp-ai-pm",
    title: "AI Product Manager Ecosystem",
    description: "Learn to build AI-powered SaaS applications. Covers data pipeline designs, model training cycles, LLMs, and prompt evaluations.",
    duration: "5 weeks",
    progress: 0,
    rating: 4.9,
    tags: ["AI/ML", "LLM", "Deep Tech"],
    certificate: true,
    modules: [
      { title: "Introduction to Machine Learning for PMs", lessonsCount: 5, progress: 0 },
      { title: "Designing Conversational Interfaces & LLMs", lessonsCount: 8, progress: 0 },
      { title: "AI Prompt Optimization & Eval Frameworks", lessonsCount: 6, progress: 0 },
      { title: "Ethical AI & Data Privacy Regulations", lessonsCount: 4, progress: 0 }
    ]
  },
  {
    id: "lp-growth-pm",
    title: "Growth Product Manager & PLG Flywheel",
    description: "Learn how to optimize sign-up flows, increase onboarding activation, design self-serve expansion loops, and manage subscription pricing tiers.",
    duration: "4 weeks",
    progress: 10,
    rating: 4.8,
    tags: ["Growth", "PLG", "Metrics"],
    certificate: true,
    modules: [
      { title: "Product-Led Growth & Funnel Metrics", lessonsCount: 6, progress: 40 },
      { title: "Onboarding Optimization & Active Streaks", lessonsCount: 8, progress: 0 },
      { title: "Viral Loops & Referral Expansion Systems", lessonsCount: 5, progress: 0 },
      { title: "Subscription Pricing & Seat Conversions", lessonsCount: 6, progress: 0 }
    ]
  },
  {
    id: "lp-technical-pm",
    title: "Technical Product Manager Fundamentals",
    description: "For PMs looking to deepen their technical fluency. Learn about system architecture, databases, APIs, web performance, and cloud infrastructure.",
    duration: "6 weeks",
    progress: 0,
    rating: 4.8,
    tags: ["Technical", "System Architecture", "APIs"],
    certificate: true,
    modules: [
      { title: "Web Performance, DOM, & Browser APIs", lessonsCount: 5, progress: 0 },
      { title: "System Architecture & Microservices", lessonsCount: 7, progress: 0 },
      { title: "Database Systems & SQL Essentials", lessonsCount: 8, progress: 0 },
      { title: "Cloud Computing, CDN, & Security Basics", lessonsCount: 6, progress: 0 }
    ]
  },
  {
    id: "lp-enterprise-pm",
    title: "Enterprise Product Management",
    description: "Understand the challenges of building B2B products for large enterprises. Covers custom security models, compliance (SOC2, GDPR), and large contract SLA details.",
    duration: "5 weeks",
    progress: 0,
    rating: 4.6,
    tags: ["Enterprise B2B", "Compliance", "Security"],
    certificate: true,
    modules: [
      { title: "SAML, SSO, & Enterprise Role-based Access", lessonsCount: 6, progress: 0 },
      { title: "Data Compliance (SOC2, GDPR, HIPAA) Essentials", lessonsCount: 7, progress: 0 },
      { title: "SLA, Uptime, & Contracts Deployment Setup", lessonsCount: 5, progress: 0 }
    ]
  },
  {
    id: "lp-product-analytics",
    title: "Product Analytics Masterclass",
    description: "Become a data-driven product manager. Master cohort retention, funnel drop-off analysis, user segmentations, and behavioral telemetry mapping.",
    duration: "4 weeks",
    progress: 0,
    rating: 4.7,
    tags: ["Analytics", "Cohort Analysis", "Data-driven"],
    certificate: true,
    modules: [
      { title: "Event Telemetry & Tagging Best Practices", lessonsCount: 5, progress: 0 },
      { title: "Segment Retention & Cohort Analytics", lessonsCount: 7, progress: 0 },
      { title: "Translating Analytics to Actionable Backlogs", lessonsCount: 6, progress: 0 }
    ]
  },
  {
    id: "lp-product-strategy",
    title: "Advanced Product Strategy & Kernels",
    description: "Learn to design guiding policies and strategic action lists to outmaneuver competitors in crowded tech markets.",
    duration: "5 weeks",
    progress: 0,
    rating: 4.9,
    tags: ["Strategy", "Kernel", "Market Positioning"],
    certificate: true,
    modules: [
      { title: "Strategic Diagnoses of Competitor Assets", lessonsCount: 6, progress: 0 },
      { title: "Drafting Actionable Guiding Policies", lessonsCount: 5, progress: 0 },
      { title: "Mapping Coherent Action Lists", lessonsCount: 6, progress: 0 }
    ]
  },
  {
    id: "lp-product-design",
    title: "Product Design & Usability for PMs",
    description: "Master user psychology, layout spacing guidelines, micro-interactions, responsive grids, and design system components.",
    duration: "4 weeks",
    progress: 0,
    rating: 4.6,
    tags: ["Design Patterns", "UX Research", "Usability"],
    certificate: true,
    modules: [
      { title: "Heuristic Usability Reviews", lessonsCount: 5, progress: 0 },
      { title: "Micro-interactions & UX Delight", lessonsCount: 6, progress: 0 },
      { title: "Structuring Shared Component Systems", lessonsCount: 7, progress: 0 }
    ]
  }
];
