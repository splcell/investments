export interface Profile {
  symbol: string;
  price: number;
  volAvg: number;
  mktCap: number;
  lastDiv: number;
  range: string;
  changes: number;
  companyName: string;
  currency: string;
  cik: string;
  isin: string;
  cusip: string;
  exchangeShortName: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  country: string;
  fullTimeEmployees: string;
  city: string;
  state: string;
  image: string;
  ipoDate: string;
  defaultImage: boolean;
}

export interface Metrics {
  yearHigh: number;
  yearLow: number;
}

// export interface RatiosTTM {
//   [key: string]: number;
// }

export interface Dividend {
  date: string;
  adjDividend: number;
  dividend: number;
  recordDate: string;
  paymentDate: string;
  declarationDate: string;
}

export interface CompanyNews {
  symbol: string;
  publishedDate: string;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
}

export interface CompanyRating {
  symbol: string;
  date: string;
  rating: string;
  ratingRecommendation: string;
}

export interface CompanyReport {
  [key: string]: string | number;
}

export interface RatiosTTM{
  dividendYielTTM: number,
  dividendYielPercentageTTM: number,
  peRatioTTM: number,
  pegRatioTTM: number,
  payoutRatioTTM: number,
  currentRatioTTM: number,
  quickRatioTTM: number,
  cashRatioTTM: number,
  daysOfSalesOutstandingTTM: number,
  daysOfInventoryOutstandingTTM: number,
  operatingCycleTTM: number,
  daysOfPayablesOutstandingTTM: number,
  cashConversionCycleTTM: number,
  grossProfitMarginTTM: number,
  operatingProfitMarginTTM: number,
  pretaxProfitMarginTTM: number,
  netProfitMarginTTM: number,
  effectiveTaxRateTTM: number,
  returnOnAssetsTTM: number,
  returnOnEquityTTM: number,
  returnOnCapitalEmployedTTM: number,
  netIncomePerEBTTTM: number,
  ebtPerEbitTTM: number,
  ebitPerRevenueTTM: number,
  debtRatioTTM: number,
  debtEquityRatioTTM: number,
  longTermDebtToCapitalizationTTM: number,
  totalDebtToCapitalizationTTM: number,
  interestCoverageTTM: number,
  cashFlowToDebtRatioTTM: number,
  companyEquityMultiplierTTM: number,
  receivablesTurnoverTTM: number,
  payablesTurnoverTTM: number,
  inventoryTurnoverTTM: number,
  fixedAssetTurnoverTTM: number,
  assetTurnoverTTM: number,
  operatingCashFlowPerShareTTM: number,
  freeCashFlowPerShareTTM: number,
  cashPerShareTTM: number,
  operatingCashFlowSalesRatioTTM: number,
  freeCashFlowOperatingCashFlowRatioTTM: number,
  cashFlowCoverageRatiosTTM: number,
  shortTermCoverageRatiosTTM: number,
  capitalExpenditureCoverageRatioTTM: number,
  dividendPaidAndCapexCoverageRatioTTM: number,
  priceBookValueRatioTTM: number,
  priceToBookRatioTTM: number,
  priceToSalesRatioTTM: number,
  priceEarningsRatioTT: number,
  priceToFreeCashFlowsRatioTT: number,
  priceToOperatingCashFlowsRatioTT: number,
  priceCashFlowRatioTT: number,
  priceEarningsToGrowthRatioTT: number,
  priceSalesRatioTTM: number,
  enterpriseValueMultipleTTM: number,
  priceFairValueTTM: number,
  dividendPerShareTTM: number
}

export interface CompanyInfo {
  profile: Profile;
  metrics: Metrics;
  ratios: RatiosTTM[];
  stockDividend: Dividend[];
  stockNews: CompanyNews[];
  rating: CompanyRating[];
  financialsAnnual: {
    income: CompanyReport[];
    balance: CompanyReport[];
    cash: CompanyReport[];
  };

  financialsQuarter: {
    income: CompanyReport[];
    balance: CompanyReport[];
    cash: CompanyReport[];
  };
}

export interface CompanyInfoSchema
  extends Omit<
    CompanyInfo,
    "profile" | "metrics" | "financialsAnnual" | "financialsQuarter"
  > {
  profile: Profile | undefined;
  metrics: Metrics | undefined;
  financialsAnnual: CompanyInfo["financialsAnnual"] | undefined;
  financialsQuarter: CompanyInfo["financialsQuarter"] | undefined;
  isLoading: boolean;
  error: string | undefined;
}
