import { fetchingSearchResults } from "./fetchingSearchResults"

describe('Sentimentnews thunk', () => {
  test('should fetchingSearchResults with resolved response', async() => {
    const mockResults = [{
      "symbol": "PRAA",
      "name": "PRA Group, Inc.",
      "currency": "USD",
      "stockExchange": "NasdaqGS",
      "exchangeShortName": "NASDAQ"
    },]

    //@ts-ignore
    global.fetch = jest.fn().mockResolvedValue({  
        ok: true,
        json: () => Promise.resolve(mockResults)
    })

    const dispatch = jest.fn()
    const thunk = fetchingSearchResults('PRAA')

    await thunk(dispatch, () => ({query: 'PRAA'}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('search/fetchingSearchResults/pending')
    expect(end[0].type).toBe('search/fetchingSearchResults/fulfilled')
    expect(end[0].payload).toBe(mockResults)
  })

  test('should fetchingGlobalNews with rejected response', async() => {
    

    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn()
    const thunk = fetchingSearchResults('PRAA')

    await thunk(dispatch, () => ({query: 'PRAA'}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('search/fetchingSearchResults/pending')
    expect(end[0].type).toBe('search/fetchingSearchResults/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('No Results')
  })
})