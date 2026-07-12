import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { BitcoinSnapshotCard } from "@/features/dashboard/components/bitcoin-snapshot-card";
import { DailySummaryCard } from "@/features/dashboard/components/daily-summary-card";
import { FedSnapshotCard } from "@/features/dashboard/components/fed-snapshot-card";
import { SignalScoreCard } from "@/features/dashboard/components/signal-score-card";
import { TodayEventCard } from "@/features/dashboard/components/today-event-card";
import type { DashboardData } from "@/features/dashboard/types/dashboard.type";

interface DashboardPageProps {
  data: DashboardData;
}

export function DashboardPage({ data }: DashboardPageProps) {
  return (
    <main className="pb-16 pt-8 lg:pb-24 lg:pt-12">
      <Container className="space-y-8 lg:space-y-10">
        <SectionHeading
          eyebrow="Signal Macro"
          title="每天 3 分钟，读懂今天市场为什么动。"
          description="Signal Score 先给结论，AI Summary 再解释原因，让 BTC 与美股交易判断更快、更清楚。"
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <SignalScoreCard signal={data.signal} />
          <TodayEventCard event={data.event} />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <FedSnapshotCard fed={data.fed} />
          <BitcoinSnapshotCard bitcoin={data.bitcoin} />
        </section>

        <section>
          <DailySummaryCard summary={data.dailySummary} updatedAt={data.signal.updatedAt} />
        </section>
      </Container>
    </main>
  );
}
