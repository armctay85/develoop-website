"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Working with Develoop transformed our approach to retail expansion. Their strategic insights helped us identify opportunities we hadn't considered, and their hands-on guidance ensured flawless execution across every store opening.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Aurora Retail Group",
    avatar: "SC",
    metric: "15 new stores",
    metricLabel: "Opened in 18 months",
  },
  {
    id: 2,
    quote: "The depth of expertise Develoop brings is extraordinary. They don't just advise—they roll up their sleeves and work alongside your team. Our development timeline was reduced by 40% while maintaining the highest quality standards.",
    author: "Michael Roberts",
    role: "Development Director",
    company: "Pacific Retail Holdings",
    avatar: "MR",
    metric: "40% faster",
    metricLabel: "Project delivery",
  },
  {
    id: 3,
    quote: "In an industry where relationships make or break deals, Develoop's network is invaluable. They opened doors we couldn't have opened ourselves and helped us negotiate terms that significantly improved our unit economics.",
    author: "Emma Thompson",
    role: "COO",
    company: "Coastal Lifestyle Brands",
    avatar: "ET",
    metric: "$2.1M saved",
    metricLabel: "Annual lease costs",
  },
  {
    id: 4,
    quote: "What sets Develoop apart is their ability to see around corners. They anticipate challenges before they arise and have contingency plans ready. That kind of foresight is rare and incredibly valuable.",
    author: "David Park",
    role: "VP of Real Estate",
    company: "Metro Fashion Retail",
    avatar: "DP",
    metric: "Zero delays",
    metricLabel: "On critical path items",
  },
];

// Animated quote mark
function AnimatedQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8"
    >
      <Quote className="w-16 h-16 lg:w-24 lg:h-24 text-accent/20" />
    </motion.div>
  );
}

// Testimonial card with 3D tilt
function TestimonialCard({ 
  testimonial, 
  isActive 
}: { 
  testimonial: typeof testimonials[0]; 
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
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
      animate={{ opacity: isActive ? 1 : 0.3, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${isActive ? 'cursor-grab active:cursor-grabbing' : ''}`}
    >
      <div className="card-hover p-8 lg:p-12 rounded-lg relative overflow-hidden">
        <AnimatedQuote />
        
        {/* Quote text */}
        <blockquote className="relative z-10 text-pull-quote text-foreground mb-8 leading-relaxed">
          {testimonial.quote}
        </blockquote>
        
        {/* Author info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center"
            >
              <span className="text-lg font-serif text-accent">{testimonial.avatar}</span>
            </motion.div>
            
            <div>
              <div className="font-medium text-foreground">{testimonial.author}</div>
              <div className="text-sm text-foreground-muted">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>
          
          {/* Metric */}
          <div className="text-right hidden sm:block">
            <div className="text-2xl font-serif text-accent">{testimonial.metric}</div>
            <div className="text-xs tracking-wider uppercase text-foreground-muted">
              {testimonial.metricLabel}
            </div>
          </div>
        </div>
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent" />
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = (newDirection: number) => {
    setActiveIndex((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-3xl" />
      </div>
      
      <div className="section-inner relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-accent" />
            <span className="text-eyebrow">Client Testimonials</span>
            <div className="w-12 h-px bg-accent" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-editorial max-w-3xl mx-auto"
          >
            What our clients say about working with Develoop
          </motion.h2>
        </div>
        
        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={activeIndex}
              testimonial={testimonials[activeIndex]}
              isActive={true}
            />
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-8 bg-accent' 
                      : 'bg-border hover:bg-foreground-muted'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
        
        {/* Logos grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-16 border-t border-border"
        >
          <p className="text-center text-xs tracking-[0.2em] uppercase text-foreground-muted mb-8">
            Trusted by innovative retail brands
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["Aurora Retail", "Pacific Holdings", "Coastal Brands", "Metro Fashion", "Urban Retail", "Horizon Group"].map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ color: "#f5f5f0" }}
                className="text-editorial text-lg text-foreground-subtle transition-colors duration-300"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
