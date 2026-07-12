<div align="center">

# 🚀 Signal Macro

### AI Macro Intelligence for Bitcoin & US Stocks

每天 3 分钟，看懂全球宏观，做好 BTC 与美股交易。

---

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-149ECA)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--5.5-10A37F)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

# Overview

Signal Macro 是一个 AI 驱动的宏观分析平台。

它不会告诉用户大量复杂的数据。

而是回答三个问题：

- 今天市场偏多还是偏空？
- 为什么？
- 今天最值得关注什么？

目标用户：

- Bitcoin 投资者
- 美股投资者
- ETF 投资者
- 宏观交易员
- 加密货币交易者

---

# Preview

Dashboard

```
────────────────────────────────────────────

🟢 SIGNAL SCORE

82 /100

Bullish

Confidence 91%

────────────────────────────────────────────

Today's Summary

ETF 持续流入

美元指数走弱

今晚关注 CPI

────────────────────────────────────────────

Federal Reserve

Current Rate

3.50~3.75%

Hold

66%

────────────────────────────────────────────

Today's Event

US CPI

20:30

★★★★★

────────────────────────────────────────────

Bitcoin

BTC ETF

BTC.D

Funding

Fear & Greed

────────────────────────────────────────────
```

---

# Features

## Dashboard

每天最重要的信息。

- Signal Score
- AI Summary
- Today's Event
- Federal Reserve
- Bitcoin Snapshot

---

## Federal Reserve

- Current Rate
- History
- FedWatch
- Next Meeting
- AI Explanation

---

## Economic Calendar

仅展示真正重要的数据：

- CPI
- PPI
- PCE
- NFP
- FOMC
- GDP
- Unemployment

---

## Bitcoin

- BTC Price
- ETF Flow
- BTC Dominance
- Funding
- Fear & Greed

---

## Knowledge

3 分钟读懂：

- CPI
- PPI
- PCE
- Fed
- DXY
- ETF
- BTC.D

---

# Design Philosophy

Signal Macro 不做：

❌ 新闻网站

❌ TradingView

❌ Bloomberg

Signal Macro 做的是：

> 将复杂的宏观数据转换成可执行的交易信息。

---

# Tech Stack

## Frontend

- Next.js 15
- React 19
- TypeScript
- TailwindCSS 4
- shadcn/ui
- Framer Motion
- Zustand
- TanStack Query
- ECharts

---

## Backend

- Next.js Route Handler
- PostgreSQL
- Drizzle ORM
- Redis

---

## AI

- OpenAI GPT-5.5
- Responses API

---

## Infrastructure

- Docker
- Docker Compose
- Nginx
- Cloudflare
- Ubuntu
- GitHub

---

# Project Structure

```
signal-macro/

src/

app/

components/

features/

hooks/

services/

stores/

lib/

types/

utils/

config/

public/

docker/

nginx/

scripts/

docs/
```

---

# Quick Start

Clone

```bash
git clone https://github.com/your-name/signal-macro.git
```

Enter

```bash
cd signal-macro
```

Install

```bash
pnpm install
```

Environment

```bash
cp .env.example .env
```

Run

```bash
pnpm dev
```

Open

```
http://localhost:3000
```

---

# Docker

Build

```bash
docker compose up -d
```

Stop

```bash
docker compose down
```

Restart

```bash
docker compose restart
```

Logs

```bash
docker compose logs -f
```

---

# Environment Variables

```env
NODE_ENV=development

DATABASE_URL=

REDIS_URL=

OPENAI_API_KEY=

NEXT_PUBLIC_APP_URL=

TZ=Asia/Shanghai
```

---

# Scripts

Development

```bash
pnpm dev
```

Build

```bash
pnpm build
```

Start

```bash
pnpm start
```

Lint

```bash
pnpm lint
```

Type Check

```bash
pnpm typecheck
```

Format

```bash
pnpm format
```

---

# API

Dashboard

```
GET /api/v1/dashboard
```

Signal

```
GET /api/v1/signal
```

Federal Reserve

```
GET /api/v1/fed/current
```

FedWatch

```
GET /api/v1/fed/fedwatch
```

Calendar

```
GET /api/v1/calendar
```

Bitcoin

```
GET /api/v1/bitcoin
```

Knowledge

```
GET /api/v1/knowledge
```

---

# Roadmap

## V1

- Dashboard
- Federal Reserve
- Calendar
- Bitcoin
- Knowledge
- AI Summary

---

## V1.5

- ETF Detail
- DXY
- Bond Yield
- AI Daily Report

---

## V2

- User Login
- Watchlist
- Notification
- AI Chat
- Portfolio
- Email Report

---

# Performance Goals

Lighthouse

```
95+
```

LCP

```
<2s
```

CLS

```
<0.05
```

TTFB

```
<500ms
```

---

# Design Principles

- Apple Design Language
- Minimal Interface
- AI First
- Dark Mode
- Mobile First
- Performance First
- Accessibility First

---

# Contributing

欢迎提交：

- Bug Fix
- Performance Improvement
- UI Optimization
- Documentation
- Feature Proposal

---

# License

MIT License

---

# Author

Signal Macro Team

---

# Vision

Signal Macro 希望成为：

> **每天打开的第一个宏观分析网站。**

帮助投资者：

每天 3 分钟，

理解市场，

而不是阅读新闻。

---

<div align="center">

Built with ❤️ using Next.js + OpenAI

</div>