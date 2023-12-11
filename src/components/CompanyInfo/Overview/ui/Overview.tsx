import {
  getCompanyError,
  getCompanyStatus,
  getProfile,
} from "components/CompanyInfo/model/selectors/companyInfoSelectors";
import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo } from "react";
import { useSelector } from "react-redux";
import styles from "./Overview.module.scss";
import { checkProps } from "helpers/functions/checkProps";
import { convertData } from "helpers/functions/convertData";
import { Link } from "react-router-dom";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const Overview = memo(() => {
  const profile = useSelector(getProfile);
  const isLoading = useSelector(getCompanyStatus);
  const error = useSelector(getCompanyError);

  return (
    <CheckDataHoc
      isLoading={isLoading}
      error={error}
      boxWidth={1400}
      boxHeight={212}
      className={styles.loadingBox}
      marginTop={73}
      title="Company Overview"
      align="center"
    >
      <ContentBox>
        <Text title="Company Overview" align="center" />
        <ul className={styles.overviewList}>
          <li className={styles.overviewItem}>
            <span>Ticker:</span>
            <span>{profile?.symbol}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Country:</span>
            <span>{checkProps(profile?.country)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>ISIN:</span>
            <span>{checkProps(profile?.isin)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>State:</span>
            <span>{checkProps(profile?.state)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Company Name:</span>
            <span>{profile?.companyName}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>City:</span>
            <span>{checkProps(profile?.city)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Market Cap (mln {profile?.currency}):</span>
            <span>{convertData(profile?.mktCap)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>CEO:</span>
            <span>{checkProps(profile?.ceo)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Sector:</span>
            <span>{checkProps(profile?.sector)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Employees:</span>
            <span>
              {checkProps(Number(profile?.fullTimeEmployees).toLocaleString())}
            </span>
          </li>
          <li className={styles.overviewItem}>
            <span>Industry:</span>
            <span>{checkProps(profile?.industry)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Website:</span>
            <Link to={String(profile?.website)} target="_blank">
              {checkProps(profile?.website)}
            </Link>
          </li>
          <li className={styles.overviewItem}>
            <span>Exchange:</span>
            <span>{checkProps(profile?.exchangeShortName)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>IPO date:</span>
            <span>{checkProps(profile?.ipoDate)}</span>
          </li>
        </ul>
      </ContentBox>
    </CheckDataHoc>
  );
});
