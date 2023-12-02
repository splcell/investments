import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { TopsTable } from "components/Tops";
import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "hooks/hooks";
import { fetchingMostActive } from "../model/services/fetchingMostActive";
import {
  getMostActiveError,
  getMostActiveStatus,
  getMostActiveTickers,
} from "../model/selectors/mostActiveSelectors";
import { CheckDataStatus } from "components/CheckTopStatus/ui/CheckDataStatus";

export const MostActive = memo(() => {
  const tickers = useSelector(getMostActiveTickers);
  const isLoading = useSelector(getMostActiveStatus);
  const error = useSelector(getMostActiveError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingMostActive());
  }, [dispatch]);

  return (
    <>
      <CheckDataStatus
        isLoading={isLoading}
        error={error}
        title="Most Active"
        boxWidth={330}
        boxHeight={391}
      />
      <ContentBox>
        <Text title="Most Active" bordered align="center" size={18} />
        <TopsTable topData={tickers.slice(0, 10)} />
      </ContentBox>
    </>
  );
});
