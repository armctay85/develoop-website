"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, FileText, Download, TrendingUp, Users, 
  Building2, MapPin, Calendar, ExternalLink, Clock, Tag
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { insights } from "@/lib/data";

const reports = [
  {
    id: "q1-2024",
    title: "Q1 2024 Australian Retail Market Report",
    type: "Quarterly",
    date: "March 2024",
    pages: 45,
    description: "Comprehensive analysis of retail performance across major Australian markets, including foot traffic trends, rent movements, and emerging opportunities.",
    tags: ["Market Analysis", "Foot Traffic", "Rent Benchmarks"],
    previewAvailable: true,
  },
  {
    id: "site-selection",
    title: "Site Selection: The Data-Driven Playbook",
    type: "White Paper",
    date: "February 2024",
    pages: 28,
    description: "How leading retailers are using predictive analytics and demographic data to identify high-potential locations before competitors.",
    tags: ["Site Selection", "Analytics", "Best Practices"],
    previewAvailable: true,
  },
  {
    id: "leasing-2024",
    title: "The State of Australian Retail Leasing 2024",
    type: "Research",
    date: "January 2024",
    pages: 52,
    description: "Exclusive benchmark data on rent rates, lease terms, and landlord incentives across 50+ retail precincts nationwide.",
    tags: ["Leasing", "Benchmarks", "Market Data"],
    previewAvailable: false,
  },
  {
    id: "q4-2023",
    title: "Q4 2023 Year in Review",
    type: "Quarterly",
    date: "December 2023",
    pages: 38,
    description: "Annual review of retail market trends, major openings and closures, and predictions for the year ahead.",
    tags: ["Year Review", "Trends", "Predictions"],
    previewAvailable: true,
  },
];

const dataCategories = [
  {
    icon: MapPin,
    title: "Location Data",
    description: "Foot traffic, demographics, and competitive landscape for 15,000+ retail locations",
    count: "15,000+",
  },
  {
    icon: Building2,
    title: "Rent Benchmarks",
    description: "Average rent rates by suburb, precinct type, and retail category",
    count: "2,400+",
  },
  {
    icon: Users,
    title: "Demographics",
    description: "Population, income, age profiles, and lifestyle segments",
    count: "50M+",
  },
  {
    icon: TrendingUp,
    title: "Market Trends",
    description: "Historical performance data and predictive indicators",
    count: "5 years",
  },
];

function DataHero() {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-eyebrow mb-4 block"
>
          Data & Research
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
>
          Market Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground-muted max-w-2xl mx-auto"
>
          Access exclusive research, quarterly reports, and the most comprehensive 
          retail location dataset in Australia.
        </motion.p>
      </div>
    </section>
  );
}

function DataCategories() {
  return (
    <section className="pb-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-background-secondary rounded-xl border border-border hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="metric text-2xl mb-1">{category.count}</div>
                <h3 className="font-medium mb-2">{category.title}</h3>
                <p className="text-sm text-foreground-muted">{category.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedReport() {
  const featured = reports[0];

  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-eyebrow mb-4 block">Featured Report</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              {featured.title}
            </h2>
            <p className="text-foreground-muted mb-6">{featured.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {featured.date}
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {featured.pages} pages
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="btn-primary">
                <Download className="w-4 h-4" />
                Download PDF
              </Link>
              {featured.previewAvailable && (
                <Link href="#" className="btn-secondary">
                  <ExternalLink className="w-4 h-4" />
                  Read Preview
                </Link>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-background rounded-lg border border-border p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="text-eyebrow mb-4">{featured.type} Report</div>
                <h3 className="text-2xl font-serif mb-4">{featured.title}</h3>
                <div className="w-16 h-px bg-accent mb-6" />
                <div className="space-y-4">
                  {[
                    "Executive Summary",
                    "Market Overview",
                    "Foot Traffic Analysis",
                    "Rent Benchmarks",
                    "Competitive Landscape",
                    "Emerging Trends",
                    "Q2 Predictions",
                  ].map((section) => (
                    <div key={section} className="flex items-center gap-3 text-sm text-foreground-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {section}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-serif text-accent">DEVELOOP</div>
                  <div className="text-xs text-foreground-muted">
                    develoop.com.au
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AllReports() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-eyebrow mb-4 block">Library</span>
          <h2 className="text-3xl md:text-4xl font-serif">All Reports</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reports.map((report, i) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-background-secondary rounded-xl border border-border hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-accent uppercase tracking-wider">{report.type}</div>
                    <div className="text-xs text-foreground-muted">{report.date}</div>
                  </div>
                </div>
                <span className="text-xs text-foreground-muted">{report.pages} pages</span>
              </div>

              <h3 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors">
                {report.title}
              </h3>
              <p className="text-sm text-foreground-muted mb-4">{report.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {report.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-background border border-border rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link 
                  href="#" 
                  className="text-sm text-accent flex items-center gap-1 hover:underline"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Link>
                {report.previewAvailable && (
                  <Link 
                    href="#" 
                    className="text-sm text-foreground-muted flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Preview
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#" className="btn-secondary">
            View All Reports
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsletterCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Get Research Delivered to Your Inbox
          </h2>
          <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
            Subscribe to our weekly market intelligence newsletter and be the first 
            to access new research and reports.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>

          <p className="text-xs text-foreground-muted">
            Free weekly newsletter. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function DataPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DataHero />
      <DataCategories />
      <FeaturedReport />
      <AllReports />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
