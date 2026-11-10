import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description: "How Develoop collects, uses and stores personal information submitted through the enquiry form.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy"
        lede="This notice explains what the enquiry form collects, why, and how to ask for a change. It was last updated on 9 November 2026."
      />
      <article className="container-page legal pb-20 sm:pb-28">
        <h2>Who this notice is about</h2>
        <p>
          This website is operated by Develoop, a consultant-led advisory practice. The legal name of the practice is stated on the terms page. This notice covers this website only. Estimate HQ is a separate site with its own arrangements.
        </p>
        <p>
          <Link href="/terms" className="inline-flex min-h-11 items-center">
            Read the terms
          </Link>
        </p>

        <h2>What we collect</h2>
        <p>If you send the enquiry form, we collect:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Company</li>
          <li>Role</li>
          <li>Sites you expect to deliver in a year</li>
          <li>Biggest delivery pain</li>
          <li>Fee band</li>
        </ul>
        <p>
          The form also includes a hidden field that people are not asked to fill in. If that field is filled in, the submission is discarded.
        </p>
        <p>
          The server may log an IP address for a short time so the form can limit repeated submissions. Hosting logs may also record the usual technical details of a request, such as the time and the browser type.
        </p>
        <p>This site does not use advertising or analytics cookies, and the form does not set a tracking cookie.</p>

        <h2>Why we collect it</h2>
        <p>We use the enquiry to:</p>
        <ul>
          <li>Reply to you and arrange a call</li>
          <li>Decide whether the practice is a fit for the rollout you described</li>
          <li>Keep a record of the conversation if an engagement follows</li>
          <li>Limit automated or repeated submissions</li>
        </ul>
        <p>We do not sell personal information, and we do not add you to a marketing list because you enquired.</p>

        <h2>How it is sent</h2>
        <p>
          When email is configured, the enquiry is sent to the practice inbox through Resend, an email provider. Resend may process that message on servers outside Australia. When email is not configured, the enquiry is written to the server log instead, so it can still be read by the operator of this site.
        </p>
        <p>The hosting provider processes the request in order to run the site.</p>

        <h2>How long we keep it</h2>
        <p>
          An enquiry is kept long enough to respond. If it becomes an engagement, the relevant details are kept for that record. Server logs follow the host&apos;s retention. You can ask us to correct details you sent by using the enquiry form and saying what should change.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable steps to protect what you send. No website can promise that a transmission is completely secure.
        </p>

        <h2>Children</h2>
        <p>This site is for organisations and their staff. It is not directed at children, and we do not knowingly collect information from them.</p>

        <h2>Changes</h2>
        <p>If this notice changes, the updated version will be posted on this page with a new date.</p>

        <h2>Contact</h2>
        <p>Questions about this notice can be sent through the enquiry form.</p>
        <p>
          <Link href="/contact" className="inline-flex min-h-11 items-center">
            Go to the enquiry form
          </Link>
        </p>
      </article>
    </>
  );
}
