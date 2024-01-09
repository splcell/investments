import { CompanyReport, getProfile } from "components/CompanyInfo";
import { Sparkline } from "components/Sparkline";
import { convertData } from "helpers/functions/convertData";
import { memo, useCallback, useMemo } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import styles from './ReportsData.module.scss'

interface ReportsDataProps {
  report: CompanyReport[];
  reportType: "Balance" | "Income" | "CashFlow";
  period: "annual" | "quarterly";
}

export const ReportsData = memo(
  ({ report, reportType, period }: ReportsDataProps) => {
    const profile = useSelector(getProfile);

    const tableData = useMemo(() => {
      let newData: any;
      

      switch (reportType) {
        case "Balance":
          newData = {
            "Cash and Cash Equivalents": [],
            "Short Term Investments": [],
            "Cash and Short Term Investments": [],
            "Net Receivables": [],
            Inventory: [],
            "Other Current Assets": [],
            "Total Current Assets": [],
            "Property Plant EquipmentNet": [],
            "Intangible Assets": [],
            Goodwill: [],
            "Long Term Investments": [],
            "Other Non Current Assets": [],
            "Tax Assets": [],
            "Total Non Current Assets": [],
            "Other Assets": [],
            "Account Payables": [],
            "Total Assets": [],
            "Short Term Debt": [],
            "Tax Payables": [],
            "Other Current Liabilities": [],
            "Total Current Liabilities": [],
            "Long Term Debt": [],
            "Other non Current Liabilities": [],
            "Total non Current Liabilities": [],
            "Other Liabilities": [],
            "Total Liabilities": [],
            "Total Equity": [],
            "Other Total Stockholders Equity": [],
            "Total Stockholders Equity": [],
            "Minority Interest": [],
            "Total Debt": [],
            "Net Debt": [],
            "Common Stock (mln stocks)": [],
          };

          report?.forEach((item) => {
            newData["Cash and Cash Equivalents"].push(item.cashAndCashEquivalents);
            newData["Short Term Investments"].push(item.shortTermInvestments);
            newData["Cash and Short Term Investments"].push(
              item.cashAndShortTermInvestments
            );
            newData["Net Receivables"].push(item.netReceivables);
            newData["Inventory"].push(item.inventory);
            newData["Total Assets"].push(item.totalAssets);
            newData["Short Term Debt"].push(item.shortTermDebt);
            newData["Tax Payables"].push(item.taxPayables);
            newData["Other Current Liabilities"].push(item.otherCurrentLiabilities);
            newData["Total Current Liabilities"].push(item.totalCurrentLiabilities);
            newData["Long Term Debt"].push(item.longTermDebt);
            newData["Other non Current Liabilities"].push(
              item.otherNonCurrentLiabilities
            );
            newData["Total non Current Liabilities"].push(
              item.totalNonCurrentLiabilities
            );
            newData["Other Liabilities"].push(item.otherLiabilities);
            newData["Total Liabilities"].push(item.totalLiabilities);
            newData["Total Equity"].push(item.totalEquity);
            newData["Other Total Stockholders Equity"].push(
              item.othertotalStockholdersEquity
            );
            newData["Total Stockholders Equity"].push(item.totalStockholdersEquity);
            newData["Minority Interest"].push(item.minorityInterest);
            newData["Total Debt"].push(item.totalDebt);
            newData["Net Debt"].push(item.netDebt);
            newData["Common Stock (mln stocks)"].push(item.commonStock);
          });
        
          Object.keys(newData).map((key) => {
            newData[key].unshift(key);
          });

          return newData
        case "Income":
          newData = {
            Revenue: [],
            "Cost of Revenue": [],
            "Gross Profit": [],
            "Gross Profit Ratio %": [],
            "Research and Development Expenses": [],
            "General and Administrative Expenses": [],
            "Selling and Marketing Expenses": [],
            "Selling General and Administrative Expenses": [],
            "Other Expenses": [],
            "Operating Expenses": [],
            "Interest Income": [],
            "Interest Expense": [],
            "Depreciation and Amortization": [],
            "EBITDA": [],
            "EBITDA Ratio %": [],
            "Operating Income": [],
            "Operating Income Ratio %": [],
            "Income Before Tax": [],
            "Income Before Tax Ratio %": [],
            "Income Tax Expense": [],
            "Net Income": [],
            "Net Income Ratio %": [],
            "EPS": [],
            "EPS Diluted": [],
          };

          report?.forEach((item) => {
            newData["Revenue"].push(item.revenue);
            newData["Cost of Revenue"].push(item.costOfRevenue);
            newData["Gross Profit"].push(
              item.grossProfit
            );
            newData["Gross Profit Ratio %"].push(+item.grossProfitRatio);
            newData["Research and Development Expenses"].push(item.researchAndDevelopmentExpenses);
            newData["General and Administrative Expenses"].push(item.generalAndAdministrativeExpenses);
            newData["Selling and Marketing Expenses"].push(item.sellingAndMarketingExpenses);
            newData["Selling General and Administrative Expenses"].push(item.sellingGeneralAndAdministrativeExpenses);
            newData["Other Expenses"].push(item.otherExpenses);
            newData["Operating Expenses"].push(item.operatingExpenses);
            newData["Interest Income"].push(item.interestIncome);
            newData["Interest Expense"].push(
              item.interestExpense
            );
            newData["Depreciation and Amortization"].push(
              item.depreciationAndAmortization
            );
            newData["EBITDA"].push(item.ebitda);
            newData["EBITDA Ratio %"].push(item.ebitdaratio);
            newData["Operating Income"].push(item.operatingIncome);
            newData["Operating Income Ratio %"].push(
              item.operatingIncomeRatio
            );
            newData["Income Before Tax"].push(item.incomeBeforeTax);
            newData["Income Before Tax Ratio %"].push(item.incomeBeforeTaxRatio);
            newData["Net Income"].push(item.netIncome);
            newData["Net Income Ratio %"].push(item.netIncomeRatio);
            newData["EPS"].push(item.eps);
            newData["EPS Diluted"].push(item.epsdiluted);
          });
        
          Object.keys(newData).map((key) => {
            newData[key].unshift(key);
          });

          return newData

        case "CashFlow":
      }

      return null
    }, [report, reportType]);


    const renderItem = useCallback((item: string | number, key: any[]) => {
      console.log(key[0]);
      if (typeof item !== "string") {
        if (typeof item === "number" && item.toString().includes(".")) {
          if (typeof key[0] === "string" && key[0].indexOf("EPS") === -1) {
            return (item * 100).toFixed(1);
          }
        } else {
          return convertData(item);
        }
      }

      if(typeof key[0] === "string" && key[0].indexOf("EPS") !== -1 && typeof item !== 'number'){
        return (
          <>
            {item} ({profile?.currency})
          </>
        )
      }
      
      return item;
    }, []);
    

    if(period === "quarterly"){
      return (
        <Table striped bordered>
      <thead className={styles.tableHeader}>
        <tr>
          <th>{profile?.symbol} {reportType} Quarterly (mln {profile?.currency})</th>
          {report?.map((item) => (
            <th key={item.date}>{`${item.period} ${item.calendarYear}`}</th>
          ))}
          <th>Chart</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tableData).map((key) => (
          <>
            {tableData[key] && tableData[key].length > 1 ? (
              <tr key={key}>
                {tableData[key].map((item: any, index: number) => (
                  <>
                    <td align="center" key={index}>
                      {renderItem(item, tableData[key])}
                    </td>
                  </>
                ))}
                <td>
                  {<Sparkline sparklineData={tableData[key]}/>}
                </td>
              </tr>
            ) : null}
          </>
        ))}
      </tbody>
      </Table>
      )

    }

    return (
      <Table striped bordered>
      <thead className={styles.tableHeader}>
        <tr>
          <th>{profile?.symbol} {reportType} Annual (mln {profile?.currency})</th>
          {report?.map((item) => (
            <th key={item.date}>{item.date}</th>
          ))}
          <th>Chart</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tableData).map((key) => (
          <>
            {tableData[key] && tableData[key].length > 1 ? (
              <tr key={key}>
                {tableData[key].map((item: any, index: number) => (
                  <>
                    <td align="center" key={index}>
                      {renderItem(item, tableData[key])}
                    </td>
                  </>
                ))}
                <td>
                  {<Sparkline sparklineData={tableData[key]}/>}
                </td>
              </tr>
            ) : null}
          </>
        ))}
      </tbody>
    </Table>
    );
  }
);
