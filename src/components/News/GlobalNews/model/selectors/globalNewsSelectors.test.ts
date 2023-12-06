import { DeepPartial } from "@reduxjs/toolkit";
import { StoreSchema } from "store/storeShema";
import { getGlobalNews, getGlobalNewsError, getGlobalNewsStatus } from "./globalNewsSelectors";

describe('Gloval news selectors test', () => {
  test('should return news', () => {
    
    const data = {
      "publishedDate": "2023-10-19T22:00:09.000Z",
      "title": "Xi Jinping calls for ceasefire in Israel-Gaza war, says two-state solution is ‘fundamental way out’",
      "image": "https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/10/19/ace90641-0118-4671-b211-3ce4669f9aa3_ccf76346.jpg?itok=mlnC2VFw",
      "site": "scmp",
      "text": "Chinese president also says Beijing is willing to work with Arab countries for ‘comprehensive, just, and lasting solution’ to the crisis...",
      "url": "https://www.scmp.com/news/china/diplomacy/article/3238538/xi-jinping-calls-ceasefire-israel-gaza-war-says-two-state-solution-fundamental-way-out?utm_source=rss_feed"
    }
    
      const state: DeepPartial<StoreSchema> = {
        globalNews: {
          news: [data]
        }
      };
      expect(getGlobalNews(state as StoreSchema)).toEqual([data]);
  })

  test('should return isLoading', () => { 
      const state: DeepPartial<StoreSchema> = {
        globalNews: {
          isLoading: true
        }
      };
      expect(getGlobalNewsStatus(state as StoreSchema)).toEqual(true);
  })

  test('should return error', () => { 
    const state: DeepPartial<StoreSchema> = {
      globalNews: {
        error: 'Error'
      }
    };
    expect(getGlobalNewsError(state as StoreSchema)).toEqual('Error');
})
})