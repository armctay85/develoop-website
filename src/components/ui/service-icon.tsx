"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Target,
  MapPin,
  Building2,
  GitBranch,
  RotateCw,
  Settings,
  FileText,
  Users,
  type LucideIcon,
} from "lucide-react";

interface ServiceIconProps {
  icon: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "outlined" | "minimal";
  animated?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  Target,
  MapPin,
  Building2,
  GitBranch,
  RotateCw,
  Settings,
  FileText,
  Users,
};

const sizeMap = {
  sm: { container: "w-10 h-10", icon: "w-5 h-5" },
  md: { container: "w-14 h-14", icon: "w-7 h-7" },
  lg: { container: "w-16 h-16", icon: "w-8 h-8" },
  xl: { container: "w-20 h-20", icon: "w-10 h-10" },
};

export function ServiceIcon({
  icon,
  className,
  size = "md",
  variant = "default",
  animated = true,
}: ServiceIconProps) {
  const Icon = iconMap[icon] || Target;
  const { container, icon: iconSize } = sizeMap[size];

  if (variant === "minimal") {
    return (
      <motion.div
        className={cn("flex items-center justify-center", container, className)}
        initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
        whileInView={animated ? { scale: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Icon className={cn(iconSize, "text-accent")} strokeWidth={1.5} />
      </motion.div>
    );
  }

  if (variant === "outlined") {
    return (
      <motion.div
        className={cn(
          "flex items-center justify-center rounded-xl border border-accent/30 bg-accent/5",
          container,
          className
        )}
        initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
        whileInView={animated ? { scale: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={{ borderColor: "rgba(184, 149, 110, 0.5)", backgroundColor: "rgba(184, 149, 110, 0.1)" }}
      >
        <Icon className={cn(iconSize, "text-accent")} strokeWidth={1.5} />
      </motion.div>
    );
  }

  if (variant === "filled") {
    return (
      <motion.div
        className={cn(
          "flex items-center justify-center rounded-xl bg-accent",
          container,
          className
        )}
        initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
        whileInView={animated ? { scale: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <Icon className={cn(iconSize, "text-background")} strokeWidth={1.5} />
      </motion.div>
    );
  }

  // Default variant with architectural styling
  return (
    <motion.div
      className={cn(
        "relative flex items-center justify-center rounded-lg",
        container,
        className
      )}
      initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
      whileInView={animated ? { scale: 1, opacity: 1 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Background with architectural frame */}
      <div className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/20" />
      
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent/40" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/40" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent/40" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent/40" />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className={cn(iconSize, "text-accent relative z-10")} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}

// Decorative SVG patterns for service sections
export function ServicePattern({ className }: { className?: string }) {
  return (
    <svg
      className={cn("absolute inset-0 w-full h-full opacity-[0.03]", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="servicePattern"
        x="0"
        y="0"
        width="60"
        height="60"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="30" cy="30" r="1" fill="#b8956e" />
        <line x1="30" y1="0" x2="30" y2="60" stroke="#b8956e" strokeWidth="0.5" />
        <line x1="0" y1="30" x2="60" y2="30" stroke="#b8956e" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#servicePattern)" />
    </svg>
  );
}
