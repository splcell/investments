import { DeepPartial } from "@reduxjs/toolkit";
import { GlobalNewsSchema } from "../types/globalNews";
import { GlobalNewsReducer } from "./globalNewsSlice";
import { fetchingGlobalNews } from "../services/fetchingGlobalNews";

describe("Global News slice test", () => {
  test("fetchingGlobalNews pending", () => {
    const state: DeepPartial<GlobalNewsSchema> = {
      isLoading: false,
    };

    expect(
      GlobalNewsReducer(state as GlobalNewsSchema, fetchingGlobalNews.pending)
    ).toEqual({ isLoading: true });
  });

  test("fetchingGlobalNews fulfilled", () => {
    const data = {
      publishedDate: "2023-10-19T22:00:09.000Z",
      title:
        "Xi Jinping calls for ceasefire in Israel-Gaza war, says two-state solution is ‘fundamental way out’",
      image:
        "https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/10/19/ace90641-0118-4671-b211-3ce4669f9aa3_ccf76346.jpg?itok=mlnC2VFw",
      site: "scmp",
      text: "Chinese president also says Beijing is willing to work with Arab countries for ‘comprehensive, just, and lasting solution’ to the crisis...",
      url: "https://www.scmp.com/news/china/diplomacy/article/3238538/xi-jinping-calls-ceasefire-israel-gaza-war-says-two-state-solution-fundamental-way-out?utm_source=rss_feed",
    };

    const state: DeepPartial<GlobalNewsSchema> = {
      news: [],
      isLoading: false,
      error: undefined,
    };

    expect(
      GlobalNewsReducer(state as GlobalNewsSchema, fetchingGlobalNews.fulfilled(data, ''))
    ).toEqual({ news: {...data}, isLoading: false, error: undefined });
  });

  test("fetchingGlobalNews rejected", () => {
    const state: DeepPartial<GlobalNewsSchema> = {
      isLoading: false,
      news: [],
      error: undefined
    };

    expect(
      GlobalNewsReducer(state as GlobalNewsSchema, fetchingGlobalNews.rejected(new Error('error'), ''))
    ).toEqual({ isLoading: false, news: [], error: 'error' });
  });
});
