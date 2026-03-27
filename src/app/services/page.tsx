import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceIcon } from "@/components/ui/service-icon";
import { SectionDivider } from "@/components/ui/section-divider";
import { HeroBackground } from "@/components/ui/hero-background";
import { services } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Develoop Retail Development Consultancy",
  description: "Comprehensive retail development services including strategy, leasing advisory, design leadership, critical path optimisation, and lifecycle management.",
};

// Service image mapping
const serviceImages: Record<string, string> = {
  strategy: "/images/services/strategy.svg",
  leasing: "/images/services/leasing.svg",
  design: "/images/services/design.svg",
  "critical-path": "/images/services/critical-path.svg",
  lifecycle: "/images/services/lifecycle.svg",
  optimization: "/images/services/optimization.svg",
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero with background */}
        <section className="section relative overflow-hidden">
          <HeroBackground variant="geometric" />
          
          <div className="section-inner relative z-10">
            <FadeIn className="max-w-3xl">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Our Services
              </p>
              <h1 className="text-display-lg text-foreground mb-6">
                Expertise for every stage of development
              </h1>
              <p className="text-body-lg text-foreground-secondary">
                From initial strategy through to successful store opening, we provide 
                comprehensive support tailored to your specific challenges and objectives.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services List with Visuals */}
        <section className="section bg-background-secondary relative">
          <div className="section-inner">
            <div className="space-y-24">
              {services.map((service, index) => {
                const imageUrl = serviceImages[service.id] || "/images/services/strategy.svg";
                return (
                  <FadeIn key={service.id} delay={index * 0.1}>
                    <div id={service.id} className="scroll-mt-24">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Visual side */}
                        <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                          <div className="aspect-[4/3] rounded-lg border border-border overflow-hidden bg-background relative group">
                            <Image
                              src={imageUrl}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                          </div>
                          
                          {/* Corner accent */}
                          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-accent/30 rounded-tl-lg" />
                          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />
                        </div>

                        {/* Content side */}
                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                          <ServiceIcon 
                            icon={service.icon} 
                            size="xl" 
                            variant="outlined"
                            className="mb-6"
                          />
                          
                          <h2 className="text-display-sm text-foreground mb-4">
                            {service.title}
                          </h2>
                          
                          <p className="text-body-lg text-foreground-secondary mb-8">
                            {service.description}
                          </p>
                          
                          <h3 className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                            What we deliver
                          </h3>
                          
                          <ul className="grid grid-cols-1 gap-4">
                            {service.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 text-accent" />
                                </div>
                                <span className="text-body-sm text-foreground-secondary">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {index < services.length - 1 && (
                        <SectionDivider variant="ornate" className="mt-24" />
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
          
          <div className="section-inner relative z-10">
            <FadeIn className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/30 mb-8">
                <span className="text-3xl text-accent">?</span>
              </div>
              
              <h2 className="text-display-md text-foreground mb-6">
                Need a combination of services?
              </h2>
              <p className="text-body-lg text-foreground-secondary mb-8">
                Every engagement is tailored to your specific needs. Let&apos;s discuss 
                how we can support your retail development objectives.
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
