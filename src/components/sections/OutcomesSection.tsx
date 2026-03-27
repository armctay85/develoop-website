"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const outcomes = [
  {
    metric: "30%",
    description: "Average reduction in project timelines through critical path optimisation",
  },
  {
    metric: "25%",
    description: "Typical cost savings via strategic leasing and procurement advice",
  },
  {
    metric: "100%",
    description: "Project success rate when engaged from strategy through completion",
  },
  {
    metric: "50+",
    description: "Successful store openings supported across Australia",
  },
];

export function OutcomesSection() {
  return (
    <section className="section bg-background-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="section-inner relative z-10">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Proven Outcomes
          </p>
          <h2 className="text-display-md text-foreground mb-6">
            Results that speak for themselves
          </h2>
          <p className="text-body-lg text-foreground-secondary">
            We measure success by the tangible improvements we deliver for our clients.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outcomes.map((outcome) => (
            <StaggerItem key={outcome.metric}>
              <div className="p-8 bg-background-elevated border border-border rounded-lg">
                <p className="text-5xl md:text-6xl font-serif text-accent mb-4">{outcome.metric}</p>
                <p className="text-body-md text-foreground-secondary">{outcome.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
