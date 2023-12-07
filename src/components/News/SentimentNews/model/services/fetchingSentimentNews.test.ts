import { fetchingSentimentNews } from "./fetchingSentimentNews"

describe('Sentimentnews thunk', () => {
  test('should fetchingGlobalNews with resolved response', async() => {
    const mockNews = [
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

    //@ts-ignore
    global.fetch = jest.fn().mockResolvedValue({  
        ok: true,
        json: () => Promise.resolve(mockNews)
    })

    const dispatch = jest.fn()
    const thunk = fetchingSentimentNews()

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('sentimentNews/fetchingSentimentNews/pending')
    expect(end[0].type).toBe('sentimentNews/fetchingSentimentNews/fulfilled')
    expect(end[0].payload).toBe(mockNews)
  })

  test('should fetchingGlobalNews with rejected response', async() => {
    

    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn()
    const thunk = fetchingSentimentNews()

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('sentimentNews/fetchingSentimentNews/pending')
    expect(end[0].type).toBe('sentimentNews/fetchingSentimentNews/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Sentiment News not Found')
  })
})