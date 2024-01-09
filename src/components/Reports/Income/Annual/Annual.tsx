import { getAnnualReports } from "components/CompanyInfo";
import { ReportsData } from "components/Reports/ReportsData/ui/ReportsData";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Text } from "components/Text";

const Annual = memo(() => {
  const annualReports = useSelector(getAnnualReports);
  const income = annualReports?.income.slice().reverse();
  
  return (
    <>
      {income && income?.length > 0 
        ? <ReportsData report={income} reportType="Income" period="annual"/>
        : <Text title="Report not Found" align="center"/>
      }
    </>
    
  );
});

export default Annual;