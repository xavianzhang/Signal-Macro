import type {
  BtcEtfRecord,
  BtcMarketRecord,
  DailySignalRecord,
  EthEtfRecord,
  FedRateRecord,
  FedwatchProbabilityRecord,
  KnowledgeArticleRecord,
  MacroEventRecord,
} from "@/db/schema";

export const dailySignalSeed: DailySignalRecord[] = [
  {
    bearishReasons: ["今晚公布 CPI，若高于预期将压制风险资产情绪。"],
    bullishReasons: ["BTC ETF 持续流入", "FedWatch 维持利率概率提升", "美元指数回落"],
    confidence: 91,
    createdAt: "2026-07-12T00:00:00Z",
    id: "0197f2d0-1000-7000-8000-000000000001",
    marketBias: "bullish",
    signalDate: "2026-07-12",
    signalScore: 82,
    summary: "ETF 资金继续流入，美元走弱叠加利率预期稳定，风险资产环境仍偏友好，但今晚 CPI 仍是短线扰动点。",
  },
];

export const fedRatesSeed: FedRateRecord[] = [
  {
    action: "hold",
    basisPoints: 0,
    createdAt: "2026-06-17T18:00:00Z",
    id: "0197f2d0-2000-7000-8000-000000000001",
    meetingDate: "2026-06-17",
    rateMax: "3.75",
    rateMin: "3.50",
    statement: "美联储按兵不动，市场解读为政策仍在继续观察通胀回落速度。",
  },
  {
    action: "cut",
    basisPoints: -25,
    createdAt: "2026-03-18T18:00:00Z",
    id: "0197f2d0-2000-7000-8000-000000000002",
    meetingDate: "2026-03-18",
    rateMax: "3.75",
    rateMin: "3.50",
    statement: "降息释放流动性改善信号，风险资产估值压力缓解。",
  },
  {
    action: "cut",
    basisPoints: -25,
    createdAt: "2025-12-10T18:00:00Z",
    id: "0197f2d0-2000-7000-8000-000000000003",
    meetingDate: "2025-12-10",
    rateMax: "4.00",
    rateMin: "3.75",
    statement: "连续宽松预期开始重建，市场逐步回到成长资产。",
  },
];

export const fedwatchProbabilitySeed: FedwatchProbabilityRecord[] = [
  {
    cutProbability: "30.00",
    hikeProbability: "3.70",
    holdProbability: "66.30",
    id: "0197f2d0-3000-7000-8000-000000000001",
    meetingDate: "2026-07-29",
    updatedAt: "2026-07-12T00:00:00Z",
  },
];

export const macroEventsSeed: MacroEventRecord[] = [
  {
    actual: null,
    aiAnalysis: "若低于 2.7%，降息预期会进一步升温，BTC 与高估值科技股更容易延续反弹；若高于预期，短线需防回撤。",
    country: "United States",
    createdAt: "2026-07-12T00:00:00Z",
    eventDate: "2026-07-12T12:30:00Z",
    eventName: "US CPI",
    forecast: "2.7%",
    id: "0197f2d0-4000-7000-8000-000000000001",
    importance: 5,
    previous: "2.8%",
    status: "upcoming",
  },
  {
    actual: null,
    aiAnalysis: "PPI 通常被视作 CPI 的前瞻线索，若继续回落，通胀缓和逻辑更稳固。",
    country: "United States",
    createdAt: "2026-07-12T00:00:00Z",
    eventDate: "2026-07-14T12:30:00Z",
    eventName: "US PPI",
    forecast: "2.4%",
    id: "0197f2d0-4000-7000-8000-000000000002",
    importance: 5,
    previous: "2.5%",
    status: "upcoming",
  },
  {
    actual: null,
    aiAnalysis: "本次会议重点仍是措辞与点阵图是否更偏鸽，而不是单纯是否按兵不动。",
    country: "United States",
    createdAt: "2026-07-12T00:00:00Z",
    eventDate: "2026-07-29T18:00:00Z",
    eventName: "FOMC Rate Decision",
    forecast: "Hold",
    id: "0197f2d0-4000-7000-8000-000000000003",
    importance: 5,
    previous: "Hold",
    status: "upcoming",
  },
];

