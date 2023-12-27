import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "store/store";
import { CompanyChart } from "./CompanyChart";
import { Provider, ReactReduxContext, useSelector } from "react-redux";
import { act } from "react-dom/test-utils";
import react from "react";
import { getProfile } from "components/CompanyInfo/model/selectors/companyInfoSelectors";

describe('Company chart component test', () => {
  const store = createReduxStore()

  test('Company chart render', () => {

    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyChart />
        </Provider>
      </MemoryRouter>
    )

    expect(screen.getByText(/Created with Highcharts 11.2.0/i)).toBeInTheDocument()

  })

  
  test('Company chart loading', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CompanyChart />
        </Provider>
      </MemoryRouter>
    );
  
    const mockProfile = {
      companyName: 'Test Company',
      symbol: 'TEST',
    };
  
    jest.mock('react-redux', () => ({
      useSelector: jest.fn(fn => fn()),
    }));
  
    // Мокируем данные для графика
    const mockChartData = [
      [new Date('2022-01-01').getTime(), 100],
      [new Date('2022-01-02').getTime(), 150],
      [new Date('2022-01-03').getTime(), 200],
    ];
    jest.spyOn(react, 'useState')
      .mockReturnValueOnce([mockChartData, jest.fn()]) // Для данных графика
      .mockReturnValueOnce([true, jest.fn()]) // Для состояния загрузки
      .mockReturnValueOnce(['Error message', jest.fn()]); // Для сообщения об ошибке
  
    // Ждем, пока компонент загрузится и отобразит сообщение Highcharts
    await waitFor(() => {
      expect(screen.getByText(/Created with Highcharts 11.2.0/i)).toBeInTheDocument();
    });
  });
})