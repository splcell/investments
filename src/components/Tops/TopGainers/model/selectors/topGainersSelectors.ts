import { StoreSchema } from "store/storeShema";

export const getGainersList = (state: StoreSchema) => {
  return state.gainers.gainers
}

export const getGainersLoading = (state: StoreSchema) => {
  return state.gainers.isLoading
}

export const getGainersError = (state: StoreSchema) => {
  return state.gainers.error
}