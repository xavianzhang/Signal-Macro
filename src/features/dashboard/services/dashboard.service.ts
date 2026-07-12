import { cache } from "react";

import { getDashboardData as getDashboardDataFromService } from "@/services/dashboard.service";
import type { DashboardData } from "@/features/dashboard/types/dashboard.type";

export const getDashboardData = cache(async (): Promise<DashboardData> => {
  return getDashboardDataFromService();
});
