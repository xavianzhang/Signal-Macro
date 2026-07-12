# Signal Macro
# Frontend Architecture
Version: V1.0

---

# 1. Frontend Philosophy

Signal Macro 前端遵循四个原则：

- Server First
- Component First
- Performance First
- Apple First

目标：

- 极简
- 可维护
- 可扩展
- 高性能

---

# 2. Tech Stack

Framework

Next.js 15 (App Router)

Language

TypeScript

Style

Tailwind CSS 4

UI

shadcn/ui

Animation

Framer Motion

State

Zustand

Data Fetch

TanStack Query

Icons

Lucide

Charts

Apache ECharts

Theme

next-themes

Validation

Zod

---

# 3. Folder Structure

```
src/

app/

components/

features/

hooks/

services/

stores/

types/

lib/

config/

styles/

constants/

utils/

assets/

public/
```

---

# 4. App Router

```
app/

layout.tsx

page.tsx

fed/

page.tsx

calendar/

page.tsx

bitcoin/

page.tsx

knowledge/

page.tsx
```

只有五个页面。

---

# 5. Components

分三层。

```
UI

↓

Shared

↓

Business
```

---

UI

纯展示。

例如：

```
Button

Card

Badge

Input

Dialog

Avatar

Tooltip
```

---

Shared

通用业务。

例如：

```
PageHeader

SectionTitle

LoadingCard

EmptyState

MetricCard

StatCard
```

---

Business

具体模块。

例如：

```
SignalScore

FedCard

BitcoinCard

CalendarCard

SummaryCard
```

禁止跨业务引用。

---

# 6. Features

```
dashboard

fed

calendar

bitcoin

knowledge

ai
```

每个 Feature 独立。

例如：

```
dashboard/

components/

hooks/

services/

types/

utils/
```

---

# 7. State Management

默认：

Server Component

需要交互：

Client Component

全局状态：

Zustand

例如：

```
theme

settings

layout
```

业务数据：

TanStack Query

禁止：

Redux

MobX

---

# 8. Data Flow

```
API

↓

React Query

↓

Feature

↓

Component

↓

UI
```

所有数据单向流动。

---

# 9. Server Component

默认：

全部 Server Component。

只有以下情况允许 Client：

- Chart
- Theme Switch
- Search
- Animation
- Dialog
- Dropdown

其余全部：

Server。

---

# 10. Naming Convention

Component

```
SignalScore.tsx
```

Hook

```
useFed.ts
```

Store

```
useThemeStore.ts
```

Service

```
fed.service.ts
```

Type

```
fed.type.ts
```

Constant

```
fed.constant.ts
```

---

# 11. Component Rules

每个 Component：

只负责一件事情。

禁止：

500 行组件。

建议：

100 行以内。

超过：

拆分。

---

# 12. Layout

统一：

```
Page

↓

Container

↓

Section

↓

Card

↓

Content
```

不要：

复杂 Grid。

---

# 13. Container

最大宽度：

1280px

```
mx-auto

px-6

lg:px-8
```

---

# 14. Card

统一使用：

Card

Radius

24px

Padding

32px

Shadow

Light

Hover

TranslateY

-2px

---

# 15. Spacing

采用 8pt System

```
4

8

16

24

32

40

48

64

80
```

禁止：

13px

19px

27px

等随机值。

---

# 16. Typography

Title

48

H1

36

H2

28

H3

22

Body

17

Caption

14

数字：

JetBrains Mono

---

# 17. Color

使用 Design Token。

禁止：

组件内写：

```
text-red-500
```

统一：

```
text-success

text-danger

bg-card

bg-surface
```

全部变量化。

---

# 18. Theme

支持：

Light

Dark

System

所有颜色：

CSS Variables。

禁止：

if dark。

---

# 19. Icons

Lucide

24px

2px

统一 Stroke。

---

# 20. Images

全部：

next/image

支持：

Lazy

WebP

AVIF

Blur Placeholder

---

# 21. Animation

Framer Motion

Duration

200ms

原则：

Almost Invisible

禁止：

Bounce

Rotate

Flash

---

# 22. Loading

统一：

Skeleton

禁止：

Loading...

禁止：

Spinner

---

# 23. Empty State

统一组件。

包含：

Icon

Title

Description

Action

---

# 24. Error State

统一组件。

包含：

Title

Description

Retry Button

---

# 25. Responsive

Desktop

≥1280

Laptop

1024

Tablet

768

Mobile

390

移动端：

所有 Card 纵向排列。

---

# 26. Performance

默认：

SSR

Streaming

Lazy Import

Dynamic Import

Code Split

Image Optimize

字体：

Local Font

---

# 27. Accessibility

Keyboard

ARIA

Focus Ring

44px Touch

AA Contrast

Reduced Motion

---

# 28. SEO

Metadata API

OpenGraph

Twitter Card

JSON-LD

Sitemap

Robots

Canonical

---

# 29. Code Style

ESLint

Prettier

TypeScript Strict

Import Alias

```
@/

@/components

@/features

@/lib
```

禁止：

```
../../../
```

---

# 30. Component Example

```
SignalScore

├── ScoreCircle

├── BiasBadge

├── ConfidenceBar

├── Summary

└── UpdatedTime
```

一个组件只负责一个业务。

---

# 31. Dashboard Composition

```
Dashboard

├── Hero

├── SignalScore

├── TodayEvent

├── FedCard

├── BitcoinCard

├── SummaryCard
```

所有模块可独立开发。

---

# 32. MVP Principles

- 默认 Server Component
- 默认静态页面
- 默认只读
- 默认缓存
- 默认组件化
- 默认 TypeScript Strict
- 默认 Dark Mode
- 默认响应式
- 默认无状态
- 默认可复用

---

# 33. Apple UI Principles

所有页面必须符合以下标准：

- 第一屏只有一个视觉焦点
- 每张 Card 都有充足留白
- 不超过 3 种强调色
- 不超过 2 层阴影
- 不出现密集边框
- 不出现复杂表格
- 不出现信息墙
- 所有 AI 总结控制在 100 字以内
- 用户 30 秒内能读完一个页面
- 用户 3 分钟内能完成当天市场分析

---

# 34. Definition of Done

一个页面开发完成，必须满足：

- Pixel Perfect
- 响应式正常
- 深色模式正常
- Lighthouse ≥95
- 无 TypeScript Error
- 无 ESLint Warning
- 可复用
- 可维护
- 动画流畅
- Apple 风格一致