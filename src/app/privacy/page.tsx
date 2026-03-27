import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Develoop Retail Development Consultancy",
  description: "Develoop's privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="section">
          <div className="section-inner max-w-4xl">
            <FadeIn>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Legal
              </p>
              <h1 className="text-display-lg text-foreground mb-6">Privacy Policy</h1>
              <p className="text-body-sm text-foreground-muted mb-12">
                Last updated: {currentDate}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">1. Introduction</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  {companyInfo.fullName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website {companyInfo.website} or engage our services.
                </p>
                <p className="text-body-md text-foreground-secondary mb-6">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this 
                  Privacy Policy, please do not access the site or use our services.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">2. Information We Collect</h2>
                <p className="text-body-md text-foreground-secondary mb-4">We may collect information about you in a variety of ways, including:</p>
                
                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Personal Data</h3>
                <p className="text-body-md text-foreground-secondary mb-6">
                  When you contact us through our website, we may collect personally identifiable information, 
                  such as your name, email address, company name, and any other information you voluntarily 
                  provide to us. This information is used solely to respond to your inquiries and provide 
                  our services.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Usage Data</h3>
                <p className="text-body-md text-foreground-secondary mb-6">
                  We may automatically collect certain information when you visit our website, including 
                  your IP address, browser type, operating system, access times, and the pages you have 
                  viewed directly before and after accessing the website. This information helps us 
                  understand how visitors use our site and improve our services.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">3. How We Use Your Information</h2>
                <p className="text-body-md text-foreground-secondary mb-4">We may use the information we collect about you to:</p>
                
                <ul className="list-disc list-inside space-y-2 text-body-md text-foreground-secondary mb-6 ml-4">
                  <li>Respond to your inquiries and provide our services</li>
                  <li>Communicate with you about our services and updates</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">4. Disclosure of Your Information</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  We do not sell, trade, or otherwise transfer your personally identifiable information 
                  to third parties. This does not include trusted third parties who assist us in operating 
                  our website, conducting our business, or servicing you, so long as those parties agree 
                  to keep this information confidential.
                </p>
                <p className="text-body-md text-foreground-secondary mb-6">
                  We may disclose your information when we believe release is appropriate to comply with 
                  the law, enforce our site policies, or protect ours or others&apos; rights, property, or safety.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">5. Security of Your Information</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  We use administrative, technical, and physical security measures to help protect your 
                  personal information. While we have taken reasonable steps to secure the personal 
                  information you provide to us, please be aware that despite our efforts, no security 
                  measures are perfect or impenetrable, and no method of data transmission can be 
                  guaranteed against any interception or other type of misuse.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">6. Your Rights</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  You have the right to access, correct, or delete your personal information. If you 
                  would like to exercise these rights, please contact us using the information provided 
                  below. We will respond to your request within a reasonable timeframe.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">7. Changes to This Privacy Policy</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  We may update this Privacy Policy from time to time in order to reflect changes to our 
                  practices or for other operational, legal, or regulatory reasons. Any changes will be 
                  posted on this page with an updated revision date.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">8. Contact Us</h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you have questions or comments about this Privacy Policy, please contact us:
                </p>
                
                <div className="p-6 bg-background-secondary border border-border rounded-lg mt-6">
                  <p className="text-body-md text-foreground mb-2">{companyInfo.fullName}</p>
                  <p className="text-body-sm text-foreground-muted mb-1">Email: {companyInfo.email}</p>
                  <p className="text-body-sm text-foreground-muted">ABN: {companyInfo.abn}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
