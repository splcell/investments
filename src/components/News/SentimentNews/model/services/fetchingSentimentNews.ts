import { createAsyncThunk } from "@reduxjs/toolkit";
import { SentimentNewsSchema } from "../types/sentimentNews";

const key = process.env.API_KEY

export const fetchingSentimentNews = createAsyncThunk(
  'sentimentNews/fetchingSentimentNews',
  async(_, thunkApi) => {
    

    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v4/stock-news-sentiments-rss-feed?page=0&apikey=04b10667f5be090522dc21fe9e833341`)

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