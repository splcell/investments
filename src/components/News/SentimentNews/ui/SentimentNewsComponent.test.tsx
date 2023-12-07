import { render, waitFor, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { createReduxStore } from "store/store"
import { SentimentNewsComponent } from "./SentimentNewsComponent"
import { act } from "react-dom/test-utils"
import { fetchingSentimentNews } from "../model/services/fetchingSentimentNews"

describe('Sentiment news component test', () => {
  const store = createReduxStore()

  test('sentiment news list render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SentimentNewsComponent />
        </Provider>
      </MemoryRouter>
    )

    const data = [
      {
        "symbol": "MSFT",
        "publishedDate": "2023-10-10T21:10:53.000Z",
        "title": "No Call Of Duty On Game Pass This Year, But Diablo IV May Arrive In 2024",
        "image": "https://cdn.benzinga.com/files/images/story/2023/10/10/shutterstock_2093878507_1.jpg?optimize=medium&dpr=1&auto=webp&height=800&width=1456&fit=crop",
        "site": "benzinga",
        "text": "Activision Blizzard Inc (NASDAQ: ATVI) outlined its plans for Xbox Game Pass in the wake of the impending Microsoft Corp (NASDAQ: MSFT) acquisition, indicating it intends to start offering its games on the service in 2024. The acquisition is set to conclude shortly, but the company has made it clear that highly anticipated titles such as Call of Duty: Modern Warfare III and Diablo IV will not be available on Game Pass this year. See Also: Microsoft Announces Games Leaving Xbox Game Pass In Octob...",
        "url": "https://www.benzinga.com/general/gaming/23/10/35171171/no-call-of-duty-on-game-pass-this-year-but-diablo-iv-may-arrive-in-2024",
        "sentiment": "Positive",
        "sentimentScore": 0.9812
      }
    ]

    act(() => {
      store.dispatch(fetchingSentimentNews.fulfilled(data, ''))
    })

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });
    
    expect(screen.getByText(/Published:/i)).toBeInTheDocument()
  })

  test('Sentiment news list loading', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SentimentNewsComponent />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingSentimentNews.pending)
    })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('Sentiment news list error', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SentimentNewsComponent />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingSentimentNews.fulfilled([], ''))
      store.dispatch(fetchingSentimentNews.rejected(new Error('Error'), ''))
    })
    
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

})
