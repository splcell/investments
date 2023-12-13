import {
  getCompanyError,
  getCompanyStatus,
  getProfile,
  getRating,
  getRatios,
} from "components/CompanyInfo/model/selectors/companyInfoSelectors";
import { RatiosTTM } from "components/CompanyInfo/model/types/companyInfo";
import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo } from "react";
import { useSelector } from "react-redux";
import styles from "./KeyRatios.module.scss";
import { checkProps } from "helpers/functions/checkProps";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const KeyRatios = memo(() => {
  const ratios = useSelector(getRatios);
  const profile = useSelector(getProfile);
  const isLoading = useSelector(getCompanyStatus);
  const error = useSelector(getCompanyError);

  const ratiosData: { [key: string]: number } = {};

  ratios.forEach((ratio) => {
    ratiosData["Dividend Yield %"] =
      +ratio.dividendYielPercentageTTM.toFixed(2);
    ratiosData[`Dividend per Share (${profile?.currency})`] =
      +ratio.dividendPerShareTTM.toFixed(2);
    ratiosData["P/E"] = ratio.peRatioTTM && +ratio.peRatioTTM.toFixed(2);
    ratiosData["P/B"] =
      ratio.priceToBookRatioTTM && +ratio.priceToBookRatioTTM.toFixed(2);
    ratiosData["P/S"] =
      ratio.priceToSalesRatioTTM && +ratio.priceToSalesRatioTTM.toFixed(2);
    ratiosData["Payout Ratio"] =
      ratio.payoutRatioTTM && +ratio.payoutRatioTTM.toFixed(2);
    ratiosData["Current Ratio"] =
      ratio.currentRatioTTM && +ratio.currentRatioTTM.toFixed(2);
    ratiosData["ROE%"] =
      ratio.returnOnEquityTTM && Math.floor(ratio.returnOnEquityTTM * 100);
    ratiosData["ROA%"] =
      ratio.returnOnAssetsTTM && Math.floor(ratio.returnOnAssetsTTM * 100);
    ratiosData["Total Debt / Capitalization"] =
      ratio.totalDebtToCapitalizationTTM &&
      +ratio.totalDebtToCapitalizationTTM.toFixed(2);
    ratiosData["Interest Coverage"] =
      ratio.interestCoverageTTM && +ratio.interestCoverageTTM.toFixed(2);
    ratiosData["Free Cash Flow per Share"] =
      ratio.freeCashFlowPerShareTTM &&
      +ratio.freeCashFlowPerShareTTM.toFixed(2);
  });

  return (
    <CheckDataHoc
      isLoading={isLoading}
      error={error}
      boxWidth={1400}
      boxHeight={212}
      className={styles.loadingBox}
      title="Key Ratios (TTM)"
      bordered={false}
      align="center"
      marginTop={70}
      size={20}
    >
      <ContentBox>
        <Text title="Key Ratios (TTM)" align="center" />
        <ul className={styles.ratioslist}>
          {Object.entries(ratiosData).map(([key, value]) => (
            <li key={value} className={styles.ratiosItem}>
              <span>{key}</span>
              <span>{checkProps(value)}</span>
            </li>
          ))}
        </ul>
        
      </ContentBox>
    </CheckDataHoc>
  );
});
