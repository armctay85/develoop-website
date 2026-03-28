"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Coffee, ShoppingBag } from "lucide-react";
import { experiences } from "@/lib/data";

const companyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "UNIQLO": ShoppingBag,
  "Starbucks": Coffee,
  "H&M": Building2,
  "Kmart": MapPin,
};

function TimelineItem({ 
  experience, 
  index,
}: { 
  experience: typeof experiences[0]; 
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const IconComponent = companyIcons[experience.company] || Building2;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const springConfig = { stiffness: 100, damping: 30 };
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden lg:block">
        <motion.div 
          style={{ height: lineHeight }}
          className="w-full bg-accent"
        />
      </div>
      
      <motion.div 
        style={{ y: springY, opacity, scale: springScale }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
      >
        <div className={`${isEven ? 'lg:pr-16 lg:text-right' : 'lg:order-2 lg:pl-16'}`}>
          <div className={`card-hover p-8 rounded-lg ${isEven ? 'lg:ml-auto' : ''}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">{experience.period}</span>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-editorial text-3xl mb-2"
            >
              {experience.company}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-foreground mb-4"
            >
              {experience.role}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground-secondary"
            >
              {experience.description}
            </motion.p>
          </div>
        </div>
        
        <div className={`${isEven ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className={`relative inline-flex ${isEven ? 'lg:ml-auto lg:block' : ''}`}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 rounded-lg bg-background-elevated border border-border flex items-center justify-center relative"
              >
                <IconComponent className="w-10 h-10 text-accent" />
                
                <div className="absolute inset-0 rounded-lg border border-accent/20" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-dashed border-accent/10 rounded-lg"
              />
            </div>
            
            <div className={`mt-6 grid grid-cols-2 gap-4 ${isEven ? 'lg:text-right' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="text-2xl font-serif text-accent mb-1">
                  {index === 0 ? "50+" : index === 1 ? "120+" : index === 2 ? "35" : "85+"}
                </div>
                <div className="text-xs tracking-wider uppercase text-foreground-muted">
                  Stores
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="text-2xl font-serif text-accent mb-1">
                  {index === 0 ? "$800M" : index === 1 ? "$1.2B" : index === 2 ? "$300M" : "$450M"}
                </div>
                <div className="text-xs tracking-wider uppercase text-foreground-muted">
                  Portfolio Value
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background hidden lg:block z-10"
      />
    </div>
  );
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="section relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/[0.02] rounded-full blur-3xl" />
      </motion.div>
      
      <div className="section-inner relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-eyebrow">25 Years of Excellence</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-editorial mb-6"
            >
              A career shaped by the world&apos;s leading retail brands
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground-secondary"
            >
              From Kmart&apos;s national expansion to UNIQLO&apos;s regional growth, 
              each chapter has built the expertise that drives Develoop today.
            </motion.p>
          </div>
          
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-background-elevated border border-border rounded-lg"
            >
              <blockquote className="text-pull-quote text-foreground mb-4">
                Every great retail brand starts with exceptional development.
              </blockquote>
              <cite className="text-sm text-foreground-muted not-italic">
                — Founder, Develoop
              </cite>
            </motion.div>
          </div>
        </div>
        
        <div className="space-y-24 lg:space-y-32">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$2.3B", label: "Total Portfolio Managed" },
              { value: "290+", label: "Stores Delivered" },
              { value: "25", label: "Years Experience" },
              { value: "4", label: "Global Brands" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="metric mb-2">{stat.value}</div>
                <div className="text-sm text-foreground-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link href="/experience" className="btn-primary group inline-flex">
            <span className="relative z-10 flex items-center gap-2">
              Explore Full Experience
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
