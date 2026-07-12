import { AiSummary } from "@/components/shared/ai-summary";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { EventSnapshot } from "@/features/dashboard/types/dashboard.type";

interface TodayEventCardProps {
  event: EventSnapshot;
}

export function TodayEventCard({ event }: TodayEventCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--text-tertiary)]">
            Today&apos;s Event
          </p>
          <h2 className="text-[32px] font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
            {event.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[20px] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">When</p>
            <p className="mt-3 font-mono text-[24px] font-medium text-[color:var(--text-primary)]">
              {event.timeLabel}
            </p>
            <p className="mt-2 text-[15px] text-[color:var(--text-secondary)]">{event.relativeDateLabel}</p>
          </div>
          <div className="rounded-[20px] bg-[color:var(--surface-muted)] p-5">
            <p className="text-[13px] text-[color:var(--text-tertiary)]">Forecast</p>
            <p className="mt-3 font-mono text-[24px] font-medium text-[color:var(--text-primary)]">
              {event.forecast}
            </p>
            <div className="mt-2">
              <Badge tone="warning">★★★★★</Badge>
            </div>
          </div>
        </div>
      </div>

      <AiSummary summary={event.summary} />
    </Card>
  );
}
