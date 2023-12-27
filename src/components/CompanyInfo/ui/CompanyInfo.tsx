import { ContentBox } from "components/ContentBox";
import { memo, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { getCompanyError, getCompanyStatus, getProfile } from "../model/selectors/companyInfoSelectors";
import styles from './CompanyInfo.module.scss'
import cn from 'classnames'
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const CompanyInfo = memo(() => {
  const profile = useSelector(getProfile);
  const isLoading = useSelector(getCompanyStatus)
  const error = useSelector(getCompanyError)
  const changePercent = useMemo(() => {
    if(profile?.changes && profile.price){
      return ((profile.changes / profile.price) * 100 ).toFixed(2)
    }

    return null
  }, [profile])

  return(
    <CheckDataHoc isLoading={isLoading} error={error} boxWidth={1400} boxHeight={212} className={styles.loadingBox}>
      <ContentBox>
      <div className={styles.infoInner} data-testid='inner'>
        <img src={profile?.image} alt={profile?.companyName} className={styles.logo} />
        <span className={styles.name}>{profile?.companyName}</span>
        <div className={styles.priceInfo}>
          <span className={styles.price}>{profile?.price.toFixed(2)} {profile?.currency}</span>
          <span className={cn(styles.changes, {
            [styles.positive]: profile?.changes && profile.changes > 0,
            [styles.negative]: profile?.changes && profile.changes < 0
          })}>{profile?.changes} ({profile?.changes && profile?.changes !== 0 ? changePercent : 0} %)</span>
        </div>
      </div>
    </ContentBox>
    </CheckDataHoc>
  )
})