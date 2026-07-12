import { and, desc, eq, gte, lt } from "drizzle-orm";

import { db, isDatabaseEnabled } from "@/db/client";
import { fedRatesSeed } from "@/db/seed-data";
import { fedRatesTable, type FedRateRecord } from "@/db/schema";

function sortRates(records: FedRateRecord[]): FedRateRecord[] {
  return [...records].sort((left, right) => right.meetingDate.localeCompare(left.meetingDate));
}

export async function findLatestFedRate(): Promise<FedRateRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(fedRatesTable).orderBy(desc(fedRatesTable.meetingDate)).limit(1);

    return result[0] ?? null;
  }

  return sortRates(fedRatesSeed)[0] ?? null;
}

export async function findFedRatesByYear(year?: number): Promise<FedRateRecord[]> {
  if (isDatabaseEnabled() && db) {
    if (!year) {
      return db.select().from(fedRatesTable).orderBy(desc(fedRatesTable.meetingDate));
    }

    return db
      .select()
      .from(fedRatesTable)
      .where(and(gte(fedRatesTable.meetingDate, `${year}-01-01`), lt(fedRatesTable.meetingDate, `${year + 1}-01-01`)))
      .orderBy(desc(fedRatesTable.meetingDate));
  }

  const records = sortRates(fedRatesSeed);

  if (!year) {
    return records;
  }

  return records.filter((record) => record.meetingDate.startsWith(`${year}-`));
}

export async function findFedRateByMeetingDate(meetingDate: string): Promise<FedRateRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(fedRatesTable).where(eq(fedRatesTable.meetingDate, meetingDate)).limit(1);

    return result[0] ?? null;
  }

  return fedRatesSeed.find((record) => record.meetingDate === meetingDate) ?? null;
}
