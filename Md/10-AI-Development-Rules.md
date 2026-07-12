# Signal Macro
# AI Development Rules
Version: V1.0

> This document is the permanent development standard for all AI coding assistants (Codex, ChatGPT, Claude Code, Cursor, Gemini CLI).

---

# Mission

Your task is NOT to generate code.

Your task is to build a production-quality product.

Every generated file must be maintainable, reusable and scalable.

Always optimize for long-term architecture instead of short-term implementation.

---

# Project Goal

Build a modern AI Macro Dashboard.

Design Language

Apple

+

Linear

+

Vercel

Target Users

- Bitcoin Investors
- US Stock Investors
- Macro Traders

The product should feel calm, premium and minimal.

Never build a crypto exchange UI.

Never build an admin dashboard.

---

# Core Philosophy

Every line of code should follow:

Simple

↓

Readable

↓

Reusable

↓

Scalable

↓

Beautiful

If there is a conflict,

always choose readability.

---

# Before Writing Any Code

Always think first.

Before generating code ask yourself:

1.

Can this be simpler?

2.

Can this be reused?

3.

Can this become a shared component?

4.

Will another developer understand this after six months?

5.

Does this match Apple's design philosophy?

If any answer is "No",

rewrite.

---

# Architecture Rules

Always follow

```
Feature

↓

Service

↓

Hook

↓

Component

↓

UI
```

Never skip layers.

---

# Component Rules

One Component

One Responsibility

Bad

```
Dashboard.tsx

1500 Lines
```

Good

```
Dashboard

Hero

SignalScore

TodayEvent

FedCard

BitcoinCard

SummaryCard
```

Maximum

200 lines

Ideal

100 lines

---

# Server Component Rules

Default

Server Component

Only use Client Component when absolutely required.

Allowed

- Chart
- Theme Switch
- Dialog
- Search
- Animation

Everything else

Server Component.

---

# State Rules

Priority

Server Data

↓

Props

↓

Local State

↓

Global State

Never use global state for server data.

---

# API Rules

Components never fetch data.

Correct

```
API

↓

Service

↓

Hook

↓

Component
```

Wrong

```
Component

↓

fetch()
```

---

# TypeScript Rules

Strict Mode

Always.

Forbidden

```
any

unknown as any

// @ts-ignore
```

Every object

Every API

Every Props

Every Hook

must have explicit types.

---

# Naming Rules

Components

PascalCase

```
SignalScore.tsx
```

Files

kebab-case

```
signal-score.tsx
```

Hooks

```
useSignal.ts
```

Services

```
signal.service.ts
```

Types

```
signal.type.ts
```

---

# UI Rules

Always use

shadcn/ui

Never reinvent components.

Prefer composition.

Never duplicate UI.

---

# Styling Rules

TailwindCSS only.

Forbidden

- CSS Modules
- Styled Components
- Emotion
- Inline Style

Use Design Tokens only.

Never hardcode colors.

Wrong

```
text-red-500
```

Correct

```
text-danger
```

---

# Apple Design Rules

Every page must satisfy:

One visual focus.

Large whitespace.

Rounded cards.

Calm colors.

Readable typography.

Few borders.

Few shadows.

Smooth motion.

Never feel crowded.

Never feel like Binance.

Never feel like TradingView.

---

# Motion Rules

Animation exists only to improve clarity.

Allowed

Fade

Slide

Opacity

Scale

Forbidden

Bounce

Rotate

Flash

Infinite Animation

Particles

Confetti

---

# AI Summary Rules

Every business card ends with

AI Summary

Maximum

100 Chinese characters

Always answer

"So What?"

Example

Wrong

ETF

+430M

Correct

ETF

+430M

AI Summary

机构资金继续流入，

整体保持偏多。

---

# Card Rules

Every card has:

Title

↓

Content

↓

AI Summary

↓

Updated Time

Never place summary at top.

---

# Layout Rules

Maximum Width

1280px

Spacing

8pt Grid

Card Radius

24px

Padding

32px

---

# Chart Rules

Use ECharts only.

Style

Apple Stocks

Requirements

- Simple
- Thin Lines
- No Border
- No 3D
- No Gradient
- Maximum Two Lines

---

# Error Handling

Never silently fail.

Always provide

Fallback

Retry

Empty State

Error State

---

# Accessibility

Every page must support

Keyboard

Screen Reader

Dark Mode

Reduced Motion

44px Touch Target

AA Contrast

---

# Performance Rules

Lighthouse

95+

No unnecessary re-render.

Use memo only when needed.

Use lazy loading.

Optimize images.

Use streaming.

Use suspense.

---

# Security Rules

Never expose

API Keys

Database Credentials

Secrets

Never trust client input.

Always validate.

Always sanitize.

---

# Database Rules

Never query directly inside UI.

Always use service layer.

Avoid complex joins.

Prefer indexed queries.

---

# Code Review Checklist

Before completing any task verify:

✅ No any

✅ No duplicate code

✅ No console.log

✅ No TODO

✅ No unused import

✅ No dead code

✅ Responsive

✅ Dark Mode

✅ Accessible

✅ Type Safe

✅ Performance OK

---

# Refactoring Rules

When improving existing code:

Never rewrite everything.

Keep public API stable.

Reduce complexity.

Increase readability.

Avoid breaking changes.

---

# Documentation Rules

Every exported function must have documentation.

Every feature folder must include

README.md

Every API must have examples.

---

# Git Rules

Commit Style

```
feat:

fix:

refactor:

docs:

style:

perf:

test:

build:
```

Never commit broken code.

---

# When Requirements Are Unclear

Do NOT guess.

Choose the simplest implementation.

Leave extension points.

Avoid overengineering.

---

# Golden Rule

Signal Macro is **not** a data website.

Signal Macro is an AI decision assistant.

Every screen should answer only three questions:

1.

What happened?

2.

Why does it matter?

3.

What should the user pay attention to next?

If a feature cannot answer one of these questions,

it probably should not exist.

---

# Final Standard

The generated project should be comparable to the engineering quality of:

- Vercel
- shadcn/ui
- Linear
- Raycast
- Apple

Every commit should make the project:

Cleaner

Simpler

More reusable

More beautiful

Never just "work".

Always feel production-ready.