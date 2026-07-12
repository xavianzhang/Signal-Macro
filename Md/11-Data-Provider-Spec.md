# Signal Macro
# Data Provider Specification
Version: V1.0

---

# Purpose

本文件定义 Signal Macro 所有数据源规范。

目标：

- Provider 可替换
- Service 不依赖第三方 API
- UI 不依赖 Provider
- 支持缓存
- 支持降级(Fallback)
- 支持未来增加多个 Provider

数据流统一为：

```
External Provider
        ↓
Provider Adapter
        ↓
Repository
        ↓
Service
        ↓
API
        ↓
UI
```

禁止：

```
UI

↓

Third Party API
```

---

# Design Principles

所有 Provider 必须遵循：

- 可替换
- 可缓存
- 可重试
- 可降级
- 可监控

禁止：

Provider 直接暴露给业务层。

---

# Provider Interface

所有 Provider 必须实现统一接口。

```ts
interface DataProvider<T> {

fetch(): Promise<T>

}
```

Repository 永远不知道：

数据来自哪里。

---

# Data Sources

Signal Macro V1 使用以下 Provider。

---

# Federal Reserve

Name

Federal Reserve

Website

https://www.federalreserve.gov

Purpose

- Current Rate
- Rate History
- FOMC
- Statement

Priority

★★★★★

Update

Only after FOMC

Cache

Permanent

Fallback

Database

Timeout

10 Seconds

Retry

3

---

# FRED

Name

Federal Reserve Economic Data

Website

https://fred.stlouisfed.org

Purpose

- DXY
- Treasury Yield
- Economic Data

Priority

★★★★★

Update

Daily

Cache

24 Hours

Fallback

Last Cache

Retry

3

---

# CME FedWatch

Name

FedWatch

Website

https://www.cmegroup.com

Purpose

- Hold Probability
- Cut Probability
- Hike Probability

Priority

★★★★★

Update

Every Hour

Cache

1 Hour

Fallback

Last Cache

Retry

3

---

# CoinGecko

Purpose

- BTC Price
- ETH Price
- Market Cap

Priority

★★★★★

Update

60 Seconds

Cache

1 Minute

Fallback

CoinMarketCap

Retry

3

---

# CoinGlass

Purpose

- Funding
- Open Interest
- Liquidation

Priority

★★★★☆

Update

5 Minutes

Cache

5 Minutes

Fallback

Database

Retry

3

---

# Alternative.me

Purpose

- Fear & Greed Index

Priority

★★★★☆

Update

Daily

Cache

24 Hours

Fallback

Last Cache

Retry

3

---

# Yahoo Finance

Purpose

- SP500
- Nasdaq
- Gold
- DXY Backup

Priority

★★★★☆

Update

5 Minutes

Cache

5 Minutes

Fallback

Database

Retry

3

---

# NewsAPI

Purpose

Macro News

Priority

★★★☆☆

Update

15 Minutes

Cache

15 Minutes

Fallback

No Data

---

# CryptoPanic

Purpose

Crypto News

Priority

★★★☆☆

Update

15 Minutes

Cache

15 Minutes

Fallback

No Data

---

# Update Frequency

| Data | Update |
|---------|------------|
| BTC Price | 60 Seconds |
| ETF | Daily |
| Fed Rate | After FOMC |
| FedWatch | Hourly |
| Calendar | Daily |
| DXY | 5 Minutes |
| Treasury | 5 Minutes |
| Fear & Greed | Daily |
| Funding | 5 Minutes |
| Open Interest | 5 Minutes |
| Knowledge | Manual |

---

# Cache Strategy

| Data | TTL |
|---------|---------|
| Dashboard | 10 min |
| Fed | Forever |
| FedWatch | 1 hour |
| Bitcoin | 1 min |
| ETF | 1 day |
| Calendar | 6 hours |
| Knowledge | 24 hours |
| AI Summary | 24 hours |

Redis 作为一级缓存。

PostgreSQL 作为长期缓存。

---

# Provider Layer

```
providers/

federal-reserve/

fred/

fedwatch/

coingecko/

coinglass/

alternative/

yahoo/

news/

cryptopanic/
```

每个 Provider 独立目录。

禁止 Provider 相互调用。

---

# Repository Layer

```
repositories/

fed.repository.ts

calendar.repository.ts

bitcoin.repository.ts

etf.repository.ts

knowledge.repository.ts

signal.repository.ts
```

Repository：

负责数据库。

不负责 HTTP。

---

# Service Layer

```
services/

fed.service.ts

calendar.service.ts

bitcoin.service.ts

signal.service.ts

knowledge.service.ts
```

Service：

唯一允许调用：

Repository

+

Provider

UI 永远不能调用 Provider。

---

# Adapter Pattern

所有第三方 API 必须实现 Adapter。

例如：

```
CoinGecko API

↓

CoinGecko Adapter

↓

Bitcoin Service
```

以后：

如果更换：

Binance API

只替换：

Adapter。

业务层不用修改。

---

# Retry Policy

默认：

3 次。

等待：

```
1s

↓

2s

↓

5s
```

指数退避。

---

# Timeout

默认：

10 Seconds

超过：

立即取消。

---

# Fallback Strategy

Priority

```
Live API

↓

Redis

↓

Database

↓

Static Data

↓

Empty State
```

绝不因为：

API 挂掉。

导致：

Dashboard 崩溃。

---

# Data Validation

所有 Provider 数据：

必须：

Zod Validation。

错误数据：

拒绝写入数据库。

---

# Data Normalization

统一：

Currency

USD

Timezone

UTC

Date

ISO8601

Percentage

0~100

Rate

Decimal

禁止：

UI 自己转换。

---

# Logging

记录：

- API 耗时
- API 错误
- Retry
- Timeout
- Cache Hit
- Cache Miss

---

# Monitoring

Health Check

每个 Provider：

必须实现：

```
isHealthy()
```

Dashboard：

可以显示：

Provider Status。

仅开发模式。

---

# Feature Flag

所有 Provider：

支持：

Enable

Disable

例如：

```
USE_COINGLASS=true

USE_YAHOO=false
```

方便切换。

---

# MVP Providers

第一版只接：

✅ Federal Reserve

✅ FedWatch

✅ CoinGecko

✅ Alternative.me

其余：

先保留接口。

暂不开发。

---

# Future Providers

V2

增加：

- Glassnode
- Arkham
- Binance
- OKX
- TradingEconomics
- Alpha Vantage
- Finnhub
- Polygon.io
- SEC EDGAR

无需修改 UI。

无需修改 Service。

只新增：

Provider Adapter。

---

# Golden Rule

Provider 永远只是数据来源。

Provider 可以随时替换。

Repository 永远负责存储。

Service 永远负责业务逻辑。

API 永远负责输出。

UI 永远负责展示。

任何一层都不能越级调用。

Signal Macro 的整个数据架构必须满足：

**Replace Provider without changing Business Logic.**