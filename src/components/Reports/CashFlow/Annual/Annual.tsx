import { getAnnualReports } from "components/CompanyInfo";
import { ReportsData } from "components/Reports/ReportsData/ui/ReportsData";
import { memo} from "react";
import { useSelector } from "react-redux";
import { Text } from "components/Text";

export const Annual = memo(() => {
  const annualReports = useSelector(getAnnualReports);
  const cashFlow = annualReports?.cash.slice().reverse();

  return (
    <>
      
        {cashFlow && cashFlow?.length > 0 ? (
          <ReportsData report={cashFlow} reportType="CashFlow" period="annual" />
        ) : (
          <Text title="Report not Found" align="center" />
        )}
      </>
  );
});


