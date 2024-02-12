import { getQuarterlyReports } from "components/CompanyInfo";
import { ReportsData } from "components/Reports/ReportsData/ui/ReportsData";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Text } from "components/Text";

export const Quarterly = memo(() => {
  const quarterlyReports = useSelector(getQuarterlyReports)
  const cashFlow = quarterlyReports?.cash.slice().reverse();

  return(
    <>
      
        {cashFlow && cashFlow?.length > 0 ? (
          <ReportsData report={cashFlow} reportType="CashFlow" period="quarterly" />
        ) : (
          <Text title="Report not Found" align="center" />
        )}
      </>
  )
})