import type { ReactNode } from "react";

interface MetricPanelProps {
  label: string;
  value: string;
  detail?: string;
  accent?: ReactNode;
}

export function MetricPanel({ label, value, detail, accent }: MetricPanelProps) {
  return (
    <div className="rounded-[20px] bg-[color:var(--surface-muted)] p-5">
      <p className="text-[13px] text-[color:var(--text-tertiary)]">{label}</p>
      <p className="mt-3 font-mono text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">{value}</p>
      {detail ? <p className="mt-2 text-[15px] leading-6 text-[color:var(--text-secondary)]">{detail}</p> : null}
      {accent ? <div className="mt-3">{accent}</div> : null}
    </div>
  );
}
