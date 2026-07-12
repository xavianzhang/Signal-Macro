import { AiSummary } from "@/components/shared/ai-summary";
import { Card } from "@/components/ui/card";
import { formatPercent, formatSignedPercent, formatSmallPercent, formatUsdCompact, formatUtc8Time } from "@/lib/format";
import type { BitcoinSnapshot } from "@/features/dashboard/types/dashboard.type";

interface BitcoinSnapshotCardProps {
  bitcoin: BitcoinSnapshot;
}

export function BitcoinSnapshotCard({ bitcoin }: BitcoinSnapshotCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
            Bitcoin Snapshot
          </p>
          <div className="space-y-2">
            <h2 className="font-mono text-[32px] font-medium tracking-[-0.04em] text-[color:var(--text-primary)]">
              ${bitcoin.price.toLocaleString("en-US")}
            </h2>
            <p className="font-mono text-[15px] text-[color:var(--success)]">
              {formatSignedPercent(bitcoin.change24h)} in 24h
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[20px] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">ETF Flow</p>
            <p className="mt-2 font-mono text-[20px] font-medium text-[color:var(--text-primary)]">
              {formatUsdCompact(bitcoin.etfDailyInflow)}
            </p>
          </div>
          <div className="rounded-[20px] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">BTC.D</p>
            <p className="mt-2 font-mono text-[20px] font-medium text-[color:var(--text-primary)]">
              {formatPercent(bitcoin.dominance)}
            </p>
          </div>
          <div className="rounded-[20px] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">Funding</p>
            <p className="mt-2 font-mono text-[20px] font-medium text-[color:var(--text-primary)]">
              {formatSmallPercent(bitcoin.fundingRate)}
            </p>
          </div>
          <div className="rounded-[20px] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">Fear &amp; Greed</p>
            <p className="mt-2 font-mono text-[20px] font-medium text-[color:var(--text-primary)]">
              {bitcoin.fearGreed}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <AiSummary summary={bitcoin.summary} />
        <p className="text-[13px] text-[color:var(--text-tertiary)]">
          Updated {formatUtc8Time(bitcoin.updatedAt)} UTC+8
        </p>
      </div>
    </Card>
  );
}
