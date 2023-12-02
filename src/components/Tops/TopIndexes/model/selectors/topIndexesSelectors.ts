import { StoreSchema } from "store/storeShema";

export const getIndexesList = (state: StoreSchema) => {
  return state.indexes.indexes
}

export const getIndexesStatus = (state: StoreSchema) => {
  return state.indexes.isLoading
}

export const getIndexesError = (state: StoreSchema) => {
  return state.indexes.error
}