"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "line" | "gradient" | "accent" | "ornate";
  animated?: boolean;
}

export function SectionDivider({
  className,
  variant = "line",
  animated = true,
}: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className={cn("relative h-px w-full my-16", className)}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          initial={animated ? { scaleX: 0, opacity: 0 } : undefined}
          whileInView={animated ? { scaleX: 1, opacity: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    );
  }

  if (variant === "accent") {
    return (
      <div className={cn("flex items-center justify-center gap-4 my-16", className)}>
        <motion.div
          className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-accent/50"
          initial={animated ? { scaleX: 0 } : undefined}
          whileInView={animated ? { scaleX: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="w-2 h-2 rotate-45 bg-accent/60"
          initial={animated ? { scale: 0, rotate: 0 } : undefined}
          whileInView={animated ? { scale: 1, rotate: 45 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
        <motion.div
          className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-accent/50"
          initial={animated ? { scaleX: 0 } : undefined}
          whileInView={animated ? { scaleX: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    );
  }

  if (variant === "ornate") {
    return (
      <div className={cn("flex items-center justify-center gap-6 my-20", className)}>
        <motion.div
          className="flex items-center gap-2"
          initial={animated ? { opacity: 0, x: -20 } : undefined}
          whileInView={animated ? { opacity: 1, x: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          <div className="w-4 h-px bg-accent/30" />
        </motion.div>

        <motion.div
          className="w-3 h-3 border border-accent/40 rotate-45"
          initial={animated ? { scale: 0, rotate: 0 } : undefined}
          whileInView={animated ? { scale: 1, rotate: 45 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        <motion.div
          className="flex items-center gap-2"
          initial={animated ? { opacity: 0, x: 20 } : undefined}
          whileInView={animated ? { opacity: 1, x: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-4 h-px bg-accent/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent/40" />
        </motion.div>
      </div>
    );
  }

  // Default line variant
  return (
    <div className={cn("relative h-px w-full bg-border my-12", className)} />
  );
}

interface VerticalDividerProps {
  className?: string;
  height?: string;
}

export function VerticalDivider({ className, height = "h-12" }: VerticalDividerProps) {
  return (
    <div
      className={cn(
        "w-px bg-gradient-to-b from-transparent via-border to-transparent",
        height,
        className
      )}
    />
  );
}
