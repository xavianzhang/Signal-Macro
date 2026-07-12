import { formatUtc8Time } from "@/lib/format";

interface UpdatedTimeProps {
  value: string;
}

export function UpdatedTime({ value }: UpdatedTimeProps) {
  return <p className="text-[13px] text-[color:var(--text-tertiary)]">Updated {formatUtc8Time(value)} UTC+8</p>;
}
