"use client";

import { Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const differentiators = [
  {
    title: "Real-World Experience",
    description: "Not theory—actual senior leadership roles delivering results at major retail brands.",
  },
  {
    title: "End-to-End Perspective",
    description: "Understanding of every phase from strategy through to store opening and operations.",
  },
  {
    title: "Pragmatic Approach",
    description: "Clear, actionable guidance that respects your constraints and commercial realities.",
  },
  {
    title: "Network & Relationships",
    description: "Established connections across the Australian retail development ecosystem.",
  },
];

export function WhyDeveloopSection() {
  return (
    <section className="section bg-background-secondary">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Why Develoop
            </p>
            <h2 className="text-display-md text-foreground mb-6">
              Experience that delivers results
            </h2>
            <p className="text-body-lg text-foreground-secondary mb-8">
              We combine deep operational expertise with strategic insight to help 
              retailers navigate their most complex development challenges.
            </p>
            <div className="p-6 bg-background-elevated border border-border rounded-lg">
              <blockquote className="text-lg font-serif text-foreground italic mb-4">
                &ldquo;The difference between a project that succeeds and one that struggles 
                often comes down to having the right guidance at the right time.&rdquo;
              </blockquote>
              <p className="text-sm text-foreground-muted">— Founder, Develoop</p>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-background-elevated transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">{item.title}</h3>
                    <p className="text-body-sm text-foreground-muted">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
