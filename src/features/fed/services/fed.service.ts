import { cache } from "react";

import type { FedPageData } from "@/features/fed/types/fed.type";
import { getFedPageData as getFedPageDataFromService } from "@/services/fed.service";

export const getFedPageData = cache(async (): Promise<FedPageData> => {
  return getFedPageDataFromService();
});
