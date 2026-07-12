import { Container } from "@/components/shared/container";
import { MetricPanel } from "@/components/shared/metric-panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { UpdatedTime } from "@/components/shared/updated-time";
import { AiSummary } from "@/components/shared/ai-summary";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatPercent } from "@/lib/format";
import { FedHistoryTimeline } from "@/features/fed/components/fed-history-timeline";
import type { FedPageData } from "@/features/fed/types/fed.type";

interface FedPageProps {
  data: FedPageData;
}

export function FedPage({ data }: FedPageProps) {
  return (
    <main className="pb-16 pt-8 lg:pb-24 lg:pt-12">
      <Container className="space-y-8 lg:space-y-10">
        <SectionHeading
          eyebrow="Federal Reserve"
          title="把利率决策翻译成交易视角。"
          description="这里不讲百科，只回答美联储现在对 BTC 与美股意味着什么，以及市场接下来最在意什么。"
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Card className="space-y-8">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
                Current Rate
              </p>
              <div className="flex flex-wrap items-end gap-4">
                <p className="font-mono text-[56px] font-semibold tracking-[-0.06em] text-[color:var(--text-primary)]">
                  {data.currentRate}
                </p>
                <Badge tone="neutral">Base Case: Hold</Badge>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MetricPanel label="Next Meeting" value={data.nextMeetingDate} detail="下一次利率决议窗口。" />
              <MetricPanel label="Days Remaining" value={`${data.daysRemaining} Days`} detail="市场定价会逐步向会议靠拢。" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <MetricPanel label="Hold" value={formatPercent(data.holdProbability)} />
              <MetricPanel label="Cut" value={formatPercent(data.cutProbability)} />
              <MetricPanel label="Hike" value={formatPercent(data.hikeProbability)} />
            </div>

            <AiSummary summary={data.summary} />
            <UpdatedTime value={data.updatedAt} />
          </Card>

          <Card className="space-y-8">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
                FedWatch
              </p>
              <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
                市场目前仍认为本次会议维持利率概率最高。
              </h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-[24px] bg-[color:var(--surface-muted)] p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[15px] text-[color:var(--text-secondary)]">Hold Probability</span>
                  <span className="font-mono text-[32px] font-medium text-[color:var(--text-primary)]">
                    {formatPercent(data.holdProbability)}
                  </span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <MetricPanel label="Cut Scenario" value="Risk On" detail="若降息预期升温，成长资产估值压力减轻。" />
                <MetricPanel label="Hike Scenario" value="Risk Off" detail="若通胀反复，BTC 与高估值资产更易承压。" />
              </div>
            </div>

            <AiSummary summary="美联储页面的重点不是记住术语，而是看清楚市场把哪种政策路径当成默认剧本。" />
          </Card>
        </section>

        <section>
          <FedHistoryTimeline history={data.history} />
        </section>
      </Container>
    </main>
  );
}
