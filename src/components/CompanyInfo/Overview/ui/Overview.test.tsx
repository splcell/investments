import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "store/store";
import { Overview } from "./Overview";
import { Provider } from "react-redux";
import { CompanyInfoActions } from "components/CompanyInfo/model/slice/companyInfoSlice";
import { fetchingCompanyInfo } from "components/CompanyInfo/model/services/fetchingCompanyInfo";

describe("Company Overview component test", () => {
  const store = createReduxStore();

  test("Company Overview render", async () => {
    const mockOverviewInfo = 
      {
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
      };

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Overview />
        </Provider>
      </MemoryRouter>
    );

    // Dispatch an action to populate dividendsInfo in the store
    act(() => {
      store.dispatch(CompanyInfoActions.setProfile(mockOverviewInfo));
    });

    expect(screen.getByText("Ticker:")).toBeInTheDocument();
    
  });

  test('Company Overview Loading', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Overview />
        </Provider>
      </MemoryRouter>
    );

    act(() => {
      store.dispatch(fetchingCompanyInfo.pending());
    });
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })
  
  test('Company Overview error', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Overview/>
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingCompanyInfo.rejected(new Error('Error'), '', ''))
    })
    
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

});