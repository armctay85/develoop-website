"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { insights } from "@/lib/data";

// Featured insight card (large)
function FeaturedInsight({ insight, index }: { insight: typeof insights[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group lg:col-span-2"
    >
      <Link href={`/insights/${insight.slug}`} className="block h-full">
        <div className="card-hover h-full rounded-lg overflow-hidden">
          {/* Image/visual area */}
          <div className="relative aspect-[16/9] overflow-hidden bg-background-elevated">
            <div 
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, rgba(184, 149, 110, 0.1) 0%, transparent 50%), linear-gradient(45deg, rgba(184, 149, 110, 0.05) 0%, transparent 50%)`,
              }}
            />
            
            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs tracking-wider uppercase text-accent">
                {insight.category}
              </span>
            </div>
            
            {/* Read time */}
            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-1 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs text-foreground-muted">
                <Clock className="w-3 h-3" />
                <span>{insight.readTime}</span>
              </div>
            </div>
            
            {/* Decorative number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-serif text-accent/10">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 lg:p-8">
            <div className="flex items-center gap-2 text-sm text-foreground-muted mb-3">
              <Calendar className="w-4 h-4" />
              <span>{new Date(insight.date).toLocaleDateString('en-AU', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}</span>
            </div>
            
            <h3 className="text-editorial text-xl lg:text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
              {insight.title}
            </h3>
            
            <p className="text-foreground-secondary mb-4 line-clamp-2">
              {insight.excerpt}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-accent font-medium">
              <span>Read article</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Standard insight card
function InsightCard({ insight, index }: { insight: typeof insights[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/insights/${insight.slug}`} className="block h-full">
        <div className="card-hover h-full p-6 rounded-lg flex flex-col">
          {/* Category and date */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-accent/5 border border-accent/20 rounded-full text-xs tracking-wider uppercase text-accent">
              {insight.category}
            </span>
            
            <div className="flex items-center gap-1 text-xs text-foreground-muted">
              <Clock className="w-3 h-3" />
              <span>{insight.readTime}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-editorial text-lg mb-3 group-hover:text-accent transition-colors duration-300">
            {insight.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-foreground-secondary text-sm mb-4 flex-grow line-clamp-3">
            {insight.excerpt}
          </p>
          
          {/* Date and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs text-foreground-muted">
              {new Date(insight.date).toLocaleDateString('en-AU', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
            
            <ArrowUpRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Press mentions
const pressMentions = [
  { publication: "The Australian", title: "Retail's Next Chapter", date: "Mar 2024" },
  { publication: "Inside Retail", title: "Expert Views on Expansion", date: "Feb 2024" },
  { publication: "Retail World", title: "Development Trends 2024", date: "Jan 2024" },
  { publication: "Property Council", title: "Retail Real Estate Insights", date: "Dec 2023" },
];

function PressMentions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-20 pt-16 border-t border-border"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-px bg-accent" />
        <span className="text-eyebrow">Press & Media</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pressMentions.map((mention, i) => (
          <motion.div
            key={mention.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-sm font-medium text-accent">{mention.publication}</span>
              <span className="text-xs text-foreground-muted">{mention.date}</span>
            </div>
            
            <h4 className="text-foreground group-hover:text-accent transition-colors duration-300">
              {mention.title}
            </h4>
            
            <div className="mt-3 h-px bg-border relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
                className="absolute inset-y-0 left-0 right-0 bg-accent"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function InsightsSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background-secondary to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/[0.02] rounded-full blur-3xl" />
      </div>
      
      <div className="section-inner relative z-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-eyebrow">Insights</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-editorial mb-6"
            >
              Perspectives on retail development
            </motion.h2>
          </div>
          
          <div className="lg:col-span-5 lg:col-start-8 flex items-end justify-between">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground-secondary"
            >
              Thought leadership and industry analysis from our team.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/insights" className="btn-secondary hidden lg:inline-flex">
                View All Insights
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Articles grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            index === 0 
              ? <FeaturedInsight key={insight.id} insight={insight} index={index} />
              : <InsightCard key={insight.id} insight={insight} index={index - 1} />
          ))}
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-8 lg:hidden text-center">
          <Link href="/insights" className="btn-secondary inline-flex">
            View All Insights
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        
        {/* Press mentions */}
        <PressMentions />
      </div>
    </section>
  );
}
