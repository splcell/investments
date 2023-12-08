import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "store/storeShema"
import { getGainersError, getGainersList, getGainersLoading } from "./topGainersSelectors"

describe('Top gainers selectors test', () => {
  test('should return gainers', () => {
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
      gainers: {
        gainers: data
      }
    }

    expect(getGainersList(state as StoreSchema)).toEqual(data)
  })

  test('should return loading', () => {
    const state: DeepPartial<StoreSchema> = {
      gainers: {
        isLoading: true
      }
    }

    expect(getGainersLoading(state as StoreSchema)).toEqual(true)
  })

  test('should return error', () => {
    const state: DeepPartial<StoreSchema> = {
      gainers: {
        error: 'Error'
      }
    }

    expect(getGainersError(state as StoreSchema)).toEqual('Error')
  })

})