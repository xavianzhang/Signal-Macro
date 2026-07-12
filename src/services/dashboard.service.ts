import type { DashboardData } from "@/features/dashboard/types/dashboard.type";
import { getBitcoinSnapshot } from "@/services/bitcoin.service";
import { getFeaturedEventSnapshot } from "@/services/calendar.service";
import { getFedSnapshot } from "@/services/fed.service";
import { getDashboardDailySummary, getSignalSnapshot } from "@/services/signal.service";

export async function getDashboardData(): Promise<DashboardData> {
  const [signal, event, fed, bitcoin, dailySummary] = await Promise.all([
    getSignalSnapshot(),
    getFeaturedEventSnapshot(),
    getFedSnapshot(),
    getBitcoinSnapshot(),
    getDashboardDailySummary(),
  ]);

  return {
    bitcoin,
    dailySummary,
    event,
    fed,
    signal,
  };
}
