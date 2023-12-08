import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "store/storeShema"
import { getPerfomanceError, getPerfomanceSectors, getPerfomanceStatus } from "./performanceSelectors"

describe('Performance selectors test', () => {
  test('should return sectors performance', () => {
    const data = [
      {
        "sector": "Real Estate",
        "changesPercentage": '47.3976468395652'
      },
      {
        "sector": "Technology",
        "changesPercentage": '211.59579270694476'
      }
    ]

    const state: DeepPartial<StoreSchema> = {
     performance: {
      sectors: data
     }
    }

    expect(getPerfomanceSectors(state as StoreSchema)).toEqual(data)
  })

  test('should return loading', () => {
    const state: DeepPartial<StoreSchema> = {
      performance: {
        isLoading: true
       }
    }

    expect(getPerfomanceStatus(state as StoreSchema)).toEqual(true)
  })

  test('should return error', () => {
    const state: DeepPartial<StoreSchema> = {
      performance: {
        error: 'Error'
       }
    }

    expect(getPerfomanceError(state as StoreSchema)).toEqual('Error')
  })

})