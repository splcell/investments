import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "store/storeShema"
import { getMostActiveError, getMostActiveStatus, getMostActiveTickers } from "./mostActiveSelectors"

describe('MostActive selectors test', () => {
  test('should return active tickers', () => {
    const data = [
      {
        "symbol": "MU",
        "name": "Micron Technology, Inc.",
        "change": 2.24,
        "price": 53.96,
        "changesPercentage": 4.331
      }
    ]

    const state: DeepPartial<StoreSchema> = {
      mostActive: {
        tickers: data
      }
    }

    expect(getMostActiveTickers(state as StoreSchema)).toEqual(data)
  })

  test('should return loading', () => {
    const state: DeepPartial<StoreSchema> = {
      mostActive: {
       isLoading: true
      }
    }

    expect(getMostActiveStatus(state as StoreSchema)).toEqual(true)
  })

  test('should return error', () => {
    const state: DeepPartial<StoreSchema> = {
      mostActive: {
       error: 'Error'
      }
    }

    expect(getMostActiveError(state as StoreSchema)).toEqual('Error')
  })

})