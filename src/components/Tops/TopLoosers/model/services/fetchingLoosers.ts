import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "App";

export const fetchingLoosers = createAsyncThunk(
  'topLoosers/fetchingLoosers',
  async (_, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('Loosers not Found')
      }

      const data = await response.json()

      return data


    } catch (error) {
      thunkApi.rejectWithValue(error)
    }
  }
)