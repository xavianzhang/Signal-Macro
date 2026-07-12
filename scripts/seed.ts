import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import {
  btcEtfSeed,
  btcMarketSeed,
  dailySignalSeed,
  ethEtfSeed,
  fedRatesSeed,
  fedwatchProbabilitySeed,
  knowledgeArticlesSeed,
  macroEventsSeed,
} from "../src/db/seed-data";
import {
  btcEtfTable,
  btcMarketTable,
  dailySignalTable,
  ethEtfTable,
  fedRatesTable,
  fedwatchProbabilityTable,
  knowledgeArticlesTable,
  macroEventsTable,
} from "../src/db/schema";

async function main() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required to run the seed script.");
  }

  const sql = postgres(databaseUrl, {
    max: 1,
    prepare: false,
  });

  const db = drizzle(sql);

  await db.insert(dailySignalTable).values(dailySignalSeed).onConflictDoNothing();
  await db.insert(fedRatesTable).values(fedRatesSeed).onConflictDoNothing();
  await db.insert(fedwatchProbabilityTable).values(fedwatchProbabilitySeed).onConflictDoNothing();
  await db.insert(macroEventsTable).values(macroEventsSeed).onConflictDoNothing();
  await db.insert(btcMarketTable).values(btcMarketSeed).onConflictDoNothing();
  await db.insert(btcEtfTable).values(btcEtfSeed).onConflictDoNothing();
  await db.insert(ethEtfTable).values(ethEtfSeed).onConflictDoNothing();
  await db.insert(knowledgeArticlesTable).values(knowledgeArticlesSeed).onConflictDoNothing();

  await sql.end();
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
