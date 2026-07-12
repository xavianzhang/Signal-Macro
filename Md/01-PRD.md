# Signal Macro
# Product Requirements Document (PRD)
Version: V1.0
Author: ChatGPT
Status: Draft
Target Release: MVP V1.0

---

# 1. 产品概述（Overview）

## 1.1 产品名称

Signal Macro

Slogan

> 每天 3 分钟，看懂全球宏观，做好 BTC 与美股交易。

---

## 1.2 产品定位

Signal Macro 是一个专为 BTC、美股投资者打造的 AI 宏观分析平台。

它不是：

- 新闻网站
- 行情软件
- TradingView
- Bloomberg

它更像一个：

> 每天帮用户分析市场的 AI 研究员。

用户打开网站后，不需要阅读几十条新闻，也不需要自己分析各种数据。

Signal Macro 会自动告诉用户：

今天市场为什么涨？

今天市场为什么跌？

今天需要重点关注什么？

今天应该关注哪些风险？

一句话总结就是：

> 把复杂的宏观数据，变成可以直接理解、直接交易的信息。

---

# 2. 产品愿景（Vision）

希望未来成为所有 BTC、美股投资者每天打开的第一个网站。

用户每天只需要花费 3 分钟。

即可了解：

- 今天市场发生了什么
- 为什么发生
- 接下来需要关注什么

而不是阅读几十篇新闻。

---

# 3. 产品原则（Design Philosophy）

整个产品遵循五个原则。

---

## Principle 01

Less is More

页面尽可能简单。

宁可少展示一个数据。

也不要增加用户理解成本。

---

## Principle 02

Explain WHY

所有数据必须回答：

为什么？

例如：

错误：

FedWatch
Hold 66%

正确：

FedWatch
Hold 66%

AI总结：

市场对于加息担忧下降，
因此风险资产压力减轻。

---

## Principle 03

Actionable

所有页面必须回答：

So What？

例如：

CPI

错误：

预测 2.7%

正确：

如果公布低于2.7%

BTC偏多

如果公布高于2.7%

BTC偏空

---

## Principle 04

No Noise

拒绝信息轰炸。

首页不允许出现：

几十个图表

几十个指标

几十条新闻

每一个模块必须控制在：

30 秒内阅读完成。

---

## Principle 05

AI First

AI 不是聊天机器人。

AI 是整个产品的核心。

每一个页面都有 AI Summary。

用户可以完全不看数据。

只阅读 AI Summary。

---

# 4. 用户画像（Target Users）

## 核心用户

年龄：

20-45岁

地区：

全球华语用户（第一阶段）

投资方向：

BTC

ETH

Crypto

美股

ETF

黄金

---

### 用户特点

每天都会看：

TradingView

币安

OKX

X

Telegram

但是：

不知道哪些信息重要。

每天阅读大量内容。

仍然不知道：

今天应该看多还是看空。

---

### 用户痛点

不知道：

为什么BTC上涨。

不知道：

为什么BTC下跌。

不知道：

今晚哪些数据重要。

不知道：

美联储到底影响什么。

不知道：

新闻是否已经被市场消化。

---

### 用户目标

希望每天：

三分钟内完成市场分析。

而不是：

阅读几十篇新闻。

---

# 5. MVP目标（Minimum Viable Product）

V1 不追求功能丰富。

只解决一个问题：

> 今天市场应该怎么看？

因此：

整个 MVP 只有五个页面。

---

# 6. 网站结构（Information Architecture）

```
Home

Fed

Calendar

Bitcoin

Knowledge
```

只有五个入口。

不增加任何二级菜单。

保持极简。

---

# 7. 页面设计

---

# 7.1 Home

首页。

也是整个产品最重要的页面。

用户每天打开一次。

阅读时间：

60 秒以内。

---

首页包含五个模块。

---

① 今日市场信号

例如：

Market Score

78 /100

Bullish

更新时间

08:00 UTC+8

下面：

AI Summary

今天整体偏多。

