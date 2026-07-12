import { and, asc, eq, gte, lte, type SQL } from "drizzle-orm";

import { db, isDatabaseEnabled } from "@/db/client";
import { macroEventsSeed } from "@/db/seed-data";
import { macroEventsTable, type MacroEventRecord } from "@/db/schema";

interface FindMacroEventsInput {
  importance?: number;
  range?: "today" | "week" | "month";
  rangeEnd?: string;
  rangeStart?: string;
}

function sortEvents(records: MacroEventRecord[]): MacroEventRecord[] {
  return [...records].sort((left, right) => left.eventDate.localeCompare(right.eventDate));
}

export async function findMacroEvents(input: FindMacroEventsInput = {}): Promise<MacroEventRecord[]> {
  if (isDatabaseEnabled() && db) {
    const conditions: SQL[] = [];

    if (typeof input.importance === "number") {
      conditions.push(eq(macroEventsTable.importance, input.importance));
    }

    if (input.rangeStart) {
      conditions.push(gte(macroEventsTable.eventDate, input.rangeStart));
    }

    if (input.rangeEnd) {
      conditions.push(lte(macroEventsTable.eventDate, input.rangeEnd));
    }

    const query = db.select().from(macroEventsTable).orderBy(asc(macroEventsTable.eventDate));

    if (conditions.length === 0) {
      return await query;
    }

    return await query.where(and(...conditions));
  }

  return sortEvents(macroEventsSeed.filter((record) => {
    if (typeof input.importance === "number" && record.importance !== input.importance) {
      return false;
    }

    if (input.rangeStart && record.eventDate < input.rangeStart) {
      return false;
    }

    if (input.rangeEnd && record.eventDate > input.rangeEnd) {
      return false;
    }

    return true;
  }));
}

export async function findMacroEventById(id: string): Promise<MacroEventRecord | null> {
  if (isDatabaseEnabled() && db) {
    const result = await db.select().from(macroEventsTable).where(eq(macroEventsTable.id, id)).limit(1);

    return result[0] ?? null;
  }

  return macroEventsSeed.find((record) => record.id === id) ?? null;
}
