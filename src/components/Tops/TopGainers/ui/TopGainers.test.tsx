import { Gainer } from "components/Tops/model/types/tops"
import { createReduxStore } from "store/store"
import {screen, render, act, waitFor} from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { MostActive } from "components/Tops/MostActive/ui/MostActive"
import { fetchingGainers } from "../model/services/fetchingGainers"
import { TopGainers } from "./TopGainers"

describe('TopGainersComponent test', () => {
  const store = createReduxStore()
  const data: Gainer[] = [
    {
      "symbol": "MU",
      "name": "Micron Technology, Inc.",
      "change": 2.24,
      "price": 53.96,
      "changesPercentage": 4.331
    }
  ]

  test('TopGainers render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <TopGainers />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingGainers.fulfilled(data, ''))
    })

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
      expect(screen.getByText('MU')).toBeInTheDocument()
    });

    
  })

  test('Top gainers loading render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <TopGainers />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingGainers.pending)
    })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('Top gainers error render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <TopGainers />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingGainers.rejected(new Error('Error'), ''))
    })

    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})