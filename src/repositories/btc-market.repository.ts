import { desc, lt } from "drizzle-orm";

import { db, isDatabaseEnabled } from "@/db/client";
import { btcMarketSeed } from "@/db/seed-data";
import { btcMarketTable, type BtcMarketRecord } from "@/db/schema";

function sortMarket(records: BtcMarketRecord[]): BtcMarketRecord[] {
  return [...records].sort((left, right) => right.timestamp.localeCompare(left.timestamp));
}

export async function findLatestBtcMarket(): Promise<BtcMarketRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(btcMarketTable).orderBy(desc(btcMarketTable.timestamp)).limit(1);

    return result[0] ?? null;
  }

  return sortMarket(btcMarketSeed)[0] ?? null;
}

export async function findPreviousBtcMarket(beforeTimestamp: string): Promise<BtcMarketRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db
      .select()
      .from(btcMarketTable)
      .where(lt(btcMarketTable.timestamp, beforeTimestamp))
      .orderBy(desc(btcMarketTable.timestamp))
      .limit(1);

    return result[0] ?? null;
  }

  return sortMarket(btcMarketSeed).find((record) => record.timestamp < beforeTimestamp) ?? null;
}
