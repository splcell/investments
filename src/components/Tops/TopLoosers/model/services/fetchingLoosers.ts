import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchingLoosers = createAsyncThunk(
  'topLoosers/fetchingLoosers',
  async (_, thunkApi) => {
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=04b10667f5be090522dc21fe9e833341')

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