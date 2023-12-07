
import { render, screen } from "@testing-library/react"
import { NewsItem } from "./NewsItem"
import { MemoryRouter } from "react-router-dom"

describe('NewsItem component test', () => {
  test('Global news type data render', () => {
    const data = {
      "publishedDate": "2023-10-19T22:00:09.000Z",
      "title": "Xi Jinping calls for ceasefire in Israel-Gaza war, says two-state solution is ‘fundamental way out’",
      "image": "https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/10/19/ace90641-0118-4671-b211-3ce4669f9aa3_ccf76346.jpg?itok=mlnC2VFw",
      "site": "scmp",
      "text": "Chinese president also says Beijing is willing to work with Arab countries for ‘comprehensive, just, and lasting solution’ to the crisis...",
      "url": "https://www.scmp.com/news/china/diplomacy/article/3238538/xi-jinping-calls-ceasefire-israel-gaza-war-says-two-state-solution-fundamental-way-out?utm_source=rss_feed"
    }

    render(
        <MemoryRouter>
          <NewsItem globalNews={data} />
        </MemoryRouter>
    )

    expect(screen.getByText(/Published:/i)).toBeInTheDocument()
  })

  test('Sentiment news type data render', () => {
    const data = 
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

      render(
        <MemoryRouter>
          <NewsItem sentimentNews={data} />
        </MemoryRouter>
    )

    expect(screen.getByText(/Published:/i)).toBeInTheDocument()
  })
})