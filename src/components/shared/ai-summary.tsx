import { Sparkles } from "lucide-react";

interface AiSummaryProps {
  summary: string;
}

export function AiSummary({ summary }: AiSummaryProps) {
  return (
    <div className="rounded-[20px] bg-[color:var(--surface-muted)] p-5">
      <div className="mb-3 flex items-center gap-2 text-[13px] font-medium text-[color:var(--text-secondary)]">
        <Sparkles className="size-4" aria-hidden="true" />
        <span>AI Summary</span>
      </div>
      <p className="line-clamp-3 text-[13px] leading-6 text-[color:var(--text-secondary)]">{summary}</p>
    </div>
  );
}
