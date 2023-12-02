import { createAsyncThunk } from "@reduxjs/toolkit";
import { key } from "pages/MainPage/ui/MainPage";

export const fetchingMostActive = createAsyncThunk(
  'mostActive/fetchingMostActive',

  async (_, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${key}`)

      if(!response.ok){
        throw new Error('Most Active tickers not found')
      }

      const data = await response.json()

      return data
      
    } catch (error) {
      thunkApi.rejectWithValue(error)
    }
  }
)