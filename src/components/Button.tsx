import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "navy" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-all duration-300 min-h-11 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-navy hover:bg-gold-hover hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(212,175,55,0.9)]",
  navy: "bg-navy text-white hover:bg-navy-soft hover:-translate-y-0.5 dark:bg-surface dark:text-foreground",
  outline: "border border-gold/60 text-foreground hover:border-gold hover:bg-gold/10",
  light:
    "border border-white/30 text-white hover:border-gold hover:text-gold bg-white/5 backdrop-blur-sm",
  ghost: "text-foreground hover:text-gold",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  to,
  variant = "gold",
  size = "md",
  className,
  children,
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "gold",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
