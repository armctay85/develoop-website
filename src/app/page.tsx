"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, Play, MapPin, TrendingUp, BarChart3, 
  Users, Building2, Sparkles, ChevronRight
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { brandLogos } from "@/lib/data";

// New Platform Hero
function NewHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(useMotionValue(0), springConfig);
  const mouseY = useSpring(useMotionValue(0), springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Now in Public Beta</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6"
          >
            The Intelligence Platform for{" "}
            <span className="text-accent">Australian Retail</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto mb-10"
          >
            Market intelligence, site selection tools, and portfolio management 
            for retail decision-makers. Powered by data from 15,000+ locations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/platform" className="btn-primary group">
              <Play className="w-4 h-4" />
              Explore Platform
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border"
          >
            {[
              { value: "15,000+", label: "Retail Locations" },
              { value: "50M+", label: "Data Points" },
              { value: "2,400+", label: "Platform Members" },
              { value: "$2.3B", label: "Projects Tracked" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="metric text-3xl md:text-4xl mb-1">{stat.value}</div>
                <div className="text-sm text-foreground-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-6 text-center">
            Trusted by leading retailers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["Kmart", "H&M", "Starbucks", "UNIQLO", "Woolworths", "Westfield"].map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-xl text-foreground-subtle hover:text-foreground transition-colors duration-300"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-foreground-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}

// Platform Preview Section
function PlatformPreview() {
  const features = [
    {
      icon: MapPin,
      title: "Site Selection",
      description: "AI-powered location scoring with 89% accuracy",
      stat: "50+ factors",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Real-time data on 15,000+ retail locations",
      stat: "Daily updates",
    },
    {
      icon: TrendingUp,
      title: "Portfolio Management",
      description: "Track performance across your entire network",
      stat: "340+ portfolios",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-eyebrow mb-4 block">Platform</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Everything You Need to Make<br />Smarter Retail Decisions
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            From site selection to portfolio management, our platform gives you 
            the data and insights to stay ahead of the market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-background rounded-xl border border-border hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                      <p className="text-foreground-muted mb-2">{feature.description}</p>
                      <span className="text-xs text-accent">{feature.stat}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <Link href="/platform" className="btn-primary inline-flex">
              Explore Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-background rounded-xl border border-border p-6 relative overflow-hidden">
              {/* Mock Dashboard */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(184, 149, 110, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(184, 149, 110, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-medium">Market Intelligence Dashboard</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-foreground-muted">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Foot Traffic", value: "+12%", trend: "up" },
                    { label: "Avg Rent", value: "$1,850", trend: "flat" },
                    { label: "Vacancy", value: "3.1%", trend: "down" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 bg-background-secondary rounded-lg">
                      <div className="text-xs text-foreground-muted mb-1">{stat.label}</div>
                      <div className="text-xl font-serif">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-background-secondary rounded-lg">
                  <div className="text-xs text-foreground-muted mb-4">Top Performing Locations</div>
                  <div className="space-y-3">
                    {["Chadstone, VIC", "Bondi Junction, NSW", "Fortitude Valley, QLD"].map((loc, i) => (
                      <div key={loc} className="flex items-center justify-between">
                        <span className="text-sm">{loc}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-background rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-accent rounded-full"
                              style={{ width: `${94 - i * 5}%` }}
                            />
                          </div>
                          <span className="text-xs text-accent w-8">{94 - i * 5}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Data Showcase
function DataShowcase() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-eyebrow mb-4 block">Data & Research</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Research That Drives Decisions
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Access exclusive quarterly reports, market analysis, and the most 
            comprehensive retail dataset in Australia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Q1 2024 Market Report",
              type: "Quarterly",
              pages: 45,
              description: "Comprehensive analysis of retail performance across major Australian markets.",
            },
            {
              title: "Site Selection Playbook",
              type: "White Paper",
              pages: 28,
              description: "Data-driven strategies for identifying high-potential retail locations.",
            },
            {
              title: "Leasing Benchmarks 2024",
              type: "Research",
              pages: 52,
              description: "Rent rates and lease terms across 50+ retail precincts nationwide.",
            },
          ].map((report, i) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-background-secondary rounded-xl border border-border hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-accent uppercase tracking-wider">{report.type}</span>
                <span className="text-xs text-foreground-muted">• {report.pages} pages</span>
              </div>
              <h3 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors">
                {report.title}
              </h3>
              <p className="text-foreground-muted mb-4">{report.description}</p>
              <Link href="/data" className="text-sm text-accent flex items-center gap-1 hover:underline">
                View Report
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/data" className="btn-secondary">
            Browse All Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Community Preview
function CommunityPreview() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-eyebrow mb-4 block">Community</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Connect with 2,400+ Retail Leaders
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              Join our private community of retail decision-makers. Share insights, 
              attend exclusive events, and get advice from industry experts.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Private Slack workspace for Pro members",
                "Monthly peer benchmarking groups",
                "Quarterly conferences (Sydney + Virtual)",
                "Weekly podcast: The Retail Edge",
                "Expert office hours",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground-secondary">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/community" className="btn-primary">
              Join Community
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-background rounded-xl border border-border">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <div className="metric text-2xl">2,400+</div>
                  <div className="text-sm text-foreground-muted">Members</div>
                </div>
                <div className="p-6 bg-background rounded-xl border border-border">
                  <Building2 className="w-8 h-8 text-accent mb-3" />
                  <div className="metric text-2xl">500+</div>
                  <div className="text-sm text-foreground-muted">Conference Attendees</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-background rounded-xl border border-border">
                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center mb-3">
                    <span className="text-accent text-lg">🎧</span>
                  </div>
                  <div className="metric text-2xl">120+</div>
                  <div className="text-sm text-foreground-muted">Podcast Episodes</div>
                </div>
                <div className="p-6 bg-background rounded-xl border border-border">
                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center mb-3">
                    <span className="text-accent text-lg">📅</span>
                  </div>
                  <div className="metric text-2xl">8</div>
                  <div className="text-sm text-foreground-muted">Peer Groups</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Consultancy Section (preserving the original service)
function ConsultancySection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-eyebrow mb-4 block">Consultancy</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Still Need Expert Guidance?
        </h2>
        <p className="text-lg text-foreground-muted mb-8">
          Our consultancy services remain available for complex projects that need 
          hands-on expertise. Twenty-five years of experience across Kmart, H&M, 
          Starbucks, and UNIQLO.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/services" className="btn-secondary">
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-accent/10 via-background-secondary to-background p-12 md:p-16 rounded-2xl border border-border text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Make Smarter Retail Decisions?
            </h2>
            <p className="text-foreground-muted mb-8 text-lg max-w-xl mx-auto">
              Join 2,400+ retail professionals using Develoop to find better locations, 
              track market trends, and manage their portfolios.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pricing" className="btn-primary">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule Demo
              </Link>
            </div>
            <p className="text-xs text-foreground-muted mt-6">
              No credit card required. 14-day free trial on all plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <NewHero />
      <PlatformPreview />
      <DataShowcase />
      <CommunityPreview />
      <ConsultancySection />
      <CTA />
      <Footer />
    </main>
  );
}
