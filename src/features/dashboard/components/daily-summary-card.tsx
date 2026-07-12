import { Card } from "@/components/ui/card";
import { AiSummary } from "@/components/shared/ai-summary";
import { UpdatedTime } from "@/components/shared/updated-time";

interface DailySummaryCardProps {
  summary: string;
  updatedAt: string;
}

export function DailySummaryCard({ summary, updatedAt }: DailySummaryCardProps) {
  return (
    <Card className="space-y-6">
      <div className="space-y-3">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
          Daily Summary
        </p>
        <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
          今天市场整体仍偏多，但今晚通胀数据决定短线方向。
        </h2>
      </div>
      <AiSummary summary={summary} />
      <UpdatedTime value={updatedAt} />
    </Card>
  );
}
