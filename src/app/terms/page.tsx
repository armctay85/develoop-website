import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Disclaimer | Develoop Retail Development Consultancy",
  description: "Develoop's terms of use and disclaimer. Please read these terms carefully before using our website or services.",
};

export default function TermsPage() {
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
              <h1 className="text-display-lg text-foreground mb-6">Terms & Disclaimer</h1>
              <p className="text-body-sm text-foreground-muted mb-12">
                Last updated: {currentDate}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">1. Agreement to Terms</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  By accessing our website at {companyInfo.website} and using our services, you agree to be 
                  bound by these Terms and Disclaimer. If you disagree with any part of these terms, 
                  you may not access the website or use our services.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">2. Intellectual Property</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  The content, layout, design, data, databases, and graphics on this website are protected 
                  by copyright, trademark, and other intellectual property laws. Unless expressly permitted, 
                  you may not reproduce, modify, copy, distribute, or use for commercial purposes any 
                  materials without our prior written consent.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">3. Use of Website</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  You may use our website for lawful purposes only. You agree not to use our website:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-body-md text-foreground-secondary mb-6 ml-4">
                  <li>In any way that breaches any applicable local, national, or international law</li>
                  <li>To transmit any unsolicited or unauthorised advertising or promotional material</li>
                  <li>To knowingly transmit any data or material that contains viruses or harmful code</li>
                  <li>To attempt to gain unauthorised access to our website or servers</li>
                </ul>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">4. Professional Disclaimer</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  The information provided on this website is for general informational purposes only. 
                  While we endeavour to keep the information up to date and correct, we make no 
                  representations or warranties of any kind, express or implied, about the completeness, 
                  accuracy, reliability, suitability, or availability of the website or the information, 
                  products, services, or related graphics contained on the website for any purpose.
                </p>
                <p className="text-body-md text-foreground-secondary mb-6">
                  Any reliance you place on such information is strictly at your own risk. In no event 
                  will we be liable for any loss or damage including without limitation, indirect or 
                  consequential loss or damage, or any loss or damage whatsoever arising from loss of 
                  data or profits arising out of, or in connection with, the use of this website.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">5. External Links</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  Our website may contain links to external websites that are not provided or maintained 
                  by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any 
                  information on these external websites. The inclusion of any links does not necessarily 
                  imply a recommendation or endorse the views expressed within them.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">6. Limitation of Liability</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  To the maximum extent permitted by applicable law, {companyInfo.name} and its directors, 
                  employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-body-md text-foreground-secondary mb-6 ml-4">
                  <li>Your access to or use of or inability to access or use the website or services</li>
                  <li>Any conduct or content of any third party on the website</li>
                  <li>Any content obtained from the website</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">7. Indemnification</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  You agree to indemnify and hold harmless {companyInfo.name} and its directors, employees, 
                  partners, agents, suppliers, and affiliates from any claim or demand, including reasonable 
                  attorneys&apos; fees, made by any third party due to or arising out of your use of the website, 
                  your violation of these Terms, or your violation of any rights of another.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">8. Governing Law</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  These Terms shall be governed and construed in accordance with the laws of Australia, 
                  without regard to its conflict of law provisions. Our failure to enforce any right or 
                  provision of these Terms will not be considered a waiver of those rights.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">9. Changes to Terms</h2>
                <p className="text-body-md text-foreground-secondary mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days&apos; notice prior to any 
                  new terms taking effect. What constitutes a material change will be determined at our 
                  sole discretion.
                </p>
                <p className="text-body-md text-foreground-secondary mb-6">
                  By continuing to access or use our website after those revisions become effective, you 
                  agree to be bound by the revised terms. If you do not agree to the new terms, please 
                  stop using the website.
                </p>

                <h2 className="text-2xl font-serif text-foreground mt-12 mb-4">10. Contact Information</h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you have any questions about these Terms, please contact us:
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
