import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { insights } from "@/lib/data";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | Develoop Retail Development Consultancy",
  description: "Expert insights on retail development strategy, market trends, and best practices from Australia's leading retail development consultancy.",
};

export default function InsightsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="section">
          <div className="section-inner">
            <FadeIn className="max-w-3xl">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Insights
              </p>
              <h1 className="text-display-lg text-foreground mb-6">
                Perspectives on retail development
              </h1>
              <p className="text-body-lg text-foreground-secondary">
                Thoughts, analysis, and practical advice from twenty-five years 
                of retail development experience.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section bg-background-secondary">
          <div className="section-inner">
            <FadeIn>
              <Link href={`/insights/${insights[0].slug}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group cursor-pointer">
                  <div className="aspect-[16/10] bg-background-elevated border border-border rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                        <Tag className="w-10 h-10 text-accent" />
                      </div>
                      <p className="text-sm text-foreground-muted">Featured Article</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium text-accent uppercase tracking-wide">{insights[0].category}</span>
                      <span className="text-xs text-foreground-subtle">{insights[0].date}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 group-hover:text-accent transition-colors">
                      {insights[0].title}
                    </h2>

                    <p className="text-body-md text-foreground-secondary mb-6">{insights[0].excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-accent">
                      <span>Read article</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      <span className="ml-4 flex items-center gap-1 text-foreground-subtle">
                        <Clock className="w-3 h-3" /> {insights[0].readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* All Posts */}
        <section className="section">
          <div className="section-inner">
            <FadeIn className="mb-12">
              <h2 className="text-display-sm text-foreground">All Insights</h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight) => (
                <StaggerItem key={insight.id}>
                  <Link href={`/insights/${insight.slug}`}>
                    <article className="card-hover h-full flex flex-col group cursor-pointer">
                      <div className="aspect-[16/10] bg-background-tertiary rounded-lg mb-6 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                          <Tag className="w-8 h-8 text-accent" />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-accent uppercase tracking-wide">{insight.category}</span>
                        <span className="text-xs text-foreground-subtle">{insight.readTime}</span>
                      </div>

                      <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-accent transition-colors">{insight.title}</h3>

                      <p className="text-body-sm text-foreground-muted mb-4 flex-grow">{insight.excerpt}</p>

                      <div className="flex items-center gap-2 text-sm text-accent">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Automation Ready Notice */}
        <section className="section bg-background-secondary">
          <div className="section-inner">
            <FadeIn className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-display-sm text-foreground mb-4">Automation-Ready</h2>
              <p className="text-body-md text-foreground-secondary mb-6">
                This insights section is built to support automated content publishing. 
                Connect your CMS or content pipeline to dynamically generate and publish 
                new articles with full SEO support and social sharing.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-background-elevated border border-border rounded-full text-foreground-muted">RSS Feed Ready</span>
                <span className="px-3 py-1 bg-background-elevated border border-border rounded-full text-foreground-muted">SEO Optimised</span>
                <span className="px-3 py-1 bg-background-elevated border border-border rounded-full text-foreground-muted">Social Meta Tags</span>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