export const btcMarketSeed: BtcMarketRecord[] = [
  {
    dominance: "61.72",
    fearGreed: 63,
    fundingRate: "0.00800",
    id: "0197f2d0-5000-7000-8000-000000000001",
    marketCap: 2500000000000,
    openInterest: 32000000000,
    price: "125300.00",
    timestamp: "2026-07-11T00:00:00Z",
  },
  {
    dominance: "63.20",
    fearGreed: 68,
    fundingRate: "0.01200",
    id: "0197f2d0-5000-7000-8000-000000000002",
    marketCap: 2560000000000,
    openInterest: 34700000000,
    price: "128320.00",
    timestamp: "2026-07-12T00:00:00Z",
  },
];

export const btcEtfSeed: BtcEtfRecord[] = [
  {
    ark: 42000000,
    bitwise: 38000000,
    blackrock: 182000000,
    createdAt: "2026-07-10T00:00:00Z",
    fidelity: 94000000,
    grayscale: -22000000,
    id: "0197f2d0-6000-7000-8000-000000000001",
    totalInflow: 431000000,
    tradeDate: "2026-07-10",
  },
  {
    ark: 51000000,
    bitwise: 45000000,
    blackrock: 203000000,
    createdAt: "2026-07-11T00:00:00Z",
    fidelity: 99000000,
    grayscale: -17000000,
    id: "0197f2d0-6000-7000-8000-000000000002",
    totalInflow: 472000000,
    tradeDate: "2026-07-11",
  },
  {
    ark: 48000000,
    bitwise: 41000000,
    blackrock: 196000000,
    createdAt: "2026-07-12T00:00:00Z",
    fidelity: 101000000,
    grayscale: -19000000,
    id: "0197f2d0-6000-7000-8000-000000000003",
    totalInflow: 453000000,
    tradeDate: "2026-07-12",
  },
];

export const ethEtfSeed: EthEtfRecord[] = [
  {
    blackrock: 43000000,
    createdAt: "2026-07-12T00:00:00Z",
    fidelity: 22000000,
    grayscale: -8000000,
    id: "0197f2d0-7000-7000-8000-000000000001",
    totalInflow: 57000000,
    tradeDate: "2026-07-12",
  },
];

export const knowledgeArticlesSeed: KnowledgeArticleRecord[] = [
  {
    aiSummary: "理解 CPI 为什么会影响降息预期，以及它为什么会直接改变 BTC 与美股估值。",
    category: "Macro",
    content:
      "CPI 是衡量通胀的重要指标。对于交易者来说，关键不在定义本身，而在于 CPI 会改变市场对未来利率的押注。若 CPI 低于预期，市场更容易相信美联储会更早降息，BTC 与成长股通常受益；若 CPI 高于预期，则风险资产更容易承压。",
    createdAt: "2026-07-12T00:00:00Z",
    id: "0197f2d0-8000-7000-8000-000000000001",
    published: true,
    readTime: 3,
    slug: "what-is-cpi",
    title: "什么是 CPI",
  },
  {
    aiSummary: "FedWatch 不是预测工具，而是市场当前对利率结果的集体押注。",
    category: "Federal Reserve",
    content:
      "FedWatch 本质上反映了利率期货市场对于下一次美联储会议结果的概率定价。它不能保证结果一定发生，但能帮助交易者理解市场当前的默认剧本是什么。",
    createdAt: "2026-07-12T00:00:00Z",
    id: "0197f2d0-8000-7000-8000-000000000002",
    published: true,
    readTime: 3,
    slug: "what-is-fedwatch",
    title: "什么是 FedWatch",
  },
  {
    aiSummary: "BTC.D 上升通常意味着资金更偏向防守和主流资产，而不是追逐高波动山寨。",
    category: "Bitcoin",
    content:
      "BTC Dominance 代表 BTC 在整个加密市场总市值中的占比。它上升时，通常说明资金更愿意留在相对稳健的 BTC，而不是扩散到山寨资产。",
    createdAt: "2026-07-12T00:00:00Z",
    id: "0197f2d0-8000-7000-8000-000000000003",
    published: true,
    readTime: 2,
    slug: "what-is-btc-dominance",
    title: "什么是 BTC.D",
  },
  {
    aiSummary: "Funding 过高常常意味着多头拥挤，短线更容易出现波动清洗。",
    category: "Bitcoin",
    content:
      "Funding Rate 是永续合约多空之间定期支付的费用。Funding 越高，通常意味着市场多头拥挤，价格虽然可能继续涨，但短线波动风险也在同步上升。",
    createdAt: "2026-07-12T00:00:00Z",
    id: "0197f2d0-8000-7000-8000-000000000004",
    published: true,
    readTime: 2,
    slug: "what-is-funding-rate",
    title: "什么是 Funding",
  },
];
