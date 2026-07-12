import type { ReactNode } from "react";

import { AppHeader } from "@/components/shared/app-header";

interface PageShellProps {
  children: ReactNode;
  currentPath: string;
}

export function PageShell({ children, currentPath }: PageShellProps) {
  return (
    <>
      <AppHeader currentPath={currentPath} />
      {children}
    </>
  );
}
