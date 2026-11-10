import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Terms",
  description: "Terms for using the Develoop website, including the advisory scope of the practice and how fees are agreed.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Terms"
        lede="Please read these terms before using the website. They were last updated on 9 November 2026."
      />
      <article className="container-page legal pb-20 sm:pb-28">
        <p className="entity-line">Develoop is a business name of DEVELOOP (ABN 30 140 738 615).</p>

        <h2>Using this website</h2>
        <p>
          By using this website you agree to these terms. If you do not agree, please do not use the site. The site offers general information about an advisory practice. It is not an offer to enter a contract, and it is not advice for a particular site or transaction.
        </p>

        <h2>What the practice does</h2>
        <p>
          Develoop provides consultant-led design, delivery and development advisory, and coaching for teams that are scaling a rollout of sites. An engagement begins only when a written proposal is accepted.
        </p>
        <p>The practice does not:</p>
        <ul>
          <li>Negotiate leases on a client&apos;s behalf. That requires an estate agent licence.</li>
          <li>Manage building work, act as superintendent under a building contract, or carry out construction.</li>
          <li>Appoint consultants or contractors for a client, or award tenders.</li>
          <li>Hold client money.</li>
        </ul>

        <h2>Fees</h2>
        <p>
          Amounts on this website are starting points, shown as &quot;from&quot; ranges. They are not a quote. The fee, scope and timing for a piece of work are set in a proposal. Sending the enquiry form does not appoint the practice and does not create a fee.
        </p>

        <h2>Your enquiry</h2>
        <p>
          You agree that the information you send is accurate to the best of your knowledge, and that you have permission to share it. Do not send confidential documents through the form. Use the form for a first conversation only.
        </p>

        <h2>The website content</h2>
        <p>
          We take care with what is published here. It can change, and it may not be complete for your situation. You should not rely on it as a substitute for a proposal, or for advice from your own consultants.
        </p>
        <p>
          Nothing on this website excludes rights that cannot be excluded under the Australian Consumer Law. Subject to that, we are not liable for loss that comes from relying on general website content.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The text, layout and logo on this website belong to the practice unless stated otherwise. You may not copy them for a commercial use without written permission. You may share a link.
        </p>

        <h2>Acceptable use</h2>
        <p>You must not:</p>
        <ul>
          <li>Use the site in a way that breaks the law</li>
          <li>Attempt to disrupt the site or the enquiry form</li>
          <li>Send malware, or attempt to gain access you are not allowed</li>
          <li>Scrape the site in a way that degrades it for other people</li>
        </ul>

        <h2>Estimate HQ and other links</h2>
        <p>
          Estimate HQ is a separate website at estimatehq.com.au. It is Develoop&apos;s construction cost and take-off tool, and it is used inside engagements. Use of that site is governed there, not by these terms. Links to other sites are provided for convenience. We are not responsible for their content.
        </p>

        <h2>Law</h2>
        <p>
          These terms are governed by the laws of Australia. If a written proposal says which courts apply to an engagement, that proposal governs the engagement. These website terms govern use of the website.
        </p>

        <h2>Changes</h2>
        <p>We may update these terms by posting a new version on this page. The date at the top of the page will change when we do.</p>

        <h2>Questions</h2>
        <p>Questions about these terms can be sent through the enquiry form.</p>
        <p>
          <Link href="/contact" className="inline-flex min-h-11 items-center">
            Go to the enquiry form
          </Link>
        </p>
      </article>
    </>
  );
}
