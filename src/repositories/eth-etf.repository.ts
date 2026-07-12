import { desc } from "drizzle-orm";

import { db, isDatabaseEnabled } from "@/db/client";
import { ethEtfSeed } from "@/db/seed-data";
import { ethEtfTable, type EthEtfRecord } from "@/db/schema";

function sortEtf(records: EthEtfRecord[]): EthEtfRecord[] {
  return [...records].sort((left, right) => right.tradeDate.localeCompare(left.tradeDate));
}

export async function findLatestEthEtf(): Promise<EthEtfRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(ethEtfTable).orderBy(desc(ethEtfTable.tradeDate)).limit(1);

    return result[0] ?? null;
  }

  return sortEtf(ethEtfSeed)[0] ?? null;
}
