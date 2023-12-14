import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "App";

export const fetchingPressReleases = createAsyncThunk(
  'companyNews/fetchingPressReleases',
  async (ticker: string, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/press-releases/${ticker}?apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('Press Releases not Found')
      }

      const data = await response.json()

      return data
      
    } catch (error: Error | any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)