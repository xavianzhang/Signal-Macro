export interface KnowledgeArticle {
  slug: string;
  title: string;
  category: string;
  readTimeMinutes: number;
  summary: string;
}

export interface KnowledgePageData {
  updatedAt: string;
  summary: string;
  articles: KnowledgeArticle[];
}
