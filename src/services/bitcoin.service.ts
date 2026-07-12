import type { BitcoinPageData } from "@/features/bitcoin/types/bitcoin.type";
import type { BitcoinSnapshot } from "@/features/dashboard/types/dashboard.type";
import { findLatestBtcEtf, findRecentBtcEtf } from "@/repositories/btc-etf.repository";
import { findLatestBtcMarket, findPreviousBtcMarket } from "@/repositories/btc-market.repository";

function parseNumeric(value: string): number {
  return Number.parseFloat(value);
}

function calculatePercentChange(current: number, previous: number): number {
  if (previous === 0) {
    return 0;
  }

  return Number((((current - previous) / previous) * 100).toFixed(2));
}

export async function getBitcoinSnapshot(): Promise<BitcoinSnapshot> {
  const latestMarket = await findLatestBtcMarket();
  const previousMarket = latestMarket ? await findPreviousBtcMarket(latestMarket.timestamp) : null;
  const latestEtf = await findLatestBtcEtf();

  if (!latestMarket || !previousMarket || !latestEtf) {
    throw new Error("Bitcoin market data is unavailable.");
  }

  const currentPrice = parseNumeric(latestMarket.price);
  const previousPrice = parseNumeric(previousMarket.price);

  return {
    change24h: calculatePercentChange(currentPrice, previousPrice),
    dominance: parseNumeric(latestMarket.dominance),
    etfDailyInflow: latestEtf.totalInflow,
    fearGreed: latestMarket.fearGreed,
    fundingRate: parseNumeric(latestMarket.fundingRate),
    price: currentPrice,
    summary: "价格、ETF 与情绪同时偏强，说明这轮上涨并不只是空头回补，机构与情绪面都在同步支持趋势。",
    updatedAt: latestMarket.timestamp,
  };
}

export async function getBitcoinEtfFlows() {
  const records = await findRecentBtcEtf();

  const today = records[0]?.totalInflow ?? 0;
  const week = records.slice(0, 7).reduce((sum, record) => sum + record.totalInflow, 0);
  const month = records.slice(0, 30).reduce((sum, record) => sum + record.totalInflow, 0);

  return {
    month,
    today,
    week,
  };
}

export async function getBitcoinApiSnapshot() {
  const snapshot = await getBitcoinSnapshot();

  return {
    change24h: snapshot.change24h,
    dominance: snapshot.dominance,
    fearGreed: snapshot.fearGreed,
    funding: snapshot.fundingRate,
    price: snapshot.price,
  };
}

export async function getBitcoinPageData(): Promise<BitcoinPageData> {
  const snapshot = await getBitcoinSnapshot();

  return {
    change24h: snapshot.change24h,
    dominance: snapshot.dominance,
    etfFlow: snapshot.etfDailyInflow,
    fearGreed: snapshot.fearGreed,
    fundingRate: snapshot.fundingRate,
    price: snapshot.price,
    strengthRead: "机构流入、主导率提升、情绪偏热但未极端，说明 BTC 仍处于相对强势区间。",
    summary: snapshot.summary,
    updatedAt: snapshot.updatedAt,
  };
}
