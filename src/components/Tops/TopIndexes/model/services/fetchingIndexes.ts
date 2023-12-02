import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "App";

export const fetchingIndexes = createAsyncThunk(
  'topIndexes/fetchingIndexes',
  async (_, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/quotes/index?apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('Indexes info not Found')
      }

      const data = await response.json()

      return data


    } catch (error) {
      thunkApi.rejectWithValue(error)
    }
  }
)