import type { KnowledgePageData } from "@/features/knowledge/types/knowledge.type";
import { ApiRouteError } from "@/lib/http";
import { findKnowledgeArticleBySlug, findKnowledgeArticles } from "@/repositories/knowledge-articles.repository";

interface ListKnowledgeInput {
  category?: string;
  limit?: number;
  page?: number;
  search?: string;
}

export async function listKnowledgeArticles(input: ListKnowledgeInput = {}) {
  const records = await findKnowledgeArticles(input);

  return records.map((record) => ({
    category: record.category,
    readTime: record.readTime,
    slug: record.slug,
    summary: record.aiSummary,
    title: record.title,
  }));
}

export async function getKnowledgeArticleDetail(slug: string) {
  const article = await findKnowledgeArticleBySlug(slug);

  if (!article) {
    throw new ApiRouteError("Resource Not Found", 404);
  }

  return {
    content: article.content,
    summary: article.aiSummary,
    title: article.title,
  };
}

export async function getKnowledgePageData(): Promise<KnowledgePageData> {
  const records = await findKnowledgeArticles({ limit: 20, page: 1 });
  const latestArticle = records[0];

  if (!latestArticle) {
    throw new Error("Knowledge data is unavailable.");
  }

  return {
    articles: records.map((record) => ({
      category: record.category,
      readTimeMinutes: record.readTime,
      slug: record.slug,
      summary: record.aiSummary,
      title: record.title,
    })),
    summary: "Knowledge 页面不是长篇财经专栏，而是把最常见的宏观名词压缩成 3 分钟能看懂、且能直接辅助交易判断的短文章。",
    updatedAt: latestArticle.createdAt,
  };
}
