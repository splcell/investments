import { render, screen, act, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "store/store";
import { CompanyNews } from "./CompanyNews";
import { Provider } from "react-redux";
import { CompanyNewsActions } from "../model/slice/companyNewsSlice";
import { CompanyInfoActions, fetchingCompanyInfo } from "components/CompanyInfo";
import { fetchingPressReleases } from "../model/services/fetchingPressReleases";
import { fireEvent } from "highcharts";
import { fetchingPriceTargets } from "../model/services/fetchingPriceTargets";

describe('Company news component test', () => {
  const store = createReduxStore()

  test('Company News render', () => {
    const mockNews = [
      {
        "symbol": "AAPL",
        "publishedDate": "2023-12-18 06:03:28",
        "title": "Nancy Pelosi trading bot update: Massive returns this last year",
        "image": "https://cdn.snapi.dev/images/v1/x/4/nancy-pelosi-trading-bot-update-massive-returns-this-last-year-2199620.jpg",
        "site": "Finbold",
        "text": "Alternative trading platform Quiver Quantitative unveiled last month a trading bot that mirrors the stock trades of former Speaker of the House and US Representative Nancy Pelosi and her family.",
        "url": "https://finbold.com/nancy-pelosi-trading-bot-update-massive-returns-this-last-year/?utm_source=snapi"
      },
    ]

    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(CompanyInfoActions.setNews(mockNews))
    })

    expect(screen.getByText('See all Company News')).toBeInTheDocument()
  })

  test('Company News loading', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      //@ts-ignore
      store.dispatch(fetchingCompanyInfo.pending())
    })

    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  })

  test('Company News error', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingCompanyInfo.rejected(new Error('Error'), '', ''))
    })

    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  test('Press Releases render', () => {

    const mockReleases = [
      {
        "symbol": "AAPL",
        "date": "2023-02-02 16:30:00",
        "title": "APPLE REPORTS FIRST QUARTER RESULTS",
        "text": "CUPERTINO, CALIF.--( BUSINESS WIRE )--APPLE® TODAY ANNOUNCED FINANCIAL RESULTS FOR ITS FISCAL 2023 FIRST QUARTER ENDED DECEMBER 31, 2022. THE COMPANY POSTED QUARTERLY REVENUE OF $117.2 BILLION, DOWN 5 PERCENT YEAR OVER YEAR, AND QUARTERLY EARNINGS PER DILUTED SHARE OF $1.88."
      }
    ]

    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    )

    const releasesTab = screen.getByText('Press Releases')


    act(() => {
      store.dispatch(fetchingPressReleases.fulfilled(mockReleases, '', ''))
    })

    expect(releasesTab).toBeInTheDocument()
    
    act(() => {
      fireEvent(releasesTab, 'click')
    })
    expect(screen.getByText('APPLE REPORTS FIRST QUARTER RESULTS')).toBeInTheDocument()
  })

  test('Press Releases loading', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      //@ts-ignore
      store.dispatch(fetchingPressReleases.pending())
    })
    
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
  })

  test('Press Releases error', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingPressReleases.rejected(new Error('Error'), '', ''))
    })

    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  test('Price Targets render', () => {
    const mockTargets = [
      {
        "symbol": "AAPL",
        "publishedDate": "2023-09-18T02:36:00.000Z",
        "newsURL": "https://www.benzinga.com/analyst-ratings/analyst-color/23/09/34673717/apple-analyst-says-iphone-15-pro-pro-max-preorders-strong-out-of-the-gates-increasi",
        "newsTitle": "Apple Analyst Says iPhone 15 Pro, Pro Max Preorders Strong Out Of The Gates, Increasing Confidence In Estimates For Holiday Quarter",
        "analystName": "Daniel Ives",
        "priceTarget": 240,
        "adjPriceTarget": 240,
        "priceWhenPosted": 175.01,
        "newsPublisher": "Benzinga",
        "newsBaseURL": "benzinga.com",
        "analystCompany": "Wedbush"
      }
    ]

    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    )

    const targetsTab = screen.getByText('Price Targets')
    act(() => {
      store.dispatch(fetchingPriceTargets.fulfilled(mockTargets, '', ''))
    })

    expect(targetsTab).toBeInTheDocument()

    act(() => {
      fireEvent(targetsTab, 'click')
    })

    expect(screen.getByText('Wedbush')).toBeInTheDocument()
  })

  test('Price Targets loading', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    );
    act(() => {
      //@ts-ignore
      store.dispatch(fetchingPriceTargets.pending());
    });
    
    await waitFor(() => {
      expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });
  });

  test('Price Targets error', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyNews />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingPriceTargets.rejected(new Error('Error'), '', ''))
    })

    expect(screen.getByText('Error')).toBeInTheDocument()
  })

})