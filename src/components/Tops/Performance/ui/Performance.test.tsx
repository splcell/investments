import { act, render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { createReduxStore } from "store/store"
import { Performance } from "./Performance"
import { fetchingSectorsPerformance } from "../model/services/fetchingSectorsPerformance"

describe('Performance component test', () => {
  const store = createReduxStore()
  const data = [
    {
      "sector": "Real Estate",
      "changesPercentage": '47.3976468395652'
    },
    {
      "sector": "Technology",
      "changesPercentage": '211.59579270694476'
    }
  ]

  test('sectors performance list render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Performance />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingSectorsPerformance.fulfilled(data, ''))
    })

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
      expect(screen.getByText('Real Estate')).toBeInTheDocument()
    });


  })

  test('Performance loading render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Performance />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingSectorsPerformance.pending)
    })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('Performance error render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Performance />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingSectorsPerformance.rejected(new Error('Error'), ''))
    })

    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})