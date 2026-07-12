export interface CalendarEvent {
  id: string;
  name: string;
  dateLabel: string;
  timeLabel: string;
  forecast: string;
  previous: string;
  affectedAssets: string;
  historicalImpact: string;
  summary: string;
}

export interface CalendarPageData {
  updatedAt: string;
  heroSummary: string;
  featuredEvent: CalendarEvent;
  events: CalendarEvent[];
}
