import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { KeyRatios } from "./KeyRatios";
import { CompanyInfoActions } from "components/CompanyInfo/model/slice/companyInfoSlice";
import { createReduxStore } from "store/store";
import { fetchingCompanyInfo } from "components/CompanyInfo/model/services/fetchingCompanyInfo";

describe("Key Ratios component", () => {
  const store = createReduxStore();

  test("Key Ratios render", async () => {
    const mockKeyRatios = [
      {
        "dividendYielTTM": 0.004808422331325606,
        "dividendYielPercentageTTM": 0.48084223313256064,
        "peRatioTTM": 31.77462936625599,
        "pegRatioTTM": 2.904127064762542,
        "payoutRatioTTM": 0.1549048920047425,
        "currentRatioTTM": 0.9880116717592975,
        "quickRatioTTM": 0.8433121369780053,
        "cashRatioTTM": 0.20621713876730807,
        "daysOfSalesOutstandingTTM": 58.07564866874519,
        "daysOfInventoryOutstandingTTM": 10.791292490321615,
        "operatingCycleTTM": 68.8669411590668,
        "daysOfPayablesOutstandingTTM": 106.72146803214763,
        "cashConversionCycleTTM": -37.85452687308083,
        "grossProfitMarginTTM": 0.4413112957720756,
        "operatingProfitMarginTTM": 0.2982141226502472,
        "pretaxProfitMarginTTM": 0.296740023742124,
        "netProfitMarginTTM": 0.2530623426432028,
        "effectiveTaxRateTTM": 0.14719174228036858,
        "returnOnAssetsTTM": 0.27509834563776475,
        "returnOnEquityTTM": 1.6078406995296408,
        "returnOnCapitalEmployedTTM": 0.551446146423833,
        "netIncomePerEBTTTM": 0.8528082577196314,
        "ebtPerEbitTTM": 0.9950569111381353,
        "ebitPerRevenueTTM": 0.2982141226502472,
        "debtRatioTTM": 0.3150690759338936,
        "debtEquityRatioTTM": 1.7875325845589418,
        "longTermDebtToCapitalizationTTM": 0.6052392537493568,
        "totalDebtToCapitalizationTTM": 0.6412597988847455,
        "interestCoverageTTM": 29.062039155860667,
        "cashFlowToDebtRatioTTM": 0.9950939795477459,
        "companyEquityMultiplierTTM": 5.673462491552152,
        "receivablesTurnoverTTM": 6.284906124456834,
        "payablesTurnoverTTM": 3.420117870661705,
        "inventoryTurnoverTTM": 33.82356657716001,
        "fixedAssetTurnoverTTM": 8.767814251401122,
        "assetTurnoverTTM": 1.087077369016657,
        "operatingCashFlowPerShareTTM": 7.086346850789586,
        "freeCashFlowPerShareTTM": 6.383821361723765,
        "cashPerShareTTM": 3.945976501455117,
        "operatingCashFlowSalesRatioTTM": 0.28840940814276583,
        "freeCashFlowOperatingCashFlowRatioTTM": 0.9008621079579892,
        "cashFlowCoverageRatiosTTM": 0.9950939795477459,
        "shortTermCoverageRatiosTTM": 6.9932941102043396,
        "capitalExpenditureCoverageRatioTTM": 10.08696048909572,
        "dividendPaidAndCapexCoverageRatioTTM": 4.254271859605911,
        "priceBookValueRatioTTM": 49.59257515173945,
        "priceToBookRatioTTM": 49.59257515173945,
        "priceToSalesRatioTTM": 8.016923949541464,
        "priceEarningsRatioTTM": 31.77462936625599,
        "priceToFreeCashFlowsRatioTTM": 30.85602803663239,
        "priceToOperatingCashFlowsRatioTTM": 27.880373930325753,
        "priceCashFlowRatioTTM": 27.880373930325753,
        "priceEarningsToGrowthRatioTTM": 2.904127064762542,
        "priceSalesRatioTTM": 8.016923949541464,
        "enterpriseValueMultipleTTM": 25.689835266518962,
        "priceFairValueTTM": 49.59257515173945,
        "dividendPerShareTTM": 0.95
      }
    ];

    
    render(
      <MemoryRouter>
        <Provider store={store}>
          <KeyRatios />
        </Provider>
      </MemoryRouter>
    );

    act(() => {
      store.dispatch(CompanyInfoActions.setRatios(mockKeyRatios));
    });

    expect(screen.getByText("P/E")).toBeInTheDocument();
    
  });

  test('Key Ratios Loading', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <KeyRatios />
        </Provider>
      </MemoryRouter>
    );

    act(() => {
      store.dispatch(fetchingCompanyInfo.pending());
    });
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })
  
  test('Key Ratios error', async() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <KeyRatios/>
        </Provider>
      </MemoryRouter>
    )

    act(() => {
      store.dispatch(fetchingCompanyInfo.rejected(new Error('Error'), '', ''))
    })
    
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

});