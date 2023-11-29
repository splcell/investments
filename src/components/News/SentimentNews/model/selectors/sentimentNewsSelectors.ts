import { StoreSchema } from "store/storeShema";

export const getSentimentNews = (state: StoreSchema) => {
  return state.sentimentNews.news
}

export const getSentimentNewsStatus = (state: StoreSchema) => {
  return state.sentimentNews.isLoading
}

export const getSentimentNewsError = (state: StoreSchema) => {
  return state.sentimentNews.error
}