import { apiKey } from "App";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchingGlobalNews = createAsyncThunk(
  "globalNews/fetchingGlobalNews",
  async (_, thunkApi) => {
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v4/general_news?page=0&apikey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Global News not Found");
      }

      const data = await response.json();
      return data;
    } catch (error: Error | any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
