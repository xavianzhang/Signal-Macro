import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { FedHistoryEntry } from "@/features/fed/types/fed.type";

interface FedHistoryTimelineProps {
  history: FedHistoryEntry[];
}

function getActionTone(action: FedHistoryEntry["action"]): "bullish" | "neutral" | "warning" {
  if (action === "cut") {
    return "bullish";
  }

  if (action === "hike") {
    return "warning";
  }

  return "neutral";
}

export function FedHistoryTimeline({ history }: FedHistoryTimelineProps) {
  return (
    <Card className="space-y-8">
      <div className="space-y-3">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
          History Timeline
        </p>
        <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
          只保留对交易最重要的利率变化节点。
        </h2>
      </div>

      <div className="space-y-4">
        {history.map((entry) => (
          <div key={entry.meetingDate} className="rounded-[20px] border border-[color:var(--border)] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-2">
                <p className="font-mono text-[15px] text-[color:var(--text-secondary)]">{entry.meetingDate}</p>
                <p className="text-[20px] font-medium tracking-[-0.02em] text-[color:var(--text-primary)]">
                  {entry.rateRange}
                </p>
              </div>
              <Badge tone={getActionTone(entry.action)}>
                {entry.action.toUpperCase()} {entry.basisPoints > 0 ? `+${entry.basisPoints}` : entry.basisPoints}bp
              </Badge>
            </div>
            <p className="mt-4 text-[15px] leading-7 text-[color:var(--text-secondary)]">{entry.summary}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
