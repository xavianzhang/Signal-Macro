import { jsonSuccess } from "@/lib/api";
import { jsonError } from "@/lib/http";
import { getBitcoinApiSnapshot } from "@/services/bitcoin.service";
import { getFeaturedEventSnapshot } from "@/services/calendar.service";
import { getFedCurrent, getFedwatchBreakdown } from "@/services/fed.service";
import { getDashboardDailySummary, getSignalSnapshot } from "@/services/signal.service";

export const revalidate = 600;

export async function GET() {
  try {
    const [signal, summary, fedCurrent, fedwatch, calendar, bitcoin] = await Promise.all([
      getSignalSnapshot(),
      getDashboardDailySummary(),
      getFedCurrent(),
      getFedwatchBreakdown(),
      getFeaturedEventSnapshot(),
      getBitcoinApiSnapshot(),
    ]);

    return jsonSuccess({
      bitcoin,
      calendar: {
        event: calendar.title,
        forecast: calendar.forecast,
        importance: calendar.importance,
        summary: calendar.summary,
        time: calendar.timeLabel,
      },
      fed: {
        ...fedCurrent,
        ...fedwatch,
      },
      signal,
      summary: {
        summary,
      },
    });
  } catch {
    return jsonError("Internal Error", 500);
  }
}
