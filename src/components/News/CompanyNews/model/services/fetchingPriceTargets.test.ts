import { fetchingPressReleases } from "./fetchingPressReleases"
import { fetchingPriceTargets } from "./fetchingPriceTargets"

describe('Price targets thunk', () => {
  test('should fetchingPriceTargets with resolved response', async() => {
    const mockData = [
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

    //@ts-ignore
    global.fetch = jest.fn().mockResolvedValue({  
      ok: true,
      json: () => Promise.resolve(mockData)
  })

  const dispatch = jest.fn()
  const thunk = fetchingPriceTargets('aapl')

  await thunk(dispatch, () => ({}), '')

  const {calls} = dispatch.mock
  const [start, end] = calls

  expect(calls).toHaveLength(2)
  expect(start[0].type).toBe('companyNews/fetchingPriceTargets/pending')
  expect(end[0].type).toBe('companyNews/fetchingPriceTargets/fulfilled')
  expect(end[0].payload).toBe(mockData)
})

  test('should fetchingPriceTargets with rejected response', async() => {
    

    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn()
    const thunk = fetchingPriceTargets('aapl')

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('companyNews/fetchingPriceTargets/pending')
    expect(end[0].type).toBe('companyNews/fetchingPriceTargets/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Price Targets not Found')
  })
})