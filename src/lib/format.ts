const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

const percentageFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
  minimumFractionDigits: 0,
});

const smallPercentageFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 3,
  minimumFractionDigits: 3,
});

export function formatUsdCompact(value: number): string {
  if (value >= 1_000_000_000) {
    return `${currencyFormatter.format(value / 1_000_000_000)}B`;
  }

  if (value >= 1_000_000) {
    return `${currencyFormatter.format(value / 1_000_000)}M`;
  }

  return currencyFormatter.format(value);
}

export function formatPercent(value: number): string {
  return `${percentageFormatter.format(value)}%`;
}

export function formatSmallPercent(value: number): string {
  return `${smallPercentageFormatter.format(value)}%`;
}

export function formatSignedPercent(value: number): string {
  const sign = value > 0 ? "+" : "";

  return `${sign}${formatPercent(value)}`;
}

export function formatUtc8Time(timestamp: string): string {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    month: "short",
    timeZone: "Asia/Shanghai",
  }).format(new Date(timestamp));
}
