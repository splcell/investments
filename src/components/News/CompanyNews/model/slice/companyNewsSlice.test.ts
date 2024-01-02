import { DeepPartial } from "@reduxjs/toolkit";
import { CompanyNewsSchema } from "../types/companyNewsSchema";
import { CompanyNewsReducer } from "./companyNewsSlice";
import { fetchingPressReleases } from "../services/fetchingPressReleases";
import { fetchingPriceTargets } from "../services/fetchingPriceTargets";

describe("Company News slice test", () => {
  test("fetchingPressReleases pending", () => {
    const state: DeepPartial<CompanyNewsSchema> = {
      pressReleasesStatus: false
    };

    expect(
      CompanyNewsReducer(state as CompanyNewsSchema, fetchingPressReleases.pending)
    ).toEqual({ pressReleasesStatus: true });
  });

  test("fetchingPressReleases fulfilled", () => {
    const data = [
      {
        "symbol": "AAPL",
        "date": "2023-02-02 16:30:00",
        "title": "APPLE REPORTS FIRST QUARTER RESULTS",
        "text": "CUPERTINO, CALIF.--( BUSINESS WIRE )--APPLE® TODAY ANNOUNCED FINANCIAL RESULTS FOR ITS FISCAL 2023 FIRST QUARTER ENDED DECEMBER 31, 2022. THE COMPANY POSTED QUARTERLY REVENUE OF $117.2 BILLION, DOWN 5 PERCENT YEAR OVER YEAR, AND QUARTERLY EARNINGS PER DILUTED SHARE OF $1.88."
      }
    ]

    const state: DeepPartial<CompanyNewsSchema> = {
      pressReleases: [],
      pressReleasesStatus: false,
      pressReleasesError: undefined,
    };

    expect(
      CompanyNewsReducer(state as CompanyNewsSchema, fetchingPressReleases.fulfilled(data, '', ''))
    ).toEqual({ pressReleases: data, pressReleasesStatus: false, pressReleasesError: undefined });
  });

  test("fetchingPressReleases rejected", () => {
    const state: DeepPartial<CompanyNewsSchema> = {
      pressReleasesStatus: false,
      pressReleases: [],
      pressReleasesError: undefined
    };

    expect(
      CompanyNewsReducer(state as CompanyNewsSchema, fetchingPressReleases.rejected(new Error('error'), '', ''))
    ).toEqual({ pressReleasesStatus: false, pressReleases: [], pressReleasesError: 'error' });
  });

  test("fetchingPriceTargets pending", () => {
    const state: DeepPartial<CompanyNewsSchema> = {
      priceTargetsStatus: false
    };

    expect(
      CompanyNewsReducer(state as CompanyNewsSchema, fetchingPriceTargets.pending)
    ).toEqual({ priceTargetsStatus: true });
  });

  test("fetchingPriceTargets fulfilled", () => {
    const data = [
      {
        "symbol": "AAPL",
        "publishedDate": "2023-09-18T02:36:00.000Z",
        "newsURL": "https://www.benzinga.com/analyst-ratings/analyst-color/23/09/34673717/apple-analyst-says-iphone-15-pro-pro-max-preorders-strong-out-of-the-gates-increasi",
        "newsTitle": "Apple Analyst Says iPhone 15 Pro, Pro Max Preorders Strong Out Of The Gates, Increasing Confidence In Estimates For Holiday Quarter",
        "analystName": "Daniel Ives",
        "priceTarget": 240,
        "adjPriceTarget": 240,
        "priceWhenPosted": 175.01,
        "newsPublisher": "Benzinga",
        "newsBaseURL": "benzinga.com",
        "analystCompany": "Wedbush"
      }
    ]

    const state: DeepPartial<CompanyNewsSchema> = {
      priceTargets: [],
      priceTargetsStatus: false,
      priceTargetsError: undefined,
    };

    expect(
      CompanyNewsReducer(state as CompanyNewsSchema, fetchingPriceTargets.fulfilled(data, '', ''))
    ).toEqual({ priceTargets: data, priceTargetsStatus: false, priceTargetsError: undefined });
  });

  test("fetchingPriceTargets rejected", () => {
    const state: DeepPartial<CompanyNewsSchema> = {
      priceTargetsStatus: false,
      priceTargets: [],
      priceTargetsError: undefined
    };

    expect(
      CompanyNewsReducer(state as CompanyNewsSchema, fetchingPriceTargets.rejected(new Error('error'), '', ''))
    ).toEqual({ priceTargetsStatus: false, priceTargets: [], priceTargetsError: 'error' });
  });
});