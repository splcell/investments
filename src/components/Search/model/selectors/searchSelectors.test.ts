import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "store/storeShema"
import { getFullResults, getSearchQuery, getSearchResults } from "./searchSelectors"

describe('Search selectors test', () => {
  test('should return searchResults & fullResults', () => {
    const data = [{
      "symbol": "PRAA",
      "name": "PRA Group, Inc.",
      "currency": "USD",
      "stockExchange": "NasdaqGS",
      "exchangeShortName": "NASDAQ"
    },]

    const state: DeepPartial<StoreSchema> = {
      search: {
        searchResults: data,
        fullResults: data
      }
    }

    expect(getSearchResults(state as StoreSchema)).toEqual(data)
    expect(getFullResults(state as StoreSchema)).toEqual(data)
  })

  test('should return search query', () => {
    const state: DeepPartial<StoreSchema> = {
      search: {
        query: 'AAPL'
      }
    }

    expect(getSearchQuery(state as StoreSchema)).toEqual('AAPL')
  })
})