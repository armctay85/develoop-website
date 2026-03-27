import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/section-divider";
import { HeroBackground } from "@/components/ui/hero-background";
import { experiences, brandLogos } from "@/lib/data";
import { ArrowRight, Briefcase, Award, Users, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience | Develoop Retail Development Consultancy",
  description: "Twenty-five years of senior leadership experience across Kmart, H&M, Starbucks, and UNIQLO. View our career highlights and capabilities.",
};

const capabilities = [
  { icon: Briefcase, label: "Strategic Planning", level: "Expert" },
  { icon: Building, label: "Development Management", level: "Expert" },
  { icon: Users, label: "Stakeholder Management", level: "Expert" },
  { icon: Award, label: "Project Delivery", level: "Expert" },
];

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero with background */}
        <section className="section relative overflow-hidden">
          <HeroBackground variant="gradient" />
          
          <div className="section-inner relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                  Our Experience
                </p>
                <h1 className="text-display-lg text-foreground mb-6">
                  Twenty-five years of retail development leadership
                </h1>
                <p className="text-body-lg text-foreground-secondary mb-8">
                  From store-level execution to portfolio-wide strategy, our experience 
                  spans the full spectrum of retail development challenges.
                </p>
                <Link href="/contact" className="btn-primary group">
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {capabilities.map((cap) => {
                    const Icon = cap.icon;
                    return (
                      <div key={cap.label} className="p-6 bg-background-secondary/80 backdrop-blur-sm border border-border rounded-lg text-center hover:border-accent/30 transition-colors group">
                        <Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-medium text-foreground mb-1">{cap.label}</p>
                        <p className="text-xs text-accent">{cap.level}</p>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Brand Experience */}
        <section className="section bg-background-secondary relative overflow-hidden">
          <div className="section-inner relative z-10">
            <FadeIn className="text-center mb-16">
              <h2 className="text-display-md text-foreground mb-4">
                Trusted by leading brands
              </h2>
              <p className="text-body-md text-foreground-secondary max-w-2xl mx-auto">
                Senior leadership roles at four of the world&apos;s most recognised retail brands
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {brandLogos.map((brand) => (
                <StaggerItem key={brand.name}>
                  <div className="p-8 bg-background-elevated border border-border rounded-lg text-center hover:border-accent/30 transition-all group">
                    <span className="text-2xl font-serif text-foreground group-hover:text-accent transition-colors">{brand.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <SectionDivider variant="gradient" className="absolute bottom-0 left-0 right-0" />
        </section>

        {/* Career Timeline with visual */}
        <section className="section relative overflow-hidden">
          <div className="section-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <FadeIn className="mb-12">
                  <h2 className="text-display-md text-foreground mb-4">
                    Career Highlights
                  </h2>
                  <p className="text-body-lg text-foreground-secondary">
                    A progression of increasingly senior roles, each building on the last 
                    to create a comprehensive understanding of retail development.
                  </p>
                </FadeIn>

                <div className="max-w-xl">
                  {experiences.map((exp, index) => (
                    <FadeIn key={exp.company} delay={index * 0.1}>
                      <div className="relative pl-8 pb-12 last:pb-0">
                        {/* Timeline line */}
                        {index < experiences.length - 1 && (
                          <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-accent/50 to-border" />
                        )}
                        
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>

                        <div className="bg-background-secondary border border-border rounded-lg p-6 hover:border-accent/30 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 className="text-xl font-serif text-foreground">{exp.company}</h3>
                            <span className="text-sm text-accent font-medium">{exp.period}</span>
                          </div>
                          
                          <p className="text-sm font-medium text-foreground-secondary mb-2">{exp.role}</p>
                          <p className="text-body-sm text-foreground-muted">{exp.description}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <FadeIn delay={0.3} className="lg:sticky lg:top-24">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-lg border border-border overflow-hidden bg-background-secondary">
                    <Image
                      src="/images/experience/timeline.svg"
                      alt="25 years of career progression"
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-lg" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-lg" />

                  {/* Stats card */}
                  <div className="absolute -bottom-6 right-6 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-3xl font-serif text-accent">25+</p>
                      <p className="text-sm text-foreground-muted">Years Experience</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="section bg-background-secondary relative">
          <div className="section-inner">
            <FadeIn className="max-w-3xl mb-16">
              <h2 className="text-display-md text-foreground mb-4">
                Key Achievements
              </h2>
              <p className="text-body-lg text-foreground-secondary">
                Select highlights from twenty-five years of retail development leadership.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Led the successful entry and expansion of major international brands into Australia",
                "Managed portfolios exceeding 100 stores with consistent on-time, on-budget delivery",
                "Developed and implemented development frameworks adopted across organisations",
                "Negotiated complex lease agreements resulting in significant cost savings",
                "Built and mentored high-performing development teams across multiple markets",
                "Delivered store opening programs with 100% success rate",
              ].map((achievement, index) => (
                <StaggerItem key={index}>
                  <div className="flex gap-4 p-6 bg-background-elevated border border-border rounded-lg hover:border-accent/30 transition-colors group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-sm font-medium text-accent">{index + 1}</span>
                    </div>
                    <p className="text-body-sm text-foreground-secondary">{achievement}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <SectionDivider variant="accent" className="absolute bottom-0 left-0 right-0" />
        </section>
      </main>
      <Footer />
    </>
  );
}
