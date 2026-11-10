export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

export type Audience = {
  title: string;
  text: string;
};

export const audiences: Audience[] = [
  {
    title: "Developers",
    text: "Teams scaling a pipeline of projects, and who need the next site to follow the same gates as the last one.",
  },
  {
    title: "Multi-site operators",
    text: "Childcare, medical, fitness, retail and hospitality groups rolling sites out across more than one location.",
  },
  {
    title: "Property and project teams",
    text: "The people who coordinate design, cost, consultants and documentation while a rollout is in motion.",
  },
];

export type Step = {
  number: string;
  title: string;
  text: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Diagnose the pipeline",
    text: "A fixed-fee review of how work actually moves: stages, gates, handoffs, cycle time, bottlenecks and tools.",
  },
  {
    number: "02",
    title: "Build the system",
    text: "Tender protocols, standard consultant briefs and a documentation library the team can reuse on the next site.",
  },
  {
    number: "03",
    title: "Coach the rollout",
    text: "A retainer for rollout, training and KPI tracking, so the system stays in use after the documents are written.",
  },
];

export type ModuleOffer = {
  id: string;
  name: string;
  price: string;
  timeline: string;
  summary: string;
  deliverables: string[];
};

export const systemsModules: ModuleOffer[] = [
  {
    id: "tender-protocols",
    name: "Tender protocols",
    price: "From A$6,000",
    timeline: "Timeline agreed at scoping",
    summary:
      "A standard way to go to market: how the team chooses a procurement method, issues documents, compares returns and records an award recommendation.",
    deliverables: [
      "Procurement method guidance the team can apply from site to site",
      "A tender document set",
      "An evaluation matrix",
      "A clarifications process",
      "An award recommendation format for the client's own decision",
    ],
  },
  {
    id: "consultant-briefs",
    name: "Consultant briefs",
    price: "From A$5,000",
    timeline: "Timeline agreed at scoping",
    summary:
      "Standard briefs so architects, quantity surveyors, project managers, planners and engineers are asked for the same things every time.",
    deliverables: [
      "Architect brief",
      "Quantity surveyor brief",
      "Project manager brief",
      "Planner brief",
      "Engineer briefs",
    ],
  },
  {
    id: "documentation-library",
    name: "Documentation library",
    price: "From A$8,000",
    timeline: "Timeline agreed at scoping",
    summary:
      "The templates a rollout repeats: so a new site starts from a standard, not from a blank page or last year's folder.",
    deliverables: [
      "Feasibility template",
      "Design brief",
      "Works method",
      "Cost plan format",
      "Checklists",
      "Board pack format",
    ],
  },
];

export type Tier = {
  id: string;
  name: string;
  price: string;
  timeline: string;
  summary: string;
  deliverables: string[];
  note?: string;
};

export const diagnostic: Tier = {
  id: "diagnostic",
  name: "Delivery Systems Diagnostic",
  price: "From A$6,500",
  timeline: "2 to 3 weeks",
  summary:
    "A fixed-fee review of the team's delivery pipeline. We look at stages, gates, handoffs, cycle time, bottlenecks and the tools already in use, then recommend what to standardise first.",
  deliverables: [
    "A map of the current stages, gates and handoffs",
    "A view of cycle time, and where work waits",
    "A short list of bottlenecks, with the reason each one matters",
    "Notes on the tools the team already uses, and the gaps",
    "A recommended sequence for what to standardise first",
  ],
};

export const systemsBuild: Tier = {
  id: "systems",
  name: "Systems Build",
  price: "From A$15,000",
  timeline: "Timeline agreed at scoping",
  summary:
    "The reusable core of a rollout: tender protocols, standard consultant briefs and a documentation library. Commission the full build, or start with one module.",
  deliverables: [
    "Tender protocols",
    "Standard consultant briefs",
    "A standard documentation library",
    "A short guide to how the pieces fit together on a live site",
  ],
  note: "Module fees below are alternatives to the full build, not extras stacked on top of it.",
};

export const retainer: Tier = {
  id: "retainer",
  name: "Implementation Retainer",
  price: "From A$4,000 a month",
  timeline: "Monthly, for an agreed rollout period",
  summary:
    "Rollout, training and KPI tracking once the system exists. We coach the people who run it, and watch whether the gates are actually being used.",
  deliverables: [
    "Rollout support as the team uses the system on live sites",
    "Training for the people who run the process",
    "A small set of KPIs and a rhythm for reviewing them",
    "Coaching when a gate, a handoff or a tool starts to slip",
  ],
};

export const tiers: Tier[] = [diagnostic, systemsBuild, retainer];

export type AddOn = {
  name: string;
  text: string;
};

export const addOns: AddOn[] = [
  {
    name: "Site screening",
    text: "A structured review of a site or a shortlist, so the team can see delivery risk before it commits design time.",
  },
  {
    name: "Feasibility and sensitivity models",
    text: "A model for testing cost, timing and yield assumptions, and for seeing which assumptions move the result.",
  },
  {
    name: "Cost plan and tender reviews",
    text: "A written review of a cost plan or a tender return: gaps, risk, and whether the figures can be compared. We do not award the contract.",
  },
];

export const boundaries: string[] = [
  "We do not negotiate leases on a client's behalf. That requires an estate agent licence.",
  "We do not manage building work, act as superintendent under a building contract, or carry out construction.",
  "We do not appoint consultants or contractors for you. The briefs and protocols help your team do that.",
  "We do not hold client money, and we do not award tenders.",
];

export const methodSteps: Step[] = [
  {
    number: "01",
    title: "Start from the work as it moves",
    text: "We sit with the people who run delivery and trace a recent site from first instruction through to the documents being issued. The point is the real path, including the workarounds.",
  },
  {
    number: "02",
    title: "Name the gates",
    text: "Each stage gets an owner, an input and a decision that lets the next stage start. Cycle time shows where work is waiting, not where people are busy.",
  },
  {
    number: "03",
    title: "Write the standard once",
    text: "Protocols, briefs and templates are written so a new site can start from them. Estimate HQ is used where a cost or a take-off needs a shared place to live.",
  },
  {
    number: "04",
    title: "Coach the first sites",
    text: "The team runs the system. We train, review the first uses, and adjust the documents where a gate is being skipped or a handoff is unclear.",
  },
  {
    number: "05",
    title: "Keep a short scoreboard",
    text: "A few KPIs, reviewed on a set rhythm. Enough to see if cycle time, rework and late decisions are moving. Not a dashboard for its own sake.",
  },
];

export const principles: { title: string; text: string }[] = [
  {
    title: "One library",
    text: "Every site draws from the same briefs, checklists and board pack. Local judgement still sits with the team.",
  },
  {
    title: "Gates before speed",
    text: "Each stage keeps an owner and a decision, so the next stage starts from a record rather than a guess.",
  },
  {
    title: "Decisions a board can follow",
    text: "Recommendations are written so someone who was not in the meeting can see what was asked, what came back, and what was decided.",
  },
  {
    title: "The client decides",
    text: "Appointments, awards and commercial commitments stay with your team. We advise and coach.",
  },
];