主要原因：

ETF持续流入。

美元指数走弱。

Fed维持利率概率提升。

今晚关注CPI。

---

② Today's Events

只展示今天最重要事件。

例如：

今晚

20:30

美国 CPI

预测

2.7%

重要等级：

★★★★★

下面：

AI告诉用户：

如果公布低于预测：

BTC偏多。

如果公布高于预测：

BTC偏空。

---

③ Fed Snapshot

显示：

当前利率

下一次会议

FedWatch

例如：

Current Rate

3.50~3.75%

Next Meeting

16 Days

Hold

66%

Cut

30%

Hike

4%

AI Summary：

市场目前仍然认为：

本月维持利率可能性最高。

---

④ BTC Snapshot

展示：

BTC Price

ETF

Funding

BTC.D

AI Summary：

机构资金持续流入。

BTC仍然强于山寨。

---

⑤ Daily Summary

AI自动生成。

例如：

今天市场整体偏多。

今晚重点关注CPI。

若数据低于预期，

BTC可能继续上涨。

---

# 7.2 Fed

专门介绍：

美联储。

不是百科。

而是：

交易视角。

页面包括：

当前利率

FedWatch

历史加息降息

下一次会议

AI总结

历史时间轴

---

# 7.3 Calendar

宏观经济日历。

只保留：

真正重要的数据。

例如：

CPI

PPI

PCE

NFP

FOMC

GDP

失业率

其他全部隐藏。

默认只显示：

五星事件。

---

点击进入：

可以看到：

预测值

前值

公布时间

影响资产

历史影响

AI解释

---

# 7.4 Bitcoin

BTC页面。

展示：

BTC价格

BTC ETF

Funding

BTC Dominance

Fear & Greed

AI总结：

今天BTC整体强弱。

---

# 7.5 Knowledge

知识库。

帮助新手。

例如：

什么是：

CPI

PPI

PCE

NFP

Fed

DXY

BTC.D

Funding

每篇文章：

阅读时间：

3分钟以内。

拒绝长篇大论。

---

# 8. AI 功能设计

AI 是整个网站最大的特色。

不是聊天。

而是解释。

每个页面底部：

必须有：

AI Summary。

长度：

100字以内。

例如：

今天：

美元指数继续下跌，

BTC ETF持续流入，

整体市场风险偏好提升。

今晚重点关注CPI。

---

# 9. 产品风格

整个产品只有两个关键词：

极简。

专业。

所有内容：

一句话说明白。

避免金融黑话。

复杂概念：

自动转换成人话。

例如：

FedWatch

↓

市场认为：

本月66%的概率不会加息。

而不是：

Current implied probability.

---

# 10. MVP 不做什么

第一版明确不做：

❌ 登录

❌ 社区

❌ 评论

❌ 发帖

❌ AI聊天机器人

❌ 行情K线

❌ 自定义看板

❌ 用户收藏

❌ 推送通知

❌ 策略回测

❌ 多语言

❌ APP

❌ 高频数据

专注做好：

每天三分钟宏观分析。

---

# 11. 成功标准（Success Metrics）

用户打开首页。

60秒内。

可以回答下面三个问题：

① 今天市场偏多还是偏空？

② 为什么？

③ 今天最需要关注什么？

如果用户能够回答。

说明产品成功。

否则。

继续删减功能。

---

# 12. V2 规划（Roadmap）

当 MVP 验证成功后，再逐步增加：

V1.1

- ETF详情
- DXY详情
- 美债收益率

V1.2

- AI日报
- AI周报
- 邮件订阅

V1.5

- 登录
- 收藏
- 自定义首页

V2.0

- AI交易助手
- 多资产分析
- AI研究报告
- 宏观评分历史
- 市场回测

---

# 13. 产品核心价值（一句话）

Signal Macro 不提供更多数据。

Signal Macro 只提供真正重要的信息。

帮助投资者每天花 3 分钟理解市场，而不是花 3 小时阅读新闻。
