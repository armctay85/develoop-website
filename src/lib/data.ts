import { Service, Experience, Insight, NavItem, PricingTier, PlatformFeature, DataInsight } from "@/types";

export const navItems: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "Data", href: "/data" },
  { label: "Community", href: "/community" },
  { label: "Consultancy", href: "/services" },
  { label: "About", href: "/about" },
];

export const services: Service[] = [
  {
    id: "retail-strategy",
    title: "Retail Development Strategy",
    description: "Comprehensive retail development strategies that align with your business objectives and market positioning.",
    icon: "Target",
    details: [
      "Market analysis and opportunity assessment",
      "Portfolio optimisation and network planning",
      "Growth strategy and expansion roadmaps",
      "Competitive positioning and differentiation",
    ],
  },
  {
    id: "leasing-advisory",
    title: "Leasing & Network Advisory",
    description: "Expert guidance through complex leasing negotiations and strategic network planning decisions.",
    icon: "MapPin",
    details: [
      "Lease negotiation and structuring",
      "Site selection and due diligence",
      "Network optimisation analysis",
      "Landlord relationship management",
    ],
  },
  {
    id: "design-leadership",
    title: "Design & Construction Leadership",
    description: "End-to-end oversight of retail design and construction projects, ensuring quality and efficiency.",
    icon: "Building2",
    details: [
      "Design brief development and management",
      "Architect and contractor coordination",
      "Quality assurance and compliance",
      "Project delivery and handover",
    ],
  },
  {
    id: "critical-path",
    title: "Critical Path Optimisation",
    description: "Streamlined project timelines that eliminate bottlenecks and accelerate time-to-market.",
    icon: "GitBranch",
    details: [
      "Project scheduling and milestone planning",
      "Risk assessment and mitigation",
      "Cross-functional coordination",
      "Process improvement and efficiency",
    ],
  },
  {
    id: "lifecycle",
    title: "End-to-End Lifecycle Management",
    description: "Comprehensive oversight from initial concept through to successful store opening and beyond.",
    icon: "RotateCw",
    details: [
      "Project governance and reporting",
      "Stakeholder management",
      "Budget oversight and cost control",
      "Post-opening support and evaluation",
    ],
  },
  {
    id: "operating-model",
    title: "Operating Model Optimisation",
    description: "Refined operational frameworks that enhance efficiency and support sustainable growth.",
    icon: "Settings",
    details: [
      "Process design and optimisation",
      "Team structure and capability building",
      "Technology and tool integration",
      "Performance measurement frameworks",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "UNIQLO",
    role: "Senior Development Lead",
    period: "2018 - Present",
    description: "Leading store development across Australia and strategic expansion planning for the region.",
  },
  {
    company: "Starbucks",
    role: "Development Director",
    period: "2012 - 2018",
    description: "Oversaw national store rollout and portfolio optimisation across multiple markets.",
  },
  {
    company: "H&M",
    role: "Expansion Manager",
    period: "2008 - 2012",
    description: "Managed aggressive expansion strategy and entry into new geographic markets.",
  },
  {
    company: "Kmart",
    role: "Store Development Manager",
    period: "2000 - 2008",
    description: "Led store development projects and established development frameworks still in use today.",
  },
];

export const insights: Insight[] = [
  {
    id: "1",
    title: "Q1 2024 Australian Retail Market Report",
    excerpt: "Comprehensive analysis of retail performance across major Australian markets, including foot traffic trends, rent movements, and emerging opportunities.",
    category: "Quarterly Report",
    date: "2024-03-15",
    readTime: "15 min read",
    slug: "q1-2024-retail-market-report",
  },
  {
    id: "2",
    title: "Site Selection: Data-Driven Decision Making",
    excerpt: "How leading retailers are using predictive analytics and demographic data to identify high-potential locations before competitors.",
    category: "Best Practices",
    date: "2024-02-28",
    readTime: "8 min read",
    slug: "site-selection-data-driven",
  },
  {
    id: "3",
    title: "The State of Australian Retail Leasing 2024",
    excerpt: "Exclusive benchmark data on rent rates, lease terms, and landlord incentives across 50+ retail precincts nationwide.",
    category: "Research",
    date: "2024-02-10",
    readTime: "12 min read",
    slug: "retail-leasing-benchmarks-2024",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    description: "Get a taste of retail intelligence",
    price: 0,
    period: "month",
    features: [
      "Monthly market snapshot",
      "Basic location search (5 queries/month)",
      "Weekly newsletter",
      "Public benchmark data",
      "Community forum read access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For serious retail decision-makers",
    price: 299,
    period: "month",
    features: [
      "Full market intelligence dashboard",
      "Site selection tool (unlimited)",
      "Portfolio management dashboard",
      "Quarterly trend reports (PDF)",
      "Private community access",
      "Email alerts & notifications",
      "Export data to Excel/CSV",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For retail chains and property groups",
    price: 2999,
    period: "month",
    features: [
      "Everything in Pro",
      "Custom research requests",
      "Dedicated analyst support",
      "API access",
      "White-label reports",
      "Bulk data exports",
      "Priority support",
      "Quarterly strategy sessions",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const platformFeatures: PlatformFeature[] = [
  {
    id: "market-intelligence",
    title: "Market Intelligence",
    description: "Real-time data on foot traffic, rent benchmarks, and competitive landscape across 15,000+ Australian retail locations.",
    icon: "BarChart3",
    highlights: [
      "Foot traffic trends by location/sector",
      "Rent benchmarks by suburb",
      "Competitor opening/closing tracker",
      "Sales per sqm benchmarks",
      "Customer demographic shifts",
    ],
  },
  {
    id: "site-selection",
    title: "Site Selection Tool",
    description: "AI-powered location scoring that predicts retail success probability based on 50+ data points.",
    icon: "Map",
    highlights: [
      "Heat map: Best locations for any retail type",
      "Predictive success probability score",
      "Demographics overlay",
      "Competition density analysis",
      "Foot traffic forecasting",
    ],
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management",
    description: "Track and optimize your entire retail network from a single dashboard.",
    icon: "LayoutGrid",
    highlights: [
      "Track multiple locations",
      "Performance dashboards",
      "Lease renewal alerts",
      "Capex planning tools",
      "Network optimization insights",
    ],
  },
];

export const dataInsights: DataInsight[] = [
  {
    id: "foot-traffic",
    title: "Foot Traffic Index",
    value: "2.4M",
    change: "+12%",
    trend: "up",
    description: "Daily foot traffic across monitored locations",
  },
  {
    id: "rent-growth",
    title: "Rent Growth YoY",
    value: "4.2%",
    change: "+0.8%",
    trend: "up",
    description: "Average retail rent growth year-over-year",
  },
  {
    id: "store-openings",
    title: "New Store Openings",
    value: "847",
    change: "+23%",
    trend: "up",
    description: "New retail stores opened this quarter",
  },
  {
    id: "vacancy-rate",
    title: "Prime Vacancy Rate",
    value: "3.1%",
    change: "-0.4%",
    trend: "down",
    description: "Vacancy rate in prime retail precincts",
  },
];

export const brandLogos = [
  { name: "Kmart", text: "Kmart" },
  { name: "H&M", text: "H&M" },
  { name: "Starbucks", text: "Starbucks" },
  { name: "UNIQLO", text: "UNIQLO" },
  { name: "Woolworths", text: "Woolworths" },
  { name: "Westfield", text: "Westfield" },
];

export const companyInfo = {
  name: "Develoop",
  fullName: "Develoop Retail Intelligence",
  tagline: "The Intelligence Platform for Australian Retail",
  abn: "30 140 738 615",
  email: "support@develoop.com.au",
  website: "develoop.com.au",
  founded: "2024",
  location: "Australia",
  locations: "15,000+",
  dataPoints: "50M+",
  members: "2,400+",
};
