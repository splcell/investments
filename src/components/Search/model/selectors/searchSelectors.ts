import { StoreSchema } from "store/storeShema";

export const getSearchResults = (state: StoreSchema) => {
  return state.search.searchResults;
};

export const getFullResults = (state: StoreSchema) => {
  return state.search.fullResults;
};

export const getSearchQuery = (state: StoreSchema) => {
  return state.search.query;
};
