import { cache } from "react";

import type { KnowledgePageData } from "@/features/knowledge/types/knowledge.type";
import { getKnowledgePageData as getKnowledgePageDataFromService } from "@/services/knowledge.service";

export const getKnowledgePageData = cache(async (): Promise<KnowledgePageData> => {
  return getKnowledgePageDataFromService();
});
