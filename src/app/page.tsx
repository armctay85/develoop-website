import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyDeveloopSection } from "@/components/sections/WhyDeveloopSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CredibilitySection />
        <ServicesOverview />
        <WhyDeveloopSection />
        <FounderSection />
        <OutcomesSection />
        <EngagementSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
