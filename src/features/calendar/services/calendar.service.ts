import { cache } from "react";

import type { CalendarPageData } from "@/features/calendar/types/calendar.type";
import { getCalendarPageData as getCalendarPageDataFromService } from "@/services/calendar.service";

export const getCalendarPageData = cache(async (): Promise<CalendarPageData> => {
  return getCalendarPageDataFromService();
});
