import { desc } from "drizzle-orm";

import { db, isDatabaseEnabled } from "@/db/client";
import { fedwatchProbabilitySeed } from "@/db/seed-data";
import { fedwatchProbabilityTable, type FedwatchProbabilityRecord } from "@/db/schema";

function sortFedwatch(records: FedwatchProbabilityRecord[]): FedwatchProbabilityRecord[] {
  return [...records].sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
}

export async function findLatestFedwatchProbability(): Promise<FedwatchProbabilityRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db
      .select()
      .from(fedwatchProbabilityTable)
      .orderBy(desc(fedwatchProbabilityTable.updatedAt))
      .limit(1);

    return result[0] ?? null;
  }

  return sortFedwatch(fedwatchProbabilitySeed)[0] ?? null;
}
