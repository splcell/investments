import {
  getCompanyError,
  getCompanyStatus,
  getProfile,
} from "components/CompanyInfo/model/selectors/companyInfoSelectors";
import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo } from "react";
import { useSelector } from "react-redux";
import styles from "./Description.module.scss";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const Description = memo(() => {
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
      title="Description"
      bordered={false}
      align="center"
      marginTop={70}
      size={20}
    >
      <ContentBox>
        <Text title="Description" align="center" />
        <Text text={profile?.description} className={styles.description} />
      </ContentBox>
    </CheckDataHoc>
  );
});
