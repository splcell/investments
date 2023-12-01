import { StoreSchema } from "store/storeShema";

export const getMostActiveTickers = (state: StoreSchema) => {
  return state.mostActive.tickers
}

export const getMostActiveStatus = (state: StoreSchema) => {
  return state.mostActive.isLoading
}

export const getMostActiveError = (state: StoreSchema) => {
  return state.mostActive.error
}

