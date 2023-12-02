import { createAsyncThunk } from "@reduxjs/toolkit";
import { SentimentNewsSchema } from "../types/sentimentNews";
import { apiKey} from "App";


export const fetchingSentimentNews = createAsyncThunk(
  'sentimentNews/fetchingSentimentNews',
  async(_, thunkApi) => {
    

    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v4/stock-news-sentiments-rss-feed?page=0&apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('Sentiment News not Found')
      }

      const data = await response.json()

      return data

    } catch (error) {
      thunkApi.rejectWithValue(error)
    }
    
  }
)