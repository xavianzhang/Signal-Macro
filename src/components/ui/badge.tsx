import type { HTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex h-7 items-center rounded-full px-3 text-[13px] font-medium tracking-[-0.01em]",
  {
    defaultVariants: {
      tone: "neutral",
    },
    variants: {
      tone: {
        bullish:
          "bg-[color:color-mix(in_srgb,var(--success)_12%,transparent)] text-[color:var(--success)]",
        bearish:
          "bg-[color:color-mix(in_srgb,var(--danger)_12%,transparent)] text-[color:var(--danger)]",
        neutral:
          "bg-[color:color-mix(in_srgb,var(--neutral)_14%,transparent)] text-[color:var(--text-secondary)]",
        warning:
          "bg-[color:color-mix(in_srgb,var(--warning)_14%,transparent)] text-[color:var(--warning)]",
      },
    },
  },
);

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
