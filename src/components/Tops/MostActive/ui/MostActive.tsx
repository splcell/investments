import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { Active, TopsTable } from "components/Tops";
import { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "hooks/hooks";
import { fetchingMostActive } from "../model/services/fetchingMostActive";
import { Preloader } from "components/Preloader";
import styles from './MostActive.module.scss'
import { getMostActiveError, getMostActiveStatus, getMostActiveTickers } from "../model/selectors/mostActiveSelectors";



export const MostActive = memo(() => {
  const tickers = useSelector(getMostActiveTickers)
  const isLoading = useSelector(getMostActiveStatus)
  const error = useSelector(getMostActiveError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchingMostActive())
  }, [dispatch])

  if(isLoading){
    return (
      <ContentBox className={styles.loadingBox}>
      <Text title="Most Active" bordered align="center" size={18}/>
        <Preloader />
      </ContentBox>
    )
  }

  if(error){
    return (
      <ContentBox className={styles.loadingBox}>
      <Text title="Most Active" bordered align="center" size={18}/>
      <Text title={error} align="center" size={18} marginTop={150}/>
      </ContentBox>
    )
  }

  return (
    <ContentBox>
      <Text title="Most Active" bordered align="center" size={18}/>
      <TopsTable topData={tickers.slice(0, 10)}/>
    </ContentBox>
  )
})