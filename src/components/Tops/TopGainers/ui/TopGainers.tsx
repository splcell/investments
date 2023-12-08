import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo, useEffect } from "react";
import styles from "./TopGainers.module.scss";
import { TopsTable } from "components/Tops/TopsTable/ui/TopsTable";
import { useSelector } from "react-redux";
import {
  getGainersError,
  getGainersList,
  getGainersLoading,
} from "../model/selectors/topGainersSelectors";
import { useAppDispatch } from "hooks/hooks";
import { fetchingGainers } from "../model/services/fetchingGainers";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const TopGainers = memo(() => {
  const gainers = useSelector(getGainersList);
  const isLoading = useSelector(getGainersLoading);
  const error = useSelector(getGainersError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingGainers());
  }, [dispatch]);

  return (
    <CheckDataHoc
      isLoading={isLoading}
      error={error}
      title="Top Gainers"
      align="center"
      boxWidth={330}
      boxHeight={391}
    >
      <ContentBox className={styles.gainers}>
        <Text title="Top Gainers" bordered align="center" size={18} />
        <TopsTable topData={gainers.slice(0, 10)} sentiment="positive" />
      </ContentBox>
    </CheckDataHoc>
  );
});
