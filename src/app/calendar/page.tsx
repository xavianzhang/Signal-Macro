import { PageShell } from "@/components/shared/page-shell";
import { CalendarPage } from "@/features/calendar/components/calendar-page";
import { getCalendarPageData } from "@/features/calendar/services/calendar.service";

export default async function CalendarRoutePage() {
  const data = await getCalendarPageData();

  return (
    <PageShell currentPath="/calendar">
      <CalendarPage data={data} />
    </PageShell>
  );
}
