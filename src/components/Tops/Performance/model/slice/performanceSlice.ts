import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PerformanceSchema } from "../types/performance";
import { fetchingSectorsPerformance } from "../services/fetchingSectorsPerformance";
import { SectorPerformance } from "components/Tops/model/types/tops";

const initialState: PerformanceSchema = {
  sectors: [],
  isLoading: false,
  error: undefined,
};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
    .addCase(fetchingSectorsPerformance.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })

    .addCase(fetchingSectorsPerformance.fulfilled, (state, action: PayloadAction<SectorPerformance[]>) => {
      state.isLoading = false
      state.sectors = action.payload
      state.error = undefined
    })

    .addCase(fetchingSectorsPerformance.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
});

export const { reducer: PerformanceReducer } = performanceSlice;
export const { actions: PerformanceActions } = performanceSlice;
