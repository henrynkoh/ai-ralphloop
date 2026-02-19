/**
 * Solo Entrepreneur Curriculum — key concepts by category.
 * Aligned with lean startup, customer development, and solo-founder best practices.
 * No redundancy; step-by-step ready.
 */

export type ConceptRow = {
  concept: string;
  keyIdea: string;
  steps: string[];
  notes?: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  order: number;
  concepts: ConceptRow[];
};

export const curriculum: Category[] = [
  {
    id: "founder-readiness",
    title: "Founder Readiness & Mindset",
    description: "Assess readiness and build the mindset needed before committing to a venture.",
    order: 1,
    concepts: [
      {
        concept: "Entrepreneurial purpose & goals",
        keyIdea: "Define why you are building and what success looks like for you personally.",
        steps: [
          "Write down your personal definition of success (lifestyle, impact, income).",
          "Clarify non‑negotiables (time, risk, geography).",
          "Set 30‑day and 365‑day outcome goals.",
        ],
        notes: "Aligns with Berkeley Method: purpose before product.",
      },
      {
        concept: "Reframing failure",
        keyIdea: "Treat failure as a learning signal, not identity.",
        steps: [
          "Define 'failure' as 'invalidated hypothesis' rather than 'I failed'.",
          "Document one lesson from each dead end.",
          "Use post‑mortems to decide pivot vs. persevere.",
        ],
      },
      {
        concept: "Design thinking introduction",
        keyIdea: "Start from user problems and emotions, not your solution.",
        steps: [
          "Empathize: observe and interview people in your target context.",
          "Define: state the problem in the user's words.",
          "Ideate: generate solutions without judging; then prioritize by impact/effort.",
        ],
      },
      {
        concept: "Idea generation (problem‑first)",
        keyIdea: "Focus on problems you are passionate about solving and that others will pay to fix.",
        steps: [
          "List 5–10 problems you care about or have experienced.",
          "Rank by: your expertise, market size, and willingness to pay.",
          "Pick one and state it as a testable problem statement.",
        ],
      },
      {
        concept: "Entrepreneur vs employee mindset",
        keyIdea: "Position as owner: you create value and capture part of it; accountability is to customers and outcomes.",
        steps: [
          "Shift from 'tasks assigned' to 'outcomes I own'.",
          "Practice selling or explaining your idea in one sentence.",
          "Accept that entrepreneurship can be more accessible than traditional employment for some.",
        ],
      },
      {
        concept: "Founder development",
        keyIdea: "Invest in communication, credibility, and well‑being before scaling the business.",
        steps: [
          "Improve written and verbal communication (e.g. writing in public, short talks).",
          "Build credibility: ship small things, share learnings, help others.",
          "Establish habits for mental health and stamina (sleep, boundaries, support).",
        ],
      },
    ],
  },
  {
    id: "opportunity-validation",
    title: "Opportunity Discovery & Validation",
    description: "Prove demand and fit before building; find early adopters and validate with real interest.",
    order: 2,
    concepts: [
      {
        concept: "Customer discovery",
        keyIdea: "Convert your vision into testable hypotheses and validate them through conversations and experiments.",
        steps: [
          "Write down your main assumption: 'We believe [customer] has [problem] and will [behavior].'",
          "Identify where your target users spend time (communities, events, tools).",
          "Conduct 10–20 discovery conversations; ask about current behavior and pain, not your idea.",
          "Summarize: problem severity, frequency, and willingness to pay.",
        ],
      },
      {
        concept: "Finding early adopters",
        keyIdea: "Early adopters tolerate imperfection and give honest feedback; find them in niche communities.",
        steps: [
          "Define early‑adopter criteria (pain level, ability to pay, accessibility).",
          "List 3–5 communities or channels (Indie Hackers, Reddit, LinkedIn groups, Slack).",
          "Provide value first (answers, templates, feedback); then invite to interviews or waitlist.",
        ],
      },
      {
        concept: "Validate before building",
        keyIdea: "Prove at least 10–20 people will pay or commit before writing code or building a full product.",
        steps: [
          "Create a landing page (Carrd, Webflow) with clear value proposition and CTA.",
          "Drive traffic via communities, content, or small ads; measure sign‑ups or intent.",
          "Offer pre‑order, waitlist, or paid pilot; aim for 10–20 committed leads.",
          "If you cannot get commitment, refine problem/solution or segment before building.",
        ],
      },
      {
        concept: "Emotional intelligence & buyer motivation",
        keyIdea: "Understand why people buy: emotional triggers, perceived risk, and desired outcome.",
        steps: [
          "In interviews, ask 'What would have to be true for you to pay for this?'",
          "Identify objections (price, trust, switching cost) and address in messaging.",
          "Test messaging that speaks to desired outcome and identity, not only features.",
        ],
      },
    ],
  },
  {
    id: "business-model",
    title: "Business Model & Definition",
    description: "Lock in target customer, value proposition, and how you make money.",
    order: 3,
    concepts: [
      {
        concept: "Business Model Canvas (9 blocks)",
        keyIdea: "One‑page view of how you create, deliver, and capture value; replace long business plans.",
        steps: [
          "Customer segments: who exactly are you serving?",
          "Value propositions: what job you do and what pain you relieve.",
          "Channels: how you reach and deliver to customers.",
          "Customer relationships: self‑serve, community, personal.",
          "Revenue streams: how you get paid (subscription, one‑time, usage).",
          "Key resources: what you need (skills, tools, data).",
          "Key activities: what you do (build, sell, support).",
          "Key partnerships: who helps you (platforms, contractors).",
          "Cost structure: fixed vs variable; keep burn low at start.",
        ],
        notes: "Osterwalder & Pigneur; use for quick iteration, not a one‑time document.",
      },
      {
        concept: "Lean Canvas",
        keyIdea: "Startup‑focused variant: problem, solution, metrics, unfair advantage.",
        steps: [
          "Problem: top 3 problems; existing alternatives.",
          "Solution: top 3 features for MVP.",
          "Unique value proposition: one clear sentence.",
          "Unfair advantage: what cannot be easily copied.",
          "Customer segments: early adopters first.",
          "Key metrics: one north‑star metric to watch.",
          "Channels: how you acquire customers.",
          "Cost structure & revenue streams.",
        ],
      },
      {
        concept: "Target customer & value proposition",
        keyIdea: "One primary segment and one crisp value proposition to test.",
        steps: [
          "Name your primary segment (e.g. 'solo consultants who bill hourly').",
          "Write one sentence: 'For [segment], we [value prop] so that [outcome].'",
          "Test this sentence in discovery; refine until it resonates.",
        ],
      },
      {
        concept: "Revenue streams & monetization",
        keyIdea: "Decide how you get paid early; subscription and one‑time have different implications.",
        steps: [
          "Choose model: subscription, one‑time, usage, or hybrid.",
          "Set a simple pricing hypothesis (e.g. $X/month or $Y one‑time).",
          "Validate willingness to pay in discovery or with a pre‑sale.",
        ],
      },
    ],
  },
  {
    id: "mvp-build-measure-learn",
    title: "MVP & Build–Measure–Learn",
    description: "Ship the smallest thing that tests your riskiest assumption; learn fast.",
    order: 4,
    concepts: [
      {
        concept: "MVP definition",
        keyIdea: "The fastest way through the Build–Measure–Learn loop with minimum effort; not necessarily a small product.",
        steps: [
          "Identify the riskiest assumption (demand? usability? willingness to pay?).",
          "Choose the cheapest test: landing page, video, concierge, prototype.",
          "Define success metric and minimum threshold (e.g. 20 sign‑ups, 5 paid).",
          "Run the test; then learn and decide next step.",
        ],
        notes: "Eric Ries, Lean Startup.",
      },
      {
        concept: "MVP types",
        keyIdea: "MVP can be a datasheet, brochure, landing page, video, or prototype—whatever tests the hypothesis.",
        steps: [
          "Fake door: measure clicks/sign‑ups for a feature that does not exist yet.",
          "Concierge: deliver the outcome manually to validate value.",
          "Wizard of Oz: human behind the scenes simulating the product.",
          "Single‑feature prototype: one core flow only.",
        ],
      },
      {
        concept: "Build–Measure–Learn loop",
        keyIdea: "Hypothesis → experiment → data → learn → pivot or persevere.",
        steps: [
          "Build: create the minimum artifact to test the hypothesis.",
          "Measure: collect quantitative and qualitative data (sign‑ups, interviews, usage).",
          "Learn: decide whether the hypothesis holds; if not, pivot (change strategy) or persevere.",
        ],
      },
      {
        concept: "Hypothesis‑driven experimentation",
        keyIdea: "Every feature or channel test should have a clear hypothesis and success criteria.",
        steps: [
          "Write: 'We believe [action] will lead to [metric change] because [reason].'",
          "Define minimum success and timeframe.",
          "Run the experiment; document result and next hypothesis.",
        ],
      },
    ],
  },
  {
    id: "build-launch",
    title: "Build & Launch",
    description: "Tech choices, infrastructure, legal basics, and getting first customers.",
    order: 5,
    concepts: [
      {
        concept: "Tech stack (solo founder)",
        keyIdea: "Choose tools that match your skills: no‑code for speed, code + AI for flexibility.",
        steps: [
          "Non‑technical: consider Bubble, Glide, Softr, or similar for MVP.",
          "Technical: consider Next.js, Django, Rails, or similar; use AI coding assistants to move faster.",
          "Pick one stack and stick for MVP; avoid rewriting too early.",
        ],
      },
      {
        concept: "Infrastructure",
        keyIdea: "Hosting, payments, auth, and support from day one with minimal setup.",
        steps: [
          "Hosting: Vercel, Netlify, or AWS depending on stack.",
          "Payments: Stripe or Paddle for subscriptions and one‑time.",
          "Auth: Firebase Auth or Supabase for sign‑up/login.",
          "Support: Crisp, Intercom, or simple email; document FAQs early.",
        ],
      },
      {
        concept: "Legal & company setup",
        keyIdea: "Incorporate and formalize when it reduces risk (e.g. before taking money or signing contracts).",
        steps: [
          "Decide entity type (LLC, sole prop, etc.) and jurisdiction.",
          "Register when you have revenue, contracts, or investment.",
          "Add basic terms of service and privacy policy (templates or lawyer).",
        ],
      },
      {
        concept: "Get first customers",
        keyIdea: "Distribution and onboarding are part of the product; start with manual outreach.",
        steps: [
          "List 50–100 potential early adopters from discovery.",
          "Reach out personally (email, DMs); offer pilot or discount for feedback.",
          "Onboard manually if needed; document friction and fix in product.",
          "Ask for referrals and testimonials once value is delivered.",
        ],
      },
    ],
  },
  {
    id: "growth-pmf",
    title: "Growth & Product–Market Fit",
    description: "Iterate with data, improve retention, and scale distribution.",
    order: 6,
    concepts: [
      {
        concept: "Product–market fit (PMF)",
        keyIdea: "When customers pull the product; retention and word‑of‑mouth become visible.",
        steps: [
          "Track retention (e.g. D7, D30) and qualitative feedback.",
          "Look for signals: 'I would be very disappointed if I could not use this.'",
          "Double down on one segment and one value prop before scaling.",
        ],
      },
      {
        concept: "Iterate with data",
        keyIdea: "Use usage and feedback to decide what to build next; avoid building in a vacuum.",
        steps: [
          "Define one north‑star metric (e.g. weekly active users, revenue, jobs completed).",
          "Review cohorts and funnels monthly; find drop‑off points.",
          "Prioritize changes that move the north‑star metric or reduce churn.",
        ],
      },
      {
        concept: "Retention signals",
        keyIdea: "Retention predicts long‑term value; improve onboarding and 'aha' moment.",
        steps: [
          "Map the path to first value (time to first success).",
          "Shorten time to 'aha' with onboarding and defaults.",
          "Set up simple retention alerts (e.g. no login in 7 days).",
        ],
      },
      {
        concept: "Marketing & distribution (solo)",
        keyIdea: "Build in public, SEO, and community; focus on one or two channels first.",
        steps: [
          "Build in public: share progress on X/Twitter, Indie Hackers, or LinkedIn.",
          "Create SEO content around problem and solution keywords.",
          "Engage in niche communities without spamming; provide value first.",
          "Consider Product Hunt or launch posts when you have a clear story.",
        ],
      },
      {
        concept: "Naming & branding",
        keyIdea: "Clear name and consistent messaging reduce cognitive load and build recognition.",
        steps: [
          "Choose a name that is memorable and available (domain, handles).",
          "Write a one‑liner and 3‑bullet value prop; use everywhere.",
          "Keep visual identity simple: logo, colors, one font.",
        ],
      },
    ],
  },
  {
    id: "tools-operations",
    title: "Tools & Operations",
    description: "Curated tools and practices for solo founders: no‑code, payments, auth, distribution, AI.",
    order: 7,
    concepts: [
      {
        concept: "No‑code & low‑code",
        keyIdea: "Ship MVPs without coding: forms, workflows, and simple apps.",
        steps: [
          "Landing pages: Carrd, Webflow, Framer.",
          "Apps: Bubble, Glide, Softr, Airtable + front end.",
          "Automation: Zapier, Make; use for notifications and integrations.",
        ],
      },
      {
        concept: "Payments & billing",
        keyIdea: "Stripe or Paddle for global payments and subscriptions; set up early.",
        steps: [
          "Stripe: best for full control and many countries.",
          "Paddle: good for handling tax/VAT as merchant of record.",
          "Implement one pricing page and one webhook for subscription lifecycle.",
        ],
      },
      {
        concept: "Auth & data",
        keyIdea: "Use managed auth and database to avoid building from scratch.",
        steps: [
          "Auth: Firebase Auth, Supabase Auth, or Auth0.",
          "Database: Supabase, Firebase Firestore, or PlanetScale.",
          "Keep schema simple; add indexes when you hit scale issues.",
        ],
      },
      {
        concept: "Distribution & launch",
        keyIdea: "Product Hunt, X, Indie Hackers, and niche communities as repeatable channels.",
        steps: [
          "Prepare: tagline, description, visuals, and 2–3 key benefits.",
          "Product Hunt: schedule launch; rally your early users for support.",
          "Indie Hackers: post milestones and learnings; comment on others.",
          "X/LinkedIn: post consistently; share build journey and results.",
        ],
      },
      {
        concept: "AI for operations & marketing",
        keyIdea: "Use AI for copy, support drafts, and strategy ideas; keep human in the loop.",
        steps: [
          "Marketing: use AI for ad copy, email subject lines, and content outlines.",
          "Support: draft replies with AI; edit and send personally at first.",
          "Strategy: use AI to brainstorm positioning and customer segments; validate with real people.",
        ],
      },
    ],
  },
];

export function getCategory(id: string): Category | undefined {
  return curriculum.find((c) => c.id === id);
}

export function getCategoryIds(): string[] {
  return curriculum.map((c) => c.id);
}
