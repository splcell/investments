import { Chart } from "components/Chart";
import {
  getCompanyError,
  getCompanyStatus,
  getDividend,
  getProfile,
} from "components/CompanyInfo/model/selectors/companyInfoSelectors";
import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Dividends.module.scss";
import { SeeAllLink } from "components/Links";
import { checkProps } from "helpers/functions/checkProps";

export const Dividends = memo(() => {
  const profile = useSelector(getProfile);
  const dividendsInfo = useSelector(getDividend);
  const isLoading = useSelector(getCompanyStatus);
  const error = useSelector(getCompanyError);
  const [chartData, setChartData] = useState<any[]>([]);
  const chartColor: string[] = ["#434348"];

  useEffect(() => {
    const newChartData: any[] = [];
    for (let i = 0; i < dividendsInfo.length; i++) {
      newChartData.unshift([
        new Date(dividendsInfo[i].date).getTime(),
        dividendsInfo[i].adjDividend,
      ]);
    }

    setChartData(newChartData);
  }, [dividendsInfo]);

  if (!dividendsInfo || dividendsInfo.length === 0) {
    return null;
  }

  console.log(dividendsInfo);

  return (
    <ContentBox>
      <Text title="Dividends" align="center" />
      <div className={styles.dividendInner}>
        <Chart
          chartData={chartData}
          text={`${profile?.companyName} Dividends (${profile?.currency})`}
          type="column"
          color={chartColor}
          rangeSelectorStatus={false}
          navigatorStatus={false}
          scrollBarStatus={false}
          width={900}
          pointWidth={40}
        />
        <div className={styles.dividendInfo}>
          <Text title="Last payment" align="center" size={17} />
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span>Date:</span>
              <span>{dividendsInfo[0].date}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Dividend ({profile?.currency}):</span>
              <span>{dividendsInfo[0].dividend.toFixed(2)}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Adjusted Dividend ({profile?.currency}):</span>
              <span>{dividendsInfo[0].adjDividend.toFixed(2)}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Payment Date:</span>
              <span>{checkProps(dividendsInfo[0].paymentDate)}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Record Date:</span>
              <span>{checkProps(dividendsInfo[0].recordDate)}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Declaration Date:</span>
              <span>{checkProps(dividendsInfo[0].declarationDate)}</span>
            </li>
          </ul>
          <SeeAllLink path="">See full Dividends Info</SeeAllLink>
        </div>
      </div>
    </ContentBox>
  );
});
