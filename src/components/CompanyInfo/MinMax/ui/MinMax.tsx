import {
  getCompanyError,
  getCompanyStatus,
  getMetrics,
  getProfile,
} from "components/CompanyInfo/model/selectors/companyInfoSelectors";
import { ContentBox } from "components/ContentBox";
import { memo } from "react";
import { useSelector } from "react-redux";
import styles from "./MinMax.module.scss";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const MinMax = memo(() => {
  const profile = useSelector(getProfile);
  const metrics = useSelector(getMetrics);
  const isLoading = useSelector(getCompanyStatus);
  const error = useSelector(getCompanyError);

  const calcProgressWidth =
    (Number(profile?.price) / Number(metrics?.yearHigh)) * 100 + "%";

  return (
    <CheckDataHoc
      isLoading={isLoading}
      error={error}
      boxWidth={1400}
      boxHeight={75}
      className={styles.loadingBox}
      marginTop={13}
    >
      <ContentBox>
        <div className={styles.minMax}>
          <p className={styles.minmaxDescr}>
            52 Week Low {metrics?.yearLow.toFixed(2)} {profile?.currency}
          </p>
          <div className={styles.minmaxProgress}>
            <span
              style={{
                width: `${calcProgressWidth}`,
                background: "#4e4e4e",
                borderRadius: "0.5rem",
                height: "1.5rem",
                display: "flex",
                fontSize: "17px",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              {Number(calcProgressWidth.replace("%", "")).toFixed()}%
            </span>
          </div>
          <p className={styles.minmaxDescr}>
            52 Week High {metrics?.yearHigh.toFixed(2)} {profile?.currency}
          </p>
        </div>
      </ContentBox>
    </CheckDataHoc>
  );
});
