import { act, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "store/store";
import { Description } from "./Description";
import { CompanyReport, Profile, RatiosTTM } from "components/CompanyInfo/model/types/companyInfo";
import { fetchingCompanyInfo } from "components/CompanyInfo/model/services/fetchingCompanyInfo";
import { CompanyNewsActions } from "components/News";
import { CompanyInfoActions } from "components/CompanyInfo/model/slice/companyInfoSlice";

describe('Company Description component test', () => {
  const store = createReduxStore()
  const profile: Profile = {
    symbol: "AAPL",
    price: 197.57,
    volAvg: 54998557,
    mktCap: 3072766696000,
    lastDiv: 0.96,
    range: "124.17-199.62",
    changes: -0.54,
    companyName: "Apple Inc.",
    currency: "USD",
    cik: "0000320193",
    isin: "US0378331005",
    cusip: "037833100",
    exchangeShortName: "NASDAQ",
    industry: "Consumer Electronics",
    website: "https://www.apple.com",
    description:
      "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Fitness+, a personalized fitness service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.",
    ceo: "Mr. Timothy D. Cook",
    sector: "Technology",
    country: "US",
    fullTimeEmployees: "161000",
    city: "Cupertino",
    state: "CA",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    ipoDate: "1980-12-12",
    defaultImage: false,
  };

  const ratios: RatiosTTM = {
    dividendYielTTM: 0.004808422331325606,
    dividendYielPercentageTTM: 0.48084223313256064,
    peRatioTTM: 31.77462936625599,
    pegRatioTTM: 2.904127064762542,
    payoutRatioTTM: 0.1549048920047425,
    currentRatioTTM: 0.9880116717592975,
    quickRatioTTM: 0.8433121369780053,
    cashRatioTTM: 0.20621713876730807,
    daysOfSalesOutstandingTTM: 58.07564866874519,
    daysOfInventoryOutstandingTTM: 10.791292490321615,
    operatingCycleTTM: 68.8669411590668,
    daysOfPayablesOutstandingTTM: 106.72146803214763,
    cashConversionCycleTTM: -37.85452687308083,
    grossProfitMarginTTM: 0.4413112957720756,
    operatingProfitMarginTTM: 0.2982141226502472,
    pretaxProfitMarginTTM: 0.296740023742124,
    netProfitMarginTTM: 0.2530623426432028,
    effectiveTaxRateTTM: 0.14719174228036858,
    returnOnAssetsTTM: 0.27509834563776475,
    returnOnEquityTTM: 1.6078406995296408,
    returnOnCapitalEmployedTTM: 0.551446146423833,
    netIncomePerEBTTTM: 0.8528082577196314,
    ebtPerEbitTTM: 0.9950569111381353,
    ebitPerRevenueTTM: 0.2982141226502472,
    debtRatioTTM: 0.3150690759338936,
    debtEquityRatioTTM: 1.7875325845589418,
    longTermDebtToCapitalizationTTM: 0.6052392537493568,
    totalDebtToCapitalizationTTM: 0.6412597988847455,
    interestCoverageTTM: 29.062039155860667,
    cashFlowToDebtRatioTTM: 0.9950939795477459,
    companyEquityMultiplierTTM: 5.673462491552152,
    receivablesTurnoverTTM: 6.284906124456834,
    payablesTurnoverTTM: 3.420117870661705,
    inventoryTurnoverTTM: 33.82356657716001,
    fixedAssetTurnoverTTM: 8.767814251401122,
    assetTurnoverTTM: 1.087077369016657,
    operatingCashFlowPerShareTTM: 7.086346850789586,
    freeCashFlowPerShareTTM: 6.383821361723765,
    cashPerShareTTM: 3.945976501455117,
    operatingCashFlowSalesRatioTTM: 0.28840940814276583,
    freeCashFlowOperatingCashFlowRatioTTM: 0.9008621079579892,
    cashFlowCoverageRatiosTTM: 0.9950939795477459,
    shortTermCoverageRatiosTTM: 6.9932941102043396,
    capitalExpenditureCoverageRatioTTM: 10.08696048909572,
    dividendPaidAndCapexCoverageRatioTTM: 4.254271859605911,
    priceBookValueRatioTTM: 49.59257515173945,
    priceToBookRatioTTM: 49.59257515173945,
    priceToSalesRatioTTM: 8.016923949541464,
    dividendPerShareTTM: 0.95,
  };

  const companyReport: CompanyReport = {
    date: "2023-09-30",
  };
  const data = {
    profile: profile,

    metrics: {
      dividendYielTTM: 0,
      volume: 128538401,
      yearHigh: 199.62,
      yearLow: 124.17,
    },

    ratios: [ratios],
    stockDividend: [
      {
        date: "2023-08-11",
        label: "August 11, 23",
        adjDividend: 0.24,
        dividend: 0.24,
        recordDate: "2023-08-14",
        paymentDate: "2023-08-17",
        declarationDate: "2023-08-03",
      },
    ],
    stockNews: [
      {
        symbol: "AAPL",
        publishedDate: "2023-12-18 06:03:28",
        title:
          "Nancy Pelosi trading bot update: Massive returns this last year",
        image:
          "https://cdn.snapi.dev/images/v1/x/4/nancy-pelosi-trading-bot-update-massive-returns-this-last-year-2199620.jpg",
        site: "Finbold",
        text: "Alternative trading platform Quiver Quantitative unveiled last month a trading bot that mirrors the stock trades of former Speaker of the House and US Representative Nancy Pelosi and her family.",
        url: "https://finbold.com/nancy-pelosi-trading-bot-update-massive-returns-this-last-year/?utm_source=snapi",
      },
    ],
    rating: [],
    financialsAnnual: {
      income: [companyReport],
      balance: [companyReport],
      cash: [companyReport],
    },
    financialsQuarter: {
      income: [companyReport],
      balance: [companyReport],
      cash: [companyReport],
    },
  };

  test('Company description render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Description />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingCompanyInfo.fulfilled(data, "", ""));
    });

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });
  });

  test('Company info loading', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Description />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      //@ts-ignore
      store.dispatch(CompanyInfoActions.loadingTest())
      
    })
    
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    

  })

  

  test('Company info error', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Description/>
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      //@ts-ignore
      store.dispatch(fetchingCompanyInfo.fulfilled({}, '', ''))
      store.dispatch(fetchingCompanyInfo.rejected(new Error('Error'), '', ''))
    })
    
    expect(screen.getByText('Error')).toBeInTheDocument()
  })
  })
