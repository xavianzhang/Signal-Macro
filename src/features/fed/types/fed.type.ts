export interface FedHistoryEntry {
  meetingDate: string;
  action: "hold" | "cut" | "hike";
  basisPoints: number;
  rateRange: string;
  summary: string;
}

export interface FedPageData {
  updatedAt: string;
  currentRate: string;
  nextMeetingDate: string;
  daysRemaining: number;
  holdProbability: number;
  cutProbability: number;
  hikeProbability: number;
  summary: string;
  history: FedHistoryEntry[];
}
