import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AiSummary } from "@/components/shared/ai-summary";
import type { SignalSnapshot } from "@/features/dashboard/types/dashboard.type";
import { formatUtc8Time } from "@/lib/format";

interface SignalScoreCardProps {
  signal: SignalSnapshot;
}

function getBiasLabel(bias: SignalSnapshot["bias"]): string {
  if (bias === "bullish") {
    return "Bullish";
  }

  if (bias === "bearish") {
    return "Bearish";
  }

  return "Neutral";
}

export function SignalScoreCard({ signal }: SignalScoreCardProps) {
  return (
    <Card className="flex min-h-[420px] flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_38%),var(--card)]">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
            Signal Score
          </p>
          <div className="flex flex-wrap items-end gap-4">
            <p className="text-[72px] font-bold leading-none tracking-[-0.08em] text-[color:var(--text-primary)]">
              {signal.score}
            </p>
            <div className="space-y-3 pb-2">
              <Badge tone={signal.bias}>{getBiasLabel(signal.bias)}</Badge>
              <p className="font-mono text-[15px] text-[color:var(--text-secondary)]">
                Confidence {signal.confidence}%
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">Focus</p>
            <p className="mt-3 text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">ETF</p>
          </div>
          <div className="rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">Macro</p>
            <p className="mt-3 text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">Dovish</p>
          </div>
          <div className="rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">Risk</p>
            <p className="mt-3 text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">CPI</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <AiSummary summary={signal.summary} />
        <p className="text-[13px] text-[color:var(--text-tertiary)]">
          Updated {formatUtc8Time(signal.updatedAt)} UTC+8
        </p>
      </div>
    </Card>
  );
}
