import { PageShell } from "@/components/shared/page-shell";
import { BitcoinPage } from "@/features/bitcoin/components/bitcoin-page";
import { getBitcoinPageData } from "@/features/bitcoin/services/bitcoin.service";

export default async function BitcoinRoutePage() {
  const data = await getBitcoinPageData();

  return (
    <PageShell currentPath="/bitcoin">
      <BitcoinPage data={data} />
    </PageShell>
  );
}
