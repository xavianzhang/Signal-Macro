import { z } from "zod";

import { jsonSuccess } from "@/lib/api";
import { ApiRouteError, jsonError } from "@/lib/http";
import { listCalendarEvents } from "@/services/calendar.service";

const calendarQuerySchema = z.object({
  importance: z.coerce.number().int().min(1).max(5).optional(),
  range: z.enum(["today", "week", "month"]).default("week"),
});

export const revalidate = 21600;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = calendarQuerySchema.parse({
      importance: searchParams.get("importance") ?? 5,
      range: searchParams.get("range") ?? "week",
    });

    return jsonSuccess(await listCalendarEvents(query.range, query.importance));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonError("Bad Request", 400);
    }

    if (error instanceof ApiRouteError) {
      return jsonError(error.message, error.code);
    }

    return jsonError("Internal Error", 500);
  }
}
