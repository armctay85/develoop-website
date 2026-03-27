import { Service, Experience, Insight, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
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
    title: "The Future of Retail Development in Australia",
    excerpt: "Exploring emerging trends and opportunities in the Australian retail landscape, from mixed-use developments to experiential retail concepts.",
    category: "Industry Trends",
    date: "2024-03-15",
    readTime: "6 min read",
    slug: "future-retail-development-australia",
  },
  {
    id: "2",
    title: "Critical Path Management: Lessons from 25 Years",
    excerpt: "Key insights on managing complex retail development projects and the critical factors that determine success or failure.",
    category: "Best Practices",
    date: "2024-02-28",
    readTime: "8 min read",
    slug: "critical-path-management-lessons",
  },
  {
    id: "3",
    title: "Sustainable Retail: Beyond the Buzzword",
    excerpt: "How leading retailers are embedding sustainability into their development strategies and why it matters for long-term success.",
    category: "Sustainability",
    date: "2024-02-10",
    readTime: "5 min read",
    slug: "sustainable-retail-strategy",
  },
];

export const brandLogos = [
  { name: "Kmart", text: "Kmart" },
  { name: "H&M", text: "H&M" },
  { name: "Starbucks", text: "Starbucks" },
  { name: "UNIQLO", text: "UNIQLO" },
];

export const companyInfo = {
  name: "Develoop",
  fullName: "Develoop Retail Development Consultancy",
  abn: "30 140 738 615",
  email: "support@develoop.com.au",
  website: "develoop.com.au",
  founded: "2024",
  location: "Australia",
};
