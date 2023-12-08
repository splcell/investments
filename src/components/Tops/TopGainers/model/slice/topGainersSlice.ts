import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TopGainerSchema } from "../types/topGainers";
import { fetchingGainers } from "../services/fetchingGainers";
import { Gainer } from "components/Tops/model/types/tops";

const initialState: TopGainerSchema = {
  gainers: [],
  isLoading: false,
  error: undefined,
};

const topGainersSlice = createSlice({
  name: "topGainers",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchingGainers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })

      .addCase(
        fetchingGainers.fulfilled,
        (state, action: PayloadAction<Gainer[]>) => {
          state.isLoading = false;
          state.gainers = action.payload;
          state.error = undefined;
        }
      )

      .addCase(fetchingGainers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: TopGainersReducer } = topGainersSlice;
export const { actions: TopGainersActions } = topGainersSlice;
