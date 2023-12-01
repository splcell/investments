import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MostActiveSchema } from "../types/mostActive";
import { fetchingMostActive } from "../services/fetchingMostActive";
import { Active } from "components/Tops/model/types/tops";

const initialState: MostActiveSchema = {
  tickers: [],
  isLoading: false,
  error: undefined,
};

const mostActiveSlice = createSlice({
  name: "mostActive",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchingMostActive.pending, (state) => {
        (state.isLoading = true), (state.error = undefined);
      })

      .addCase(
        fetchingMostActive.fulfilled,
        (state, action: PayloadAction<Active[]>) => {
          state.isLoading = false;
          state.tickers = action.payload;
        }
      )

      .addCase(fetchingMostActive.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: MostActiveReducer } = mostActiveSlice;
export const { actions: MostActiveActions } = mostActiveSlice;
