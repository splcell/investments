import { configureStore } from "@reduxjs/toolkit";
import { GlobalNewsReducer } from "components/News/GlobalNews/model/slice/globalNewsSlice";
import { SentimentNewsReducer } from "components/News/SentimentNews/model/slice/sentimentNewsSlice";

export const store = configureStore({
  reducer: {
    globalNews: GlobalNewsReducer,
    sentimentNews: SentimentNewsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch