import { StoreSchema } from 'store/storeShema';


export const getPerfomanceSectors = (state: StoreSchema) => {
  return state.performance.sectors
}

export const getPerfomanceStatus = (state: StoreSchema) => {
  return state.performance.isLoading
}

export const getPerfomanceError = (state: StoreSchema) => {
  return state.performance.error
}

