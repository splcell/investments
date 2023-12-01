import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { Looser } from "components/Tops";
import { TopsTable } from "components/Tops/TopsTable/ui/TopsTable";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLossersError, getLossersList, getLossersLoading } from "../model/selectors/topLoosersSelectors";
import { useAppDispatch } from "hooks/hooks";
import { fetchingLoosers } from "../model/services/fetchingLoosers";
import styles from './TopLoosers.module.scss'
import { Preloader } from "components/Preloader";



export const TopLoosers = memo(() => {
  const loosers = useSelector(getLossersList)
  const isLoading = useSelector(getLossersLoading)
  const error = useSelector(getLossersError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchingLoosers())
  }, [dispatch])

  if(isLoading){
    return (
      <ContentBox className={styles.loadingBox}>
      <Text title="Top Loosers" bordered align="center" size={18}/>
        <Preloader />
      </ContentBox>
    )
  }

  if(error){
    return (
      <ContentBox className={styles.loadingBox}>
      <Text title="Top Loosers" bordered align="center" size={18}/>
      <Text title={error} align="center" size={18} marginTop={150}/>
      </ContentBox>
    )
  }


  return (
    <ContentBox>
      <Text title="Top Loosers" bordered align="center" size={18}/>
      <TopsTable topData={loosers.slice(0, 10)} sentiment="negative" />
    </ContentBox>
  );
});
