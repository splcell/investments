import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "store/storeShema"
import { getPressReleases, getPressReleasesError, getPressReleasesStatus, getPriceTargets, getPriceTargetsError, getPriceTargetsStatus } from "./companyNewsSelectors"

describe('Company News selectors test', () => {
  test('should return press realises', () => {
    const mockPressRealises = [
      {
        "symbol": "AAPL",
        "date": "2023-02-02 16:30:00",
        "title": "APPLE REPORTS FIRST QUARTER RESULTS",
        "text": "CUPERTINO, CALIF.--( BUSINESS WIRE )--APPLE® TODAY ANNOUNCED FINANCIAL RESULTS FOR ITS FISCAL 2023 FIRST QUARTER ENDED DECEMBER 31, 2022. THE COMPANY POSTED QUARTERLY REVENUE OF $117.2 BILLION, DOWN 5 PERCENT YEAR OVER YEAR, AND QUARTERLY EARNINGS PER DILUTED SHARE OF $1.88."
      }
    ]

    const state: DeepPartial<StoreSchema> = {
      companyNews: {
        pressReleases: mockPressRealises
      }
    }

    expect(getPressReleases(state as StoreSchema)).toEqual(mockPressRealises)
  })

  test('should return press realises status', () => {
    

    const state: DeepPartial<StoreSchema> = {
      companyNews: {
        pressReleasesStatus: false
      }
    }

    expect(getPressReleasesStatus(state as StoreSchema)).toEqual(false)
  })

  test('should return press realises error', () => {
    

    const state: DeepPartial<StoreSchema> = {
      companyNews: {
        pressReleasesError: 'error'
      }
    }

    expect(getPressReleasesError(state as StoreSchema)).toEqual('error')
  })

  test('should return price targets', () => {
    const mockPriceTargets = [
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

    const state: DeepPartial<StoreSchema> = {
      companyNews: {
        priceTargets: mockPriceTargets
      }
    }

    expect(getPriceTargets(state as StoreSchema)).toEqual(mockPriceTargets)
  })

  test('should return price targets status', () => {
    

    const state: DeepPartial<StoreSchema> = {
      companyNews: {
        priceTargetsStatus: false
      }
    }

    expect(getPriceTargetsStatus(state as StoreSchema)).toEqual(false)
  })

  test('should return price targets error', () => {
    

    const state: DeepPartial<StoreSchema> = {
      companyNews: {
        priceTargetsError: 'error'
      }
    }

    expect(getPriceTargetsError(state as StoreSchema)).toEqual('error')
  })
})