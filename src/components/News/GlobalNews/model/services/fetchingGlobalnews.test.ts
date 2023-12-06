import { fetchingGlobalNews } from "./fetchingGlobalNews"

describe('Global news thunk', () => {
  test('should fetchingGlobalNews with resolved response', async() => {
    const mockNews = [
      {
        "publishedDate": "2023-10-19T22:00:09.000Z",
        "title": "Xi Jinping calls for ceasefire in Israel-Gaza war, says two-state solution is ‘fundamental way out’",
        "image": "https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/10/19/ace90641-0118-4671-b211-3ce4669f9aa3_ccf76346.jpg?itok=mlnC2VFw",
        "site": "scmp",
        "text": "Chinese president also says Beijing is willing to work with Arab countries for ‘comprehensive, just, and lasting solution’ to the crisis...",
        "url": "https://www.scmp.com/news/china/diplomacy/article/3238538/xi-jinping-calls-ceasefire-israel-gaza-war-says-two-state-solution-fundamental-way-out?utm_source=rss_feed"
      }
    ]

    //@ts-ignore
    global.fetch = jest.fn().mockResolvedValue({  
        ok: true,
        json: () => Promise.resolve(mockNews)
    })

    const dispatch = jest.fn()
    const thunk = fetchingGlobalNews()

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('globalNews/fetchingGlobalNews/pending')
    expect(end[0].type).toBe('globalNews/fetchingGlobalNews/fulfilled')
    expect(end[0].payload).toBe(mockNews)
  })

  test('should fetchingGlobalNews with rejected response', async() => {
    

    
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn()
    const thunk = fetchingGlobalNews()

    await thunk(dispatch, () => ({}), '')

    const {calls} = dispatch.mock
    const [start, end] = calls

    expect(calls).toHaveLength(2)
    expect(start[0].type).toBe('globalNews/fetchingGlobalNews/pending')
    expect(end[0].type).toBe('globalNews/fetchingGlobalNews/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Global News not Found')
  })
})