import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { boundaries, methodSteps, principles } from "@/lib/content";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Approach",
  description:
    "How Develoop advises a rollout: map the pipeline, set the gates, write the standards, and coach the team. Advisory only.",
  path: "/approach/",
});

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Method"
        title="A delivery system the next site can reuse."
        lede="The work is advisory and coaching. We help your team see the pipeline clearly, write the standards once, and use them while a rollout is underway."
      />

      <Section className="pt-8">
        <ol className="divide-y divide-border border-y border-border">
          {methodSteps.map((step) => (
            <li key={step.number} className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10">
              <p className="font-serif text-2xl text-accent sm:col-span-2">{step.number}</p>
              <div className="sm:col-span-10">
                <h2 className="font-serif text-2xl text-foreground sm:text-3xl">{step.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="principles-heading" className="border-t border-border">
        <h2 id="principles-heading" className="font-serif text-4xl text-foreground sm:text-5xl">
          What we hold to
        </h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {principles.map((principle) => (
            <li key={principle.title} className="min-w-0 border-t border-border pt-5">
              <h3 className="font-serif text-2xl text-foreground">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">{principle.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="boundary-heading" className="border-t border-border">
        <h2 id="boundary-heading" className="max-w-2xl text-balance font-serif text-4xl text-foreground sm:text-5xl">
          The line we do not cross
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted">
          Develoop advises and coaches. Your team remains the decision maker.
        </p>
        <ul className="mt-8 max-w-3xl space-y-4">
          {boundaries.map((item) => (
            <li key={item} className="border-l border-accent pl-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
              {item}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary mt-10 w-full sm:w-auto">
          Book a call
        </Link>
      </Section>
    </>
  );
}
