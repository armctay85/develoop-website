"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Aurora Retail Group National Expansion",
    category: "Network Strategy",
    location: "Australia-wide",
    year: "2023-2024",
    description: "Led the strategic expansion of a premium lifestyle brand from 12 to 27 locations across Australia's major metropolitan markets.",
    metrics: [
      { value: "15", label: "New Stores Opened" },
      { value: "18mo", label: "Timeline" },
      { value: "$45M", label: "Investment Managed" },
    ],
    tags: ["Site Selection", "Lease Negotiation", "Project Management"],
    color: "#b8956e",
  },
  {
    id: 2,
    title: "Pacific Retail Portfolio Optimisation",
    category: "Strategic Advisory",
    location: "NSW, VIC, QLD",
    year: "2023",
    description: "Comprehensive portfolio review and optimisation strategy for a 45-store retail network, identifying underperforming locations and growth opportunities.",
    metrics: [
      { value: "23%", label: "Portfolio Efficiency Gain" },
      { value: "$2.1M", label: "Annual Savings" },
      { value: "8", label: "Sites Relocated" },
    ],
    tags: ["Portfolio Analysis", "Network Planning", "Cost Optimisation"],
    color: "#8b7355",
  },
  {
    id: 3,
    title: "Metro Fashion Flagship Development",
    category: "Design & Construction",
    location: "Sydney CBD",
    year: "2024",
    description: "End-to-end delivery of a flagship retail experience spanning 2,500 sqm across three levels in Sydney's premier shopping district.",
    metrics: [
      { value: "2,500", label: "Sqm Delivered" },
      { value: "$12M", label: "Fit-out Value" },
      { value: "12wk", label: "Early Delivery" },
    ],
    tags: ["Design Management", "Construction Oversight", "Stakeholder Coordination"],
    color: "#c9a97d",
  },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
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
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <Link href={`/case-studies/${study.id}`} className="block">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
          <div className={`relative ${isEven ? '' : 'lg:order-2'}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-background-elevated"
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${study.color}15 0%, transparent 50%), linear-gradient(45deg, ${study.color}08 0%, transparent 50%)`,
                }}
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-3/4 h-3/4 border border-accent/20 rounded-sm relative"
                >
                  <div className="absolute inset-4 border border-accent/10 rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="text-6xl font-serif text-accent/20">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"
              />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs tracking-wider uppercase text-foreground">
                  {study.category}
                </span>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="flex items-center justify-between px-4 py-3 bg-background/90 backdrop-blur-sm border border-border rounded-lg">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className={`${isEven ? '' : 'lg:order-1 lg:text-right'}`}>
            <div className={`flex items-center gap-4 mb-4 text-sm text-foreground-muted ${isEven ? '' : 'lg:justify-end'}`}>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{study.location}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{study.year}</span>
              </div>
            </div>
            
            <h3 className="text-editorial text-2xl lg:text-3xl mb-4 group-hover:text-accent transition-colors duration-300">
              {study.title}
            </h3>
            
            <p className="text-foreground-secondary mb-6">
              {study.description}
            </p>
            
            <div className={`grid grid-cols-3 gap-4 mb-6 ${isEven ? '' : 'lg:direction-rtl'}`}>
              {study.metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="text-center p-3 bg-background-elevated border border-border rounded-lg"
                >
                  <div className="text-xl font-serif text-accent mb-1">{metric.value}</div>
                  <div className="text-xs text-foreground-muted">{metric.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'lg:justify-end'}`}>
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-accent/5 border border-accent/20 rounded-full text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="section relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.02] to-transparent" />
      </motion.div>
      
      <div className="section-inner relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-eyebrow">Selected Projects</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-editorial mb-6"
            >
              Case studies that demonstrate our impact
            </motion.h2>
          </div>
          
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground-secondary"
            >
              Each project represents a unique challenge and a measurable outcome. 
              Here are some of our most impactful engagements.
            </motion.p>
          </div>
        </div>
        
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <Link href="/case-studies" className="btn-secondary group">
            <span className="relative z-10 flex items-center gap-2">
              View All Case Studies
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
