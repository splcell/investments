import { getQuarterlyReports } from "components/CompanyInfo";
import { memo } from "react";
import { useSelector } from "react-redux";
import { ReportsData } from "components/Reports/ReportsData/ui/ReportsData";
import { Text } from "components/Text";

const Quarterly = memo(() => {
  const quarterlyReports = useSelector(getQuarterlyReports);
  const balance = quarterlyReports?.balance.slice().reverse();

  return(
    <>
      {balance && balance?.length > 0 
        ? <ReportsData report={balance} reportType="Balance" period="quarterly"/>
        : <Text title="Report not Found" align="center"/>
      }
    </>
  )
})

export default Quarterly