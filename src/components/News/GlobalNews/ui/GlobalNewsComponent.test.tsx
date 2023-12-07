// import { render, screen, waitFor } from "@testing-library/react"
// import { Provider } from "react-redux"
// import { MemoryRouter } from "react-router-dom"
// import { createReduxStore } from "store/store"
// import { GlobalNewsComponent } from "./GlobalNewsComponent"
// import { act } from "react-dom/test-utils"
// import { GlobalNewsActions } from "../model/slice/globalNewsSlice"
// import { fetchingGlobalNews } from "../model/services/fetchingGlobalNews"

// describe('GlobalNews component test', () => {
//   const store = createReduxStore()

//   test('Global news list render', async() => {
//     render(
//       <MemoryRouter>
//         <Provider store={store}>
//           <GlobalNewsComponent />
//         </Provider>
//       </MemoryRouter>
//     )

//     const data = [
//       {
//         publishedDate: "2023-10-19T22:00:09.000Z",
//         title:
//           "Xi Jinping calls for ceasefire in Israel-Gaza war, says two-state solution is ‘fundamental way out’",
//         image:
//           "https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/10/19/ace90641-0118-4671-b211-3ce4669f9aa3_ccf76346.jpg?itok=mlnC2VFw",
//         site: "scmp",
//         text: "Chinese president also says Beijing is willing to work with Arab countries for ‘comprehensive, just, and lasting solution’ to the crisis...",
//         url: "https://www.scmp.com/news/china/diplomacy/article/3238538/xi-jinping-calls-ceasefire-israel-gaza-war-says-two-state-solution-fundamental-way-out?utm_source=rss_feed",
//       }
//     ]

//     act(() => {
//       store.dispatch(fetchingGlobalNews.fulfilled(data, ''))
//     })

//     await waitFor(() => {
//       expect(screen.queryByText("Loading...")).toBeNull();
//     });

//     expect(screen.getByText(/Published:/i)).toBeInTheDocument()
//   })

//   test('Global news list loading', () => {
//     render(
//       <MemoryRouter>
//         <Provider store={store}>
//           <GlobalNewsComponent />
//         </Provider>
//       </MemoryRouter>
//     )

//     act(() => {
//       store.dispatch(fetchingGlobalNews.pending)
//     })

//     expect(screen.getByText('Loading...')).toBeInTheDocument()
//   })

//   test('Global news list error', async() => {
//     render(
//       <MemoryRouter>
//         <Provider store={store}>
//           <GlobalNewsComponent />
//         </Provider>
//       </MemoryRouter>
//     )

//     act(() => {
//       store.dispatch(fetchingGlobalNews.fulfilled([], ''))
//       store.dispatch(fetchingGlobalNews.rejected(new Error('Error'), ''))
//     })
    
//     expect(screen.getByText('Error')).toBeInTheDocument()
//   })
// })

import { render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { createReduxStore } from "store/store"
import { GlobalNewsComponent } from "./GlobalNewsComponent"
import { act } from "react-dom/test-utils"
import { GlobalNewsActions } from "../model/slice/globalNewsSlice"
import { fetchingGlobalNews } from "../model/services/fetchingGlobalNews"

describe('GlobalNews component test', () => {
  const store = createReduxStore()

  test('Global news list render', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <GlobalNewsComponent />
        </Provider>
      </MemoryRouter>
    )

    const data = [
      {
        publishedDate: "2023-10-19T22:00:09.000Z",
        title:
          "Xi Jinping calls for ceasefire in Israel-Gaza war, says two-state solution is ‘fundamental way out’",
        image:
          "https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/10/19/ace90641-0118-4671-b211-3ce4669f9aa3_ccf76346.jpg?itok=mlnC2VFw",
        site: "scmp",
        text: "Chinese president also says Beijing is willing to work with Arab countries for ‘comprehensive, just, and lasting solution’ to the crisis...",
        url: "https://www.scmp.com/news/china/diplomacy/article/3238538/xi-jinping-calls-ceasefire-israel-gaza-war-says-two-state-solution-fundamental-way-out?utm_source=rss_feed",
      }
    ]

    act(() => {
      store.dispatch(fetchingGlobalNews.fulfilled(data, ''))
    })

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    expect(screen.getByText(/Published:/i)).toBeInTheDocument()
  })

  test('Global news list loading', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <GlobalNewsComponent />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingGlobalNews.pending)
    })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('Global news list error', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <GlobalNewsComponent />
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingGlobalNews.fulfilled([], ''))
      store.dispatch(fetchingGlobalNews.rejected(new Error('Error'), ''))
    })
    
    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})