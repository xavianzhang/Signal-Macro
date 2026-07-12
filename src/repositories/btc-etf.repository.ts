import { desc, gte } from "drizzle-orm";

import { db, isDatabaseEnabled } from "@/db/client";
import { btcEtfSeed } from "@/db/seed-data";
import { btcEtfTable, type BtcEtfRecord } from "@/db/schema";

function sortEtf(records: BtcEtfRecord[]): BtcEtfRecord[] {
  return [...records].sort((left, right) => right.tradeDate.localeCompare(left.tradeDate));
}

export async function findLatestBtcEtf(): Promise<BtcEtfRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(btcEtfTable).orderBy(desc(btcEtfTable.tradeDate)).limit(1);

    return result[0] ?? null;
  }

  return sortEtf(btcEtfSeed)[0] ?? null;
}

export async function findRecentBtcEtf(fromTradeDate?: string): Promise<BtcEtfRecord[]> {
  if (isDatabaseEnabled() && db) {
    if (!fromTradeDate) {
      return db.select().from(btcEtfTable).orderBy(desc(btcEtfTable.tradeDate));
    }

    return db.select().from(btcEtfTable).where(gte(btcEtfTable.tradeDate, fromTradeDate)).orderBy(desc(btcEtfTable.tradeDate));
  }

  const records = sortEtf(btcEtfSeed);

  if (!fromTradeDate) {
    return records;
  }

  return records.filter((record) => record.tradeDate >= fromTradeDate);
}
