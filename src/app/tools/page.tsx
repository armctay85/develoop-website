import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/metadata";
import { estimateHqUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Tools",
  description:
    "Estimate HQ is Develoop's construction cost and take-off tool, used inside engagements. Visit estimatehq.com.au.",
  path: "/tools/",
});

const uses = [
  {
    title: "Inside a diagnostic",
    text: "Where cost or measure is part of the bottleneck, Estimate HQ is the place a figure can be checked rather than retyped into a slide.",
  },
  {
    title: "Inside a systems build",
    text: "Cost plan formats and tender comparisons point at Estimate HQ when the team needs a take-off and a cost in the same tool.",
  },
  {
    title: "Inside a retainer",
    text: "As sites move, the same tool keeps the numbers comparable. The coaching is about how the team uses it, not a second product built on this website.",
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Estimate HQ lives on its own site."
        lede="Estimate HQ is Develoop's construction cost and take-off tool. It is used inside engagements. This website does not rebuild it, host it, or replace it."
      />

      <Section className="pt-4">
        <div className="grid gap-10 border border-border bg-background-secondary p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-serif text-3xl text-foreground sm:text-4xl">Construction cost and take-off.</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
              When an engagement needs a measure, a cost plan or a comparison, the work happens in Estimate HQ. Open the tool directly. Nothing here signs you in or stores a project.
            </p>
          </div>
          <div className="flex items-end lg:col-span-5 lg:justify-end">
            <a href={estimateHqUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              Visit Estimate HQ
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {uses.map((item) => (
            <li key={item.title} className="min-w-0 border-t border-border pt-5">
              <h2 className="font-serif text-2xl text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">{item.text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-foreground-muted">
          Estimate HQ is a separate website at estimatehq.com.au. Use of that tool is covered there. Advisory engagements are agreed in a Develoop proposal.
        </p>
      </Section>
    </>
  );
}
