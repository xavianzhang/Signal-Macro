import { jsonSuccess } from "@/lib/api";
import { ApiRouteError, jsonError } from "@/lib/http";
import { getCalendarEventDetail } from "@/services/calendar.service";

export const revalidate = 21600;

interface CalendarEventDetailRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, context: CalendarEventDetailRouteProps) {
  try {
    const { id } = await context.params;

    return jsonSuccess(await getCalendarEventDetail(id));
  } catch (error) {
    if (error instanceof ApiRouteError) {
      return jsonError(error.message, error.code);
    }

    return jsonError("Internal Error", 500);
  }
}
