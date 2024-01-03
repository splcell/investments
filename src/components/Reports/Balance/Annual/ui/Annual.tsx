import { getAnnualReports, getProfile } from "components/CompanyInfo";
import { memo } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { convertData } from "helpers/functions/convertData";
import { Sparklines, SparklinesBars } from "react-sparklines";
import styles from "./Annual.module.scss";

const Annual = memo(() => {
  const profile = useSelector(getProfile);
  const annualReports = useSelector(getAnnualReports);
  const balance = annualReports?.balance.slice().reverse();
  const tableData: any = {
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

  balance?.forEach((item) => {
    tableData["Cash and Cash Equivalents"].push(item.cashAndCashEquivalents);
    tableData["Short Term Investments"].push(item.shortTermInvestments);
    tableData["Cash and Short Term Investments"].push(
      item.cashAndShortTermInvestments
    );
    tableData["Net Receivables"].push(item.netReceivables);
    tableData["Inventory"].push(item.inventory);
    tableData["Total Assets"].push(item.totalAssets);
    tableData["Short Term Debt"].push(item.shortTermDebt);
    tableData["Tax Payables"].push(item.taxPayables);
    tableData["Other Current Liabilities"].push(item.otherCurrentLiabilities);
    tableData["Total Current Liabilities"].push(item.totalCurrentLiabilities);
    tableData["Long Term Debt"].push(item.longTermDebt);
    tableData["Other non Current Liabilities"].push(
      item.otherNonCurrentLiabilities
    );
    tableData["Total non Current Liabilities"].push(
      item.totalNonCurrentLiabilities
    );
    tableData["Other Liabilities"].push(item.otherLiabilities);
    tableData["Total Liabilities"].push(item.totalLiabilities);
    tableData["Total Equity"].push(item.totalEquity);
    tableData["Other Total Stockholders Equity"].push(
      item.othertotalStockholdersEquity
    );
    tableData["Total Stockholders Equity"].push(item.totalLiabilities);
    tableData["Minority Interest"].push(item.minorityInterest);
    tableData["Total Debt"].push(item.totalDebt);
    tableData["Net Debt"].push(item.netDebt);
    tableData["Common Stock (mln stocks)"].push(item.commonStock);
  });

  Object.keys(tableData).map((key) => {
    tableData[key].unshift(key);
  });


  return (
    <Table striped bordered>
      <thead className={styles.tableHeader}>
        <tr>
          <th>Balance Annual (mln {profile?.currency})</th>
          {balance?.map((item) => (
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
                      {typeof item !== "string" ? convertData(item) : item}
                    </td>
                    
                  </>
                ))}
              </tr>
            ) : null}
          </>
        ))}
      </tbody>
    </Table>
  );
});

export default Annual;
