import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./TopGainers.module.scss";
import Table from "react-bootstrap/Table";
import { TopsTable } from "components/Tops/TopsTable/ui/TopsTable";
import { useSelector } from "react-redux";
import {
  getGainersError,
  getGainersList,
  getGainersLoading,
} from "../model/selectors/topGainersSelectors";
import { useAppDispatch } from "hooks/hooks";
import { fetchingGainers } from "../model/services/fetchingGainers";
import { CheckDataStatus } from "components/CheckTopStatus/ui/CheckDataStatus";

export const TopGainers = memo(() => {
  const gainers = useSelector(getGainersList);
  const isLoading = useSelector(getGainersLoading);
  const error = useSelector(getGainersError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingGainers());
  }, [dispatch]);

  return (
    <>
      <CheckDataStatus
        error={error}
        isLoading={isLoading}
        title="Top Gainers"
        boxWidth={330}
        boxHeight={391}
      />
      <ContentBox className={styles.gainers}>
        <Text title="Top Gainers" bordered align="center" size={18} />
        <TopsTable topData={gainers.slice(0, 10)} sentiment="positive" />
      </ContentBox>
    </>
  );
});
