export type MarketBias = "bullish" | "neutral" | "bearish";

export interface SignalSnapshot {
  score: number;
  bias: MarketBias;
  confidence: number;
  summary: string;
  updatedAt: string;
}

export interface EventSnapshot {
  title: string;
  relativeDateLabel: string;
  timeLabel: string;
  forecast: string;
  importance: 5;
  summary: string;
}

export interface FedSnapshot {
  currentRate: string;
  nextMeetingDate: string;
  daysRemaining: number;
  holdProbability: number;
  cutProbability: number;
  hikeProbability: number;
  summary: string;
  updatedAt: string;
}

export interface BitcoinSnapshot {
  price: number;
  change24h: number;
  dominance: number;
  fundingRate: number;
  fearGreed: number;
  etfDailyInflow: number;
  summary: string;
  updatedAt: string;
}

export interface DashboardData {
  signal: SignalSnapshot;
  event: EventSnapshot;
  fed: FedSnapshot;
  bitcoin: BitcoinSnapshot;
  dailySummary: string;
}
