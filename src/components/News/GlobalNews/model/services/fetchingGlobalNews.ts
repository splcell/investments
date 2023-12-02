import { createAsyncThunk } from "@reduxjs/toolkit";
import { key } from "pages/MainPage/ui/MainPage";


export const fetchingGlobalNews = createAsyncThunk(
  'globalNews/fetchingGlobalNews',
  async(_, thunkApi) => {
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v4/general_news?page=0&apikey=${key}`)
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