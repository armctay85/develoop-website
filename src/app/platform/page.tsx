"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, BarChart3, Map, LayoutGrid, TrendingUp, 
  MapPin, Users, Building2, Activity, ChevronRight, 
  Play, Sparkles, Target, Zap, Globe
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { platformFeatures, dataInsights } from "@/lib/data";
import { cn } from "@/lib/utils";

// Hero Section with kinetic typography
function PlatformHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
        
        {/* Floating grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(184, 149, 110, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated orbs */}
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

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
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
            <Link href="#demo" className="btn-primary group">
              <Play className="w-4 h-4" />
              Try Interactive Demo
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
      </motion.div>
    </section>
  );
}

// Interactive Demo Section - Site Selection Tool
function InteractiveDemo() {
  const [selectedRetailType, setSelectedRetailType] = useState("fashion");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const retailTypes = [
    { id: "fashion", name: "Fashion Retail", icon: Target },
    { id: "food", name: "Food & Beverage", icon: Activity },
    { id: "electronics", name: "Electronics", icon: Zap },
    { id: "grocery", name: "Grocery", icon: Building2 },
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <section id="demo" className="section bg-background-secondary">
      <div className="section-inner">
        <div className="text-center mb-16">
          <span className="text-eyebrow mb-4 block">Interactive Demo</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Try the Site Selection Tool
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Experience how our AI-powered platform identifies the best retail locations 
            based on foot traffic, demographics, and competition density.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="bg-background p-8 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-6">Select Retail Category</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {retailTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedRetailType(type.id);
                      setShowResults(false);
                    }}
                    className={cn(
                      "p-4 rounded-lg border text-left transition-all duration-300",
                      selectedRetailType === type.id
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    )}
                  >
                    <Icon className={cn(
                      "w-6 h-6 mb-2",
                      selectedRetailType === type.id ? "text-accent" : "text-foreground-muted"
                    )} />
                    <span className="text-sm font-medium">{type.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label className="text-sm text-foreground-muted mb-2 block">Target Market</label>
                <select className="w-full bg-background-secondary border border-border rounded-lg px-4 py-3 text-sm focus:border-accent focus:outline-none">
                  <option>Sydney CBD & Inner City</option>
                  <option>Melbourne CBD & Inner Suburbs</option>
                  <option>Brisbane Metro</option>
                  <option>Perth Metro</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-foreground-muted mb-2 block">Store Size</label>
                <select className="w-full bg-background-secondary border border-border rounded-lg px-4 py-3 text-sm focus:border-accent focus:outline-none">
                  <option>500 - 1,000 sqm</option>
                  <option>1,000 - 2,000 sqm</option>
                  <option>2,000 - 5,000 sqm</option>
                  <option>5,000+ sqm</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="btn-primary w-full"
            >
              {isAnalyzing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                  />
                  Analyzing 50+ Data Points...
                </>
              ) : (
                <>
                  <Target className="w-4 h-4" />
                  Generate Location Score
                </>
              )}
            </button>
          </div>

          {/* Results */}
          <div className="bg-background p-8 rounded-lg border border-border relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                >
                  <Map className="w-16 h-16 text-accent/30 mb-4" />
                  <h4 className="text-lg font-medium mb-2">Ready to Analyze</h4>
                  <p className="text-sm text-foreground-muted">
                    Select your parameters and click generate to see location recommendations
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium">Top Recommendations</h4>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                      Live Data
                    </span>
                  </div>

                  {[
                    { 
                      location: "Chadstone, VIC", 
                      score: 94, 
                      footTraffic: "145K/week",
                      rent: "$1,850/sqm",
                      trend: "up"
                    },
                    { 
                      location: "Bondi Junction, NSW", 
                      score: 91, 
                      footTraffic: "98K/week",
                      rent: "$2,200/sqm",
                      trend: "up"
                    },
                    { 
                      location: "Fortitude Valley, QLD", 
                      score: 87, 
                      footTraffic: "72K/week",
                      rent: "$1,450/sqm",
                      trend: "neutral"
                    },
                  ].map((result, i) => (
                    <motion.div
                      key={result.location}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 bg-background-secondary rounded-lg border border-border hover:border-accent/30 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold",
                            result.score >= 90 ? "bg-green-500/20 text-green-400" :
                            result.score >= 80 ? "bg-accent/20 text-accent" : "bg-yellow-500/20 text-yellow-400"
                          )}>
                            {result.score}
                          </div>
                          <div>
                            <div className="font-medium group-hover:text-accent transition-colors">
                              {result.location}
                            </div>
                            <div className="text-xs text-foreground-muted">
                              Match Score
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-foreground-muted" />
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div>
                          <span className="text-foreground-muted">Foot Traffic</span>
                          <div className="font-medium">{result.footTraffic}</div>
                        </div>
                        <div>
                          <span className="text-foreground-muted">Rent</span>
                          <div className="font-medium">{result.rent}</div>
                        </div>
                        <div>
                          <span className="text-foreground-muted">Trend</span>
                          <div className={cn(
                            "font-medium flex items-center gap-1",
                            result.trend === "up" ? "text-green-400" : "text-foreground-muted"
                          )}>
                            <TrendingUp className="w-3 h-3" />
                            {result.trend === "up" ? "Rising" : "Stable"}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Real-time dashboards tracking foot traffic, rent benchmarks, and competitive movements across Australian retail precincts.",
      stats: [
        { label: "Locations", value: "15,000+" },
        { label: "Data Points", value: "50M+" },
      ],
    },
    {
      icon: Map,
      title: "Site Selection",
      description: "AI-powered scoring that predicts retail success probability based on demographics, competition, and market trends.",
      stats: [
        { label: "Accuracy", value: "89%" },
        { label: "Factors", value: "50+" },
      ],
    },
    {
      icon: LayoutGrid,
      title: "Portfolio Management",
      description: "Track your entire retail network, monitor performance, and receive automated lease renewal alerts.",
      stats: [
        { label: "Portfolios", value: "340+" },
        { label: "Alerts", value: "24/7" },
      ],
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="text-center mb-16">
          <span className="text-eyebrow mb-4 block">Platform Features</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Everything You Need to Make<br />Smarter Retail Decisions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-background-secondary rounded-lg border border-border hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="text-foreground-muted mb-6">{feature.description}</p>
                <div className="flex gap-8 pt-6 border-t border-border">
                  {feature.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-serif text-accent">{stat.value}</div>
                      <div className="text-xs text-foreground-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Live Data Ticker
function DataTicker() {
  return (
    <section className="py-12 bg-accent/5 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-foreground-muted uppercase tracking-wider">Live Market Data</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {dataInsights.map((insight, i) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-sm text-foreground-muted mb-1">{insight.title}</div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-serif">{insight.value}</span>
                <span className={cn(
                  "text-xs font-medium",
                  insight.trend === "up" ? "text-green-400" : 
                  insight.trend === "down" ? "text-green-400" : "text-foreground-muted"
                )}>
                  {insight.change}
                </span>
              </div>
              <div className="text-xs text-foreground-muted mt-1">{insight.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The site selection tool has completely transformed how we evaluate new locations. We've reduced our decision time by 60%.",
      author: "Sarah Chen",
      role: "Head of Expansion",
      company: "Local Threads Co.",
    },
    {
      quote: "Finally, a platform that understands Australian retail. The foot traffic data alone has saved us from several bad lease decisions.",
      author: "Michael Roberts",
      role: "Property Director",
      company: "Coastal Retail Group",
    },
    {
      quote: "We use Develoop for every portfolio review. The lease renewal alerts alone are worth the subscription.",
      author: "Emma Thompson",
      role: "CEO",
      company: "Urban Food Co.",
    },
  ];

  return (
    <section className="section bg-background-secondary">
      <div className="section-inner">
        <div className="text-center mb-16">
          <span className="text-eyebrow mb-4 block">Member Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif">
            Trusted by 2,400+ Retail Decision-Makers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-background rounded-lg border border-border"
            >
              <div className="text-4xl text-accent/30 font-serif mb-4">"</div>
              <p className="text-foreground-secondary mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-foreground-muted">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="relative bg-gradient-to-br from-accent/10 via-background-secondary to-background p-12 md:p-16 rounded-2xl border border-border text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ready to Make Smarter Retail Decisions?
            </h2>
            <p className="text-foreground-muted mb-8 text-lg">
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

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PlatformHero />
      <DataTicker />
      <FeaturesSection />
      <InteractiveDemo />
      <TestimonialsSection />
      <CTA />
      <Footer />
    </main>
  );
}
