import type { DashboardData, SignalSnapshot } from "@/features/dashboard/types/dashboard.type";
import { findLatestDailySignal } from "@/repositories/daily-signal.repository";

function assertSignalExists<T>(value: T | null): T {
  if (!value) {
    throw new Error("Daily signal data is unavailable.");
  }

  return value;
}

export async function getSignalSnapshot(): Promise<SignalSnapshot> {
  const signal = assertSignalExists(await findLatestDailySignal());

  return {
    bias: signal.marketBias as SignalSnapshot["bias"],
    confidence: signal.confidence,
    score: signal.signalScore,
    summary: signal.summary,
    updatedAt: signal.createdAt,
  };
}

export async function getSignalSummary(): Promise<{ summary: string }> {
  const signal = await getSignalSnapshot();

  return {
    summary: signal.summary,
  };
}

export async function getDashboardDailySummary(): Promise<DashboardData["dailySummary"]> {
  const signal = assertSignalExists(await findLatestDailySignal());
  const bullishReason = signal.bullishReasons[0] ?? "市场流动性仍对风险资产更友好。";
  const bearishReason = signal.bearishReasons[0] ?? "短线仍需留意宏观事件带来的波动。";

  return `今天市场整体偏${signal.marketBias === "bullish" ? "多" : signal.marketBias === "bearish" ? "空" : "中性"}，${bullishReason}，但${bearishReason}`;
}
