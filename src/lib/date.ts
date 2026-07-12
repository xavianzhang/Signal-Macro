const DAY_IN_MS = 24 * 60 * 60 * 1000;

export function getDaysUntil(targetDate: string, baseDate = new Date()): number {
  const start = Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth(), baseDate.getUTCDate());
  const target = Date.parse(`${targetDate}T00:00:00Z`);

  return Math.max(Math.ceil((target - start) / DAY_IN_MS), 0);
}

export function getRangeStart(range: "today" | "week" | "month", baseDate = new Date()): Date {
  const start = new Date(Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth(), baseDate.getUTCDate()));

  if (range === "today") {
    return start;
  }

  if (range === "week") {
    return start;
  }

  return start;
}

export function isSameUtcDate(timestamp: string, date: Date): boolean {
  const value = new Date(timestamp);

  return (
    value.getUTCFullYear() === date.getUTCFullYear() &&
    value.getUTCMonth() === date.getUTCMonth() &&
    value.getUTCDate() === date.getUTCDate()
  );
}
