"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDivider } from "@/components/ui/section-divider";
import { motion } from "framer-motion";
import Image from "next/image";

export function FounderSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1">
            <div className="relative">
              {/* Timeline visual background */}
              <div className="aspect-[4/3] rounded-lg border border-border overflow-hidden relative bg-background-secondary">
                <Image
                  src="/images/experience/timeline.svg"
                  alt="25 years of retail development experience"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 via-transparent to-transparent" />
                
                {/* Experience badge */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-serif text-accent">25</span>
                      </div>
                      <div>
                        <p className="text-sm text-foreground-muted">Years of Experience</p>
                        <p className="text-foreground font-medium">Kmart • H&M • Starbucks • UNIQLO</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-lg" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              The Founder
            </p>
            <h2 className="text-display-md text-foreground mb-6">
              Twenty-five years of retail development expertise
            </h2>
            <div className="space-y-4 text-body-md text-foreground-secondary">
              <p>
                Our founder brings a quarter-century of hands-on experience in retail 
                development, having held senior leadership positions at some of the 
                world&apos;s most recognised brands.
              </p>
              <p>
                From Kmart&apos;s national expansion to H&M&apos;s Australian entry, from 
                Starbucks&apos; portfolio optimisation to UNIQLO&apos;s regional growth—this 
                experience translates into practical guidance for your development challenges.
              </p>
              <p>
                Develoop was founded to bring this expertise to retailers who need 
                strategic guidance without the overhead of a large consultancy.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/experience" className="btn-primary group">
                View Full Experience
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <SectionDivider variant="accent" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
