import { and, desc, eq, ilike, type SQL } from "drizzle-orm";

import { db, isDatabaseEnabled } from "@/db/client";
import { knowledgeArticlesSeed } from "@/db/seed-data";
import { knowledgeArticlesTable, type KnowledgeArticleRecord } from "@/db/schema";

interface FindKnowledgeArticlesInput {
  category?: string;
  limit?: number;
  page?: number;
  search?: string;
}

function normalizeCategory(category: string): string {
  const categoryMap: Record<string, string> = {
    bitcoin: "Bitcoin",
    economics: "Economics",
    etf: "ETF",
    "federal reserve": "Federal Reserve",
    guide: "Guide",
    macro: "Macro",
  };

  return categoryMap[category.trim().toLowerCase()] ?? category.trim();
}

function sortArticles(records: KnowledgeArticleRecord[]): KnowledgeArticleRecord[] {
  return [...records].sort((left, right) => right.createdAt.localeCompare(left.createdAt));
}

export async function findKnowledgeArticles(input: FindKnowledgeArticlesInput = {}): Promise<KnowledgeArticleRecord[]> {
  const page = input.page ?? 1;
  const limit = input.limit ?? 20;
  const offset = (page - 1) * limit;

  if (isDatabaseEnabled() && db) {
    const conditions: SQL[] = [eq(knowledgeArticlesTable.published, true)];

    if (input.category) {
      conditions.push(eq(knowledgeArticlesTable.category, normalizeCategory(input.category)));
    }

    if (input.search) {
      conditions.push(ilike(knowledgeArticlesTable.title, `%${input.search}%`));
    }

    return db
      .select()
      .from(knowledgeArticlesTable)
      .where(and(...conditions))
      .orderBy(desc(knowledgeArticlesTable.createdAt))
      .limit(limit)
      .offset(offset);
  }

  const filtered = sortArticles(
    knowledgeArticlesSeed.filter((record) => {
      if (!record.published) {
        return false;
      }

      if (input.category && record.category !== normalizeCategory(input.category)) {
        return false;
      }

      if (input.search && !record.title.toLowerCase().includes(input.search.toLowerCase())) {
        return false;
      }

      return true;
    }),
  );

  return filtered.slice(offset, offset + limit);
}

export async function findKnowledgeArticleBySlug(slug: string): Promise<KnowledgeArticleRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(knowledgeArticlesTable).where(eq(knowledgeArticlesTable.slug, slug)).limit(1);

    return result[0] ?? null;
  }

  return knowledgeArticlesSeed.find((record) => record.slug === slug && record.published) ?? null;
}
