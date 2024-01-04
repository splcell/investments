import { getAnnualReports } from "components/CompanyInfo";
import { memo } from "react";
import { useSelector } from "react-redux";
import { ReportsData } from "components/Reports/ReportsData/ui/ReportsData";
import { Text } from "components/Text";

const Annual = memo(() => {
  const annualReports = useSelector(getAnnualReports);
  const balance = annualReports?.balance.slice().reverse();
  
  return (
    <>
      {balance && balance?.length > 0 
        ? <ReportsData report={balance} reportType="Balance" period="annual"/>
        : <Text title="Report not Found" align="center"/>
      }
    </>
    
  );
});

export default Annual;
