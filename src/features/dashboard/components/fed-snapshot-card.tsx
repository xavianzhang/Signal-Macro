import { AiSummary } from "@/components/shared/ai-summary";
import { Card } from "@/components/ui/card";
import { formatPercent, formatUtc8Time } from "@/lib/format";
import type { FedSnapshot } from "@/features/dashboard/types/dashboard.type";

interface FedSnapshotCardProps {
  fed: FedSnapshot;
}

export function FedSnapshotCard({ fed }: FedSnapshotCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
            Fed Snapshot
          </p>
          <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
            Current Rate {fed.currentRate}
          </h2>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center justify-between rounded-[20px] bg-[color:var(--surface-muted)] p-5">
            <span className="text-[15px] text-[color:var(--text-secondary)]">Next Meeting</span>
            <span className="font-mono text-[15px] text-[color:var(--text-primary)]">{fed.nextMeetingDate}</span>
          </div>
          <div className="flex items-center justify-between rounded-[20px] bg-[color:var(--surface-muted)] p-5">
            <span className="text-[15px] text-[color:var(--text-secondary)]">Days Remaining</span>
            <span className="font-mono text-[15px] text-[color:var(--text-primary)]">{fed.daysRemaining}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[20px] border border-[color:var(--border)] p-4">
              <p className="text-[13px] text-[color:var(--text-tertiary)]">Hold</p>
              <p className="mt-2 font-mono text-[20px] font-medium text-[color:var(--text-primary)]">
                {formatPercent(fed.holdProbability)}
              </p>
            </div>
            <div className="rounded-[20px] border border-[color:var(--border)] p-4">
              <p className="text-[13px] text-[color:var(--text-tertiary)]">Cut</p>
              <p className="mt-2 font-mono text-[20px] font-medium text-[color:var(--text-primary)]">
                {formatPercent(fed.cutProbability)}
              </p>
            </div>
            <div className="rounded-[20px] border border-[color:var(--border)] p-4">
              <p className="text-[13px] text-[color:var(--text-tertiary)]">Hike</p>
              <p className="mt-2 font-mono text-[20px] font-medium text-[color:var(--text-primary)]">
                {formatPercent(fed.hikeProbability)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <AiSummary summary={fed.summary} />
        <p className="text-[13px] text-[color:var(--text-tertiary)]">Updated {formatUtc8Time(fed.updatedAt)} UTC+8</p>
      </div>
    </Card>
  );
}
