"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Check, X, ArrowRight, Sparkles, Building2, Zap, 
  HelpCircle, ChevronDown, ChevronUp
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";

function PricingHero() {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent">Simple, transparent pricing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
        >
          Choose Your Plan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground-muted max-w-2xl mx-auto"
        >
          Start free and scale as you grow. All plans include access to our 
          core market intelligence data.
        </motion.p>
      </div>
    </section>
  );
}

function PricingCards() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const getTierIcon = (id: string) => {
    switch (id) {
      case "free": return Zap;
      case "pro": return Sparkles;
      case "enterprise": return Building2;
      default: return Zap;
    }
  };

  return (
    <section className="pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => {
            const Icon = getTierIcon(tier.id);
            const isHovered = hoveredTier === tier.id;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredTier(tier.id)}
                onMouseLeave={() => setHoveredTier(null)}
                className={cn(
                  "relative p-8 rounded-2xl border transition-all duration-500",
                  tier.popular 
                    ? "bg-accent/5 border-accent scale-105 md:scale-110 z-10" 
                    : "bg-background-secondary border-border hover:border-accent/30"
                )}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-accent text-background px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors",
                  tier.popular ? "bg-accent text-background" : "bg-accent/10 text-accent"
                )}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Header */}
                <h3 className="text-2xl font-serif mb-2">{tier.name}</h3>
                <p className="text-foreground-muted text-sm mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-serif">
                      ${tier.price.toLocaleString()}
                    </span>
                    <span className="text-foreground-muted">/{tier.period}</span>
                  </div>
                  {tier.price > 0 && (
                    <div className="text-xs text-foreground-muted mt-1">
                      Billed monthly or ${Math.round(tier.price * 10).toLocaleString()}/year (save 17%)
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={tier.id === "enterprise" ? "/contact" : "#signup"}
                  className={cn(
                    "w-full btn justify-center mb-8",
                    tier.popular ? "btn-primary" : "btn-secondary"
                  )}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-medium text-foreground-muted uppercase tracking-wider">
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm">
                        <Check className={cn(
                          "w-4 h-4 mt-0.5 flex-shrink-0",
                          tier.popular ? "text-accent" : "text-green-400"
                        )} />
                        <span className="text-foreground-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
>
          <p className="text-foreground-muted">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Contact our sales team
            </Link>{" "}
            for tailored enterprise packages.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureComparison() {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    { name: "Market Intelligence Dashboard", free: true, pro: true, enterprise: true },
    { name: "Basic Location Search", free: "5/month", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "Site Selection Tool", free: false, pro: true, enterprise: true },
    { name: "Portfolio Management", free: false, pro: "10 locations", enterprise: "Unlimited" },
    { name: "Weekly Newsletter", free: true, pro: true, enterprise: true },
    { name: "Quarterly Reports", free: false, pro: "PDF download", enterprise: "White-label" },
    { name: "Community Access", free: "Read only", pro: "Full access", enterprise: "Full access" },
    { name: "Email Alerts", free: false, pro: true, enterprise: true },
    { name: "Data Export", free: false, pro: "Excel/CSV", enterprise: "API + Bulk" },
    { name: "Custom Research", free: false, pro: false, enterprise: true },
    { name: "Dedicated Analyst", free: false, pro: false, enterprise: true },
    { name: "API Access", free: false, pro: false, enterprise: true },
    { name: "Priority Support", free: false, pro: false, enterprise: true },
    { name: "Quarterly Strategy Sessions", free: false, pro: false, enterprise: true },
  ];

  const visibleFeatures = isExpanded ? features : features.slice(0, 8);

  return (
    <section className="py-24 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Compare All Features</h2>
          <p className="text-foreground-muted">
            See exactly what's included in each plan
          </p>
        </div>

        <div className="bg-background rounded-xl border border-border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-border bg-background-secondary">
            <div className="font-medium">Feature</div>
            <div className="text-center font-medium">Free</div>
            <div className="text-center font-medium text-accent">Pro</div>
            <div className="text-center font-medium">Enterprise</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {visibleFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-background-secondary/50 transition-colors"
              >
                <div className="text-sm">{feature.name}</div>
                <div className="text-center">
                  {typeof feature.free === "boolean" ? (
                    feature.free ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-foreground-muted mx-auto" />
                    )
                  ) : (
                    <span className="text-sm text-foreground-muted">{feature.free}</span>
                  )}
                </div>
                <div className="text-center bg-accent/5 -my-4 py-4">
                  {typeof feature.pro === "boolean" ? (
                    feature.pro ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-foreground-muted mx-auto" />
                    )
                  ) : (
                    <span className="text-sm font-medium">{feature.pro}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof feature.enterprise === "boolean" ? (
                    feature.enterprise ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-foreground-muted mx-auto" />
                    )
                  ) : (
                    <span className="text-sm text-foreground-muted">{feature.enterprise}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expand button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-4 text-sm text-accent hover:bg-accent/5 transition-colors flex items-center justify-center gap-2"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show All Features <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I try before I buy?",
      answer: "Yes! We offer a 14-day free trial on all paid plans. No credit card required to start. You'll have full access to all Pro features during your trial period."
    },
    {
      question: "What data sources do you use?",
      answer: "We aggregate data from multiple sources including foot traffic sensors, council planning databases, retail leasing records, and proprietary member-contributed benchmarks. Our dataset covers 15,000+ retail locations across Australia."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with the platform, contact us within 30 days for a full refund."
    },
    {
      question: "How often is the data updated?",
      answer: "Most data is updated in real-time or daily. Foot traffic data refreshes weekly, rent benchmarks are updated monthly, and competitor tracking happens continuously."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of your current billing period."
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "border rounded-lg transition-all duration-300",
                  isOpen ? "border-accent bg-accent/5" : "border-border bg-background-secondary"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    isOpen ? "bg-accent text-background" : "bg-background"
                  )}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-foreground-muted">{faq.answer}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground-muted">
            Still have questions?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PricingHero />
      <PricingCards />
      <FeatureComparison />
      <FAQ />
      <Footer />
    </main>
  );
}
