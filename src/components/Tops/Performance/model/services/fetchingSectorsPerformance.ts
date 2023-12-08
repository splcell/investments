import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "App";

export const fetchingSectorsPerformance = createAsyncThunk(
  'performance/fetchingSectorsPerformance',
  async (_, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/sectors-performance?apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('Sectors Performance not Found')
      }

      const data = await response.json()

      return data

    } catch (error: Error | any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)