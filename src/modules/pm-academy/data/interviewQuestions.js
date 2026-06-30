export const interviewQuestionsData = [
  // 1. Product Sense (1-15)
  {
    id: "q-1",
    category: "Product Sense",
    difficulty: "Medium",
    estimatedTime: "20 mins",
    question: "How would you design a fire alarm system for a school with deaf students?",
    hint: "Think about user personas (deaf students, blind students, teachers, emergency staff) and prioritize sensory feedback (visual, tactile, auditory).",
    guideAnswer: "1. Clarify constraints: School type, age group, budgets. 2. Define User Personas: Deaf students, teachers, blind staff. 3. List pain points: Incapability to hear standard audio rings, panic during rushes. 4. Brainstorm Solutions: Flashing neon wall panels, vibrating smart wearables for students, automatic directional floor paths. 5. Prioritize: Wearables + flashing light panels. 6. Summarize metrics (false-alarm rates, test-drill speed)."
  },
  {
    id: "q-2",
    category: "Product Sense",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "Design an elevator control panel for a 100-story building.",
    hint: "Identify efficiency bottlenecks, user profiles (residents, workers, cleaners), and accessibility settings (wheelchair heights, blind braille).",
    guideAnswer: "1. Clarify constraints: Elevator counts, destination dispatching options. 2. Define Personas: Commuters, cargo handlers. 3. Core Problems: Long wait times, button clutter. 4. Solutions: Keypad destination dispatching in lobbies, custom mobile app integration, priority cleaning modes. 5. Prioritize: Destination dispatching keypads. 6. Tradeoffs & safety features."
  },
  {
    id: "q-3",
    category: "Product Sense",
    difficulty: "Easy",
    estimatedTime: "15 mins",
    question: "What is your favorite product and how would you improve it?",
    hint: "Choose a product you know well. Focus on why it has great UX, then identify a friction point and propose a creative feature to resolve it.",
    guideAnswer: "1. Pick product (e.g. Kindle). 2. Explain value: E-ink, battery life, simple library index. 3. Target User Segment: Heavy readers who study. 4. Pain Point: Difficulty transferring highlighters to study tools (like Anki). 5. Solution Proposal: Export integration to flashcards automatically. 6. Metrics: Export trigger counts, cohort retention."
  },
  {
    id: "q-4",
    category: "Product Sense",
    difficulty: "Medium",
    estimatedTime: "20 mins",
    question: "How would you improve the restaurant search experience on Google Maps?",
    hint: "Focus on user intent when dining: quick takeout, group reservations, special diets, or dating spots.",
    guideAnswer: "1. Segment Diners: Group planners, solo quick lunch eaters. 2. Pain point: Split decision grids, fake review alerts. 3. Solutions: Group voting pins, live wait-time trackers, dietary safety filters. 4. Prioritization: Group voting pin selectors. 5. Target metrics: Restaurant visit conversions."
  },
  {
    id: "q-5",
    category: "Product Sense",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "Design a ridesharing app optimized for senior citizens.",
    hint: "Think about user limitations: low eyesight, lack of smartphone familiarity, and trust issues with automated billing.",
    guideAnswer: "1. Personas: Elders (75+), family helpers. 2. Pain Points: Small screen buttons, driver communication, billing clarity. 3. Solutions: Voice-activated booking, helper-managed cards, extra-assistance request checkboxes. 4. Prioritize: Extra-assistance matches + simplified font UI. 5. Safety metrics."
  },
  {
    id: "q-6",
    category: "Product Sense",
    difficulty: "Medium",
    estimatedTime: "20 mins",
    question: "How would you design a smart luggage tag?",
    hint: "Balance battery constraints, connection range (cellular, Bluetooth, GPS), and international regulations.",
    guideAnswer: "1. Segment travelers: Business flyers, backpackers. 2. Core goals: Location accuracy, luggage pick alert. 3. Features: Solar recharge strip, worldwide tracking, carousel proximity alerts. 4. Hardware compromises. 5. Launch testing."
  },
  {
    id: "q-7",
    category: "Product Sense",
    difficulty: "Easy",
    estimatedTime: "15 mins",
    question: "Design a better alarm clock for deep sleepers.",
    hint: "Standard ringtones fail. Think about tactile triggers, lights, or puzzles required to turn it off.",
    guideAnswer: "1. Pain point: Muscle memory snooze click. 2. Solutions: Smart mat requiring standing for 10 seconds, QR code scanner in bathroom, dynamic puzzle solve triggers. 3. MVP selection."
  },
  {
    id: "q-8",
    category: "Product Sense",
    difficulty: "Medium",
    estimatedTime: "20 mins",
    question: "Design a kitchen assistant for blind cooks.",
    hint: "Focus heavily on tactile markers, audio output, voice-first commands, and safety/burn protection.",
    guideAnswer: "1. Users: Visually impaired home cooks. 2. Hazards: Hot elements, sharp knives, measuring accuracy. 3. Solutions: Audio scale, voice-temperature monitor, color-coded boundary mats. 4. Selection: Voice-integrated probe and stove controller."
  },
  {
    id: "q-9",
    category: "Product Sense",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "How would you improve the user onboarding of Slack?",
    hint: "Slack relies on team network effects. Onboarding a single user is different from onboarding an entire organization.",
    guideAnswer: "1. Problem: Empty chat rooms, confusion about channels. 2. Solutions: Interactive sandbox channel, template starter rooms, bot-coached tutorials. 3. Goal: Hit the 'AHA' moment (active communication)."
  },
  {
    id: "q-10",
    category: "Product Sense",
    difficulty: "Medium",
    estimatedTime: "20 mins",
    question: "Design a vending machine for a gym.",
    hint: "Identify customer goals: hydration, muscle recovery, workout energy. Think about payments and inventory.",
    guideAnswer: "1. Segments: Bodybuilders, cardio runners. 2. Products: Protein shakes, ice water, straps. 3. Features: Touchscreen allergen filters, shaker bottle wash docks, membership scan payments. 4. Metrics."
  },
  {
    id: "q-11",
    category: "Product Sense",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "How would you design a digital library for kids under 8?",
    hint: "Children cannot read search bars. Focus on visual indexing, audio storytelling, and parental safety gates.",
    guideAnswer: "1. Segments: Pre-readers (3-5), early readers (6-8). 2. UI: Voice search, character icons, gamified progression bars. 3. Parental Dashboard: screen limits, reading reviews."
  },
  {
    id: "q-12",
    category: "Product Sense",
    difficulty: "Easy",
    estimatedTime: "15 mins",
    question: "Design an e-commerce platform for locally grown agricultural products.",
    hint: "Freshness constraints, local logistics, and price fluctuations are key.",
    guideAnswer: "1. Target: Local residents and farmers. 2. Features: Community pickups, subscription farm bags, harvest trackers. 3. Delivery logistics balance."
  },
  {
    id: "q-13",
    category: "Product Sense",
    difficulty: "Medium",
    estimatedTime: "20 mins",
    question: "Design a pet feeder for busy dog owners.",
    hint: "Think about camera tracking, portion controls, and connectivity logs.",
    guideAnswer: "1. Segment: Remote working professionals. 2. Features: Scheduled portion releases, custom audio calls, spill-proof structures. 3. Fail-safe battery mechanisms."
  },
  {
    id: "q-14",
    category: "Product Sense",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "How would you improve the Kindle for classroom study?",
    hint: "Kindle is built for linear reading. Classroom study requires cross-referencing, highlighting, and flashcard sharing.",
    guideAnswer: "1. Target: College students. 2. Needs: Quick page-flipping, margin comments, class study folders. 3. Solutions: Split screen pages, group annotations, quiz generators. 4. MVP selection."
  },
  {
    id: "q-15",
    category: "Product Sense",
    difficulty: "Medium",
    estimatedTime: "20 mins",
    question: "Design a parking meter for modern cities.",
    hint: "Address payment ease (mobile, cards), parking space sensors, and city enforcement alerts.",
    guideAnswer: "1. Target: Commuters, city wardens. 2. Features: License plate parking apps, occupancy lights, smart coin slots. 3. Revenue optimization."
  },

  // 2. Behavioral (16-30)
  {
    id: "q-16",
    category: "Behavioral",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "Tell me about a time you failed and what you learned.",
    hint: "Choose a real professional failure. Describe what went wrong, take ownership, and outline how you changed your process afterwards.",
    guideAnswer: "Use STAR (Situation, Task, Action, Result) method. Focus heavily on 'Learned' and steps taken to prevent recurrence."
  },
  {
    id: "q-17",
    category: "Behavioral",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "Describe a conflict you had with an engineering lead and how you resolved it.",
    hint: "Product and engineering often clash on scope vs. timeline. Show empathy, active listening, and evidence-based compromises.",
    guideAnswer: "1. Set context (scope debate). 2. Action: Set up data reviews, aligned requirements to goals, compromized on phased releases. 3. Result: Successful launch."
  },
  {
    id: "q-18",
    category: "Behavioral",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "How do you handle feature requests from key stakeholders that differ from the product roadmap?",
    hint: "Stakeholders are important. Show how you communicate roadmap strategies with data validation grids instead of simple 'No' answers.",
    guideAnswer: "1. Value feedback. 2. Score feature using RICE framework. 3. Present data-backed comparison grids to stakeholder showing relative tradeoffs. 4. Build collaborative alignment."
  },
  {
    id: "q-19",
    category: "Behavioral",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "Why do you want to be a Product Manager?",
    hint: "Focus on your passion for solving customer problems, coordinating cross-functional teams, and driving business value.",
    guideAnswer: "Avoid generic answers. Connect personal background, empathy for builders, and passion for product success metrics."
  },
  {
    id: "q-20",
    category: "Behavioral",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "How do you prioritize your time when everything is a priority?",
    hint: "Describe your personal planning workflow: OKR alignments, Eisenhower matrix, and saying 'no' to non-impact meetings.",
    guideAnswer: "Detail prioritization strategies: calendar blocks, alignment to top OKRs, delegating support tasks."
  },
  {
    id: "q-21",
    category: "Behavioral",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "Tell me about a time you had to launch a product with incomplete data.",
    hint: "Highlight your risk-mitigation plans: phased beta releases, continuous monitoring, and quick revert toggles.",
    guideAnswer: "1. Situation: Market window closing, data lagging. 2. Action: Qualitative beta checks, launch behind flag controls. 3. Result: Clean data collection post-launch."
  },
  {
    id: "q-22",
    category: "Behavioral",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you handle negative user feedback after launching a feature?",
    hint: "Don't get defensive. Filter feedback for patterns, isolate bugs, and communicate iteration cycles.",
    guideAnswer: "1. Listen: Tag comments. 2. Group feedback: Usability bugs vs feature misalignment. 3. Iterate: Re-scope blockers."
  },
  {
    id: "q-23",
    category: "Behavioral",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "How do you define the role of a Product Manager relative to design and engineering?",
    hint: "PMs own the 'Why' and 'What'. Designers own the 'Who' and UX. Engineers own the 'How' and feasibility.",
    guideAnswer: "Emphasize collaboration. Avoid 'CEO of the product' stereotypes. Focus on alignment, support, and clarity."
  },
  {
    id: "q-24",
    category: "Behavioral",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "Tell me about a time you had to kill a feature.",
    hint: "Explain how you evaluated data (low usage, high maintenance cost), aligned stakeholders, and managed client deprecation notices.",
    guideAnswer: "1. Diagnosis: low adoption of feature X. 2. Action: stake holder alignment, phased deprecation support. 3. Result: saved team resources."
  },
  {
    id: "q-25",
    category: "Behavioral",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "Describe a time you convinced leadership to pivot a product.",
    hint: "Focus on how you used user research data, competitive changes, and financial impact metrics to prove the need to pivot.",
    guideAnswer: "Use data-driven storytelling. Frame pivot as resource optimization for higher yielding targets."
  },
  {
    id: "q-26",
    category: "Behavioral",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you build team morale after a failed launch?",
    hint: "Focus on post-mortems without pointing fingers. Celebrate the effort, extract lessons, and set clear goals for the next iteration.",
    guideAnswer: "Promote psychological safety. Frame failures as learning loops."
  },
  {
    id: "q-27",
    category: "Behavioral",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "Tell me about a time you managed a project with tight deadlines.",
    hint: "Describe how you managed scope tradeoffs, cut non-essential features, and ran daily syncs to prevent delays.",
    guideAnswer: "Explain critical path analysis. Describe cutting could-have features from scope."
  },
  {
    id: "q-28",
    category: "Behavioral",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "How do you manage a remote product team across different time zones?",
    hint: "Highlight asynchronous documentation, centralized ticketing structures, and clean meeting rules.",
    guideAnswer: "Define async tools. Set clear guidelines for ticket handoffs."
  },
  {
    id: "q-29",
    category: "Behavioral",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you handle a change in company strategy from leadership?",
    hint: "Show adaptability. Focus on translating the new vision into concrete roadmap changes for your team.",
    guideAnswer: "Explain alignment maps. Re-evaluate existing projects against the new guidelines."
  },
  {
    id: "q-30",
    category: "Behavioral",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "How do you run post-launch reviews (post-mortems)?",
    hint: "Review KIs, data metrics, and developer issues. Focus on setting action points to optimize the next launch.",
    guideAnswer: "Outline post-mortem agendas: metric reviews, team retro points, ticket logs."
  },

  // 3. Metrics & Execution (31-50)
  {
    id: "q-31",
    category: "Metrics",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "We launched a feature that increases sign-ups but drops 7-day retention. Is this a success?",
    hint: "Calculate Lifetime Value (LTV). Retention is the primary driver of LTV. Higher acquisition with low retention usually leads to high churn.",
    guideAnswer: "1. Diagnosis: Signups up, retention down. 2. Calculations: Segment users. Is the drop across all cohorts or just bad signups? 3. Evaluation: Retention is the ultimate metric for SaaS. If retention drops, the product isn't holding value. 4. Recommendation: Iterate onboarding to filter unqualified signups."
  },
  {
    id: "q-32",
    category: "Metrics",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "What metrics would you track for Amazon Prime Video?",
    hint: "Think about user acquisition (Prime signups), engagement (view hours, frequency), and retention (churn rates).",
    guideAnswer: "1. North Star: Total Stream Hours. 2. Core inputs: Active subscribers count, session frequency, content completion rates. 3. Financial: Subscription renewal rate, cross-sale metrics."
  },
  {
    id: "q-33",
    category: "Execution",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "Uber's match rate drops by 5% in a single day. How do you diagnose this?",
    hint: "Isolate variables: geography, device types, app version releases, server outages, weather changes, or competitor promotions.",
    guideAnswer: "1. Clarify scope: Global or local? 2. Funnel Audit: App opens -> ride requests -> driver accepts -> trip match. Isolate step drops. 3. External: Weather, holidays, competitor discount. 4. Technical: Server lags or payment API drop-offs. 5. Root cause analysis."
  },
  {
    id: "q-34",
    category: "Metrics",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "Define the key success metrics for Google Maps search.",
    hint: "Google Maps search connects users to local businesses. Track search volume, direction requests, and call clicks.",
    guideAnswer: "1. Goal: User finds destination. 2. Metrics: Direction navigation triggers, local call clicks, search success rates (lack of immediate re-queries)."
  },
  {
    id: "q-35",
    category: "Execution",
    difficulty: "Medium",
    estimatedTime: "18 mins",
    question: "How would you design an A/B test to test a new checkout flow?",
    hint: "Define null hypothesis, target metrics (conversion), sample sizes, and duration rules to avoid statistical errors.",
    guideAnswer: "1. Hypothesis: New flow reduces checkout fields, boosting conversion by 2%. 2. Setup: 50/50 split, track completion rate. 3. Constraints: Calculate statistical significance (p-value < 0.05)."
  },
  {
    id: "q-36",
    category: "Metrics",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "Explain the difference between LTV and CAC, and how you use them to make strategic tradeoffs.",
    hint: "LTV must exceed CAC. A target ratio is 3:1. High CAC requires optimizing onboarding or self-serve models.",
    guideAnswer: "Detail equations. Discuss how to optimize self-serve signups to lower CAC when LTV is low."
  },
  {
    id: "q-37",
    category: "Execution",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you evaluate user engagement on a messaging app?",
    hint: "Engagement is measured by frequency and depth. Track messages sent, daily active ratios, and session duration.",
    guideAnswer: "Track active cohorts. Key metrics: DAU/MAU ratios, messages sent per user session."
  },
  {
    id: "q-38",
    category: "Metrics",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "What metrics would you monitor for a SaaS billing page?",
    hint: "Focus on conversion rates, card errors, page load speeds, and cart abandonment points.",
    guideAnswer: "Track: load times, error code rates, abandonment rates, checkout conversions."
  },
  {
    id: "q-39",
    category: "Execution",
    difficulty: "Hard",
    estimatedTime: "22 mins",
    question: "Airbnb's booking conversion rate drops after a search redesign. How do you analyze the issue?",
    hint: "Check if the drop is localized to specific search terms, screen sizes, page load speeds, or filter inputs.",
    guideAnswer: "1. Segment data: Mobile vs Desktop. 2. Funnel tracking: search -> listing clicked -> checkout opened -> booking completed. Isolate the drop step."
  },
  {
    id: "q-40",
    category: "Metrics",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "Define metrics for a feature launch checklist.",
    hint: "Before launching, define target adoption rates, bug counts, load times, and customer ticket rates.",
    guideAnswer: "Outline launch dashboard: load speeds, adoption rates, error counts, support ticket rates."
  },
  {
    id: "q-41",
    category: "Execution",
    difficulty: "Medium",
    estimatedTime: "18 mins",
    question: "How do you prioritize bug fixes versus new feature requests?",
    hint: "Categorize bugs by severity and customer impact. Balance maintenance costs with feature value yields.",
    guideAnswer: "Define priority matrices: Critical bugs (blocks checkout) > High value roadmap features > Low impact bug fixes."
  },
  {
    id: "q-42",
    category: "Metrics",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "What is Churn Rate, and how do you calculate it for a B2B SaaS with monthly and annual plans?",
    hint: "Annual contracts churn differently than monthly subscriptions. Separate calculations into user churn and logo churn cohorts.",
    guideAnswer: "Explain NRR (Net Revenue Retention) and Logo Churn. Detail segmented retention calculations."
  },
  {
    id: "q-43",
    category: "Execution",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you optimize the page load time of a dashboard?",
    hint: "Web performance features: asset optimizations, pagination query controls, and client cache layers.",
    guideAnswer: "Detail solutions: backend pagination, image assets compression, React lazy loading."
  },
  {
    id: "q-44",
    category: "Metrics",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "Define key metrics for a notification center.",
    hint: "Track delivery success, click-through rates (CTR), clear/dismiss rates, and opt-out percentages.",
    guideAnswer: "Track: CTR, notification count per user, opt-out rates, screen opens."
  },
  {
    id: "q-45",
    category: "Execution",
    difficulty: "Hard",
    estimatedTime: "22 mins",
    question: "A competitor drops pricing by 20%. How do you respond?",
    hint: "Do not default to pricing wars. Analyze competitor target segments and evaluate your product's unique value props.",
    guideAnswer: "1. Diagnosis: Assess segment overlap. 2. Options: Do nothing, match price, or bundle features to raise LTV. 3. Select: Bundle value additions to protect margin."
  },
  {
    id: "q-46",
    category: "Metrics",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "How do you track the viral coefficient of a referral loop?",
    hint: "The viral coefficient (K-factor) is the number of new users generated by a single active user.",
    guideAnswer: "Explain K-factor equation: K = invites sent per user × conversion rate. Target K > 1 for viral growth."
  },
  {
    id: "q-47",
    category: "Execution",
    difficulty: "Medium",
    estimatedTime: "18 mins",
    question: "How do you coordinate a launch across marketing, sales, and engineering?",
    hint: "Centralize requirements, hold sync alignment meetings, and run QA checks.",
    guideAnswer: "Outline launch checklists, feedback sync schedules, and beta test steps."
  },
  {
    id: "q-48",
    category: "Metrics",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "Define metrics to evaluate search relevance.",
    hint: "Relevance metrics: Mean Reciprocal Rank (MRR), click position, and re-query rates.",
    guideAnswer: "Explain MRR and search click positions. Detail re-query rates."
  },
  {
    id: "q-49",
    category: "Execution",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you structure an internal beta test?",
    hint: "Set up feature flags, write testing guide scripts, and gather bug tickets.",
    guideAnswer: "Outline testing cohort selections, feature flag releases, and feedback lists."
  },
  {
    id: "q-50",
    category: "Metrics",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "What metrics indicate that user onboarding is broken?",
    hint: "Look for high bounce rates, low onboarding completion, and drop-offs at profile creation steps.",
    guideAnswer: "Track: signup abandonment, drop-off rates at step X, DAU ratio of new cohorts."
  },

  // 4. SQL, Analytics & Tech (51-70)
  {
    id: "q-51",
    category: "SQL",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "Write an SQL query to calculate DAU/MAU ratio for June 2026.",
    hint: "You need active users per day, and active users per month. Use distinct counts on user ID.",
    guideAnswer: "SELECT COUNT(DISTINCT user_id) as active_users FROM login_events WHERE event_date = '2026-06-30'; Combine using join or subqueries to calculate June MAU and divide."
  },
  {
    id: "q-52",
    category: "Analytics",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "How would you build a cohort retention table from raw signups and login logs?",
    hint: "Group users by signup month. For each month, calculate the percentage of those users who logged in during month 1, month 2, etc.",
    guideAnswer: "1. Join signups table with logins table on user_id. 2. Calculate timediff in months. 3. Group by signup cohort month. 4. Divide active cohort count by total cohort size."
  },
  {
    id: "q-53",
    category: "Analytics",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "What is statistical significance, and how do you calculate it for an A/B test?",
    hint: "Use p-value, z-score, and confidence intervals to ensure your test results are not due to random chance.",
    guideAnswer: "Explain statistical significance. Detail z-score calculations and target p-value < 0.05 thresholds."
  },
  {
    id: "q-54",
    category: "SQL",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "Write an SQL query to find top 5 features clicked by users.",
    hint: "Use GROUP BY, COUNT, and ORDER BY DESC with LIMIT 5.",
    guideAnswer: "SELECT feature_name, COUNT(*) as click_count FROM click_events GROUP BY feature_name ORDER BY click_count DESC LIMIT 5;"
  },
  {
    id: "q-55",
    category: "Analytics",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "Our analytics show a correlation between adding profile pictures and higher retention. How do you prove causation?",
    hint: "Correlation is not causation. Design an experiment: run an A/B test prompting one cohort to add photos, or run cohort regressions.",
    guideAnswer: "1. Set up test: Segment new signups. Prompt variant group to upload photo. 2. Measure retention difference to isolate photo upload causation."
  },
  {
    id: "q-56",
    category: "SQL",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "Write an SQL query to find users who signed up in Jan 2026 but have never logged in.",
    hint: "Use LEFT JOIN between signups and logins, filtering for NULL login dates.",
    guideAnswer: "SELECT s.user_id FROM signups s LEFT JOIN logins l ON s.user_id = l.user_id WHERE s.signup_date BETWEEN '2026-01-01' AND '2026-01-31' AND l.login_date IS NULL;"
  },
  {
    id: "q-57",
    category: "Analytics",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "Define the term 'Bounce Rate' and explain how to troubleshoot a high bounce rate on signup pages.",
    hint: "Bounce rate is the percentage of single-page sessions. Optimize form friction, copy alignment, and load speeds.",
    guideAnswer: "Define bounce rates. Suggest solutions: shorten forms, align copy hooks, speed up page loading."
  },
  {
    id: "q-58",
    category: "SQL",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "Write an SQL query to calculate rolling 7-day average of user signups.",
    hint: "Use window function: AVG(COUNT(*)) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW).",
    guideAnswer: "SELECT date, COUNT(*), AVG(COUNT(*)) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as rolling_avg FROM signups GROUP BY date;"
  },
  {
    id: "q-59",
    category: "Analytics",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "How do you set up event schemas for tracking search funnels?",
    hint: "Define tracking events: search_triggered, results_returned, result_clicked, with parameters for query, position, and filter settings.",
    guideAnswer: "Draft event logs: map triggers, properties, and analytics outputs."
  },
  {
    id: "q-60",
    category: "SQL",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "Write an SQL query to count total active users per country.",
    hint: "Use group by on country, counting user IDs.",
    guideAnswer: "SELECT country, COUNT(DISTINCT user_id) FROM users WHERE is_active = true GROUP BY country;"
  },
  {
    id: "q-61",
    category: "Analytics",
    difficulty: "Hard",
    estimatedTime: "22 mins",
    question: "How do you detect fraud clicks on ads using telemetry?",
    hint: "Track transaction speed (milliseconds between clicks), IP clusters, user agent repetitions, and screen interaction coordinates.",
    guideAnswer: "Detail anomaly detection logic: filter repeating IPs, track rapid clicks, identify bot patterns."
  },
  {
    id: "q-62",
    category: "SQL",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "Write an SQL query to find monthly recurring revenue (MRR) per plan type.",
    hint: "Sum subscription pricing grouped by plan type.",
    guideAnswer: "SELECT plan_type, SUM(price) as total_mrr FROM subscriptions WHERE status = 'active' GROUP BY plan_type;"
  },
  {
    id: "q-63",
    category: "Analytics",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "What is the difference between client-side and server-side tracking?",
    hint: "Client-side tracking is easier to set up but blocked by ad blockers. Server-side tracking is more accurate and secure.",
    guideAnswer: "Compare methods. Highlight compliance advantages of server-side tracking."
  },
  {
    id: "q-64",
    category: "SQL",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "Write an SQL query to calculate N-day retention rates.",
    hint: "Self join the login events table on user ID with specific date diff offsets.",
    guideAnswer: "SELECT count(distinct l1.user_id) as day_0, count(distinct l2.user_id) as day_7 FROM logins l1 LEFT JOIN logins l2 ON l1.user_id = l2.user_id AND l2.login_date = l1.login_date + 7;"
  },
  {
    id: "q-65",
    category: "Analytics",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "What is an event funnel bottleneck and how do you resolve it?",
    hint: "A bottleneck is a step with high drop-off. Audit forms, simplify UX flows, and clear technical bugs.",
    guideAnswer: "Analyze funnel drops. Outline UX fixes: reduce inputs, improve layout guidance."
  },
  {
    id: "q-66",
    category: "SQL",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "Write an SQL query to find average user checkout size.",
    hint: "Use AVG aggregate function on checkout price.",
    guideAnswer: "SELECT AVG(total_amount) FROM checkouts WHERE status = 'completed';"
  },
  {
    id: "q-67",
    category: "Analytics",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "How do you run regression analysis to optimize features?",
    hint: "Measure retention outputs against feature usage controls while isolating variables (demographics, signup date).",
    guideAnswer: "Explain regressions. Detail isolating confounding factors."
  },
  {
    id: "q-68",
    category: "SQL",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "Write an SQL query to find plans renewing next week.",
    hint: "Filter renew date between today and today + 7.",
    guideAnswer: "SELECT user_id, renew_date FROM subscriptions WHERE renew_date BETWEEN CURRENT_DATE AND CURRENT_DATE + 7;"
  },
  {
    id: "q-69",
    category: "Analytics",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "What is CAC payback period and why does it matter?",
    hint: "Payback period is the months of subscription required to cover CAC. Shorter payback periods improve cash flow.",
    guideAnswer: "Explain equations: Payback = CAC / (ARPU × Gross Margin). Target payback < 12 months."
  },
  {
    id: "q-70",
    category: "SQL",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "Write an SQL query to find users who logged in 3 days in a row.",
    hint: "Use LEAD window function to check consecutive date records.",
    guideAnswer: "SELECT user_id FROM (SELECT user_id, date, LEAD(date, 1) OVER (PARTITION BY user_id ORDER BY date) as d1, LEAD(date, 2) OVER (PARTITION BY user_id ORDER BY date) as d2 FROM logins) WHERE d1 = date + 1 AND d2 = date + 2;"
  },

  // 5. Leadership & Strategy (71-90)
  {
    id: "q-71",
    category: "Leadership",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "How do you align cross-functional teams around a product vision?",
    hint: "Strategy requires clarity. Define a product vision, map outcomes to team OKRs, and maintain open communication lines.",
    guideAnswer: "1. Diagnosis: Lack of alignment. 2. Policy: Link product vision to clear team metrics. 3. Action: Run roadmap review syncs, write PRDs, manage tickets."
  },
  {
    id: "q-72",
    category: "Strategy",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "How would you evaluate launching a new subscription model?",
    hint: "Evaluate pricing plans, CAC impact, NRR trends, and potential customer churn rates.",
    guideAnswer: "Model subscription outputs, audit CAC margins, run customer surveys."
  },
  {
    id: "q-73",
    category: "Leadership",
    difficulty: "Hard",
    estimatedTime: "25 mins",
    question: "How do you coordinate product dependencies across different engineering teams?",
    hint: "Map technical dependencies early, hold weekly sync meetings, and design modular API contracts.",
    guideAnswer: "Define dependency trackers, schedule alignment syncs, write interface contracts."
  },
  {
    id: "q-74",
    category: "Strategy",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "Define the term 'Product-Led Growth' and explain when it is appropriate.",
    hint: "PLG uses the product to drive self-serve conversions. Ideal for subscription SaaS products with low-touch sales models.",
    guideAnswer: "Explain self-serve conversion flywheels, onboarding activation, and lower CAC advantages."
  },
  {
    id: "q-75",
    category: "Leadership",
    difficulty: "Medium",
    estimatedTime: "18 mins",
    question: "How do you coach junior PMs on prioritization?",
    hint: "Focus on frameworks (RICE, ICE), data-driven backlog evaluation, and managing stakeholder requests.",
    guideAnswer: "Coach PMs on objective prioritization models and metric alignments."
  },
  {
    id: "q-76",
    category: "Strategy",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "How do you evaluate entering a new geographical market?",
    hint: "Analyze local demand, translation costs, local compliance (GDPR), and local payment integrations.",
    guideAnswer: "Audit local regulations, run customer surveys, budget payment gateway setup costs."
  },
  {
    id: "q-77",
    category: "Leadership",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you run alignment meetings with executive stakeholders?",
    hint: "Prepare executive summaries, map metrics to high-level OKRs, and present clear roadmap choices.",
    guideAnswer: "Detail agenda structures: metric summaries, strategic tradeoffs, action reviews."
  },
  {
    id: "q-78",
    category: "Strategy",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "What strategies protect margins during high churn periods?",
    hint: "Focus on user retention campaigns, optimize packaging, and reduce non-essential engineering costs.",
    guideAnswer: "Run retention campaigns, bundle features to preserve pricing tiers, and defer speculative projects."
  },
  {
    id: "q-79",
    category: "Leadership",
    difficulty: "Hard",
    estimatedTime: "22 mins",
    question: "How do you handle a team resource deficit during critical launch cycles?",
    hint: "Re-scope features, defer low-priority items, and hold check-ins to prevent burnouts.",
    guideAnswer: "Re-scope features to MVP targets, defer could-have requirements, align stakeholders."
  },
  {
    id: "q-80",
    category: "Strategy",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "What is network effect and how do you build it into products?",
    hint: "Network effect means a product becomes more valuable as more people use it. Build sharing loops and collaboration tools.",
    guideAnswer: "Explain viral loops, shared folders, and invite-trigger points."
  },
  {
    id: "q-81",
    category: "Leadership",
    difficulty: "Medium",
    estimatedTime: "18 mins",
    question: "How do you run post-mortem reviews for failed projects?",
    hint: "Focus on objective analysis, list developer and data constraints, and set action items.",
    guideAnswer: "Structure reviews: metric analysis, operational retro notes, ticket followups."
  },
  {
    id: "q-82",
    category: "Strategy",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "How do you evaluate build vs buy decisions for core services?",
    hint: "Assess core IP value, engineering costs, maintenance overhead, and time-to-market trade-offs.",
    guideAnswer: "Compare build costs, maintenance overhead, and launch speed metrics."
  },
  {
    id: "q-83",
    category: "Leadership",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you communicate a product delay to stakeholders?",
    hint: "Communicate early, explain root causes (data bottlenecks, engineering issues), and present new launch plans.",
    guideAnswer: "Present diagnostics, outline revised release phases, list mitigation steps."
  },
  {
    id: "q-84",
    category: "Strategy",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "How do you optimize product lifecycles?",
    hint: "Track user adoption curves, launch retention updates, and plan feature deprecation phases.",
    guideAnswer: "Review adoption metrics, schedule feature iteration releases, deprecate low-use items."
  },
  {
    id: "q-85",
    category: "Leadership",
    difficulty: "Hard",
    estimatedTime: "22 mins",
    question: "How do you manage a stakeholder who insists on features that ignore data?",
    hint: "Hold 1-on-1 alignment reviews, present RICE prioritization scores, and launch phased tests to validate options.",
    guideAnswer: "Show data-backed options, present prioritized backlog models, run minor beta tests."
  },
  {
    id: "q-86",
    category: "Strategy",
    difficulty: "Easy",
    estimatedTime: "12 mins",
    question: "What is switching cost and how does it drive product retention?",
    hint: "Switching cost is the user effort required to change products. Increase this by saving user data and workflows in your app.",
    guideAnswer: "Outline data integrations, custom templates, and team directories that raise switching costs."
  },
  {
    id: "q-87",
    category: "Leadership",
    difficulty: "Medium",
    estimatedTime: "18 mins",
    question: "How do you scale product management teams as organizations grow?",
    hint: "Align PMs to target product units (growth, core, platform) and set clear ownership guidelines.",
    guideAnswer: "Outline product divisions: growth PMs, core feature teams, platform infrastructure teams."
  },
  {
    id: "q-88",
    category: "Strategy",
    difficulty: "Hard",
    estimatedTime: "20 mins",
    question: "How do you design a GTM plan for a new B2B SaaS product?",
    hint: "Define ideal customer profiles (ICP), map pricing plans, outline marketing channels, and train sales teams.",
    guideAnswer: "Map target segments, set pricing models, plan content marketing, coordinate sales training."
  },
  {
    id: "q-89",
    category: "Leadership",
    difficulty: "Easy",
    estimatedTime: "10 mins",
    question: "How do you run quarterly planning cycles?",
    hint: "Review OKRs, collect feature pitches, run scoring models, and lock roadmap horizons.",
    guideAnswer: "Set calendar syncs, run RICE prioritization scoring, set Now-Next-Later boundaries."
  },
  {
    id: "q-90",
    category: "Strategy",
    difficulty: "Medium",
    estimatedTime: "15 mins",
    question: "How do you evaluate competitive threats in saturated markets?",
    hint: "Audit competitor feature releases, track pricing, and focus on unique value differentiators.",
    guideAnswer: "Perform competitive matrices audits, track churn sources, bundle value additions."
  },

  // 6. Case Studies (91-100)
  {
    id: "q-91",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Netflix is considering launching a live sports streaming tier. How would you evaluate this?",
    hint: "Analyze target audience segmentations, licensing costs, infrastructure demands, and potential subscriber growth.",
    guideAnswer: "1. Goals: Increase subscription growth, open ad revenues. 2. Costs: Live licensing is expensive. 3. Feasibility: High infrastructure load. 4. Strategic Choice: Pilot with minor sports events."
  },
  {
    id: "q-92",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Evaluate WhatsApp launching peer-to-peer payments in emerging markets.",
    hint: "Address local payment gateways, competitor pricing, compliance, and user trust issues.",
    guideAnswer: "Model payment volume targets, map compliance requirements, outline viral chat booking triggers."
  },
  {
    id: "q-93",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Google Drive wants to launch an AI summarization subscription. Outline the GTM plan.",
    hint: "Define the target audience, map subscription price points, setup onboarding activation, and run feedback tests.",
    guideAnswer: "Define ideal user segment, model trial convert funnels, outline in-app onboarding alerts."
  },
  {
    id: "q-94",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Spotify is seeing high user churn in student subscription tiers. Diagnose and solve.",
    hint: "Verify competitors, check student status validation failures, and review price sensitivity.",
    guideAnswer: "Identify validation drop-off points, check competitor plans, design easy validation loops."
  },
  {
    id: "q-95",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Zoom wants to add collaborative documents inside virtual meetings. Outline the product requirements.",
    hint: "Draft requirements: live editor sync, document sharing logs, comment sidebars, and post-meeting exports.",
    guideAnswer: "Detail requirements: real-time editor specs, permission controls, sidebar chat integrations, file exports."
  },
  {
    id: "q-96",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Slack is losing mid-market clients to Microsoft Teams. Develop a defensive product strategy.",
    hint: "Teams bundles with Office 365. Slack should focus on UX, developer integrations, and enterprise app directories.",
    guideAnswer: "Target developer segments, simplify workspace creation, promote app integrations."
  },
  {
    id: "q-97",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Airbnb wants to introduce long-term rentals (6+ months). Assess product implications.",
    hint: "Long-term rentals require custom billing schedules, lease contracts, tenant verification, and different search filters.",
    guideAnswer: "Outline tenant check steps, lease signature integrations, monthly billing systems."
  },
  {
    id: "q-98",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Robinhood is seeing high account drop-offs during KYC verification. How do you optimize the funnel?",
    hint: "Identify bottleneck fields (uploading IDs), optimize camera captures, and use quick validation status alerts.",
    guideAnswer: "Shorten KYC questions, optimize camera snapshot helpers, build quick validation indicators."
  },
  {
    id: "q-99",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Notion wants to expand its offline sync capabilities. How do you prioritize requirements?",
    hint: "Prioritize local draft saving, conflict resolution logs, and background sync triggers.",
    guideAnswer: "Focus on local storage drafts, conflict log notifications, background synchronization."
  },
  {
    id: "q-100",
    category: "Case Studies",
    difficulty: "Hard",
    estimatedTime: "30 mins",
    question: "Case Study: Canva wants to launch print-on-demand services. Assess GTM and logistics alignment.",
    hint: "Map checkout options, select local print partners, track delivery status, and handle refund policies.",
    guideAnswer: "Integrate shipping templates, partner with print houses, coordinate order tracker widgets."
  }
];
