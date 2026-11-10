import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Book a call",
  description:
    "Book a call with Develoop. Share your role, rollout volume, delivery pain and fee band, and we will reply to arrange a conversation.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a call"
        title="Tell us about the rollout."
        lede="Name, company, role, how many sites you expect in a year, the biggest delivery pain, and a fee band. We read the enquiry and reply to arrange a call."
      />
      <div className="container-page pb-20 pt-4 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground">What happens next</h2>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
              <li>We read what you sent.</li>
              <li>We reply to arrange a call if there is a fit.</li>
              <li>If we proceed, a proposal sets scope, fee and timing. Nothing on this form is an appointment.</li>
            </ol>
          </div>
          <div className="min-w-0 lg:col-span-8">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </>
  );
}
