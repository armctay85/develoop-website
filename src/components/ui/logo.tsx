"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: { width: 24, height: 24, fontSize: 14 },
  md: { width: 34, height: 34, fontSize: 18 },
  lg: { width: 40, height: 40, fontSize: 22 },
  xl: { width: 50, height: 50, fontSize: 28 },
};

export function Logo({
  className,
  variant = "light",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const { width, height, fontSize } = sizeMap[size];
  
  const strokeColor = variant === "dark" ? "#8b7355" : "#b8956e";
  const accentColor = variant === "dark" ? "#9a7b5a" : "#c9a97d";
  const textColor = variant === "dark" ? "#1a1a1a" : "#f5f5f0";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Development Loop Mark */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id={`logoGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={strokeColor} />
            <stop offset="50%" stopColor={accentColor} />
            <stop offset="100%" stopColor={strokeColor} />
          </linearGradient>
        </defs>

        {/* The Loop: Infinity/Development Cycle */}
        <path
          d="M 8 21 
             C 8 12, 14 6, 21 9
             C 26 12, 24 18, 18 21
             C 14 23, 10 20, 14 16
             C 17 13, 22 14, 26 19
             C 30 24, 24 32, 16 32
             C 9 32, 5 26, 8 21 Z"
          fill="none"
          stroke={`url(#logoGrad-${variant})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Architectural frame corners */}
        <path d="M 3 10 L 3 3 L 10 3" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 32 3 L 39 3 L 39 10" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 39 32 L 39 39 L 32 39" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 10 39 L 3 39 L 3 32" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Flow direction indicators */}
        <path d="M 17 8 L 21 9 L 20 13" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M 32 26 L 29 28 L 31 32" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <div
          className="font-serif font-medium tracking-wider flex items-baseline"
          style={{ fontSize: `${fontSize}px`, letterSpacing: "0.06em" }}
        >
          <span style={{ color: textColor }}>Deve</span>
          <span style={{ color: strokeColor }}>loop</span>
        </div>
      )}
    </div>
  );
}

export function LogoIcon({
  className,
  variant = "light",
  size = "md",
}: Omit<LogoProps, "showWordmark">) {
  return (
    <Logo
      className={className}
      variant={variant}
      showWordmark={false}
      size={size}
    />
  );
}
