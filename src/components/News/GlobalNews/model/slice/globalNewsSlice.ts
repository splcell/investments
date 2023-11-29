import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalNews, GlobalNewsSchema } from "../types/globalNews";
import { fetchingGlobalNews } from "../services/fetchingGlobalNews";

const initialState: GlobalNewsSchema = {
  news: [],
  isLoading: false,
  error: undefined
}

const globalNewsSlice = createSlice({
  name: 'globalNews',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
    .addCase(fetchingGlobalNews.pending, (state) => {
      state.isLoading = true,
      state.error = undefined
    })

    .addCase(fetchingGlobalNews.fulfilled, (state, action: PayloadAction<GlobalNews[]>) => {
      state.isLoading = false
      state.news = action.payload
      state.error = undefined
    })

    .addCase(fetchingGlobalNews.rejected, (state, action) => {
      state.error = action.error.message
    })
  }
})

export const {reducer: GlobalNewsReducer} = globalNewsSlice;
export const {actions: GlobalNewsActions} = globalNewsSlice;