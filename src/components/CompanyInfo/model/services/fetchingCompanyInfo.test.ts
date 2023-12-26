import { fetchingCompanyInfo } from "./fetchingCompanyInfo"

describe('CompanyInfo thunk', () => {
  test('should fetchingGlobalNews with resolved response', async() => {
    const mockData = [
      {
        "dividendYielTTM": 0,
        "volume": 128538401,
        "yearHigh": 199.62,
        "yearLow": 124.17
      },
    ]

    //@ts-ignore
    global.fetch = jest.fn().mockResolvedValue({  
        ok: true,
        json: () => Promise.resolve(mockData)
    })

    const dispatch = jest.fn()
    const thunk = fetchingCompanyInfo('aapl')

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(11)
    expect(start[0].type).toBe('companyInfo/fetchingCompanyInfo/pending')
    expect(end[0].type).toBe('companyInfo/cleanData')
  })

  test('should fetchingGlobalNews with rejected response', async() => {
    

    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn()
    const thunk = fetchingCompanyInfo('aapl')

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('companyInfo/fetchingCompanyInfo/pending')
    expect(end[0].type).toBe('companyInfo/fetchingCompanyInfo/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Info not Found')
  })
})