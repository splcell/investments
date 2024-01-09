import { getQuarterlyReports } from "components/CompanyInfo";
import { memo } from "react";
import { useSelector } from "react-redux";
import { ReportsData } from "components/Reports/ReportsData/ui/ReportsData";
import { Text } from "components/Text";

const Quarterly = memo(() => {
  const quarterlyReports = useSelector(getQuarterlyReports);
  const income = quarterlyReports?.income.slice().reverse();

  return(
    <>
      {income && income?.length > 0 
        ? <ReportsData report={income} reportType="Income" period="quarterly"/>
        : <Text title="Report not Found" align="center"/>
      }
    </>
  )
})

export default Quarterly