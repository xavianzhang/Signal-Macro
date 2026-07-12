import type { FedPageData } from "@/features/fed/types/fed.type";
import type { FedSnapshot } from "@/features/dashboard/types/dashboard.type";
import { getDaysUntil } from "@/lib/date";
import { findFedRatesByYear, findLatestFedRate } from "@/repositories/fed-rates.repository";
import { findLatestFedwatchProbability } from "@/repositories/fedwatch-probability.repository";

function parseNumeric(value: string): number {
  return Number.parseFloat(value);
}

function formatRateRange(rateMin: string, rateMax: string): string {
  return `${rateMin}% - ${rateMax}%`;
}

function assertFedValues<T>(value: T | null, message: string): T {
  if (!value) {
    throw new Error(message);
  }

  return value;
}

export async function getFedSnapshot(): Promise<FedSnapshot> {
  const latestRate = assertFedValues(await findLatestFedRate(), "Fed rate data is unavailable.");
  const latestFedwatch = assertFedValues(await findLatestFedwatchProbability(), "FedWatch data is unavailable.");

  return {
    currentRate: formatRateRange(latestRate.rateMin, latestRate.rateMax),
    cutProbability: parseNumeric(latestFedwatch.cutProbability),
    daysRemaining: getDaysUntil(latestFedwatch.meetingDate),
    hikeProbability: parseNumeric(latestFedwatch.hikeProbability),
    holdProbability: parseNumeric(latestFedwatch.holdProbability),
    nextMeetingDate: latestFedwatch.meetingDate,
    summary: "市场仍把“维持利率不变”当成基准情景，所以真正影响 BTC 与美股方向的，是会议前不断变化的通胀与就业预期。",
    updatedAt: latestFedwatch.updatedAt,
  };
}

export async function getFedCurrent() {
  const fed = await getFedSnapshot();

  return {
    daysRemaining: fed.daysRemaining,
    nextMeeting: fed.nextMeetingDate,
    rate: fed.currentRate.replaceAll("%", "").replaceAll(" ", ""),
  };
}

export async function getFedwatchBreakdown() {
  const fed = await getFedSnapshot();

  return {
    cut: fed.cutProbability,
    hike: fed.hikeProbability,
    hold: fed.holdProbability,
    meeting: fed.nextMeetingDate,
  };
}

export async function getFedHistory(year?: number) {
  const history = await findFedRatesByYear(year);

  return history.map((record) => ({
    action: record.action,
    bp: record.basisPoints,
    date: record.meetingDate,
    rate: `${record.rateMin}-${record.rateMax}`,
  }));
}

export async function getFedPageData(): Promise<FedPageData> {
  const fed = await getFedSnapshot();
  const history = await findFedRatesByYear();

  return {
    ...fed,
    history: history.map((record) => ({
      action: record.action as FedPageData["history"][number]["action"],
      basisPoints: record.basisPoints,
      meetingDate: record.meetingDate,
      rateRange: formatRateRange(record.rateMin, record.rateMax),
      summary: record.statement,
    })),
  };
}
