import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "App";

export const fetchingPriceTargets = createAsyncThunk(
  'companyNews/fetchingPriceTargets',
  async (ticker: string, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v4/price-target?symbol=${ticker}&apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('Price Targets not Found')
      }

      const data = await response.json()

      return data


    } catch (error: Error | any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)