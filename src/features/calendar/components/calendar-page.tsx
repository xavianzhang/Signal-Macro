import { Container } from "@/components/shared/container";
import { MetricPanel } from "@/components/shared/metric-panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { UpdatedTime } from "@/components/shared/updated-time";
import { AiSummary } from "@/components/shared/ai-summary";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { CalendarPageData } from "@/features/calendar/types/calendar.type";

interface CalendarPageProps {
  data: CalendarPageData;
}

export function CalendarPage({ data }: CalendarPageProps) {
  return (
    <main className="pb-16 pt-8 lg:pb-24 lg:pt-12">
      <Container className="space-y-8 lg:space-y-10">
        <SectionHeading
          eyebrow="Calendar"
          title="只保留真正能改变市场定价的事件。"
          description="这里不是完整财经日历，而是把用户今天最该关注的五星事件提前翻译成交易语言。"
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Card className="space-y-8">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
                Featured Event
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-[32px] font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                  {data.featuredEvent.name}
                </h2>
                <Badge tone="warning">★★★★★</Badge>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MetricPanel label="When" value={data.featuredEvent.timeLabel} detail={data.featuredEvent.dateLabel} />
              <MetricPanel
                label="Forecast"
                value={data.featuredEvent.forecast}
                detail={`Previous ${data.featuredEvent.previous}`}
              />
              <MetricPanel label="Affected Assets" value={data.featuredEvent.affectedAssets} />
              <MetricPanel label="Historical Impact" value="Pattern" detail={data.featuredEvent.historicalImpact} />
            </div>

            <AiSummary summary={data.featuredEvent.summary} />
            <UpdatedTime value={data.updatedAt} />
          </Card>

          <Card className="space-y-8">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
                Reading Guide
              </p>
              <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
                先看事件会不会改变降息预期，再看市场是否已经提前定价。
              </h2>
            </div>

            <div className="grid gap-4">
              <MetricPanel label="If Lower Than Forecast" value="BTC Bullish" detail="风险资产更容易延续反弹。" />
              <MetricPanel label="If Higher Than Forecast" value="BTC Bearish" detail="美元和收益率可能先走强。" />
            </div>

            <AiSummary summary={data.heroSummary} />
          </Card>
        </section>

        <section>
          <Card className="space-y-6">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
                This Week
              </p>
              <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
                默认只显示五星级别的关键事件。
              </h2>
            </div>

            <div className="space-y-4">
              {data.events.map((event) => (
                <div key={event.id} className="rounded-[20px] border border-[color:var(--border)] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-[20px] font-medium tracking-[-0.02em] text-[color:var(--text-primary)]">{event.name}</p>
                      <p className="font-mono text-[15px] text-[color:var(--text-secondary)]">
                        {event.dateLabel} · {event.timeLabel}
                      </p>
                    </div>
                    <Badge tone="warning">★★★★★</Badge>
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-[color:var(--text-secondary)]">{event.summary}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </Container>
    </main>
  );
}
