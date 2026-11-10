import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { addOns, diagnostic, retainer, systemsBuild, systemsModules, type Tier } from "@/lib/content";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Delivery Systems Diagnostic, systems build and an implementation retainer. Deliverables, timelines and starting fees for Develoop advisory.",
  path: "/services/",
});

function TierBlock({ tier }: { tier: Tier }) {
  return (
    <article id={tier.id} className="scroll-mt-24 border-t border-border py-14 sm:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-balance font-serif text-3xl text-foreground sm:text-4xl">{tier.name}</h2>
          <p className="mt-4 font-serif text-2xl text-accent">{tier.price}</p>
          <p className="mt-2 text-sm text-foreground-muted">{tier.timeline}</p>
          <p className="mt-5 text-base leading-relaxed text-foreground-muted">{tier.summary}</p>
          {tier.note ? <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{tier.note}</p> : null}
          <Link href="/contact" className="btn-primary mt-8 w-full sm:w-auto">
            Book a call
          </Link>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <h3 className="font-sans text-sm font-medium tracking-normal text-foreground">Deliverables</h3>
          <ul className="mt-4 space-y-3">
            {tier.deliverables.map((item) => (
              <li key={item} className="border-t border-border pt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Advisory, in three engagements."
        lede="Each one is consultant-led. Your team keeps the decisions, the appointments and the works. Fees below are starting points, confirmed in a proposal."
      />

      <TierBlock tier={diagnostic} />
      <TierBlock tier={systemsBuild} />

      <Section>
        <h2 className="font-serif text-3xl text-foreground">Or commission a module</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
          The module fees are a way to start with one piece. They are not added on top of the full systems build.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {systemsModules.map((module) => (
            <article key={module.id} id={module.id} className="scroll-mt-24 flex min-w-0 flex-col border border-border p-6">
              <h3 className="font-serif text-2xl text-foreground">{module.name}</h3>
              <p className="mt-3 font-serif text-xl text-accent">{module.price}</p>
              <p className="mt-1 text-sm text-foreground-muted">{module.timeline}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{module.summary}</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-foreground-muted">
                {module.deliverables.map((item) => (
                  <li key={item} className="border-t border-border pt-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <TierBlock tier={retainer} />

      <Section labelledBy="addon-services" className="border-t border-border">
        <h2 id="addon-services" className="font-serif text-3xl text-foreground sm:text-4xl">
          Add-ons
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
          These sit beside a diagnostic, a systems build or a retainer. Scope and fee are set in the proposal. No public starting fee is listed, because the size varies with the site.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {addOns.map((addOn) => (
            <li key={addOn.name} className="min-w-0 border border-border p-6">
              <h3 className="font-serif text-xl text-foreground">{addOn.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{addOn.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
