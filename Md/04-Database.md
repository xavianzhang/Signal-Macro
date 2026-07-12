# Signal Macro
# Database Design
Version: V1.0

---

# 1. Database

Database

PostgreSQL 16+

ORM

Drizzle ORM

Timezone

UTC

Charset

UTF8

ID Strategy

UUID v7

Created At

TIMESTAMPTZ

Updated At

TIMESTAMPTZ

---

# 2. Database Structure

```

daily_signal
fed_rates
fedwatch_probability
macro_events
btc_market
btc_etf
eth_etf
knowledge_articles

```

MVP 不设计 User 表。

---

# 3. daily_signal

每日 AI 生成的市场总结。

## Fields

| Field | Type | Description |
|---------|----------|----------------|
| id | uuid | Primary Key |
| signal_date | date | 日期 |
| signal_score | integer | 0~100 |
| market_bias | varchar(20) | bullish / neutral / bearish |
| confidence | integer | 0~100 |
| summary | text | AI总结 |
| bullish_reasons | jsonb | 利多因素 |
| bearish_reasons | jsonb | 利空因素 |
| created_at | timestamptz | 创建时间 |

---

Example

```json
{
  "signal_score": 82,
  "market_bias": "bullish",
  "confidence": 91,
  "summary": "ETF持续流入，美元指数回落，市场整体偏多。",
  "bullish_reasons": [
    "BTC ETF连续流入",
    "FedWatch降息预期提高",
    "美元指数下跌"
  ],
  "bearish_reasons": [
    "今晚公布CPI"
  ]
}
```

---

# 4. fed_rates

美联储历史利率。

## Fields

| Field | Type |
|---------|------------|
| id | uuid |
| meeting_date | date |
| action | varchar(20) |
| basis_points | integer |
| rate_min | decimal(4,2) |
| rate_max | decimal(4,2) |
| statement | text |
| created_at | timestamptz |

---

Example

| meeting_date | action | bp | rate |
|-------------|---------|-----|------|
|2026-06-17|hold|0|3.50-3.75|
|2025-12-10|cut|-25|3.50-3.75|

---

# 5. fedwatch_probability

FedWatch 概率。

## Fields

| Field | Type |
|---------|------------|
| id | uuid |
| updated_at | timestamptz |
| meeting_date | date |
| hold_probability | numeric(5,2) |
| cut_probability | numeric(5,2) |
| hike_probability | numeric(5,2) |

---

Example

```json
{
  "meeting_date":"2026-07-29",
  "hold_probability":66.3,
  "cut_probability":0,
  "hike_probability":33.7
}
```

---

# 6. macro_events

宏观经济日历。

## Fields

| Field | Type |
|---------|------------|
| id | uuid |
| event_date | timestamptz |
| country | varchar(50) |
| event_name | varchar(200) |
| importance | integer |
| forecast | varchar(50) |
| previous | varchar(50) |
| actual | varchar(50) |
| status | varchar(20) |
| ai_analysis | text |
| created_at | timestamptz |

---

Importance

```
1

2

3

4

5
```

MVP 仅展示：

★★★★★

事件。

---

# 7. btc_market

BTC 市场数据。

## Fields

| Field | Type |
|---------|-----------|
| id | uuid |
| timestamp | timestamptz |
| price | numeric(18,2) |
| market_cap | bigint |
| dominance | numeric(5,2) |
| funding_rate | numeric(8,5) |
| fear_greed | integer |
| open_interest | bigint |

---

# 8. btc_etf

BTC ETF 数据。

## Fields

| Field | Type |
|---------|-----------|
| id | uuid |
| trade_date | date |
| total_inflow | bigint |
| blackrock | bigint |
| fidelity | bigint |
| ark | bigint |
| bitwise | bigint |
| grayscale | bigint |
| created_at | timestamptz |

---

# 9. eth_etf

ETH ETF 数据。

## Fields

| Field | Type |
|---------|-----------|
| id | uuid |
| trade_date | date |
| total_inflow | bigint |
| blackrock | bigint |
| fidelity | bigint |
| grayscale | bigint |
| created_at | timestamptz |

---

# 10. knowledge_articles

知识库。

## Fields

| Field | Type |
|---------|-----------|
| id | uuid |
| slug | varchar(200) |
| title | varchar(255) |
| category | varchar(100) |
| read_time | integer |
| content | text |
| ai_summary | text |
| published | boolean |
| created_at | timestamptz |

---

Categories

Macro

Federal Reserve

Bitcoin

ETF

Economics

Guide

---

# 11. Indexes

daily_signal

```
signal_date DESC
```

fed_rates

```
meeting_date DESC
```

macro_events

```
event_date DESC
```

btc_market

```
timestamp DESC
```

knowledge_articles

```
slug UNIQUE
```

---

# 12. Relationships

```
daily_signal

↓

macro_events

↓

fed_rates

↓

fedwatch_probability

↓

btc_market

↓

btc_etf

↓

eth_etf
```

全部弱关联。

禁止复杂 Join。

API 层组合数据。

---

# 13. Data Retention

Market

永久保存

Fed

永久保存

Calendar

永久保存

Knowledge

永久保存

Signal

永久保存

---

# 14. Naming Convention

Table

snake_case

Column

snake_case

Boolean

is_

Date

*_date

Timestamp

*_at

UUID

id

---

# 15. MVP Database Principles

- 不超过 8 张核心业务表
- 不做复杂外键
- 不做级联删除
- 查询优先于范式
- API 聚合数据，不依赖 SQL Join
- 每张表职责单一
- 为 AI 总结预留字段
- 所有时间统一 UTC
- 所有金额统一 USD
- 百分比统一 Decimal(5,2)

---

# 16. V2 Database Expansion

预留以下数据表：

```
users

watchlists

notifications

ai_reports

daily_news

market_sentiment

portfolio

subscriptions

api_keys

feedback

system_logs
```

这些全部不进入 MVP。