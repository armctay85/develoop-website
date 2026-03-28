"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

// Word-based kinetic text for headlines
function KineticWords({ 
  text, 
  className = "", 
  delay = 0,
  highlightedWords = [] as string[]
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  highlightedWords?: string[];
}) {
  const words = text.split(" ");
  
  return (
    <span className={className}>
      {words.map((word, i) => {
        const isHighlighted = highlightedWords.includes(word.toLowerCase().replace(/[^a-z]/g, ""));
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block mr-[0.3em] ${isHighlighted ? "text-accent" : ""}`}
            style={{ willChange: "transform, opacity, filter" }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}

// Animated background with subtle noise and gradient
function EditorialBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationId: number;
    let time = 0;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const draw = () => {
      time += 0.005;
      
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createRadialGradient(
        canvas.width * (0.3 + Math.sin(time) * 0.1),
        canvas.height * (0.4 + Math.cos(time * 0.7) * 0.1),
        0,
        canvas.width * 0.3,
        canvas.height * 0.4,
        canvas.width * 0.6
      );
      gradient.addColorStop(0, "rgba(184, 149, 110, 0.08)");
      gradient.addColorStop(0.5, "rgba(184, 149, 110, 0.02)");
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.7 + Math.cos(time * 0.8) * 0.1),
        canvas.height * (0.6 + Math.sin(time * 0.5) * 0.1),
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.5
      );
      gradient2.addColorStop(0, "rgba(184, 149, 110, 0.05)");
      gradient2.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      animationId = requestAnimationFrame(draw);
    };
    
    resize();
    window.addEventListener("resize", resize);
    draw();
    
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
}

// Scroll velocity indicator
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    >
      <span className="text-xs tracking-[0.3em] uppercase text-foreground-muted">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
      />
    </motion.div>
  );
}

// Floating accent lines
function FloatingLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          style={{
            top: `${30 + i * 25}%`,
            left: 0,
            right: 0,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(useMotionValue(0), springConfig);
  const mouseY = useSpring(useMotionValue(0), springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <EditorialBackground />
      <FloatingLines />
      
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(184, 149, 110, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(184, 149, 110, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-12 h-px bg-accent origin-left"
              />
              <span className="text-eyebrow">Retail Development Consultancy</span>
            </motion.div>
            
            <h1 className="text-editorial mb-8">
              <KineticWords 
                text="Turning complex retail development into"
                delay={0.4}
              />
              <br />
              <KineticWords 
                text="straightforward outcomes"
                delay={0.8}
                highlightedWords={["straightforward", "outcomes"]}
                className="text-accent"
              />
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-foreground-secondary max-w-xl mb-10 leading-relaxed"
            >
              Twenty-five years of senior leadership experience across{" "}
              <span className="text-foreground">Kmart</span>,{" "}
              <span className="text-foreground">H&M</span>,{" "}
              <span className="text-foreground">Starbucks</span>, and{" "}
              <span className="text-foreground">UNIQLO</span>. 
              We help retailers navigate the complexity of development projects 
              with clarity and confidence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/contact" 
                className="btn-primary group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link 
                href="#services" 
                className="btn-secondary group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Explore Services
                </span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-4">
                Trusted by leading brands
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {["Kmart", "H&M", "Starbucks", "UNIQLO"].map((brand, i) => (
                  <motion.span
                    key={brand}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.2 + i * 0.1 }}
                    className="text-editorial text-lg text-foreground-subtle hover:text-foreground transition-colors duration-300"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            style={{ x: mouseX, y: mouseY }}
            className="lg:col-span-5 xl:col-span-6 relative hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square max-w-lg ml-auto"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10" />
                <div className="absolute inset-0 border border-accent/20" />
                
                <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center"
                  >
                    <span className="metric block mb-2">$2.3B</span>
                    <span className="text-sm tracking-wider uppercase text-foreground-muted">
                      Projects Managed
                    </span>
                  </motion.div>
                  
                  <div className="w-16 h-px bg-accent/30 my-8" />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="text-center"
                  >
                    <span className="metric block mb-2">200+</span>
                    <span className="text-sm tracking-wider uppercase text-foreground-muted">
                      Store Deliveries
                    </span>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 border border-accent/30 rounded-sm"
              />
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/10 rounded-sm"
              />
              
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <ScrollIndicator />
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
