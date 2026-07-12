import { jsonSuccess } from "@/lib/api";
import { ApiRouteError, jsonError } from "@/lib/http";
import { getKnowledgeArticleDetail } from "@/services/knowledge.service";

export const revalidate = 86400;

interface KnowledgeArticleRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_request: Request, context: KnowledgeArticleRouteProps) {
  try {
    const { slug } = await context.params;

    return jsonSuccess(await getKnowledgeArticleDetail(slug));
  } catch (error) {
    if (error instanceof ApiRouteError) {
      return jsonError(error.message, error.code);
    }

    return jsonError("Internal Error", 500);
  }
}
