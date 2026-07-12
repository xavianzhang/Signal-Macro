import type { CalendarPageData } from "@/features/calendar/types/calendar.type";
import type { EventSnapshot } from "@/features/dashboard/types/dashboard.type";
import { getRangeStart, isSameUtcDate } from "@/lib/date";
import { ApiRouteError } from "@/lib/http";
import { findMacroEventById, findMacroEvents } from "@/repositories/macro-events.repository";

const eventMetadataMap: Record<string, { affectedAssets: string; historicalImpact: string }> = {
  "FOMC Rate Decision": {
    affectedAssets: "BTC / US Stocks / DXY",
    historicalImpact: "点阵图与措辞往往比利率结果本身更能影响市场方向。",
  },
  "US CPI": {
    affectedAssets: "BTC / Nasdaq / DXY / Gold",
    historicalImpact: "低于预期时，风险资产通常先涨、美元回落。",
  },
  "US PPI": {
    affectedAssets: "BTC / Nasdaq",
    historicalImpact: "PPI 常被视作 CPI 的前瞻线索，若回落通常有利于宽松预期。",
  },
};

function getEventMetadata(eventName: string) {
  return eventMetadataMap[eventName] ?? {
    affectedAssets: "BTC / US Stocks",
    historicalImpact: "关键在于它是否改变市场对未来利率路径的预期。",
  };
}

function formatRelativeDateLabel(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();

  if (isSameUtcDate(timestamp, now)) {
    return "Tonight";
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    timeZone: "Asia/Shanghai",
  }).format(date);
}

function formatTimeLabel(timestamp: string): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    timeZone: "Asia/Shanghai",
  }).format(new Date(timestamp));
}

export async function getFeaturedEventSnapshot(): Promise<EventSnapshot> {
  const [featuredEvent] = await findMacroEvents({ importance: 5 });

  if (!featuredEvent) {
    throw new Error("Calendar data is unavailable.");
  }

  return {
    forecast: featuredEvent.forecast,
    importance: 5,
    relativeDateLabel: formatRelativeDateLabel(featuredEvent.eventDate),
    summary: featuredEvent.aiAnalysis,
    timeLabel: formatTimeLabel(featuredEvent.eventDate),
    title: featuredEvent.eventName,
  };
}

export async function getCalendarPageData(): Promise<CalendarPageData> {
  const events = await findMacroEvents({ importance: 5 });
  const featuredEvent = events[0];

  if (!featuredEvent) {
    throw new Error("Calendar data is unavailable.");
  }

  return {
    events: events.map((event) => {
      const metadata = getEventMetadata(event.eventName);

      return {
        affectedAssets: metadata.affectedAssets,
        dateLabel: formatRelativeDateLabel(event.eventDate),
        historicalImpact: metadata.historicalImpact,
        id: event.id,
        name: event.eventName,
        previous: event.previous,
        summary: event.aiAnalysis,
        timeLabel: formatTimeLabel(event.eventDate),
        forecast: event.forecast,
      };
    }),
    featuredEvent: {
      ...getEventMetadata(featuredEvent.eventName),
      dateLabel: formatRelativeDateLabel(featuredEvent.eventDate),
      forecast: featuredEvent.forecast,
      historicalImpact: getEventMetadata(featuredEvent.eventName).historicalImpact,
      id: featuredEvent.id,
      name: featuredEvent.eventName,
      previous: featuredEvent.previous,
      summary: featuredEvent.aiAnalysis,
      timeLabel: formatTimeLabel(featuredEvent.eventDate),
    },
    heroSummary: "本页只保留真正会改变市场预期的五星事件，让用户把注意力集中在少数关键数据，而不是整天追着日历跑。",
    updatedAt: featuredEvent.createdAt,
  };
}

export async function listCalendarEvents(range: "today" | "week" | "month" = "week", importance = 5) {
  const rangeStart = getRangeStart(range);
  const rangeEnd =
    range === "today"
      ? new Date(rangeStart.getTime() + 24 * 60 * 60 * 1000).toISOString()
      : range === "week"
        ? new Date(rangeStart.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()
        : new Date(Date.UTC(rangeStart.getUTCFullYear(), rangeStart.getUTCMonth() + 1, 1)).toISOString();

  const records = await findMacroEvents({
    importance,
    range,
    rangeEnd,
    rangeStart: rangeStart.toISOString(),
  });

  return records.map((record) => ({
    date: record.eventDate.slice(0, 10),
    event: record.eventName,
    forecast: record.forecast,
    id: record.id,
    importance: record.importance,
    previous: record.previous,
  }));
}

export async function getCalendarEventDetail(id: string) {
  const event = await findMacroEventById(id);

  if (!event) {
    throw new ApiRouteError("Resource Not Found", 404);
  }

  const metadata = getEventMetadata(event.eventName);

  return {
    actual: event.actual,
    affectedAssets: metadata.affectedAssets,
    aiAnalysis: event.aiAnalysis,
    event: event.eventName,
    forecast: event.forecast,
    historicalImpact: metadata.historicalImpact,
    id: event.id,
    previous: event.previous,
    status: event.status,
    time: event.eventDate,
  };
}
