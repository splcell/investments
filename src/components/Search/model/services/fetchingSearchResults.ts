import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "App";

export const fetchingSearchResults = createAsyncThunk(
  'search/fetchingSearchResults',
  async (query: string, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${query.toLowerCase()}&limit=30&exchange=NASDAQ,NYSE&apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('No Results')
      }

      const data = await response.json()

      return data


    } catch (error: Error | any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)