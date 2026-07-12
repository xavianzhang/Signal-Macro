CREATE TABLE IF NOT EXISTS daily_signal (
  id UUID PRIMARY KEY,
  signal_date DATE NOT NULL,
  signal_score INTEGER NOT NULL,
  market_bias VARCHAR(20) NOT NULL,
  confidence INTEGER NOT NULL,
  summary TEXT NOT NULL,
  bullish_reasons JSONB NOT NULL,
  bearish_reasons JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS fed_rates (
  id UUID PRIMARY KEY,
  meeting_date DATE NOT NULL,
  action VARCHAR(20) NOT NULL,
  basis_points INTEGER NOT NULL,
  rate_min NUMERIC(4, 2) NOT NULL,
  rate_max NUMERIC(4, 2) NOT NULL,
  statement TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS fedwatch_probability (
  id UUID PRIMARY KEY,
  updated_at TIMESTAMPTZ NOT NULL,
  meeting_date DATE NOT NULL,
  hold_probability NUMERIC(5, 2) NOT NULL,
  cut_probability NUMERIC(5, 2) NOT NULL,
  hike_probability NUMERIC(5, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS macro_events (
  id UUID PRIMARY KEY,
  event_date TIMESTAMPTZ NOT NULL,
  country VARCHAR(50) NOT NULL,
  event_name VARCHAR(200) NOT NULL,
  importance INTEGER NOT NULL,
  forecast VARCHAR(50) NOT NULL,
  previous VARCHAR(50) NOT NULL,
  actual VARCHAR(50),
  status VARCHAR(20) NOT NULL,
  ai_analysis TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS btc_market (
  id UUID PRIMARY KEY,
  timestamp TIMESTAMPTZ NOT NULL,
  price NUMERIC(18, 2) NOT NULL,
  market_cap BIGINT NOT NULL,
  dominance NUMERIC(5, 2) NOT NULL,
  funding_rate NUMERIC(8, 5) NOT NULL,
  fear_greed INTEGER NOT NULL,
  open_interest BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS btc_etf (
  id UUID PRIMARY KEY,
  trade_date DATE NOT NULL,
  total_inflow BIGINT NOT NULL,
  blackrock BIGINT NOT NULL,
  fidelity BIGINT NOT NULL,
  ark BIGINT NOT NULL,
  bitwise BIGINT NOT NULL,
  grayscale BIGINT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS eth_etf (
  id UUID PRIMARY KEY,
  trade_date DATE NOT NULL,
  total_inflow BIGINT NOT NULL,
  blackrock BIGINT NOT NULL,
  fidelity BIGINT NOT NULL,
  grayscale BIGINT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS knowledge_articles (
  id UUID PRIMARY KEY,
  slug VARCHAR(200) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  read_time INTEGER NOT NULL,
  content TEXT NOT NULL,
  ai_summary TEXT NOT NULL,
  published BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS daily_signal_signal_date_idx ON daily_signal (signal_date DESC);
CREATE INDEX IF NOT EXISTS fed_rates_meeting_date_idx ON fed_rates (meeting_date DESC);
CREATE INDEX IF NOT EXISTS macro_events_event_date_idx ON macro_events (event_date DESC);
CREATE INDEX IF NOT EXISTS btc_market_timestamp_idx ON btc_market ("timestamp" DESC);
