import Link from "next/link";

import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Dashboard" },
  { href: "/fed", label: "Federal Reserve" },
  { href: "/calendar", label: "Calendar" },
  { href: "/bitcoin", label: "Bitcoin" },
  { href: "/knowledge", label: "Knowledge" },
] as const;

interface AppHeaderProps {
  currentPath: string;
}

export function AppHeader({ currentPath }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:color-mix(in_srgb,var(--border)_72%,transparent)] bg-[color:color-mix(in_srgb,var(--background)_84%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-5 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link className="shrink-0" href="/">
            <div className="space-y-1">
              <p className="text-[15px] font-semibold tracking-[-0.02em] text-[color:var(--text-primary)]">Signal Macro</p>
              <p className="text-[13px] text-[color:var(--text-tertiary)]">AI Macro Intelligence</p>
            </div>
          </Link>

          <nav aria-label="Primary desktop" className="hidden items-center gap-2 lg:flex">
            {navigationItems.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-[15px] transition-colors duration-200",
                    isActive
                      ? "bg-[color:var(--card)] text-[color:var(--text-primary)] shadow-[var(--shadow-1)]"
                      : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <nav aria-label="Primary mobile" className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {navigationItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-[15px] transition-colors duration-200",
                  isActive
                    ? "bg-[color:var(--card)] text-[color:var(--text-primary)] shadow-[var(--shadow-1)]"
                    : "text-[color:var(--text-secondary)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
