import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { Gainer } from "components/Tops";
import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./TopGainers.module.scss";
import Table from "react-bootstrap/Table";
import { TopsTable } from "components/Tops/TopsTable/ui/TopsTable";
import { useSelector } from "react-redux";
import { getGainersError, getGainersList, getGainersLoading } from "../model/selectors/topGainersSelectors";
import { useAppDispatch } from "hooks/hooks";
import { fetchingGainers } from "../model/services/fetchingGainers";
import { Preloader } from "components/Preloader";



export const TopGainers = memo(() => {
  const gainers = useSelector(getGainersList)
  const isLoading = useSelector(getGainersLoading)
  const error = useSelector(getGainersError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchingGainers())
  }, [dispatch])

  if(isLoading){
    return (
      <ContentBox className={styles.loadingBox}>
      <Text title="Top Gainers" bordered align="center" size={18}/>
        <Preloader />
      </ContentBox>
    )
  }

  if(error){
    return (
      <ContentBox className={styles.loadingBox}>
      <Text title="Top Gainers" bordered align="center" size={18}/>
      <Text title={error} align="center" size={18} marginTop={150}/>
      </ContentBox>
    )
  }

  return (
    <ContentBox className={styles.gainers}>
      <Text
        title="Top Gainers"
        bordered
        align="center"
        size={18}
      />
      <TopsTable topData={gainers.slice(0, 10)} sentiment="positive" />
    </ContentBox>
  );
});
