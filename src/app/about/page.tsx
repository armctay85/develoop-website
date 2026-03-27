import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/section-divider";
import { HeroBackground } from "@/components/ui/hero-background";
import { ArrowRight, Lightbulb, Compass, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Develoop Retail Development Consultancy",
  description: "Learn about Develoop's story, philosophy, and values. Twenty-five years of retail development expertise brought to Australian retailers.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Pragmatic Innovation",
    description: "We combine fresh thinking with proven methods. Every recommendation is grounded in real-world experience and tailored to your context.",
  },
  {
    icon: Compass,
    title: "Unwavering Integrity",
    description: "We tell you what you need to hear, not what you want to hear. Our advice is always independent, objective, and in your best interest.",
  },
  {
    icon: Heart,
    title: "Genuine Partnership",
    description: "We succeed when you succeed. We embed ourselves in your team, sharing your goals and working collaboratively toward your objectives.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero with enhanced background */}
        <section className="section relative overflow-hidden">
          <HeroBackground variant="gradient" />
          
          <div className="section-inner relative z-10">
            <FadeIn className="max-w-4xl">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                About Develoop
              </p>
              <h1 className="text-display-lg text-foreground mb-6">
                Experience and expertise, delivered with clarity
              </h1>
              <p className="text-body-lg text-foreground-secondary">
                Develoop was founded on a simple premise: that retailers deserve access 
                to senior development expertise without the overhead of a large consultancy. 
                We bring decades of hands-on experience to every engagement, providing 
                practical guidance that delivers real results.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Our Story */}
        <section className="section bg-background-secondary relative overflow-hidden">
          <div className="section-inner relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="text-display-md text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-body-md text-foreground-secondary">
                  <p>
                    After twenty-five years in senior retail development roles, our founder 
                    recognised a gap in the market. Retailers needed access to experienced 
                    guidance for their development projects, but traditional consultancies 
                    often brought theory without the practical experience to back it up.
                  </p>
                  <p>
                    Develoop was created to fill that gap. We offer the strategic insight 
                    of a consultancy combined with the operational expertise that comes 
                    from actually having done the work—from negotiating leases to managing 
                    contractors to opening stores.
                  </p>
                  <p>
                    Today, we work with retailers across Australia, helping them navigate 
                    complex development challenges with confidence and clarity.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="aspect-square bg-background-elevated border border-border rounded-lg p-8 flex flex-col justify-center relative">
                  <blockquote className="text-2xl font-serif text-foreground italic mb-6">
                    &ldquo;The best advice comes from those who have walked the same path. 
                    We&apos;ve been in your shoes, faced your challenges, and found solutions 
                    that work.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-lg font-serif text-accent">D</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Founder</p>
                      <p className="text-sm text-foreground-muted">Develoop</p>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent/30" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent/30" />
                </div>
              </FadeIn>
            </div>
          </div>

          <SectionDivider variant="gradient" className="absolute bottom-0 left-0 right-0" />
        </section>

        {/* Philosophy with values visual */}
        <section className="section relative overflow-hidden">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-square rounded-lg border border-border overflow-hidden bg-background-secondary">
                    <Image
                      src="/images/about/values-visual.svg"
                      alt="Our core values: Integrity, Excellence, Partnership, Results"
                      width={600}
                      height={600}
                      className="object-cover"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-accent/20 rounded-tr-lg" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-accent/20 rounded-bl-lg" />
                </div>
              </FadeIn>

              <div className="order-1 lg:order-2">
                <FadeIn>
                  <h2 className="text-display-md text-foreground mb-4">Our Philosophy</h2>
                  <p className="text-body-lg text-foreground-secondary mb-12">
                    Three principles guide everything we do at Develoop.
                  </p>
                </FadeIn>

                <StaggerContainer className="space-y-6">
                  {values.map((value) => {
                    const Icon = value.icon;
                    return (
                      <StaggerItem key={value.title}>
                        <div className="flex gap-4 p-4 rounded-lg hover:bg-background-secondary transition-colors group">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                            <Icon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-lg font-serif text-foreground mb-2">{value.title}</h3>
                            <p className="text-body-sm text-foreground-secondary">{value.description}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="section bg-background-secondary relative">
          <div className="section-inner">
            <FadeIn className="max-w-3xl mb-16">
              <h2 className="text-display-md text-foreground mb-4">Why We&apos;re Different</h2>
              <p className="text-body-lg text-foreground-secondary">
                What sets Develoop apart from traditional consultancies.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Real Experience",
                  description: "We&apos;ve held senior roles and delivered results, not just advised on them. We understand the pressures and constraints you face because we&apos;ve faced them too.",
                },
                {
                  title: "Practical Focus",
                  description: "We deliver actionable recommendations, not theoretical frameworks. Every piece of advice is designed to be implemented and to deliver results.",
                },
                {
                  title: "Flexible Engagement",
                  description: "We scale our involvement to match your needs. From strategic advisory to hands-on project management, we adapt our approach to deliver maximum value.",
                },
                {
                  title: "Australian Focus",
                  description: "We understand the unique challenges of the Australian retail market. Our advice is tailored to local conditions, regulations, and market dynamics.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-6 bg-background-elevated border border-border rounded-lg hover:border-accent/30 transition-colors group">
                    <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-body-sm text-foreground-secondary">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <SectionDivider variant="accent" className="absolute bottom-0 left-0 right-0" />
        </section>

        {/* CTA */}
        <section className="section relative">
          <div className="section-inner">
            <FadeIn className="max-w-3xl mx-auto text-center">
              <h2 className="text-display-md text-foreground mb-6">
                Ready to work together?
              </h2>
              <p className="text-body-lg text-foreground-secondary mb-8">
                Let&apos;s discuss how our experience and approach can help you achieve 
                your retail development objectives.
              </p>
              <Link href="/contact" className="btn-primary group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
