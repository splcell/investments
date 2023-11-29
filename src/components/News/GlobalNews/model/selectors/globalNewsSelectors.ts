import { StoreSchema } from "store/storeShema";

export const getGlobalNews = (state: StoreSchema) => {
  return state.globalNews.news
}

export const getGlobalNewsStatus = (state: StoreSchema) => {
  return state.globalNews.isLoading
}

export const getGlobalNewsError = (state: StoreSchema) => {
  return state.globalNews.error
}