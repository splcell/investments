import { Looser } from "components/Tops";
import { TopLooserSchema } from "../types/topLoosers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchingLoosers } from "../services/fetchingLoosers";

const initialState: TopLooserSchema = {
  loosers: [],
  isLoading: false,
  error: undefined
}

const topLoosersSlice = createSlice({
  name: 'topLoosers',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
    .addCase(fetchingLoosers.pending, (state) => {
      state.isLoading = false
      state.error = undefined
    })

    .addCase(fetchingLoosers.fulfilled, (state, action: PayloadAction<Looser[]>) => {
      state.isLoading = false
      state.loosers = action.payload
      state.error = undefined
    })

    .addCase(fetchingLoosers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export const {reducer: TopLoosersReducer} = topLoosersSlice
export const {actions: TopLoosersActions} = topLoosersSlice