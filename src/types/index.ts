export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface PlatformFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface DataInsight {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
}

export interface LocationScore {
  id: string;
  address: string;
  suburb: string;
  state: string;
  score: number;
  footTraffic: number;
  competitionDensity: number;
  demographics: {
    age18to34: number;
    incomeMedian: number;
    population: number;
  };
  rentPerSqm: number;
}
