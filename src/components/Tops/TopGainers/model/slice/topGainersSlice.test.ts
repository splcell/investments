import { DeepPartial } from "@reduxjs/toolkit";
import { Gainer } from "components/Tops/model/types/tops";
import { TopGainerSchema } from "../types/topGainers";
import { TopGainersReducer } from "./topGainersSlice";
import { fetchingGainers } from "../services/fetchingGainers";

describe("mostActiveSlice test", () => {
  const data: Gainer[] = [
    {
      "symbol": "MU",
      "name": "Micron Technology, Inc.",
      "change": 2.24,
      "price": 53.96,
      "changesPercentage": 4.331
    }
  ]

  

  test("test fetchingGainers pending", () => {
    const state: DeepPartial<TopGainerSchema> = {
     isLoading: false
    };
    expect(
      TopGainersReducer(
        state as TopGainerSchema,
        fetchingGainers.pending
      )
    ).toEqual({isLoading: true});
  });

  test("test fetchingMostActive fulfilled", () => {
    const state: DeepPartial<TopGainerSchema> = {
     isLoading: false,
     gainers: [],
     error: undefined
    };
    expect(
      TopGainersReducer(
        state as TopGainerSchema,
        fetchingGainers.fulfilled(data, '')
      )
    ).toEqual({isLoading: false, gainers: data, error: undefined});
  });

  test("test fetchingMostActive rejected", () => {
    const state: DeepPartial<TopGainerSchema> = {
     isLoading: false,
     gainers: [],
     error: undefined
    };
    expect(
      TopGainersReducer(
        state as TopGainerSchema,
        fetchingGainers.rejected(new Error('Error'), '')
      )
    ).toEqual({isLoading: false, gainers: [], error: 'Error'});
  });
});