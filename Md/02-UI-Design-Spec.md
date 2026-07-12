# Signal Macro
# UI Design Specification
Version: V1.0
Design Language: Apple Human Interface + Linear + Vercel
Theme: Minimal • Elegant • Calm • Professional

---

# 1. Design Philosophy

Signal Macro 的设计目标不是像 TradingView 那样专业复杂。

也不是 CoinMarketCap 那种信息堆砌。

更不是 Bloomberg 的终端风格。

我们的目标只有一句话：

> **让复杂的宏观数据，看起来像 Apple Weather 一样简单。**

用户打开网站后：

不用思考。

不用学习。

不用寻找重点。

整个界面会主动告诉用户：

今天市场怎么样？

为什么？

需要关注什么？

---

# 2. Design Keywords

整个产品只允许围绕五个关键词设计。

• Minimal

极简。

避免视觉噪音。

---

• Calm

冷静。

金融产品不是游戏。

避免大面积高饱和颜色。

---

• Premium

高级感。

接近 Apple 官网。

大量留白。

精致排版。

---

• Focus

让用户知道：

现在最重要的是什么。

所有页面只有一个视觉中心。

---

• Human

所有金融术语都翻译成人话。

例如：

FedWatch

↓

市场认为：

66%的概率不会加息。

而不是：

Implied Probability。

---

# 3. Overall Style

参考产品：

Apple 官网

Apple Weather

Apple Stocks

Apple Wallet

Linear

Raycast

Vercel Dashboard

Stripe Dashboard

Notion

整个设计避免：

TradingView

CoinMarketCap

Binance

OKX

避免：

密集数据。

高饱和配色。

大量边框。

大量按钮。

---

# 4. Design Principles

## Principle 01

One Screen One Focus

一个屏幕。

只有一个重点。

例如：

首页。

第一眼：

Signal Score。

第二眼：

Today's Summary。

第三眼：

Today's Event。

结束。

---

## Principle 02

Content First

所有设计服务于内容。

动画只是辅助。

绝不喧宾夺主。

---

## Principle 03

No Dashboard Feeling

虽然产品本质是 Dashboard。

但是：

不能让用户觉得：

自己在使用后台。

而应该像：

Apple Stocks。

阅读体验。

---

## Principle 04

Whitespace

留白比边框重要。

边框比颜色重要。

颜色比阴影重要。

---

# 5. Color System

## Background

Primary

#F8F8F5

Secondary

#FFFFFF

Dark Mode

#0B0B0D

Card

#FFFFFF

Dark Card

#151518

Divider

#EAEAEA

Dark Divider

#27272A

---

## Text

Primary

#111111

Secondary

#666666

Tertiary

#999999

Dark

#FFFFFF

Dark Secondary

#B3B3B3

---

## Accent

Bullish

#22C55E

Bearish

#EF4444

Warning

#F59E0B

Info

#3B82F6

Neutral

#8E8E93

Apple 风格：

颜色只作为提示。

绝不用于装饰。

---

# 6. Typography

Font Family

SF Pro Display

Fallback

Inter

中文：

PingFang SC

HarmonyOS Sans

思源黑体

---

Title XL

48px

Bold

用于：

Signal Score

---

H1

36px

Semibold

---

H2

28px

Semibold

---

H3

22px

Medium

---

Body

17px

Regular

符合 Apple HIG。

---

Caption

14px

Regular

用于：

更新时间。

数据来源。

AI Summary。

---

Numbers

JetBrains Mono

用于：

价格。

利率。

ETF。

时间。

百分比。

---

# 7. Grid System

Desktop

1440px

最大宽度：

1280px

左右自动居中。

---

Grid

12 Columns

Gap

24px

Margin

48px

---

Card Radius

24px

遵循 Apple 风格。

---

Card Padding

32px

绝不小于24px。

---

# 8. Components

## Card

整个网站全部使用 Card。

Card 即页面。

不要复杂布局。

例如：

Signal Score

Federal Reserve

Calendar

Bitcoin

全部都是 Card。

