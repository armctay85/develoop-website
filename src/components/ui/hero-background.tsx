"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  className?: string;
  variant?: "gradient" | "geometric";
}

export function HeroBackground({ className, variant = "gradient" }: HeroBackgroundProps) {
  if (variant === "geometric") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        {/* Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary" />

        {/* Geometric shapes */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="geoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(184, 149, 110, 0.08)" />
              <stop offset="100%" stopColor="rgba(184, 149, 110, 0.02)" />
            </linearGradient>
            <linearGradient id="geoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(201, 169, 125, 0.06)" />
              <stop offset="100%" stopColor="rgba(201, 169, 125, 0.01)" />
            </linearGradient>
          </defs>

          {/* Large architectural rectangle */}
          <rect
            x="65%"
            y="15%"
            width="25%"
            height="70%"
            fill="url(#geoGrad1)"
            stroke="rgba(184, 149, 110, 0.1)"
            strokeWidth="1"
          />

          {/* Secondary rectangle */}
          <rect
            x="10%"
            y="40%"
            width="30%"
            height="45%"
            fill="url(#geoGrad2)"
            stroke="rgba(184, 149, 110, 0.08)"
            strokeWidth="1"
          />

          {/* Accent lines */}
          <line x1="65%" y1="25%" x2="90%" y2="25%" stroke="rgba(184, 149, 110, 0.15)" strokeWidth="1" />
          <line x1="65%" y1="50%" x2="90%" y2="50%" stroke="rgba(184, 149, 110, 0.1)" strokeWidth="0.5" />
          <line x1="65%" y1="75%" x2="90%" y2="75%" stroke="rgba(184, 149, 110, 0.15)" strokeWidth="1" />
        </svg>

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(184, 149, 110, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(201, 169, 125, 0.12) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(184, 149, 110, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(184, 149, 110, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(184, 149, 110, 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Architectural line elements */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#b8956e" strokeWidth="1" />
        <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#b8956e" strokeWidth="1" />
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#b8956e" strokeWidth="0.5" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#b8956e" strokeWidth="0.5" />
      </svg>

      {/* Bronze accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(184, 149, 110, 0.3) 20%, rgba(184, 149, 110, 0.3) 80%, transparent 100%)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      />
    </div>
  );
}
