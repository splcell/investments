import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchData, SearchSchema } from "../types/search";
import { fetchingSearchResults } from "../services/fetchingSearchResults";


const initialState: SearchSchema = {
  searchResults: [],
  fullResults: [],
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },

    cleanQuery: (state) => {
      state.query = "";
    },

    cleanResults: (state) => {
      state.searchResults = []
    }
  },
  extraReducers: (build) => {
    build.addCase(
      fetchingSearchResults.fulfilled,
      (state, action: PayloadAction<SearchData[]>) => {
        state.searchResults = action.payload;
        state.fullResults = action.payload;
      }
    );
  },
});

export const { reducer: SearchReducer } = searchSlice;
export const { actions: SearchActions } = searchSlice;
export type SearchActionsType = ReturnType<typeof searchSlice.actions[keyof typeof searchSlice.actions]>