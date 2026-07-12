import { desc, eq } from "drizzle-orm";

import { db, isDatabaseEnabled } from "@/db/client";
import { dailySignalSeed } from "@/db/seed-data";
import { dailySignalTable, type DailySignalRecord } from "@/db/schema";

function sortSignals(records: DailySignalRecord[]): DailySignalRecord[] {
  return [...records].sort((left, right) => right.signalDate.localeCompare(left.signalDate));
}

export async function findLatestDailySignal(): Promise<DailySignalRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(dailySignalTable).orderBy(desc(dailySignalTable.signalDate)).limit(1);

    return result[0] ?? null;
  }

  return sortSignals(dailySignalSeed)[0] ?? null;
}

export async function findDailySignalByDate(signalDate: string): Promise<DailySignalRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(dailySignalTable).where(eq(dailySignalTable.signalDate, signalDate)).limit(1);

    return result[0] ?? null;
  }

  return dailySignalSeed.find((record) => record.signalDate === signalDate) ?? null;
}
