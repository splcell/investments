import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "App";
import { CompanyInfoActions } from "../slice/companyInfoSlice";
import { CompanyInfo } from "../types/companyInfo";

export const fetchingCompanyInfo = createAsyncThunk(
  'companyInfo/fetchingCompanyInfo',
  async (ticker: string, thunkApi) => {
    const {rejectWithValue, dispatch} = thunkApi
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v4/company-outlook?symbol=${ticker}&apikey=${apiKey}`)

      if(!response.ok){
        throw new Error('Info not Found')
      }

      const data: CompanyInfo = await response.json()
      dispatch(CompanyInfoActions.cleanData())
      dispatch(CompanyInfoActions.setProfile(data.profile))
      dispatch(CompanyInfoActions.setMetrics(data.metrics))
      dispatch(CompanyInfoActions.setRatios(data.ratios))
      dispatch(CompanyInfoActions.setRating(data.rating))
      dispatch(CompanyInfoActions.setDividend(data.stockDividend))
      dispatch(CompanyInfoActions.setNews(data.stockNews))
      dispatch(CompanyInfoActions.setAnnualReport(data.financialsAnnual))
      dispatch(CompanyInfoActions.setQuarterReport(data.financialsQuarter))

      return data

    } catch (error: Error | any) {
      return rejectWithValue(error.message)
    }
  }
)