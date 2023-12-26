import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "store/storeShema"
import { getAnnualReports, getCompanyError, getCompanyNews, getCompanyStatus, getDividend, getMetrics, getProfile, getQuarterlyReports, getRating, getRatios } from "./companyInfoSelectors"

describe('CompanyInfo selectors test', () => {
  test('should return profile data', () => {
    const profile = {
    "symbol": "AAPL",
    "price": 197.57,
    "beta": 1.308,
    "volAvg": 54998557,
    "mktCap": 3072766696000,
    "lastDiv": 0.96,
    "range": "124.17-199.62",
    "changes": -0.54,
    "companyName": "Apple Inc.",
    "currency": "USD",
    "cik": "0000320193",
    "isin": "US0378331005",
    "cusip": "037833100",
    "exchange": "NASDAQ Global Select",
    "exchangeShortName": "NASDAQ",
    "industry": "Consumer Electronics",
    "website": "https://www.apple.com",
    "description": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Fitness+, a personalized fitness service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.",
    "ceo": "Mr. Timothy D. Cook",
    "sector": "Technology",
    "country": "US",
    "fullTimeEmployees": "161000",
    "phone": "408 996 1010",
    "address": "One Apple Park Way",
    "city": "Cupertino",
    "state": "CA",
    "zip": "95014",
    "dcfDiff": 53.70473,
    "dcf": 143.86527336426485,
    "image": "https://financialmodelingprep.com/image-stock/AAPL.png",
    "ipoDate": "1980-12-12",
    "defaultImage": false,
    "isEtf": false,
    "isActivelyTrading": true,
    "isAdr": false,
    "isFund": false
  }

    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        profile: profile
      }
    }

    expect(getProfile(state as StoreSchema)).toEqual(profile)
  })

  test('should return company metrics', () => {
    const metrics = {
      "dividendYielTTM": 0,
      "volume": 128538401,
      "yearHigh": 199.62,
      "yearLow": 124.17
    }
    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        metrics: metrics
      }
    }

    expect(getMetrics(state as StoreSchema)).toEqual(metrics)
  })

  test('should return company ratios', () => {
    const ratios = [
      {
        "dividendYielTTM": 0.004808422331325606,
        "dividendYielPercentageTTM": 0.48084223313256064,
        "peRatioTTM": 31.77462936625599,
      }
    ]

    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        ratios: ratios
      }
    }

    expect(getRatios(state as StoreSchema)).toEqual(ratios)
  })

  test('should return company dividends', () => {
    const dividends = [
      {
        "date": "2023-11-10",
        "label": "November 10, 23",
        "adjDividend": 0.24,
        "dividend": 0.24,
        "recordDate": "2023-11-13",
        "paymentDate": "2023-11-16",
        "declarationDate": "2023-11-02"
      }
    ]

    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        stockDividend: dividends
      }
    }

    expect(getDividend(state as StoreSchema)).toEqual(dividends)
  })

  test('should return company news', () => {
    const news = [
      {
        "symbol": "AAPL",
        "publishedDate": "2023-12-18 06:03:28",
        "title": "",
        "image": "https://cdn.snapi.dev/images/v1/x/4/nancy-pelosi-trading-bot-update-massive-returns-this-last-year-2199620.jpg",
        "site": "Finbold",
        "text": "Alternative trading platform Quiver Quantitative unveiled last month a trading bot that mirrors the stock trades of former Speaker of the House and US Representative Nancy Pelosi and her family.",
        "url": "https://finbold.com/nancy-pelosi-trading-bot-update-massive-returns-this-last-year/?utm_source=snapi"
      },
    ]

    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        stockNews: news
      }
    }

    expect(getCompanyNews(state as StoreSchema)).toEqual(news)
  })

  test('should return company rating', () => {
    const rating = [
      {
        "symbol": "AAPL",
        "date": "2023-12-15",
        "rating": "S",
        "ratingRecommendation": "Strong Buy",
      }
    ]

    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        rating: rating
      }
    }

    expect(getRating(state as StoreSchema)).toEqual(rating)
  })

  test('should return company annual reports & quarterly reports', () => {

    const mockReportData = {
      "date": "2023-09-30",
      "symbol": "AAPL",
      "reportedCurrency": "USD",
      "cik": "0000320193",
      "fillingDate": "2023-11-03",
      "acceptedDate": "2023-11-02 18:08:27",
      "calendarYear": "2023",
      "period": "FY",
      "revenue": 383285000000,
      "costOfRevenue": 214137000000,
      "grossProfit": 169148000000,
  }

    const report = {
      income: [mockReportData],
      balance: [mockReportData],
      cash: [mockReportData]
    }

    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        financialsAnnual: report,
        financialsQuarter: report
      }
    }

    expect(getAnnualReports(state as StoreSchema)).toEqual(report)
    expect(getQuarterlyReports(state as StoreSchema)).toEqual(report)
  })

  test('should return company status', () => {

    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        isLoading: true
      }
    }

    expect(getCompanyStatus(state as StoreSchema)).toEqual(true)
  })

  test('should return company error', () => {

    const state: DeepPartial<StoreSchema> = {
      companyInfo: {
        error: 'Error'
      }
    }

    expect(getCompanyError(state as StoreSchema)).toEqual('Error')
  })
})
