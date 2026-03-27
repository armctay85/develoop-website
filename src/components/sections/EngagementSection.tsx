"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, ClipboardList, Rocket, LineChart } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const engagementSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We begin with a conversation about your challenges, objectives, and constraints.",
  },
  {
    icon: ClipboardList,
    title: "Assessment & Proposal",
    description: "We assess your situation and propose a tailored approach to address your needs.",
  },
  {
    icon: Rocket,
    title: "Engagement & Delivery",
    description: "We work alongside your team, providing hands-on guidance through every phase.",
  },
  {
    icon: LineChart,
    title: "Review & Optimisation",
    description: "We measure outcomes and identify opportunities for continuous improvement.",
  },
];

export function EngagementSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Engagement Model
            </p>
            <h2 className="text-display-md text-foreground mb-6">
              Flexible support for your needs
            </h2>
            <div className="space-y-6 text-body-md text-foreground-secondary">
              <p>
                We tailor our engagement to match your specific requirements. Whether 
                you need strategic guidance for a single project or ongoing support 
                across your portfolio, we adapt to deliver value.
              </p>
              <p>
                Our engagements range from focused advisory sessions to comprehensive 
                project oversight, always with clear deliverables and transparent communication.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary group">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {engagementSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      {index < engagementSteps.length - 1 && (
                        <div className="w-px h-full bg-border mt-4" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>
                      <p className="text-body-sm text-foreground-muted">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
