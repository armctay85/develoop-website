import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { audiences, boundaries } from "@/lib/content";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Develoop is a consultant-led advisory practice for developers, multi-site operators and project teams scaling a rollout of sites.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The practice"
        title="Consultant-led. Built to sit beside your team."
        lede="Develoop is an advisory practice for design, delivery and development. The work is coaching and systems: a clearer pipeline, standard documents, and support while a rollout is in motion."
      />

      <Section labelledBy="about-who" className="border-t border-border">
        <h2 id="about-who" className="font-serif text-4xl text-foreground sm:text-5xl">
          Who we work with
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <li key={audience.title} className="min-w-0 border border-border p-6">
              <h3 className="font-serif text-2xl text-foreground">{audience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">{audience.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="about-how" className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="about-how" className="font-serif text-4xl text-foreground sm:text-5xl">
              How an engagement starts
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-6">
              <li>
                <h3 className="font-serif text-2xl text-foreground">A call</h3>
                <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                  You tell us how many sites you expect to deliver, where the pain is, and which engagement feels close. We say honestly if we are not the right fit.
                </p>
              </li>
              <li>
                <h3 className="font-serif text-2xl text-foreground">A proposal</h3>
                <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                  Scope, fee and timing are written down. The figures on this website are starting points, not a quote.
                </p>
              </li>
              <li>
                <h3 className="font-serif text-2xl text-foreground">Your team runs it</h3>
                <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                  We advise, write the standards with you, and coach. Appointments, awards and the works stay with your organisation.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Section>

      <Section labelledBy="about-line" className="border-t border-border">
        <h2 id="about-line" className="font-serif text-4xl text-foreground sm:text-5xl">
          What we will not do
        </h2>
        <ul className="mt-8 max-w-3xl space-y-4">
          {boundaries.map((item) => (
            <li key={item} className="border-l border-accent pl-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-foreground-muted">
          The legal name of the practice is on the terms page.
        </p>
        <Link href="/terms" className="mt-2 inline-flex min-h-11 items-center text-sm text-foreground underline decoration-border-light underline-offset-4 hover:text-accent">
          Read the terms
        </Link>
        <Link href="/contact" className="btn-primary mt-8 w-full sm:w-auto">
          Book a call
        </Link>
      </Section>
    </>
  );
}
