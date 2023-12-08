import { createReduxStore } from "store/store"
import { SearchData } from "../model/types/search";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Search } from "./Search";
import { fetchingSearchResults } from "../model/services/fetchingSearchResults";
import { act } from "react-dom/test-utils";

describe('Search component test', () => {
  const store = createReduxStore()

  test('search results render test', async() => {
    const data: SearchData[] = [
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
    ];


    render(
      <MemoryRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </MemoryRouter>
    )
  
    act(() => {
      store.dispatch(fetchingSearchResults.fulfilled(data, '', ''))
    })
    
    expect(screen.getByText(/PRAA/i)).toBeInTheDocument()
  })

  test('render full results link', () => {
    const data: SearchData[] = [
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
  
      {
        symbol: "PRAA",
        name: "PRA Group, Inc.",
        currency: "USD",
        stockExchange: "NasdaqGS",
        exchangeShortName: "NASDAQ",
      },
    ];
  
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </MemoryRouter>
    )
  
    act(() => {
      store.dispatch(fetchingSearchResults.fulfilled(data, '', ''))
    })
    
    expect(screen.getByText('See All Results')).toBeInTheDocument()
  })
  
})