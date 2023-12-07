import { DeepPartial } from "@reduxjs/toolkit";
import { SearchData, SearchSchema } from "../types/search";
import { SearchActions, SearchReducer } from "./searchSlice";
import { fetchingSearchResults } from "../services/fetchingSearchResults";

describe("searchSlice test", () => {
  const data: SearchData[] = [
    {
      symbol: "PRAA",
      name: "PRA Group, Inc.",
      currency: "USD",
      stockExchange: "NasdaqGS",
      exchangeShortName: "NASDAQ",
    },
  ];

  test("setQuery reducer test", () => {
    const state: DeepPartial<SearchSchema> = {
      query: "",
    };

    expect(
      SearchReducer(state as SearchSchema, SearchActions.setQuery("PRAA"))
    ).toEqual({ query: "PRAA" });
  });

  test("cleanQuery reducer test", () => {
    const state: DeepPartial<SearchSchema> = {
      query: "PRAA",
    };

    expect(
      SearchReducer(state as SearchSchema, SearchActions.cleanQuery())
    ).toEqual({ query: "" });
  });

  test("cleanResults reducer test", () => {
    const state: DeepPartial<SearchSchema> = {
      searchResults: data,
    };

    expect(
      SearchReducer(state as SearchSchema, SearchActions.cleanResults())
    ).toEqual({ searchResults: [] });
  });

  test("test fetchingSearchResults fulfilled", () => {
    const state: DeepPartial<SearchSchema> = {
      query: "",
      searchResults: [],
      fullResults: [],
    };
    expect(
      SearchReducer(
        state as SearchSchema,
        fetchingSearchResults.fulfilled(data, "", "")
      )
    ).toEqual({ query: "", searchResults: data, fullResults: data });
  });
});
