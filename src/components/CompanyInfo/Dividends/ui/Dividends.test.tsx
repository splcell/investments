import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { createReduxStore } from "store/store";
import { Dividends } from "./Dividends";
import { MemoryRouter } from "react-router-dom";
import { CompanyInfoActions } from "components/CompanyInfo/model/slice/companyInfoSlice";
import { act } from "react-dom/test-utils";
import { fetchingCompanyInfo } from "components/CompanyInfo/model/services/fetchingCompanyInfo";

describe("Dividends component", () => {
  const store = createReduxStore();

  

  test("Dividends render", async () => {
    const mockDividendsInfo = [
      {
        date: "2023-08-11",
        dividend: 0.24,
        adjDividend: 0.24,
        paymentDate: "2023-08-17",
        recordDate: "2023-08-14",
        declarationDate: "2023-08-03",
      },
    ];

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Dividends />
        </Provider>
      </MemoryRouter>
    );

    // Dispatch an action to populate dividendsInfo in the store
    act(() => {
      store.dispatch(CompanyInfoActions.setDividend(mockDividendsInfo));
    });

    expect(screen.getByText("Payment Date:")).toBeInTheDocument();
    
  });

  test('Dividends Loading', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Dividends />
        </Provider>
      </MemoryRouter>
    );

    act(() => {
      store.dispatch(fetchingCompanyInfo.pending());
    });
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })
  
  test('Dividends error', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Dividends/>
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingCompanyInfo.rejected(new Error('Error'), '', ''))
    })
    
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

});