---

Card Style

Background

White

Radius

24px

Border

None

Shadow

0 10px 40px rgba(0,0,0,0.04)

Hover

TranslateY

-2px

Shadow

增强。

持续时间：

200ms

---

# 9. Navigation

顶部导航。

高度：

72px

左侧：

Logo

中间：

导航

右侧：

Theme Toggle

Profile（V2）

导航：

Home

Fed

Calendar

Bitcoin

Knowledge

全部文字。

不要 Icon。

---

# 10. Homepage Layout

Hero

↓

Signal Score

↓

Today's Summary

↓

Federal Reserve

↓

Today's Event

↓

Bitcoin Snapshot

↓

AI Daily Summary

整个首页：

一个方向滚动。

不使用 Sidebar。

---

# 11. Hero

高度：

520px

背景：

渐变。

淡灰。

玻璃拟态。

中心：

Signal Score

例如：

84

Bullish

Confidence

91%

下面：

Today's Summary

今天市场整体偏多。

机构资金持续流入。

今晚关注CPI。

整个 Hero：

不出现图表。

只展示结论。

---

# 12. Signal Score Card

宽度：

100%

高度：

220px

内容：

Signal Score

84

Bullish

Confidence

91%

下面：

AI Summary。

整个网站最大的字体。

---

# 13. Federal Reserve Card

内容：

Current Rate

Next Meeting

FedWatch

Hold

Cut

Hike

下面：

一句AI总结。

例如：

市场认为：

本月继续维持利率。

属于轻微利好。

---

# 14. Calendar Card

只显示：

今天最重要事件。

例如：

Tonight

20:30

US CPI

★★★★★

Prediction

2.7%

AI：

如果低于预测：

BTC偏多。

---

# 15. Bitcoin Card

内容：

BTC Price

ETF

BTC.D

Funding

Fear

下面：

AI：

BTC仍然强于山寨。

---

# 16. AI Summary Card

整个页面最后。

宽度：

100%

背景：

浅灰。

内容：

AI自动总结。

例如：

今天市场整体偏多。

主要原因：

ETF连续流入。

美元指数回落。

BTC趋势仍然健康。

---

# 17. Motion

整体原则：

Almost Static.

参考：

Apple 官网。

动画：

极少。

---

Hover

Duration

200ms

Ease Out

Scale

1.01

---

Page

Fade

250ms

---

数字变化：

Count Up

500ms

---

Card Hover

Translate

-2px

Shadow

增强。

---

禁止：

Bounce

Rotate

Flash

复杂粒子。

---

# 18. Icons

使用：

Lucide Icons

统一：

2px Stroke

24px

禁止：

彩色图标。

禁止：

Emoji。

（Signal Score 可例外）

---

# 19. Charts

全部使用：

ECharts

风格：

Apple Stocks

特点：

大量留白。

细线。

无背景。

无边框。

浅网格。

Tooltip：

圆角。

毛玻璃。

---

# 20. Empty State

例如：

暂无数据。

展示：

简单插画。

一句话。

按钮：

Retry。

---

# 21. Loading

Skeleton。

不要：

Loading Spinner。

遵循：

Apple Skeleton。

---

# 22. Dark Mode

默认支持。

不是纯黑。

Background

#0B0B0D

Card

#151518

Border

#2A2A2D

Text

#FFFFFF

Secondary

#B0B0B5

Accent

保持一致。

---

# 23. Responsive

Desktop

≥1280

Laptop

1024

Tablet

768

Mobile

375

移动端：

Card 纵向排列。

不出现横向滚动。

---

# 24. Accessibility

对比度：

AA+

点击区域：

≥44px

支持：

Keyboard

ARIA

Screen Reader

Dark Mode

Reduced Motion

---

# 25. Design Goal

用户第一次打开网站。

应该觉得：

"不像一个交易软件。"

而像：

Apple 做的一款金融产品。

安静。

高级。

可信。

所有复杂的数据。

最终都浓缩成一句简单的话：

> 今天市场偏多（或偏空），以及为什么。
