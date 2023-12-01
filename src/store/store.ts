import { configureStore } from "@reduxjs/toolkit";
import { GlobalNewsReducer } from "components/News/GlobalNews/model/slice/globalNewsSlice";
import { SentimentNewsReducer } from "components/News/SentimentNews/model/slice/sentimentNewsSlice";
import { MostActiveReducer } from "components/Tops/MostActive";
import { TopGainersReducer } from "components/Tops/TopGainers";
import { TopLoosersReducer } from "components/Tops/TopLoosers";


export const store = configureStore({
  reducer: {
    globalNews: GlobalNewsReducer,
    sentimentNews: SentimentNewsReducer,
    mostActive: MostActiveReducer,
    gainers: TopGainersReducer,
    loosers: TopLoosersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch