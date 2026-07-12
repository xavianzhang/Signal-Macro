import { z } from "zod";

import { jsonSuccess } from "@/lib/api";
import { ApiRouteError, jsonError } from "@/lib/http";
import { getFedHistory } from "@/services/fed.service";

const historyQuerySchema = z.object({
  year: z.coerce.number().int().min(2000).max(2100).optional(),
});

export const revalidate = 3600;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = historyQuerySchema.parse({
      year: searchParams.get("year") ?? undefined,
    });

    return jsonSuccess(await getFedHistory(query.year));
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
