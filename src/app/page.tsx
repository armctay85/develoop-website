import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/ui/Section";
import { addOns, audiences, steps, systemsModules, tiers } from "@/lib/content";
import { estimateHqUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Develoop | Design, delivery and development advisory",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Develoop | Design, delivery and development advisory",
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Develoop | Design, delivery and development advisory",
    description: site.description,
  },
};

export default function HomePage() {
  return (
    <>
      <section className="container-page pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow>Design, delivery and development advisory</Eyebrow>
            <h1 className="max-w-4xl text-balance font-serif text-[2.6rem] leading-[1.05] tracking-[-0.025em] text-foreground sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
              Deliver sites faster, at scale, with fewer surprises.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base leading-relaxed text-foreground-muted sm:text-lg">
              Develoop advises developers, multi-site operators and project teams who are scaling a rollout. We put a delivery system in place, then coach your people to run it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Book a call
              </Link>
              <Link href="#method" className="btn-secondary w-full sm:w-auto">
                How it works
              </Link>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-1 border border-border sm:mt-20 sm:grid-cols-3">
          {[
            ["Engagement", "Fixed-fee diagnostic"],
            ["Starting fee", "From A$6,500"],
            ["Time", "2 to 3 weeks"],
          ].map(([term, detail]) => (
            <div key={term} className="border-b border-border px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <dt className="text-xs uppercase tracking-[0.16em] text-accent">{term}</dt>
              <dd className="mt-2 font-serif text-2xl text-foreground">{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section labelledBy="who-heading" className="border-t border-border">
        <Eyebrow>Who it is for</Eyebrow>
        <h2 id="who-heading" className="max-w-2xl text-balance font-serif text-4xl text-foreground sm:text-5xl">
          Teams that repeat the same kind of site, and feel the gaps more each time.
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <li key={audience.title} className="min-w-0 border-t border-accent/50 pt-5">
              <h3 className="font-serif text-2xl text-foreground">{audience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">{audience.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="method" labelledBy="method-heading" className="border-t border-border">
        <Eyebrow>How it works</Eyebrow>
        <h2 id="method-heading" className="max-w-2xl text-balance font-serif text-4xl text-foreground sm:text-5xl">
          Three steps. Diagnose, build, then stay while the team uses it.
        </h2>
        <ol className="mt-12 grid gap-10 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="min-w-0">
              <p className="font-serif text-3xl text-accent">{step.number}</p>
              <h3 className="mt-4 font-serif text-2xl text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10">
          <Link href="/approach" className="inline-flex min-h-11 items-center text-sm text-accent underline decoration-accent/40 underline-offset-4">
            Read the method
          </Link>
        </p>
      </Section>

      <Section id="tiers" labelledBy="tiers-heading" className="border-t border-border">
        <Eyebrow>Engagements</Eyebrow>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="tiers-heading" className="max-w-2xl text-balance font-serif text-4xl text-foreground sm:text-5xl">
            Three ways to engage. Fees are starting points.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-foreground-muted">
            A proposal confirms scope, fee and timing before any work starts.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <li key={tier.id} className="flex min-w-0 flex-col border border-border bg-background-secondary p-6">
              <h3 className="font-serif text-2xl text-foreground">{tier.name}</h3>
              <p className="mt-4 font-serif text-xl text-accent">{tier.price}</p>
              <p className="mt-1 text-sm text-foreground-muted">{tier.timeline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground-muted">{tier.summary}</p>
              {tier.id === "systems" ? (
                <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-foreground-muted">
                  {systemsModules.map((module) => (
                    <li key={module.id} className="flex items-baseline justify-between gap-3">
                      <span>{module.name}</span>
                      <span className="shrink-0 text-foreground">{module.price}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link href={`/services#${tier.id}`} className="btn-secondary mt-6 w-full">
                See deliverables
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="addons-heading" className="border-t border-border">
        <Eyebrow>Alongside an engagement</Eyebrow>
        <h2 id="addons-heading" className="max-w-2xl text-balance font-serif text-4xl text-foreground sm:text-5xl">
          Add-ons, scoped in the proposal.
        </h2>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {addOns.map((addOn) => (
            <li key={addOn.name} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-8">
              <h3 className="font-serif text-xl text-foreground sm:col-span-4">{addOn.name}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted sm:col-span-8 sm:text-base">{addOn.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="tools-heading" className="border-t border-border">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Tool used inside engagements</Eyebrow>
            <h2 id="tools-heading" className="text-balance font-serif text-4xl text-foreground sm:text-5xl">
              Estimate HQ
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted">
              Develoop&apos;s construction cost and take-off tool. Engagements use it when a cost or a measure needs a shared place to live. It stays on its own site.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <a href={estimateHqUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              Visit Estimate HQ
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href="/tools" className="btn-secondary w-full sm:w-auto">
              How it is used
            </Link>
          </div>
        </div>
      </Section>

      <section className="border-t border-border">
        <div className="container-page grid gap-8 py-16 sm:py-24 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="text-balance font-serif text-4xl text-foreground sm:text-5xl">
              Tell us where delivery is slowing the rollout.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
              A short enquiry is enough. We reply to arrange a call.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
