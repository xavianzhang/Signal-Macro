import { Container } from "@/components/shared/container";
import { MetricPanel } from "@/components/shared/metric-panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { UpdatedTime } from "@/components/shared/updated-time";
import { AiSummary } from "@/components/shared/ai-summary";
import { Card } from "@/components/ui/card";
import { formatPercent, formatSignedPercent, formatSmallPercent, formatUsdCompact } from "@/lib/format";
import type { BitcoinPageData } from "@/features/bitcoin/types/bitcoin.type";

interface BitcoinPageProps {
  data: BitcoinPageData;
}

export function BitcoinPage({ data }: BitcoinPageProps) {
  return (
    <main className="pb-16 pt-8 lg:pb-24 lg:pt-12">
      <Container className="space-y-8 lg:space-y-10">
        <SectionHeading
          eyebrow="Bitcoin"
          title="今天 BTC 强不强，看这 5 个指标就够了。"
          description="不做复杂图表，也不堆交易面板，只保留价格、ETF、Funding、主导率与情绪这五个最关键的信号。"
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Card className="space-y-8">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">BTC Price</p>
              <div className="space-y-2">
                <h2 className="font-mono text-[56px] font-semibold tracking-[-0.06em] text-[color:var(--text-primary)]">
                  ${data.price.toLocaleString("en-US")}
                </h2>
                <p className="font-mono text-[15px] text-[color:var(--success)]">{formatSignedPercent(data.change24h)} in 24h</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MetricPanel label="BTC ETF" value={formatUsdCompact(data.etfFlow)} detail="今日净流入，观察机构风险偏好。" />
              <MetricPanel label="Funding" value={formatSmallPercent(data.fundingRate)} detail="衡量合约市场是否过热。" />
              <MetricPanel label="BTC Dominance" value={formatPercent(data.dominance)} detail="BTC 相对山寨的强弱。" />
              <MetricPanel label="Fear & Greed" value={String(data.fearGreed)} detail="情绪偏热，但仍未进入极端区域。" />
            </div>

            <AiSummary summary={data.summary} />
            <UpdatedTime value={data.updatedAt} />
          </Card>

          <Card className="space-y-8">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
                Strength Read
              </p>
              <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
                当前 BTC 仍处于偏强结构，而不是单日脉冲。
              </h2>
            </div>

            <div className="grid gap-4">
              <MetricPanel label="Flow" value="Institutions In" detail="ETF 持续流入说明买盘来自更稳定的资金。" />
              <MetricPanel label="Structure" value="BTC Leads" detail="主导率抬升代表资金仍优先选择 BTC。" />
              <MetricPanel label="Risk" value="Watch CPI" detail="真正的短线扰动仍来自宏观数据，而非链上事件。" />
            </div>

            <AiSummary summary={data.strengthRead} />
          </Card>
        </section>
      </Container>
    </main>
  );
}
