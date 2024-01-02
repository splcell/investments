import { fetchingPressReleases } from "./fetchingPressReleases"

describe('Press releases thunk', () => {
  test('should fetchingPressReleases with resolved response', async() => {
    const mockData = [
      {
        "symbol": "AAPL",
        "date": "2023-02-02 16:30:00",
        "title": "APPLE REPORTS FIRST QUARTER RESULTS",
        "text": "CUPERTINO, CALIF.--( BUSINESS WIRE )--APPLE® TODAY ANNOUNCED FINANCIAL RESULTS FOR ITS FISCAL 2023 FIRST QUARTER ENDED DECEMBER 31, 2022. THE COMPANY POSTED QUARTERLY REVENUE OF $117.2 BILLION, DOWN 5 PERCENT YEAR OVER YEAR, AND QUARTERLY EARNINGS PER DILUTED SHARE OF $1.88."
      }
    ]

    //@ts-ignore
    global.fetch = jest.fn().mockResolvedValue({  
      ok: true,
      json: () => Promise.resolve(mockData)
  })

  const dispatch = jest.fn()
  const thunk = fetchingPressReleases('aapl')

  await thunk(dispatch, () => ({}), '')

  const {calls} = dispatch.mock
  const [start, end] = calls

  expect(calls).toHaveLength(2)
  expect(start[0].type).toBe('companyNews/fetchingPressReleases/pending')
  expect(end[0].type).toBe('companyNews/fetchingPressReleases/fulfilled')
  expect(end[0].payload).toBe(mockData)
})

  test('should fetchingPressRealeases with rejected response', async() => {
    

    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn()
    const thunk = fetchingPressReleases('aapl')

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('companyNews/fetchingPressReleases/pending')
    expect(end[0].type).toBe('companyNews/fetchingPressReleases/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Press Releases not Found')
  })
})