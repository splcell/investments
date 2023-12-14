import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CompanyNewsSchema } from "../types/companyNewsSchema";
import { fetchingPressReleases } from "../services/fetchingPressReleases";
import { PressRelease } from "../types/pressRelease";
import { fetchingPriceTargets } from "../services/fetchingPriceTargets";
import { PriceTarget } from "../types/priceTarget";

const initialState: CompanyNewsSchema = {
  pressReleases: [],
  priceTargets: [],
  pressReleasesStatus: false,
  pressReleasesError: undefined,
  priceTargetsStatus: false,
  priceTargetsError: undefined
}

const companyNewsSlice = createSlice({
  name: 'companyNews',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
    .addCase(fetchingPressReleases.pending, (state) => {
      state.pressReleasesStatus = true
      state.pressReleasesError = undefined
    })

    .addCase(fetchingPressReleases.fulfilled, (state, action: PayloadAction<PressRelease[]>) => {
      state.pressReleasesStatus = false
      state.pressReleases = action.payload
      state.pressReleasesError = undefined
    })

    .addCase(fetchingPressReleases.rejected, (state, action) => {
      state.pressReleasesStatus = false
      state.pressReleasesError = action.error.message
    })

    .addCase(fetchingPriceTargets.pending, (state) => {
      state.priceTargetsStatus = true
      state.priceTargetsError = undefined
    })

    .addCase(fetchingPriceTargets.fulfilled, (state, action: PayloadAction<PriceTarget[]>) => {
      state.priceTargetsStatus = false
      state.priceTargets = action.payload
      state.priceTargetsError = undefined
    })

    .addCase(fetchingPriceTargets.rejected, (state, action) => {
      state.priceTargetsStatus = false
      state.priceTargetsError = action.error.message
    })
  }
})

export const {reducer: CompanyNewsReducer} = companyNewsSlice
export const {actions: CompanyNewsActions} = companyNewsSlice