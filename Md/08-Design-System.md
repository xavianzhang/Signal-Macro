# Signal Macro
# Design System
Version: V1.0

Design Language

Apple Human Interface
+
Linear
+
Vercel

---

# 1. Design Principles

Signal Macro 的视觉设计遵循以下原则：

- Calm
- Elegant
- Premium
- Minimal
- Consistent

所有组件必须保持统一设计语言。

禁止任何页面出现新的设计风格。

---

# 2. Color Tokens

## Light

```
--background        #F7F7F5
--surface           #FFFFFF
--card              #FFFFFF

--text-primary      #111111
--text-secondary    #6B7280
--text-tertiary     #9CA3AF

--border            #E5E7EB

--success           #22C55E
--danger            #EF4444
--warning           #F59E0B
--info              #3B82F6

--neutral           #8E8E93
```

---

## Dark

```
--background        #09090B
--surface           #111113
--card              #17171A

--text-primary      #FFFFFF
--text-secondary    #B5B5BE
--text-tertiary     #81818A

--border            #2B2B30

--success           #22C55E
--danger            #EF4444
--warning           #F59E0B
--info              #60A5FA
```

---

# 3. Typography

Font

```
English

SF Pro Display

Fallback

Inter
```

```
Chinese

PingFang SC

HarmonyOS Sans

Fallback

Noto Sans SC
```

```
Numbers

JetBrains Mono
```

---

## Font Scale

| Token | Size | Weight |
|-------|------|---------|
| Display | 52 | Bold |
| H1 | 40 | Semibold |
| H2 | 32 | Semibold |
| H3 | 24 | Medium |
| H4 | 20 | Medium |
| Body | 17 | Regular |
| Small | 15 | Regular |
| Caption | 13 | Regular |

---

# 4. Radius

```
XS

8
```

```
SM

12
```

```
MD

16
```

```
LG

20
```

```
XL

24
```

```
FULL

9999
```

整个网站默认：

```
24px
```

---

# 5. Shadow

Level 1

```
0 2px 8px rgba(0,0,0,.04)
```

Level 2

```
0 10px 30px rgba(0,0,0,.06)
```

Level 3

```
0 24px 64px rgba(0,0,0,.08)
```

整个网站：

最多使用

Level 2。

---

# 6. Spacing

采用

8pt Grid

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

96

120
```

禁止使用随机数值。

---

# 7. Container

Desktop

```
1280px
```

Padding

```
32px
```

Mobile

```
20px
```

---

# 8. Card

Card 是整个产品最重要的组件。

Default

```
Radius

24px

Padding

32px

Border

1px

Shadow

Level 1
```

Hover

```
TranslateY

-2px

Shadow

Level2
```

Animation

```
200ms
```

---

# 9. Button

Primary

```
Height

44px

Radius

14px

Font

15 Medium
```

Secondary

Outline

Ghost

Danger

共四种。

禁止新增 Button 类型。

---

# 10. Badge

Success

```
Bullish
```

Danger

```
Bearish
```

Neutral

```
Neutral
```

Warning

```
Important
```

统一高度：

28px

---

# 11. Metric Card

整个网站最高频组件。

```
────────────────

Federal Rate

3.50%

+0%

────────────────
```

结构固定：

```
Title

↓

Value

↓

Description
```

---

# 12. Signal Score

网站核心组件。

```
82

Bullish

Confidence

91%
```

布局：

```
Score

↓

Bias

↓

Confidence

↓

AI Summary
```

Score：

Display Size。

Bias：

Badge。

Summary：

Caption。

---

# 13. AI Summary

所有 AI 总结统一样式。

```
AI Summary

ETF持续流入。

美元指数继续走弱。

整体市场偏多。
```

规则：

最长：

100 字。

最多：

3 行。

---

# 14. Summary Card

统一：

```
Icon

↓

Title

↓

Summary

↓

Updated Time
```

---

# 15. Calendar Event

```
US CPI

Tonight

20:30

Forecast

2.7%

★★★★★
```

重要等级：

颜色：

五星：

Warning。

其余：

Neutral。

---

# 16. Bitcoin Snapshot

```
BTC

$128,300

+2.1%

ETF

+453M

Funding

0.01%
```

布局固定。

---

# 17. Federal Card

```
Current Rate

3.50-3.75%

Hold

66%

Next Meeting

16 Days
```

下面：

AI Summary。

---

# 18. Knowledge Card

```
Title

↓

Reading Time

↓

Summary

↓

Read
```

阅读时间：

固定显示。

例如：

```
3 min
```

---

# 19. Icon Rules

统一：

Lucide。

Stroke

2。

Size

20。

禁止：

彩色 Icon。

禁止：

3D Icon。

---

# 20. Motion

Hover

200ms

Fade

250ms

Scale

1.01

禁止：

Bounce

Rotate

Shake

Flash

---

# 21. Charts

统一：

ECharts。

风格：

Apple Stocks。

规则：

- 白色背景
- 无边框
- 无渐变
- 无3D
- 不超过2条线
- 不超过5种颜色
- Tooltip 毛玻璃

---

# 22. Divider

```
1px

#E5E7EB
```

Dark

```
#2B2B30
```

---

# 23. Skeleton

统一：

Card Skeleton。

禁止：

Loading Spinner。

---

# 24. Empty State

```
Icon

↓

Title

↓

Description

↓

Retry
```

---

# 25. Error State

统一：

```
Icon

↓

Title

↓

Description

↓

Retry
```

---

# 26. Animation Rules

页面：

Fade

Card：

Slide Up

数字：

Count Up

禁止：

复杂动画。

---

# 27. Responsive Rules

Desktop

2~3 Columns

Tablet

2 Columns

Mobile

1 Column

禁止：

横向滚动。

---

# 28. Accessibility

Contrast

AA

Touch

44px

Keyboard

Support

ARIA

Support

---

# 29. Component Library

V1 组件：

```
Button

Card

Badge

MetricCard

SignalScore

FedCard

BitcoinCard

CalendarCard

SummaryCard

KnowledgeCard

Skeleton

EmptyState

ErrorState

PageHeader

SectionHeader

Divider
```

禁止组件重复开发。

---

# 30. Design Rules

整个产品必须遵守：

- 一个页面只有一个视觉焦点
- 一个 Card 只表达一个主题
- AI Summary 永远放在 Card 底部
- 不出现超过三层信息层级
- 不出现信息墙
- 不出现复杂金融终端布局
- 所有页面都应具有 Apple 产品的留白感
- 所有设计优先可读性，而非炫技

---

# 31. Golden Rule

如果一个新组件无法在 **30 秒内让用户理解**，

则重新设计。

如果一个页面需要滚动很多次才能获取关键信息，

则重新设计。

Signal Macro 的设计目标不是展示更多数据，

而是帮助用户更快做出判断。