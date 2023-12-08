import { fetchingMostActive } from "./fetchingMostActive"

describe('MostActive thunk', () => {
  test('should fetchingMostActive with resolved response', async() => {
    const mockResults = [
      {
        "symbol": "MU",
        "name": "Micron Technology, Inc.",
        "change": 2.24,
        "price": 53.96,
        "changesPercentage": 4.331
      }
    ]

    //@ts-ignore
    global.fetch = jest.fn().mockResolvedValue({  
        ok: true,
        json: () => Promise.resolve(mockResults)
    })

    const dispatch = jest.fn()
    const thunk = fetchingMostActive()

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('mostActive/fetchingMostActive/pending')
    expect(end[0].type).toBe('mostActive/fetchingMostActive/fulfilled')
    expect(end[0].payload).toBe(mockResults)
  })

  test('should fetchingMostActive with rejected response', async() => {
    

    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn()
    const thunk = fetchingMostActive()

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('mostActive/fetchingMostActive/pending')
    expect(end[0].type).toBe('mostActive/fetchingMostActive/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Most Active tickers not found')
  })
})