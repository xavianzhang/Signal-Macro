import { bigint, boolean, date, integer, jsonb, numeric, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const dailySignalTable = pgTable("daily_signal", {
  bearishReasons: jsonb("bearish_reasons").$type<string[]>().notNull(),
  bullishReasons: jsonb("bullish_reasons").$type<string[]>().notNull(),
  confidence: integer("confidence").notNull(),
  createdAt: timestamp("created_at", { mode: "string", withTimezone: true }).notNull(),
  id: uuid("id").primaryKey(),
  marketBias: varchar("market_bias", { length: 20 }).notNull(),
  signalDate: date("signal_date", { mode: "string" }).notNull(),
  signalScore: integer("signal_score").notNull(),
  summary: text("summary").notNull(),
});

export const fedRatesTable = pgTable("fed_rates", {
  action: varchar("action", { length: 20 }).notNull(),
  basisPoints: integer("basis_points").notNull(),
  createdAt: timestamp("created_at", { mode: "string", withTimezone: true }).notNull(),
  id: uuid("id").primaryKey(),
  meetingDate: date("meeting_date", { mode: "string" }).notNull(),
  rateMax: numeric("rate_max", { precision: 4, scale: 2 }).notNull(),
  rateMin: numeric("rate_min", { precision: 4, scale: 2 }).notNull(),
  statement: text("statement").notNull(),
});

export const fedwatchProbabilityTable = pgTable("fedwatch_probability", {
  cutProbability: numeric("cut_probability", { precision: 5, scale: 2 }).notNull(),
  hikeProbability: numeric("hike_probability", { precision: 5, scale: 2 }).notNull(),
  holdProbability: numeric("hold_probability", { precision: 5, scale: 2 }).notNull(),
  id: uuid("id").primaryKey(),
  meetingDate: date("meeting_date", { mode: "string" }).notNull(),
  updatedAt: timestamp("updated_at", { mode: "string", withTimezone: true }).notNull(),
});

export const macroEventsTable = pgTable("macro_events", {
  actual: varchar("actual", { length: 50 }),
  aiAnalysis: text("ai_analysis").notNull(),
  country: varchar("country", { length: 50 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string", withTimezone: true }).notNull(),
  eventDate: timestamp("event_date", { mode: "string", withTimezone: true }).notNull(),
  eventName: varchar("event_name", { length: 200 }).notNull(),
  forecast: varchar("forecast", { length: 50 }).notNull(),
  id: uuid("id").primaryKey(),
  importance: integer("importance").notNull(),
  previous: varchar("previous", { length: 50 }).notNull(),
  status: varchar("status", { length: 20 }).notNull(),
});

export const btcMarketTable = pgTable("btc_market", {
  dominance: numeric("dominance", { precision: 5, scale: 2 }).notNull(),
  fearGreed: integer("fear_greed").notNull(),
  fundingRate: numeric("funding_rate", { precision: 8, scale: 5 }).notNull(),
  id: uuid("id").primaryKey(),
  marketCap: bigint("market_cap", { mode: "number" }).notNull(),
  openInterest: bigint("open_interest", { mode: "number" }).notNull(),
  price: numeric("price", { precision: 18, scale: 2 }).notNull(),
  timestamp: timestamp("timestamp", { mode: "string", withTimezone: true }).notNull(),
});

export const btcEtfTable = pgTable("btc_etf", {
  ark: bigint("ark", { mode: "number" }).notNull(),
  bitwise: bigint("bitwise", { mode: "number" }).notNull(),
  blackrock: bigint("blackrock", { mode: "number" }).notNull(),
  createdAt: timestamp("created_at", { mode: "string", withTimezone: true }).notNull(),
  fidelity: bigint("fidelity", { mode: "number" }).notNull(),
  grayscale: bigint("grayscale", { mode: "number" }).notNull(),
  id: uuid("id").primaryKey(),
  totalInflow: bigint("total_inflow", { mode: "number" }).notNull(),
  tradeDate: date("trade_date", { mode: "string" }).notNull(),
});

export const ethEtfTable = pgTable("eth_etf", {
  blackrock: bigint("blackrock", { mode: "number" }).notNull(),
  createdAt: timestamp("created_at", { mode: "string", withTimezone: true }).notNull(),
  fidelity: bigint("fidelity", { mode: "number" }).notNull(),
  grayscale: bigint("grayscale", { mode: "number" }).notNull(),
  id: uuid("id").primaryKey(),
  totalInflow: bigint("total_inflow", { mode: "number" }).notNull(),
  tradeDate: date("trade_date", { mode: "string" }).notNull(),
});

export const knowledgeArticlesTable = pgTable("knowledge_articles", {
  aiSummary: text("ai_summary").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { mode: "string", withTimezone: true }).notNull(),
  id: uuid("id").primaryKey(),
  published: boolean("published").notNull(),
  readTime: integer("read_time").notNull(),
  slug: varchar("slug", { length: 200 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
});

export type DailySignalRecord = typeof dailySignalTable.$inferSelect;
export type FedRateRecord = typeof fedRatesTable.$inferSelect;
export type FedwatchProbabilityRecord = typeof fedwatchProbabilityTable.$inferSelect;
export type MacroEventRecord = typeof macroEventsTable.$inferSelect;
export type BtcMarketRecord = typeof btcMarketTable.$inferSelect;
export type BtcEtfRecord = typeof btcEtfTable.$inferSelect;
export type EthEtfRecord = typeof ethEtfTable.$inferSelect;
export type KnowledgeArticleRecord = typeof knowledgeArticlesTable.$inferSelect;
