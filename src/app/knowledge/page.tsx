import { PageShell } from "@/components/shared/page-shell";
import { KnowledgePage } from "@/features/knowledge/components/knowledge-page";
import { getKnowledgePageData } from "@/features/knowledge/services/knowledge.service";

export default async function KnowledgeRoutePage() {
  const data = await getKnowledgePageData();

  return (
    <PageShell currentPath="/knowledge">
      <KnowledgePage data={data} />
    </PageShell>
  );
}
