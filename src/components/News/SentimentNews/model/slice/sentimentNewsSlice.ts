import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SentimentNews, SentimentNewsSchema } from "../types/sentimentNews";
import { fetchingSentimentNews } from "../services/fetchingSentimentNews";

const initialState: SentimentNewsSchema = {
  news: [],
  isLoading: false,
  error: undefined
}

const sentimentNewsSlice = createSlice({
  name: 'sentimentNews',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
    .addCase(fetchingSentimentNews.pending, (state) => {
      state.isLoading = true,
      state.error = undefined
    })

    .addCase(fetchingSentimentNews.fulfilled, (state, action: PayloadAction<SentimentNews[]>) => {
      state.isLoading = false
      state.news = action.payload
      state.error = undefined
    })

    .addCase(fetchingSentimentNews.rejected, (state, action) => {
      state.error = action.error.message
    })
  }
})

export const {reducer: SentimentNewsReducer} = sentimentNewsSlice;
export const {actions: SentimentNewsActions} = sentimentNewsSlice;