import { cache } from "react";

import type { BitcoinPageData } from "@/features/bitcoin/types/bitcoin.type";
import { getBitcoinPageData as getBitcoinPageDataFromService } from "@/services/bitcoin.service";

export const getBitcoinPageData = cache(async (): Promise<BitcoinPageData> => {
  return getBitcoinPageDataFromService();
});
