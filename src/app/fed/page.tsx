import { PageShell } from "@/components/shared/page-shell";
import { FedPage } from "@/features/fed/components/fed-page";
import { getFedPageData } from "@/features/fed/services/fed.service";

export default async function FedRoutePage() {
  const data = await getFedPageData();

  return (
    <PageShell currentPath="/fed">
      <FedPage data={data} />
    </PageShell>
  );
}
