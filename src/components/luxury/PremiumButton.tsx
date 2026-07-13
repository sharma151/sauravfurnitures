"use client";

import Link from "next/link";
import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const premiumButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-secondary-foreground text-secondary shadow-[0_14px_30px_-20px_rgba(59,36,26,0.95)] hover:scale-[1.02] hover:shadow-[0_18px_36px_-18px_rgba(59,36,26,0.85)]",
        secondary:
          "border border-accent/65 bg-white/70 text-secondary-foreground hover:border-accent hover:bg-secondary",
        ghost:
          "text-secondary-foreground hover:bg-secondary hover:text-primary",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-7",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type PremiumButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof premiumButtonVariants> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export default function PremiumButton({
  href,
  className,
  variant,
  size,
  children,
  ...props
}: PremiumButtonProps) {
  const classNames = cn(premiumButtonVariants({ variant, size }), className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classNames}
          aria-label={typeof children === "string" ? children : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classNames} aria-label={typeof children === "string" ? children : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
