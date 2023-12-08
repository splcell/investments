import { DeepPartial } from "@reduxjs/toolkit";
import { SectorPerformance } from "components/Tops/model/types/tops";
import { PerformanceSchema } from "../types/performance";
import { PerformanceReducer } from "./performanceSlice";
import { fetchingSectorsPerformance } from "../services/fetchingSectorsPerformance";

describe("mostActiveSlice test", () => {
  const data: SectorPerformance[] = [
    {
      "sector": "Real Estate",
      "changesPercentage": '47.3976468395652'
    },
    {
      "sector": "Technology",
      "changesPercentage": '211.59579270694476'
    }
  ]

  

  test("test fetchingMostActive pending", () => {
    const state: DeepPartial<PerformanceSchema> = {
     isLoading: false
    };
    expect(
      PerformanceReducer(
        state as PerformanceSchema,
        fetchingSectorsPerformance.pending
      )
    ).toEqual({isLoading: true});
  });

  test("test fetchingMostActive fulfilled", () => {
    const state: DeepPartial<PerformanceSchema> = {
     isLoading: false,
     sectors: [],
     error: undefined
    };
    expect(
      PerformanceReducer(
        state as PerformanceSchema,
        fetchingSectorsPerformance.fulfilled(data, '')
      )
    ).toEqual({isLoading: false, sectors: data, error: undefined});
  });

  test("test fetchingMostActive rejected", () => {
    const state: DeepPartial<PerformanceSchema> = {
     isLoading: false,
     sectors: [],
     error: undefined
    };
    expect(
      PerformanceReducer(
        state as PerformanceSchema,
        fetchingSectorsPerformance.rejected(new Error('Error'), '')
      )
    ).toEqual({isLoading: false, sectors: [], error: 'Error'});
  });
});