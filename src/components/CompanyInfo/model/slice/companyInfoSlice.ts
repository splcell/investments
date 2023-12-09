import { createSlice } from "@reduxjs/toolkit";
import { CompanyInfoSchema } from "../types/companyInfo";
import { fetchingCompanyInfo } from "../services/fetchingCompanyInfo";

const initialState: CompanyInfoSchema = {
  profile: undefined,
  metrics: undefined,
  ratios: [],
  stockDividend: [],
  stockNews: [],
  rating: [],
  financialsAnnual: undefined,
  financialsQuarter: undefined,
  isLoading: false,
  error: undefined,
};

const companyInfoSlice = createSlice({
  name: "companyInfo",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },

    cleanData: (state) => {
      state.profile = undefined
    },

    setMetrics: (state, action) => {
      state.metrics = action.payload;
    },

    setRatios: (state, action) => {
      state.ratios = action.payload;
    },

    setDividend: (state, action) => {
      state.stockDividend = action.payload;
    },

    setNews: (state, action) => {
      state.stockNews = action.payload;
    },

    setRating: (state, action) => {
      state.rating = action.payload;
    },

    setAnnualReport: (state, action) => {
      state.financialsAnnual = action.payload;
    },

    setQuarterReport: (state, action) => {
      state.financialsQuarter = action.payload;
    },
  },

  extraReducers: (build) => {
    build
    .addCase(fetchingCompanyInfo.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })

    .addCase(fetchingCompanyInfo.fulfilled, (state) => {
      state.isLoading = false
      state.error = undefined
    })

    .addCase(fetchingCompanyInfo.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
});

export const { reducer: CompanyInfoReducer } = companyInfoSlice;
export const { actions: CompanyInfoActions } = companyInfoSlice;
