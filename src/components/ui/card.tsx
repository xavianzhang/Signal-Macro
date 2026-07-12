import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-[var(--shadow-1)] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)]",
        className,
      )}
      {...props}
    />
  );
}
