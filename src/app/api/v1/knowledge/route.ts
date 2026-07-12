import { z } from "zod";

import { jsonSuccess } from "@/lib/api";
import { ApiRouteError, jsonError } from "@/lib/http";
import { listKnowledgeArticles } from "@/services/knowledge.service";

const knowledgeQuerySchema = z.object({
  category: z.string().trim().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  page: z.coerce.number().int().min(1).default(1),
  search: z.string().trim().min(1).optional(),
});

export const revalidate = 86400;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = knowledgeQuerySchema.parse({
      category: searchParams.get("category") ?? undefined,
      limit: searchParams.get("limit") ?? 20,
      page: searchParams.get("page") ?? 1,
      search: searchParams.get("search") ?? undefined,
    });

    return jsonSuccess(await listKnowledgeArticles(query));
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
