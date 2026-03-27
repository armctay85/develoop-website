"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { brandLogos } from "@/lib/data";

export function CredibilitySection() {
  return (
    <section className="section bg-background-secondary">
      <div className="section-inner">
        <FadeIn className="text-center mb-12">
          <p className="text-caption text-foreground-muted tracking-widest uppercase mb-4">
            Experience That Speaks
          </p>
          <p className="text-body-md text-foreground-secondary max-w-2xl mx-auto">
            Leadership experience spanning four of the world&apos;s most recognised retail brands
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              className="text-foreground-subtle hover:text-foreground transition-colors duration-300"
            >
              <span className="text-2xl md:text-3xl font-serif tracking-tight">
                {brand.text}
              </span>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "200+", label: "Stores Delivered" },
            { number: "4", label: "Global Brands" },
            { number: "100%", label: "Commitment" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif text-accent mb-2">{stat.number}</p>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
