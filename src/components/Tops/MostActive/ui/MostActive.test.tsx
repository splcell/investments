import { render, screen, waitFor } from "@testing-library/react"
import { Active } from "components/Tops/model/types/tops"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { createReduxStore } from "store/store"
import { MostActive } from "./MostActive"
import { act } from "react-dom/test-utils"
import { fetchingMostActive } from "../model/services/fetchingMostActive"

describe('MostActiveComponent test', () => {
  const store = createReduxStore()
  const data: Active[] = [
    {
      "symbol": "MU",
      "name": "Micron Technology, Inc.",
      "change": 2.24,
      "price": 53.96,
      "changesPercentage": 4.331
    }
  ]

  test('Most active tickers render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MostActive />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingMostActive.fulfilled(data, ''))
    })

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
      expect(screen.getByText('MU')).toBeInTheDocument()
    });

    
  })

  test('Most active loading render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MostActive />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingMostActive.pending)
    })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('Most active error render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MostActive />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingMostActive.fulfilled([], ''))
      store.dispatch(fetchingMostActive.rejected(new Error('Error'), ''))
    })

    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})