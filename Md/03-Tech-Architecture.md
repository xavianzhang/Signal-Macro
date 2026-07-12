# Signal Macro
# Technical Architecture
Version: V1.0

---

# 1. Architecture Overview

采用现代 Web 全栈架构，优先保证：

- 极简
- 高性能
- 易维护
- 易扩展
- AI First

Architecture

Client
↓

Next.js

↓

API Layer

↓

Service Layer

↓

Database

↓

External APIs

---

# 2. Tech Stack

## Frontend

Framework

Next.js 15

Language

TypeScript

UI

React 19

Style

TailwindCSS 4

Component

shadcn/ui

Animation

Framer Motion

Icons

Lucide

Charts

Apache ECharts

State

Zustand

Data Fetching

TanStack Query

Validation

Zod

Theme

next-themes

---

## Backend

Runtime

Node.js 22 LTS

Framework

Next.js Route Handler

ORM

Drizzle ORM

Database

PostgreSQL

Cache

Redis

Cron Jobs

Vercel Cron

Authentication

Better Auth（V2）

Storage

Cloudflare R2（V2）

Logging

Axiom

---

## AI

Provider

OpenAI

Model

GPT-5.5

用途

- Daily Summary
- Signal Analysis
- AI Explanation
- Knowledge Article
- Event Analysis

---

## Deployment

Frontend

Vercel

Backend

Vercel

Database

Supabase PostgreSQL

Cache

Upstash Redis

CDN

Cloudflare

DNS

Cloudflare

Monitoring

Vercel Analytics

---

# 3. Folder Structure

```
src/

app/

components/

features/

hooks/

lib/

services/

types/

styles/

utils/

config/

public/
```

---

# 4. Features Structure

```
features/

dashboard/

fed/

calendar/

bitcoin/

knowledge/

ai/
```

每个 Feature 独立。

禁止跨模块调用。

---

# 5. Database

Tables

users（V2）

macro_events

fed_rates

fedwatch

btc_etf

eth_etf

btc_market

market_summary

knowledge

daily_signal

---

# 6. API Structure

REST API

/api

/api/dashboard

/api/fed

/api/calendar

/api/bitcoin

/api/knowledge

/api/ai-summary

全部返回 JSON。

---

# 7. External APIs

Federal Reserve

FRED

CME FedWatch

Alternative.me

CoinGlass

CoinGecko

Yahoo Finance

NewsAPI

CryptoPanic

---

# 8. Data Update Strategy

Federal Reserve

Daily

FedWatch

Hourly

BTC Price

1 Minute

ETF

Daily

Fear & Greed

Daily

Calendar

Daily

Knowledge

Manual

AI Summary

Every Morning 08:00

---

# 9. AI Pipeline

Data Collection

↓

Normalize

↓

Generate Prompt

↓

GPT-5.5

↓

Markdown Output

↓

Store Database

↓

Render Dashboard

---

# 10. Signal Score Engine

Score

100

组成

Macro

30

Liquidity

25

Market

20

Sentiment

15

Structure

10

最终输出

Bullish

Neutral

Bearish

Confidence

0~100

---

# 11. Cache Strategy

Redis

Dashboard

10 min

Fed

1 hour

Calendar

6 hours

Knowledge

24 hours

AI Summary

24 hours

---

# 12. Error Handling

API Timeout

Retry

3 Times

Fallback

Cached Data

No Data

Empty State

---

# 13. Performance

Lighthouse

95+

CLS

<0.05

LCP

<2s

FID

<100ms

TTFB

<500ms

---

# 14. Security

HTTPS

Rate Limit

Helmet

CSP

Environment Variables

Server Only Secret

SQL Injection Protection

Zod Validation

---

# 15. SEO

Metadata API

OpenGraph

Twitter Card

JSON-LD

Sitemap

Robots

RSS

---

# 16. Responsive

Desktop

1440

Laptop

1280

Tablet

768

Mobile

390

---

# 17. Theme

Light

Dark

Auto

---

# 18. Code Standard

TypeScript Strict

ESLint

Prettier

Husky

Commitlint

Conventional Commit

---

# 19. Git Branch

main

develop

feature/*

hotfix/*

release/*

---

# 20. CI/CD

GitHub

↓

GitHub Actions

↓

Lint

↓

Type Check

↓

Build

↓

Deploy Vercel

---

# 21. Future Upgrade

Authentication

Watchlist

Notification

AI Chat

Portfolio

Email Report

Mobile App

API SDK

Webhook

---

# 22. MVP Scope

✅ Dashboard

✅ Federal Reserve

✅ Calendar

✅ Bitcoin

✅ Knowledge

✅ AI Summary

❌ Login

❌ Payment

❌ Community

❌ Trading

❌ Portfolio

---

# 23. Technical Principles

- Server Component First
- Mobile First
- AI First
- Edge First
- Type Safety
- Component Driven
- Performance First
- Simplicity First