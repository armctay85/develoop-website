"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ServiceIcon } from "@/components/ui/service-icon";
import { SectionDivider } from "@/components/ui/section-divider";
import { services } from "@/lib/data";

export function ServicesOverview() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="#b8956e" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-inner relative z-10">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-display-md text-foreground mb-6">
            Comprehensive expertise for every stage of retail development
          </h2>
          <p className="text-body-lg text-foreground-secondary">
            From initial strategy through to successful store opening, we provide 
            the expertise and guidance needed to navigate complex development projects.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <Link href={`/services#${service.id}`}>
                <div className="card-hover h-full group">
                  <ServiceIcon 
                    icon={service.icon} 
                    size="lg" 
                    variant="default"
                    className="mb-6"
                  />
                  <h3 className="text-xl font-serif text-foreground mb-3">{service.title}</h3>
                  <p className="text-body-sm text-foreground-muted mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link href="/services" className="btn-secondary">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </FadeIn>
      </div>

      <SectionDivider variant="gradient" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
