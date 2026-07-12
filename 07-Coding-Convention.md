# Signal Macro
# Coding Convention
Version: V1.0

---

# 1. Philosophy

代码应该做到：

- Simple
- Readable
- Maintainable
- Predictable
- Type Safe

优先级：

Correctness > Readability > Performance > Cleverness

禁止炫技代码。

---

# 2. General Rules

✅ TypeScript Strict

✅ Functional Component

✅ Composition First

✅ Server Component First

❌ Class Component

❌ Any

❌ Magic Number

❌ Hard Code

❌ Duplicate Code

---

# 3. Naming Convention

## Files

```
signal-score.tsx
fed-card.tsx
calendar-card.tsx
bitcoin-card.tsx
```

全部使用：

kebab-case

---

## Component

```
SignalScore
FedCard
BitcoinCard
```

PascalCase

---

## Hook

```
useFed()

useBitcoin()

useCalendar()
```

---

## Function

```
getFedRate()

calculateSignalScore()

formatPercentage()
```

camelCase

---

## Variable

```
currentRate

signalScore

marketBias
```

camelCase

---

## Constant

```
MAX_SCORE

CACHE_TIME

DEFAULT_THEME
```

UPPER_CASE

---

## Type

```
FedRate

BitcoinData

SignalSummary
```

PascalCase

---

## Enum

```
MarketBias

EventImportance

FedAction
```

---

# 4. Folder Convention

```
feature/

components/

hooks/

services/

types/

utils/

constants/
```

禁止：

```
misc

common

temp

new

test2
```

---

# 5. Component Rules

每个组件：

只做一件事情。

长度：

建议

<100 行

最大：

200 行

超过必须拆分。

---

禁止：

```
Dashboard.tsx

1200 lines
```

---

推荐：

```
Dashboard

Hero

SignalScore

FedCard

BitcoinCard

SummaryCard
```

---

# 6. Props

必须：

Type Interface

```
interface SignalScoreProps {

score:number

bias:MarketBias

}
```

禁止：

```
props:any
```

---

# 7. State

优先级：

Server Data

↓

Props

↓

Local State

↓

Global State

禁止：

所有东西放 Zustand。

---

# 8. Function Rules

函数：

只完成一个动作。

建议：

20 行以内。

最大：

50 行。

超过：

拆分。

---

例如：

错误：

```
calculateEverything()
```

正确：

```
calculateScore()

calculateConfidence()

calculateTrend()
```

---

# 9. API

禁止：

组件直接 fetch。

必须：

```
service

↓

hook

↓

component
```

例如：

```
services/fed.service.ts

↓

hooks/useFed.ts

↓

FedCard.tsx
```

---

# 10. Service

Service：

只负责请求。

禁止：

UI Logic

禁止：

Toast

禁止：

DOM

---

# 11. Utils

Utils：

纯函数。

无副作用。

例如：

```
formatDate()

formatCurrency()

formatPercent()

getMarketColor()
```

---

# 12. Type

每个 Feature：

独立 Type。

例如：

```
fed.type.ts

bitcoin.type.ts
```

禁止：

```
types.ts

1000 lines
```

---

# 13. Import Order

```
React

↓

Third Party

↓

Internal

↓

Type

↓

Style
```

例如：

```
import Link...

import motion...

import Card...

import type...

import "./style.css"
```

---

# 14. CSS

禁止：

CSS File。

统一：

Tailwind

特殊：

CSS Variables

---

禁止：

```
style={}

!important
```

---

# 15. Tailwind

顺序：

```
Layout

Spacing

Size

Border

Background

Typography

Effect

Animation
```

例如：

```
flex

items-center

gap-4

rounded-xl

bg-card

text-lg

shadow-sm
```

---

# 16. Magic Number

禁止：

```
margin:37px
```

必须：

Constant。

---

# 17. Comments

原则：

代码解释自己。

尽量：

不用注释。

允许：

为什么。

禁止：

是什么。

错误：

```
calculate score
```

正确：

```
Fed 权重固定为30%，来源于产品策略。
```

---

# 18. Error Handling

禁止：

```
catch(e){}
```

必须：

记录。

返回。

Fallback。

---

# 19. Async

统一：

async/await

禁止：

```
then()

catch()

finally()
```

---

# 20. Null

使用：

```
Optional Chaining

Nullish Coalescing
```

禁止：

连续：

if

---

# 21. Boolean

命名：

```
isLoading

isDark

hasError

canRetry

shouldRefresh
```

---

# 22. Date

统一：

dayjs

UTC

ISO8601

禁止：

```
new Date().toLocaleString()
```

---

# 23. Number

统一：

```
formatCurrency()

formatPercent()

formatPrice()

formatRate()
```

禁止：

组件里面：

```
toFixed()
```

---

# 24. Error Component

统一：

```
<ErrorState />
```

禁止：

每个页面：

自己写。

---

# 25. Loading

统一：

```
<Skeleton />
```

禁止：

```
Loading...
```

---

# 26. Empty

统一：

```
<EmptyState />
```

---

# 27. Accessibility

Button

必须：

aria-label

Image

必须：

alt

Input

必须：

label

---

# 28. Git Commit

Conventional Commit

```
feat:

fix:

refactor:

style:

docs:

perf:

test:

build:
```

例如：

```
feat: add signal score card

fix: correct fedwatch cache

refactor: split dashboard layout
```

---

# 29. Branch

```
main

develop

feature/dashboard

feature/fed

feature/calendar

feature/bitcoin

hotfix/*
```

---

# 30. Pull Request

必须：

- Build Success
- Lint Success
- Type Check Success
- Responsive Check
- Dark Mode Check

---

# 31. Definition of Done

一个功能完成：

✅ Type Safe

✅ No Any

✅ No Console

✅ No Warning

✅ No ESLint Error

✅ Reusable

✅ Responsive

✅ Dark Mode

✅ Accessible

✅ Performance OK

---

# 32. Forbidden

禁止：

❌ any

❌ console.log

❌ TODO

❌ FIXME

❌ Dead Code

❌ Duplicate Logic

❌ Hard Code

❌ Nested Ternary

❌ Deep Props

❌ Inline Fetch

❌ Large Component

❌ Inline Style

---

# 33. AI Code Generation Rules（Codex 必须遵守）

所有 AI 生成代码必须满足：

1. 默认使用 Server Component。
2. 默认使用 TypeScript Strict。
3. 默认使用 shadcn/ui。
4. 默认使用 TailwindCSS，不生成 CSS 文件。
5. 一个组件只负责一个功能。
6. 不允许超过 200 行代码。
7. 所有接口必须定义 Type。
8. 所有 API 请求必须通过 `services/`。
9. 所有格式化逻辑必须通过 `utils/`。
10. 所有页面必须符合 Apple Design Language。
11. 不生成废弃代码、占位代码或未使用变量。
12. 优先可维护性，而不是最短代码。

---

# 34. Project Standards

Signal Macro 的代码应达到以下标准：

- Vercel 官方 Demo 级别的代码质量
- shadcn/ui 官方示例级别的组件规范
- Next.js App Router 最佳实践
- Apple 风格的 UI 实现
- 企业级可维护性
- AI 可持续生成与扩展