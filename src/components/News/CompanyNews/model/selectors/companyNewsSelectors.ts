import { StoreSchema } from "store/storeShema";

export const getPressReleases = (state: StoreSchema) => state.companyNews.pressReleases
export const getPressReleasesStatus = (state: StoreSchema) => state.companyNews.pressReleasesStatus
export const getPressReleasesError = (state: StoreSchema) => state.companyNews.pressReleasesError
export const getPriceTargets = (state: StoreSchema) => state.companyNews.priceTargets
export const getPriceTargetsStatus = (state: StoreSchema) => state.companyNews.priceTargetsStatus
export const getPriceTargetsError = (state: StoreSchema) => state.companyNews.priceTargetsError