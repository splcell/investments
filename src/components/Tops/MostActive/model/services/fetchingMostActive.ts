import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey} from "App";


export const fetchingMostActive = createAsyncThunk(
  'mostActive/fetchingMostActive',

  async (_, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('Most Active tickers not found')
      }

      const data = await response.json()

      return data
      
    } catch (error: Error | any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)