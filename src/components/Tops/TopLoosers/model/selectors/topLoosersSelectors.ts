import { StoreSchema } from "store/storeShema";

export const getLossersList = (state: StoreSchema) => {
  return state.loosers.loosers
}

export const getLossersLoading = (state: StoreSchema) => {
  return state.loosers.isLoading
}

export const getLossersError = (state: StoreSchema) => {
  return state.loosers.error
}