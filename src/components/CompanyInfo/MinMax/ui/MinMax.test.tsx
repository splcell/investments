import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "store/store";
import { MinMax } from "./MinMax";
import { CompanyInfoActions } from "components/CompanyInfo/model/slice/companyInfoSlice";
import { fetchingCompanyInfo } from "components/CompanyInfo/model/services/fetchingCompanyInfo";

describe("MinMax component test", () => {
  const store = createReduxStore();

  

  test("MinMax render", async () => {
    const mockMetricsInfo = {
      price: 197.57,
      currency: "USD",
      yearHigh: 199.62,
      yearLow: 124.17
    }

    render(
      <MemoryRouter>
        <Provider store={store}>
          <MinMax />
        </Provider>
      </MemoryRouter>
    );

    act(() => {
      store.dispatch(CompanyInfoActions.setMetrics(mockMetricsInfo));
    });

    expect(screen.getByText(/52 Week High/i)).toBeInTheDocument();
    
  });

  test('Dividends Loading', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MinMax />
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
          <MinMax/>
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingCompanyInfo.rejected(new Error('Error'), '', ''))
    })
    
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

});