import { StoreSchema } from "store/storeShema";

export const getProfile = (state: StoreSchema) => state.companyInfo.profile
export const getMetrics = (state: StoreSchema) => state.companyInfo.metrics
export const getRatios = (state: StoreSchema) => state.companyInfo.ratios
export const getDividend = (state: StoreSchema) => state.companyInfo.stockDividend
export const getCompanyNews = (state: StoreSchema) => state.companyInfo.stockNews
export const getRating = (state: StoreSchema) => state.companyInfo.rating
export const getAnnualReports = (state: StoreSchema) => state.companyInfo.financialsAnnual
export const getQuarterlyReports = (state: StoreSchema) => state.companyInfo.financialsQuarter
export const getCompanyStatus = (state: StoreSchema) => state.companyInfo.isLoading
export const getCompanyError = (state: StoreSchema) => state.companyInfo.error