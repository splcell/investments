import { createAsyncThunk } from "@reduxjs/toolkit";
import { key } from "pages/MainPage/ui/MainPage";

export const fetchingGainers = createAsyncThunk(
  "topGainers/fetchingGainers",
  async (_, thunkApi) => {
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${key}`
      );

      if (!response.ok) {
        throw new Error("Gainers not Found");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
