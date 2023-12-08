import { DeepPartial } from "@reduxjs/toolkit";
import { MostActiveSchema } from "../types/mostActive";
import { Active } from "components/Tops/model/types/tops";
import { MostActiveReducer } from "./mostActiveSlice";
import { fetchingMostActive } from "../services/fetchingMostActive";

describe("mostActiveSlice test", () => {
  const data: Active[] = [
    {
      "symbol": "MU",
      "name": "Micron Technology, Inc.",
      "change": 2.24,
      "price": 53.96,
      "changesPercentage": 4.331
    }
  ]

  

  test("test fetchingMostActive pending", () => {
    const state: DeepPartial<MostActiveSchema> = {
     isLoading: false
    };
    expect(
      MostActiveReducer(
        state as MostActiveSchema,
        fetchingMostActive.pending
      )
    ).toEqual({isLoading: true});
  });

  test("test fetchingMostActive fulfilled", () => {
    const state: DeepPartial<MostActiveSchema> = {
     isLoading: false,
     tickers: [],
     error: undefined
    };
    expect(
      MostActiveReducer(
        state as MostActiveSchema,
        fetchingMostActive.fulfilled(data, '')
      )
    ).toEqual({isLoading: false, tickers: data, error: undefined});
  });

  test("test fetchingMostActive rejected", () => {
    const state: DeepPartial<MostActiveSchema> = {
     isLoading: false,
     tickers: [],
     error: undefined
    };
    expect(
      MostActiveReducer(
        state as MostActiveSchema,
        fetchingMostActive.rejected(new Error('Error'), '')
      )
    ).toEqual({isLoading: false, tickers: [], error: 'Error'});
  });
});