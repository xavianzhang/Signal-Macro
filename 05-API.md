# Signal Macro
# API Specification
Version: V1.0

---

# API Design Principles

- RESTful API
- JSON Only
- Read Only (MVP)
- UTC Time
- Versioned
- Stateless
- Cache Friendly

Base URL

/api/v1

---

# Response Format

Success

```json
{
  "success": true,
  "data": {},
  "timestamp": "2026-07-12T08:00:00Z"
}
```

Error

```json
{
  "success": false,
  "message": "Resource Not Found",
  "code": 404
}
```

---

# Dashboard

GET

/api/v1/dashboard

Description

首页所有数据

Response

```json
{
  "signal": {},
  "summary": {},
  "fed": {},
  "calendar": {},
  "bitcoin": {}
}
```

Cache

10 Minutes

---

# Signal Score

GET

/api/v1/signal

Response

```json
{
  "score": 82,
  "bias": "bullish",
  "confidence": 91,
  "summary": "ETF持续流入，市场整体偏多。"
}
```

---

# Federal Reserve

GET

/api/v1/fed/current

Response

```json
{
  "rate":"3.50-3.75",
  "nextMeeting":"2026-07-29",
  "daysRemaining":17
}
```

---

GET

/api/v1/fed/history

Query

year

Example

```
/api/v1/fed/history?year=2026
```

Response

```json
[
  {
    "date":"2026-06-17",
    "action":"hold",
    "bp":0,
    "rate":"3.50-3.75"
  }
]
```

---

GET

/api/v1/fed/fedwatch

Response

```json
{
  "meeting":"2026-07-29",
  "hold":66.3,
  "cut":0,
  "hike":33.7
}
```

Cache

1 Hour

---

# Calendar

GET

/api/v1/calendar

Query

today

week

month

importance

Example

```
/api/v1/calendar?range=week
```

Response

```json
[
  {
    "event":"US CPI",
    "date":"2026-07-15",
    "forecast":"2.7%",
    "previous":"2.8%",
    "importance":5
  }
]
```

---

GET

/api/v1/calendar/:id

返回事件详情。

包含：

- Forecast
- Previous
- Actual
- AI Analysis

---

# Bitcoin

GET

/api/v1/bitcoin

Response

```json
{
  "price":128320,
  "change24h":2.41,
  "dominance":63.2,
  "funding":0.012,
  "fearGreed":68
}
```

---

GET

/api/v1/bitcoin/etf

Response

```json
{
  "today":453000000,
  "week":2810000000,
  "month":8100000000
}
```

---

# Knowledge

GET

/api/v1/knowledge

Query

category

search

page

limit

Example

```
/api/v1/knowledge?category=macro
```

---

GET

/api/v1/knowledge/:slug

Example

```
/api/v1/knowledge/what-is-cpi
```

Response

```json
{
  "title":"什么是 CPI",
  "summary":"CPI 是衡量通胀的重要指标。",
  "content":"..."
}
```

---

# AI Summary

GET

/api/v1/summary

Response

```json
{
  "summary":"ETF连续流入，美元指数下跌，整体市场偏多。"
}
```

---

# Health Check

GET

/api/v1/health

Response

```json
{
  "status":"ok"
}
```

---

# Cache Policy

| API | Cache |
|------|--------|
| dashboard | 10 min |
| signal | 10 min |
| fed | 1 hour |
| fedwatch | 1 hour |
| bitcoin | 1 min |
| etf | 1 hour |
| calendar | 6 hour |
| knowledge | 24 hour |

---

# HTTP Status

200

Success

400

Bad Request

401

Unauthorized（V2）

404

Not Found

429

Rate Limited

500

Internal Error

---

# Versioning

Current

```
/api/v1
```

Future

```
/api/v2
```

---

# Security

- HTTPS Only
- CORS Enabled
- Rate Limit
- Input Validation
- Zod Validation
- SQL Injection Protection

---

# MVP API List

```
GET /dashboard

GET /signal

GET /summary

GET /fed/current

GET /fed/history

GET /fed/fedwatch

GET /calendar

GET /calendar/:id

GET /bitcoin

GET /bitcoin/etf

GET /knowledge

GET /knowledge/:slug

GET /health
```

Total

13 APIs

全部只读，无登录，无写入。