import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TopIndexesSchema } from "../types/topIndexes";
import { fetchingIndexes } from "../services/fetchingIndexes";
import { IndexesInfo } from "components/Tops/model/types/tops";

const initialState: TopIndexesSchema = {
  indexes: [],
  isLoading: false,
  error: undefined,
};

const topIndexesSlice = createSlice({
  name: "topIndexes",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
    .addCase(fetchingIndexes.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })

    .addCase(fetchingIndexes.fulfilled, (state, action: PayloadAction<IndexesInfo[]>) => {
      state.isLoading = false
      state.indexes = action.payload
      state.error = undefined
    })

    .addCase(fetchingIndexes.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
});

export const { reducer: TopIndexesReducer } = topIndexesSlice;
export const { actions: TopIndexesActions } = topIndexesSlice;
