export const frameworksData = [
  {
    id: "f-rice",
    title: "RICE Prioritization",
    abbreviation: "RICE",
    category: "Prioritization",
    estimatedTime: "15 mins",
    overview: "RICE is a scoring system developed by Intercom to prioritize projects. It helps product managers balance reach, impact, confidence, and effort to calculate a mathematical priority score.",
    purpose: "Provides a consistent, objective scoring model to evaluate features and resolve alignment disputes in product backlogs.",
    whenToUse: "When prioritizing a complex backlog of features, ideas, or projects with competing stakeholders.",
    advantages: [
      "Objective, quantitative scoring",
      "Accounts for team confidence levels",
      "Exposes effort/cost constraints",
      "Reduces emotional stakeholder bias"
    ],
    limitations: [
      "Can be manipulated by adjusting confidence scores",
      "Estimates can be guesses without initial metrics",
      "Doesn't account for product dependencies"
    ],
    steps: [
      "Calculate Reach (R): How many users will this feature impact in a given timeframe? (e.g., users per quarter)",
      "Estimate Impact (I): What is the value added to a single user? (Score: 3 = massive impact, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal)",
      "Estimate Confidence (C): How sure are you of your data? (Score: 100% = high confidence, 80% = medium, 50% = low/speculative)",
      "Estimate Effort (E): How much time will design, engineering, and QA take? (Score: measured in person-months)",
      "Compute RICE Score: (Reach × Impact × Confidence) / Effort"
    ],
    example: "Evaluating a new payment method: Reach = 5,000 users/mo. Impact = 2 (high). Confidence = 80% (0.8). Effort = 2 person-months. Score = (5000 × 2 × 0.8) / 2 = 4,000.",
    diagramType: "Prioritization Matrix",
    relatedFrameworks: ["f-ice", "f-moscow", "f-kano"],
    recommendedReading: ["p-rice-prioritization", "b-build-trap"]
  },
  {
    id: "f-ice",
    title: "ICE Scoring Model",
    abbreviation: "ICE",
    category: "Prioritization",
    estimatedTime: "10 mins",
    overview: "ICE is a simplified prioritization score developed by Sean Ellis for growth loops. It scores ideas based on Impact, Confidence, and Ease.",
    purpose: "Enables rapid, lightweight feature sorting, making it ideal for growth testing and early-stage startup MVP features.",
    whenToUse: "When executing growth experiments or prioritizing items inside a fast-paced agile cycle.",
    advantages: [
      "Extremely fast to compute",
      "Perfect for growth hacking loops",
      "Equal weight for ease of execution"
    ],
    limitations: [
      "Highly subjective (scored 1-10)",
      "Prone to optimistic builder bias"
    ],
    steps: [
      "Score Impact: How much will this idea improve key metrics? (Scale: 1 to 10)",
      "Score Confidence: How sure are you of this impact? (Scale: 1 to 10)",
      "Score Ease: How simple is this to build and launch? (Scale: 1 to 10, where 10 is easiest)",
      "Calculate Score: Impact × Confidence × Ease"
    ],
    example: "Adding a quick checklist onboarding: Impact = 8. Confidence = 7. Ease = 9. ICE Score = 8 × 7 × 9 = 504.",
    diagramType: "Scoring Scale",
    relatedFrameworks: ["f-rice", "f-kano"],
    recommendedReading: ["b-lean-product", "p-product-onboarding"]
  },
  {
    id: "f-moscow",
    title: "MoSCoW Prioritization",
    abbreviation: "MoSCoW",
    category: "Prioritization",
    estimatedTime: "12 mins",
    overview: "MoSCoW is a qualitative method to classify requirements into Must-Haves, Should-Haves, Could-Haves, and Won't-Haves.",
    purpose: "Establishes scope baselines for release targets, ensuring core utilities are guaranteed.",
    whenToUse: "When preparing release scopes, MVP timelines, or contract commitments.",
    advantages: [
      "Simple stakeholder alignment",
      "Explicitly specifies out-of-scope boundaries",
      "Protects timeline milestones"
    ],
    limitations: [
      "Stakeholders default everything to 'Must'",
      "Lacks granular scoring within categories"
    ],
    steps: [
      "Must Have (M): Requirements that are critical to the release's viability.",
      "Should Have (S): Important requirements that are not strictly time-critical.",
      "Could Have (C): Nice-to-have features that will be tackled if resources permit.",
      "Won't Have (W): Explicitly deferred features (agreed to be out of scope for this release)."
    ],
    example: "MVP for video calling app: Must Have = Audio/Video streams; Should Have = Mute button; Could Have = Custom background filters; Won't Have = Transcription.",
    diagramType: "Quadrant Box",
    relatedFrameworks: ["f-rice", "f-kano"],
    recommendedReading: ["p-stakeholder-mgt-guide"]
  },
  {
    id: "f-kano",
    title: "Kano Model",
    abbreviation: "Kano",
    category: "Prioritization",
    estimatedTime: "20 mins",
    overview: "Kano classifies product features based on customer preference: Basic Expectations, Performance features, and Delighters.",
    purpose: "Balances baseline needs with innovation to prevent churn and delight users.",
    whenToUse: "When planning a feature roadmap or analyzing user survey feedback.",
    advantages: [
      "Reveals unspoken user requirements",
      "Prevents building redundant performance features",
      "Highlights key competitive differentiators"
    ],
    limitations: [
      "Requires custom surveys",
      "Customer desires change over time"
    ],
    steps: [
      "Draft Kano questionnaires asking users functional (if present) and dysfunctional (if absent) questions.",
      "Categorize features based on responses: Must-be, One-dimensional (Performance), Attractive (Delighters), Indifferent, or Reverse.",
      "Map features onto the Kano satisfaction-effort curves."
    ],
    example: "Booking engine: Must-be = search flights; One-dimensional = faster load times; Attractive = free lounge coupon.",
    diagramType: "2D Graph",
    relatedFrameworks: ["f-moscow", "f-rice"],
    recommendedReading: ["p-kano-user-delight", "b-design-everyday"]
  },
  {
    id: "f-jtbd",
    title: "Jobs To Be Done",
    abbreviation: "JTBD",
    category: "Product Discovery",
    estimatedTime: "25 mins",
    overview: "JTBD is a framework to understand customer behavior by identifying the 'job' a customer hires a product to do.",
    purpose: "Focuses product development on functional, social, and emotional needs rather than user demographics.",
    whenToUse: "During product discovery, feature scoping, and customer research.",
    advantages: [
      "Avoids demographic stereotyping",
      "Focuses on root customer motivations",
      "Identifies non-traditional competitors"
    ],
    limitations: [
      "Hard to quantify at scale",
      "Requires skill to conduct non-biased interviews"
    ],
    steps: [
      "Interview users to uncover struggles and triggers.",
      "Write Job Statements: 'When I [situation], I want to [action], so I can [outcome].'",
      "Identify functional, social, and emotional job attributes."
    ],
    example: "Milkshake study: Customers bought milkshakes in the morning not for dessert, but to keep them full during a long commute.",
    diagramType: "Job Canvas",
    relatedFrameworks: ["f-heart", "f-aarrr"],
    recommendedReading: ["p-jtbd-playbook", "b-mon-test"]
  },
  {
    id: "f-heart",
    title: "Google HEART Framework",
    abbreviation: "HEART",
    category: "Growth & Analytics",
    estimatedTime: "18 mins",
    overview: "Developed by Google, HEART is a framework to measure and improve the user experience of web applications at scale.",
    purpose: "Maps UX metrics (like satisfaction and tasks) to product goals.",
    whenToUse: "When measuring user adoption, satisfaction, and usability.",
    advantages: [
      "Fills the gap between business metrics and UX",
      "Consistent tracking framework",
      "Promotes user-centered outcomes"
    ],
    limitations: [
      "Difficult to measure in early products",
      "Requires event-tracking instrumentation"
    ],
    steps: [
      "Define goals for Happiness (H), Engagement (E), Adoption (A), Retention (R), and Task Success (T).",
      "Identify user signals that indicate success or failure for each.",
      "Establish quantitative metrics to track these signals."
    ],
    example: "Photo app: Happiness = positive survey scores; Engagement = photos uploaded per user/week; Retention = repeat users.",
    diagramType: "Matrix Grid Table",
    relatedFrameworks: ["f-aarrr", "f-northstar"],
    recommendedReading: ["p-heart-framework-metrics", "b-design-everyday"]
  },
  {
    id: "f-aarrr",
    title: "AARRR Pirate Metrics",
    abbreviation: "AARRR",
    category: "Growth & Analytics",
    estimatedTime: "22 mins",
    overview: "AARRR is a growth funnel framework mapping customer lifecycle steps: Acquisition, Activation, Retention, Referral, and Revenue.",
    purpose: "Visualizes the user conversion funnel, isolating bottleneck points.",
    whenToUse: "When reviewing product analytics, growth loops, and onboarding conversion funnels.",
    advantages: [
      "Covers the complete customer journey",
      "Exposes funnel drop-offs",
      "Aligns product, growth, and marketing"
    ],
    limitations: [
      "Linear funnel model (ignores complex loops)",
      "Focuses heavily on volume rather than product quality"
    ],
    steps: [
      "Acquisition: How do users find you? (Metric: sign-ups)",
      "Activation: Do they have a good first experience? (Metric: AHA moment)",
      "Retention: Do they return? (Metric: DAU/MAU)",
      "Referral: Do they invite others? (Metric: viral coefficient)",
      "Revenue: Do you monetize them? (Metric: conversion rate)"
    ],
    example: "SaaS app: Acquisition = organic search; Activation = completing profile creation; Retention = return within 7 days.",
    diagramType: "Funnel Graph",
    relatedFrameworks: ["f-heart", "f-northstar"],
    recommendedReading: ["p-amplitude-northstar", "p-plg-flywheel-metrics"]
  },
  {
    id: "f-northstar",
    title: "North Star Metric",
    abbreviation: "NSM",
    category: "Product Strategy",
    estimatedTime: "15 mins",
    overview: "The North Star Metric is the key metric that captures the core value your product delivers to customers.",
    purpose: "Aligns cross-functional teams around a single long-term success driver.",
    whenToUse: "When drafting company strategy, product roadmaps, or defining key objectives.",
    advantages: [
      "Simplifies organizational focus",
      "Ensures customer value is prioritized over vanity metrics",
      "Links short-term inputs to long-term revenue"
    ],
    limitations: [
      "Finding the right metric is difficult",
      "Single focus can lead to ignoring secondary indicators"
    ],
    steps: [
      "Identify the core value customers receive from your product.",
      "Choose a metric that measures this value exchange.",
      "Break down the North Star into actionable input metrics (Breadth, Depth, Frequency)."
    ],
    example: "Spotify: North Star Metric = Time spent listening to music; Inputs = onboarding activation, playlist creation.",
    diagramType: "Hierarchy Tree",
    relatedFrameworks: ["f-aarrr", "f-heart"],
    recommendedReading: ["p-amplitude-northstar", "b-measure-matters"]
  },
  {
    id: "f-bmc",
    title: "Business Model Canvas",
    abbreviation: "BMC",
    category: "Product Strategy",
    estimatedTime: "20 mins",
    overview: "BMC is a one-page strategic management template used to develop new or document existing business models.",
    purpose: "Visually maps out business logic, key activities, and value chains.",
    whenToUse: "When launching a new business unit, product line, or evaluating corporate models.",
    advantages: [
      "One-page comprehensive view",
      "Links value propositions directly to segments",
      "Great for stakeholder presentations"
    ],
    limitations: [
      "Lacks step-by-step startup validation",
      "Can get bloated with bullet points"
    ],
    steps: [
      "List Customer Segments and Value Propositions.",
      "Map Channels and Customer Relationships.",
      "Identify Revenue Streams and Cost Structure.",
      "List Key Resources, Activities, and Partners."
    ],
    example: "Uber: Segments = drivers & riders; Value Prop = tap a button, get a ride; Revenues = ride fee share.",
    diagramType: "9-Box Canvas Layout",
    relatedFrameworks: ["f-lean-canvas", "f-swot"],
    recommendedReading: ["p-lean-canvas-startup", "b-crossing-chasm"]
  },
  {
    id: "f-lean-canvas",
    title: "Lean Canvas",
    abbreviation: "LC",
    category: "Product Strategy",
    estimatedTime: "20 mins",
    overview: "Adapted from the Business Model Canvas, Lean Canvas is optimized for startups to map out assumptions and validate ideas.",
    purpose: "Replaces traditional business plans with a lightweight, validation-focused model.",
    whenToUse: "When validating a new startup idea or high-risk feature proposal.",
    advantages: [
      "Focuses on customer problems and solutions",
      "Highlights unfair advantages",
      "Highly actionable for early-stage validation"
    ],
    limitations: [
      "Does not address operational details",
      "Not suited for mature enterprise models"
    ],
    steps: [
      "Define top 3 problems and target customer segments.",
      "Draft unique value proposition (UVP) and corresponding solution.",
      "Identify channels, cost structure, and revenue streams.",
      "Define key metrics and your unfair advantage."
    ],
    example: "Doc sharing: Problem = email attachments are too big; Segment = busy lawyers; Solution = unique shared download link.",
    diagramType: "9-Box Agile Canvas Layout",
    relatedFrameworks: ["f-bmc", "f-swot"],
    recommendedReading: ["p-lean-canvas-startup", "b-lean-product"]
  },
  {
    id: "f-okr",
    title: "Objectives & Key Results",
    abbreviation: "OKR",
    category: "Product Strategy",
    estimatedTime: "15 mins",
    overview: "OKRs are a popular collaborative goal-setting framework used by teams to set challenging, ambitious goals with measurable results.",
    purpose: "Bridges company strategy with team execution by setting outcomes over outputs.",
    whenToUse: "At the start of planning cycles (quarterly or annually).",
    advantages: [
      "Aligns cross-functional dependencies",
      "Focuses on measurable outcomes",
      "Encourages ambitious target-setting"
    ],
    limitations: [
      "Prone to setting output tasks as key results",
      "Requires organizational buy-in"
    ],
    steps: [
      "Write Objectives: Inspirational, qualitative goals.",
      "Establish 3-5 Key Results: Quantitative, measurable metrics that define success.",
      "Define Initiatives: The activities and projects to achieve the OKRs."
    ],
    example: "Objective = Boost checkout conversion; KR = Reduce cart abandonment from 40% to 25%; Initiative = Add guest checkout.",
    diagramType: "Goal Hierarchy",
    relatedFrameworks: ["f-northstar"],
    recommendedReading: ["b-measure-matters", "p-okr-deployment-kit"]
  },
  {
    id: "f-swot",
    title: "SWOT Analysis",
    abbreviation: "SWOT",
    category: "Product Strategy",
    estimatedTime: "10 mins",
    overview: "SWOT evaluates Strengths, Weaknesses, Opportunities, and Threats to guide strategic planning.",
    purpose: "Assesses internal capabilities against external market forces.",
    whenToUse: "During strategic planning sessions or when launching new products.",
    advantages: [
      "Simple, structured analysis",
      "Identifies immediate risks and growth avenues"
    ],
    limitations: [
      "Lacks prioritization of factors",
      "Highly subjective analysis"
    ],
    steps: [
      "Strengths: What are our internal advantages?",
      "Weaknesses: Where do we lack capabilities?",
      "Opportunities: What external market trends can we leverage?",
      "Threats: What external forces could block our success?"
    ],
    example: "SaaS startup: Strength = fast iteration; Weakness = small sales team; Opportunity = competitors are legacy; Threat = new data privacy laws.",
    diagramType: "2x2 Quadrant Grid",
    relatedFrameworks: ["f-bmc", "f-lean-canvas"],
    recommendedReading: ["p-competitive-analysis"]
  },
  {
    id: "f-hook",
    title: "Hook Model",
    abbreviation: "HOOK",
    category: "Product Design",
    estimatedTime: "18 mins",
    overview: "The Hook Model details how products form customer habits through loops of triggers, actions, variable rewards, and investments.",
    purpose: "Guides the design of product features to increase user engagement and retention.",
    whenToUse: "When designing social, gaming, or high-retention SaaS onboarding loops.",
    advantages: [
      "Leverages behavioral psychology",
      "Increases customer lifetime value (LTV)"
    ],
    limitations: [
      "Ethical concerns regarding product addiction",
      "Not applicable to all utility/enterprise tools"
    ],
    steps: [
      "Trigger: Set up internal or external prompts (e.g. push notification).",
      "Action: The simplest behavior done in anticipation of a reward.",
      "Variable Reward: Satisfy the user's curiosity while leaving them wanting more.",
      "Investment: Have the user do a bit of work (e.g. data input) to load the next loop."
    ],
    example: "Instagram: Trigger = notification; Action = open app; Reward = new photo feed; Investment = post a photo.",
    diagramType: "Cyclic Loop",
    relatedFrameworks: ["f-jtbd", "f-heart"],
    recommendedReading: ["b-hooked", "p-product-onboarding"]
  },
  {
    id: "f-plg",
    title: "Product-Led Growth",
    abbreviation: "PLG",
    category: "Growth & Analytics",
    estimatedTime: "20 mins",
    overview: "PLG makes the product itself the main driver of customer acquisition, retention, and monetization.",
    purpose: "Reduces CAC by utilizing self-serve viral loops.",
    whenToUse: "When designing subscription SaaS products with low-touch sales models.",
    advantages: [
      "Lower CAC and sales overhead",
      "Increases speed of customer activation",
      "Highly scalable model"
    ],
    limitations: [
      "Requires a highly intuitive, self-serve UI",
      "May require sales assistance for enterprise tiers"
    ],
    steps: [
      "Remove signup friction: Offer free trials or freemium tiers.",
      "Shorten time-to-value: Guide users to their 'AHA!' moment quickly.",
      "Establish expansion loops: Build viral sharing features into the product."
    ],
    example: "Slack: Easy sign-up, invites teammates organically, prompts upgrade when history reaches limits.",
    diagramType: "Funnel Flywheel",
    relatedFrameworks: ["f-aarrr", "f-northstar"],
    recommendedReading: ["b-product-led-growth", "p-plg-flywheel-metrics"]
  },
  {
    id: "f-design-thinking",
    title: "Design Thinking",
    abbreviation: "DT",
    category: "Product Discovery",
    estimatedTime: "22 mins",
    overview: "Design Thinking is a human-centered approach to innovation that integrates customer needs, tech possibilities, and business requirements.",
    purpose: "Drives user-centric innovation through iterative design loops.",
    whenToUse: "When kickstarting a new product design or solving ambiguous user issues.",
    advantages: [
      "Highly collaborative and user-centric",
      "Encourages creative experimentation"
    ],
    limitations: [
      "Hard to manage in rapid sprint cycles",
      "Can get stuck in research loops"
    ],
    steps: [
      "Empathize: Research your users' needs.",
      "Define: State your users' needs and problems.",
      "Ideate: Challenge assumptions and create ideas.",
      "Prototype: Build representations of your ideas.",
      "Test: Try your solutions out."
    ],
    example: "Redesigning an medical scanner: Empathizing with child patients led to painting the scanner like a pirate ship to reduce anxiety.",
    diagramType: "Double Diamond / Loop",
    relatedFrameworks: ["f-jtbd"],
    recommendedReading: ["b-design-everyday", "p-user-interview-guide"]
  },
  {
    id: "f-opportunity-tree",
    title: "Opportunity Solution Tree",
    abbreviation: "OST",
    category: "Product Strategy",
    estimatedTime: "18 mins",
    overview: "Developed by Teresa Torres, the Opportunity Solution Tree is a visual tool to manage product discovery.",
    purpose: "Connects product solutions directly to target business outcomes.",
    whenToUse: "During continuous discovery cycles to manage backlogs.",
    advantages: [
      "Ensures business value guides feature scoping",
      "Prevents shipping features without customer value links",
      "Encourages exploring multiple solutions"
    ],
    limitations: [
      "Requires clear outcomes from leadership",
      "Difficult to model with overlapping targets"
    ],
    steps: [
      "Establish a clear target business outcome.",
      "Map user opportunities (needs, paint points) that drive this outcome.",
      "Ideate solutions for each opportunity.",
      "Define experiments to test solution assumptions."
    ],
    example: "Outcome = Increase active retention. Opportunity = Users can't find content. Solution = Add recommendations feed. Experiment = Mock landing section.",
    diagramType: "Hierarchy Tree Chart",
    relatedFrameworks: ["f-northstar", "f-okr"],
    recommendedReading: ["b-mon-test", "p-first-round-discovery"]
  },
  {
    id: "f-story-mapping",
    title: "User Story Mapping",
    abbreviation: "USM",
    category: "Product Discovery",
    estimatedTime: "15 mins",
    overview: "User Story Mapping arranges user stories to create a visual map of the user journey.",
    purpose: "Aligns teams on release boundaries and MVP scopes.",
    whenToUse: "When planning product iterations, release targets, or kickoff sessions.",
    advantages: [
      "Visualizes feature placement in the user journey",
      "Perfect tool to define MVP scopes",
      "Collaborative framework"
    ],
    limitations: [
      "Requires constant updates",
      "Can become cluttered with complex stories"
    ],
    steps: [
      "Identify the core user steps (the backbone).",
      "List tasks under each step.",
      "Slice the map horizontally to define releases (MVP, Release 2)."
    ],
    example: "Shopping flow: Backbone = Search, Checkout, Delivery. Tasks under Checkout = guest login, credit card, Apple Pay. Release 1 slice = credit card only.",
    diagramType: "2D Card Grid",
    relatedFrameworks: ["f-moscow", "f-jtbd"],
    recommendedReading: ["b-user-story-map", "p-user-story-standards"]
  },
  {
    id: "f-working-backwards",
    title: "Working Backwards",
    abbreviation: "AMZN-WB",
    category: "Product Strategy",
    estimatedTime: "25 mins",
    overview: "Amazon's Working Backwards process requires writing a mock Press Release (PR) and FAQ document before writing any code.",
    purpose: "Validates customer value before allocating design or engineering resources.",
    whenToUse: "When pitching high-risk initiatives or proposing new product lines.",
    advantages: [
      "Exposes customer value early",
      "Sets clear targets for teams",
      "Reduces pivot costs"
    ],
    limitations: [
      "Requires writing skills",
      "Can slow down early discovery cycles"
    ],
    steps: [
      "Write a mock Press Release announcing the product launch.",
      "Draft FAQs covering customer questions and internal details.",
      "Define user requirements based on these drafts."
    ],
    example: "Kindle launch: The PR/FAQ was drafted years before the hardware design was locked in.",
    diagramType: "Document Template",
    relatedFrameworks: ["f-bmc", "f-lean-canvas"],
    recommendedReading: ["b-working-backwards", "p-pm-prd-guide"]
  },
  {
    id: "f-pmf",
    title: "Product-Market Fit Survey",
    abbreviation: "PMF",
    category: "Growth & Analytics",
    estimatedTime: "15 mins",
    overview: "The PMF metric (developed by Sean Ellis) measures fit by asking customers how disappointed they would be if the product disappeared.",
    purpose: "Quantifies product-market fit to guide growth decisions.",
    whenToUse: "When evaluating early traction or preparing to scale marketing.",
    advantages: [
      "Clear metric: 40% threshold for PMF",
      "Simple user feedback loop"
    ],
    limitations: [
      "Can be skewed by surveying inactive users"
    ],
    steps: [
      "Ask: 'How would you feel if you could no longer use this product?'",
      "Options: Very disappointed, Somewhat disappointed, Not disappointed.",
      "Calculate the percentage of 'Very disappointed' answers. Target > 40%."
    ],
    example: "Superhuman: Polled early testers, hit 58% very disappointed, and launched their expansion.",
    diagramType: "Survey Chart",
    relatedFrameworks: ["f-aarrr", "f-northstar"],
    recommendedReading: ["b-lean-product", "p-cohort-analysis"]
  },
  {
    id: "f-gist",
    title: "GIST Planning",
    abbreviation: "GIST",
    category: "Product Strategy",
    estimatedTime: "15 mins",
    overview: "GIST stands for Goals, Ideas, Step-projects, and Tasks. It is an agile planning methodology created to replace static roadmaps.",
    purpose: "Enables flexible planning to easily pivot based on metrics.",
    whenToUse: "When designing dynamic roadmaps in fast-moving tech companies.",
    advantages: [
      "Highly adaptable",
      "Connects daily tasks directly to corporate goals",
      "Minimizes wasted engineering resources"
    ],
    limitations: [
      "Requires organizational trust",
      "Harder to present to external stakeholders"
    ],
    steps: [
      "Goals: What are the target metrics? (e.g. OKRs)",
      "Ideas: What are the possible ways to achieve these goals?",
      "Step-projects: Create small, 2-4 week test steps to validate ideas.",
      "Tasks: Break down the active step-projects into sprint tasks."
    ],
    example: "Goal = Reduce signup churn. Idea = Add Google login. Step-project = Mock button test. Task = Wire up OAuth client.",
    diagramType: "Agile Flow Tree",
    relatedFrameworks: ["f-okr", "f-opportunity-tree"],
    recommendedReading: ["b-build-trap", "p-okr-deployment-kit"]
  }
];
