import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { UpdatedTime } from "@/components/shared/updated-time";
import { AiSummary } from "@/components/shared/ai-summary";
import { Card } from "@/components/ui/card";
import type { KnowledgePageData } from "@/features/knowledge/types/knowledge.type";

interface KnowledgePageProps {
  data: KnowledgePageData;
}

export function KnowledgePage({ data }: KnowledgePageProps) {
  return (
    <main className="pb-16 pt-8 lg:pb-24 lg:pt-12">
      <Container className="space-y-8 lg:space-y-10">
        <SectionHeading
          eyebrow="Knowledge"
          title="把宏观术语翻译成人话。"
          description="每篇文章控制在 3 分钟内读完，只讲交易里真正会用到的概念，不做长篇背景科普。"
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Card className="space-y-6">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">Reading Guide</p>
              <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
                先理解概念，再理解它为什么影响你的交易。
              </h2>
            </div>
            <AiSummary summary={data.summary} />
            <UpdatedTime value={data.updatedAt} />
          </Card>

          <Card className="space-y-6">
            <div className="space-y-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">Focus Topics</p>
              <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
                覆盖 CPI、Fed、BTC.D、Funding 等最常被误解的概念。
              </h2>
            </div>
            <AiSummary summary="Knowledge 页面服务的是理解成本，而不是内容数量；宁可少，也要让用户真正看懂。" />
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {data.articles.map((article) => (
            <Card key={article.slug} className="flex h-full flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
                      {article.category}
                    </p>
                    <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[color:var(--text-primary)]">
                      {article.title}
                    </h2>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 text-[color:var(--text-tertiary)]" aria-hidden="true" />
                </div>

                <div className="inline-flex rounded-full bg-[color:var(--surface-muted)] px-3 py-1.5 text-[13px] text-[color:var(--text-secondary)]">
                  {article.readTimeMinutes} min read
                </div>
              </div>
              <AiSummary summary={article.summary} />
            </Card>
          ))}
        </section>
      </Container>
    </main>
  );
}
