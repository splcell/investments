import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchingGlobalNews = createAsyncThunk(
  'globalNews/fetchingGlobalNews',
  async(_, thunkApi) => {
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v4/general_news?page=0&apikey=04b10667f5be090522dc21fe9e833341')
      if(!response.ok){
        throw new Error('Global News not Found')
      }

      const data = await response.json()
      return data

    } catch (error) {
      thunkApi.rejectWithValue(error)
    }
    
  }
)