import { fetchingSectorsPerformance } from "./fetchingSectorsPerformance"

describe('Performance thunk', () => {
  test('should fetchingSectorsPerformance with resolved response', async() => {
    const mockResults = [
      {
        "sector": "Real Estate",
        "changesPercentage": '47.3976468395652'
      },
      {
        "sector": "Technology",
        "changesPercentage": '211.59579270694476'
      }
    ]

    //@ts-ignore
    global.fetch = jest.fn().mockResolvedValue({  
        ok: true,
        json: () => Promise.resolve(mockResults)
    })

    const dispatch = jest.fn()
    const thunk = fetchingSectorsPerformance()

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('performance/fetchingSectorsPerformance/pending')
    expect(end[0].type).toBe('performance/fetchingSectorsPerformance/fulfilled')
    expect(end[0].payload).toBe(mockResults)
  })

  test('should fetchingSectorsPerformance with rejected response', async() => {
    

    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn()
    const thunk = fetchingSectorsPerformance()

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('performance/fetchingSectorsPerformance/pending')
    expect(end[0].type).toBe('performance/fetchingSectorsPerformance/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Sectors Performance not Found')
  })
})