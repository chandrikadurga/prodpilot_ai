export const templatesData = [
  {
    id: "t-prd",
    title: "Product Requirements Document (PRD)",
    description: "The classic Silicon Valley PRD template. Maps target goals, user stories, technical specifications, release metrics, and edge cases.",
    category: "Product Discovery",
    tags: ["PRD", "Discovery", "Scoping"],
    isBookmarked: true,
    isFavorite: true,
    previewContent: `# Product Requirements Document (PRD)

## 1. Overview & Objectives
- **Product Name**: [Name]
- **Target Release Date**: [Date]
- **Author**: [PM Name]
- **Goals**: Summarize the target outcome. Why are we building this?

## 2. Target Audience & Personas
- Define who this feature serves.
- What pain points does it address?

## 3. High-Level Requirements & User Stories
- **Story 1**: As a user, I want to [action] so that I can [outcome].
- **Story 2**: As an admin, I want to [action] so that I can [outcome].

## 4. Technical Specifications & Data Models
- Outline key APIs, states, and DB adjustments.

## 5. Scope & Out of Scope
- **In Scope**: Release bounds.
- **Out of Scope**: Deferred features.

## 6. Success Metrics & Analytics
- Core KPI to track (e.g. Conversion rate, N-day retention).`
  },
  {
    id: "t-user-story",
    title: "User Story & Acceptance Criteria Sheet",
    description: "Blueprint to write clean agile user stories with strict Gherkin syntax (Given-When-Then) for developer handoff.",
    category: "Agile Development",
    tags: ["User Stories", "Agile", "Handoff"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# User Story & Acceptance Criteria

## 1. Story Card
- **User Role**: [As a...]
- **Capability**: [I want to...]
- **Benefit**: [So that I can...]

## 2. Scenario 1: Successful Path
- **Given** [Initial state/context]
- **When** [Action is triggered]
- **Then** [Expected outcome]

## 3. Scenario 2: Error Path
- **Given** [Initial state/context]
- **When** [Invalid action is triggered]
- **Then** [Error is shown & handled]`
  },
  {
    id: "t-roadmap",
    title: "Strategic Product Roadmap (Now-Next-Later)",
    description: "Outcome-based product roadmap template. Replaces hard date deadlines with strategic execution horizons.",
    category: "Product Strategy",
    tags: ["Roadmap", "Strategy", "Outcomes"],
    isBookmarked: true,
    isFavorite: false,
    previewContent: `# Strategic Product Roadmap (Now-Next-Later)

## 1. Executive Summary
- Core theme: Product direction for the next 3 quarters.

## 2. Horizons
- **NOW (Active Cycle)**: Core user onboarding rewrite, checkouts conversion.
- **NEXT (Next 1-2 Cycles)**: Multi-currency billing support, team collaboration dashboard.
- **LATER (Long term ideas)**: AI automated recommendation feeds, custom plugin ecosystem.

## 3. Outcome Alignment
- How each item links directly to our current OKRs.`
  },
  {
    id: "t-sprint-plan",
    title: "Sprint Planning Canvas",
    description: "Framework to run sprint planning: setting sprint goals, listing capacity constraints, and aligning team priorities.",
    category: "Agile Development",
    tags: ["Sprint Planning", "Agile", "Velocity"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Sprint Planning Canvas

- **Sprint Name**: Sprint [Number]
- **Duration**: [Start Date] to [End Date]
- **Sprint Goal**: State the single most important outcome for the sprint.

## 1. Capacity & Velocity Tracker
- **Total Team Capacity**: [Points]
- **Target Velocity**: [Average Points]

## 2. Selected Backlog Items
- List stories, bugs, and tasks committed to this sprint.`
  },
  {
    id: "t-release-notes",
    title: "User-Facing Release Notes",
    description: "Template to translate technical changelogs into engaging product release copy for customers.",
    category: "Product Launch",
    tags: ["Changelog", "Release", "Marketing"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Product Release Notes

- **Release Version**: v[Number]
- **Release Date**: [Date]

## 🚀 What's New!
- **New Feature Title**: Describe the value added to the customer.

## 🛠️ Enhancements & Bug Fixes
- **Enhancement 1**: Describe optimization details.
- **Fix 1**: Details of resolved bugs.`
  },
  {
    id: "t-stakeholder-update",
    title: "Monthly Stakeholder Status Report",
    description: "Brief dashboard update summarizing key metrics, launch accomplishments, upcoming risks, and resource plans.",
    category: "Product Leadership",
    tags: ["Stakeholders", "Report", "Communication"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Monthly Stakeholder Status Report

- **Report Month**: [Month]
- **Target Audience**: Leadership & Executives

## 📈 Key Metrics Dashboard
- Core KPI Performance: [Metric Value] vs [Target]

## 🏆 Core Accomplishments
- What did the team ship this month?

## ⚠️ Active Risks & Blockers
- List timeline blockers, server constraints, or resource shortages.`
  },
  {
    id: "t-risk-register",
    title: "Product Risk Assessment Register",
    description: "Template to audit and rank product development risks across Value, Usability, Feasibility, and Viability.",
    category: "Agile Development",
    tags: ["Risk", "Mitigation", "Audit"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Product Risk Assessment Register

## 1. Value Risk
- **Risk**: Customers don't buy or use the feature.
- **Mitigation plan**: Customer research, fake-door tests.

## 2. Usability Risk
- **Risk**: Users can't figure out how to use it.
- **Mitigation plan**: Usability tests, Figma mockups.

## 3. Feasibility Risk
- **Risk**: Engineering can't build it in time.
- **Mitigation plan**: Tech spike, scoping adjustments.

## 4. Viability Risk
- **Risk**: Feature violates compliance, legal, or finance policies.
- **Mitigation plan**: Pre-launch reviews.`
  },
  {
    id: "t-product-strategy",
    title: "Product Strategy & Kernel Canvas",
    description: "Structured canvas to define your product's core diagnosis, guiding policies, and coherent action lists.",
    category: "Product Strategy",
    tags: ["Strategy", "Kernel", "Richard Rumelt"],
    isBookmarked: true,
    isFavorite: true,
    previewContent: `# Product Strategy & Kernel Canvas

## 1. Diagnosis
- Describe the key challenge your product faces in the current market.

## 2. Guiding Policy
- Establish a logical method to address the diagnosis (do not list metrics; list policies).

## 3. Coherent Actions
- List concrete projects, team allocations, and features to execute this guiding policy.`
  },
  {
    id: "t-competitor-analysis",
    title: "Competitor Intelligence & Feature Grid",
    description: "Grid framework to analyze competitor pricing tiers, product feature offerings, strengths, and weaknesses.",
    category: "Product Strategy",
    tags: ["Competitors", "Market Intelligence"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Competitor Intelligence Grid

## 1. Competitor Profile
- **Name**: [Competitor Name]
- **Pricing Model**: [Subscription/Freemium]

## 2. Feature Comparison
- **Features present**: List core capabilities.
- **Differentiators**: Where do we outperform them?`
  },
  {
    id: "t-gtm-strategy",
    title: "Go-To-Market (GTM) Launch Planner",
    description: "Launch calendar template mapping target segments, pricing structures, marketing channels, and customer success handoffs.",
    category: "Product Launch",
    tags: ["GTM", "Launch Plan", "Marketing"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Go-To-Market (GTM) Launch Planner

## 1. Target Audience & Positioning
- Who is this launch for? Define target messaging.

## 2. Marketing Channels
- Content marketing, organic search, paid ad funnels, product notifications.

## 3. Launch Timeline
- **T-Minus 1 Month**: Internal beta test.
- **Launch Day**: Press release, newsletter blast.`
  },
  {
    id: "t-customer-journey",
    title: "Customer Journey Mapping Canvas",
    description: "Horizontal canvas tracking user stages, actions, thoughts, pain points, and product opportunities.",
    category: "Product Discovery",
    tags: ["Customer Journey", "UX Design"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Customer Journey Mapping Canvas

## 1. User Stages
- **Discovery**: How the user hears about the product.
- **Onboarding**: Signing up and initial setup.
- **Core Loop**: Daily execution and usage.

## 2. Touchpoints & Actions
- List customer clicks and field entries for each stage.`
  },
  {
    id: "t-feature-spec",
    title: "One-Page Feature Specification",
    description: "Brief feature pitch template detailing target metrics, simple mock user flows, and release scoping outlines.",
    category: "Product Discovery",
    tags: ["Spec", "One-Pager", "Scoping"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# One-Page Feature Spec

- **Feature Title**: [Name]
- **Target Outcome**: [Outcome KPI]

## 1. The Opportunity
- Why build this now? What is the user struggle?

## 2. The Solution
- Outline the proposed UX flow.`
  },
  {
    id: "t-persona",
    title: "Target User Persona Template",
    description: "Profile sheet outlining user background details, target goals, core frustrations, and favorite apps.",
    category: "Product Discovery",
    tags: ["Personas", "UX Research"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Target User Persona

- **Name**: [Persona Name]
- **Role**: [Job Title]

## 1. Profile & Goals
- What are they trying to accomplish at work?

## 2. Frustrations & Pain Points
- What blocks them from achieving their goals?`
  },
  {
    id: "t-retrospective",
    title: "Agile Sprint Retrospective Guide",
    description: "Framework to run sprint retrospectives: cataloging what went well, what went wrong, and setting action points.",
    category: "Agile Development",
    tags: ["Retro", "Agile", "Team Optimization"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Agile Sprint Retrospective

- **Sprint**: Sprint [Number]

## 1. What Went Well?
- List successful team workflows, shipping milestones, or deployments.

## 2. What Went Wrong?
- List blockers, communications issues, or bug alerts.

## 3. Action Items for Next Sprint
- Coherent, assigned tasks to fix weaknesses.`
  },
  {
    id: "t-launch-checklist",
    title: "Beta & Production Launch Checklist",
    description: "Pre-flight check tracker mapping database migrations, QA sign-offs, legal terms, and operational support checks.",
    category: "Product Launch",
    tags: ["Checklist", "Deployment", "Operations"],
    isBookmarked: false,
    isFavorite: false,
    previewContent: `# Production Launch Checklist

- **Product Name**: [Name]

## 1. QA & Technical Check
- [ ] Database migration complete.
- [ ] Stress-testing verified.

## 2. Legal & Operations Check
- [ ] Privacy updates signed.
- [ ] Support team documentation uploaded.`
  }
];
