import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { TopsTable } from "components/Tops/TopsTable/ui/TopsTable";
import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getLossersError,
  getLossersList,
  getLossersLoading,
} from "../model/selectors/topLoosersSelectors";
import { useAppDispatch } from "hooks/hooks";
import { fetchingLoosers } from "../model/services/fetchingLoosers";
import { CheckDataStatus } from "components/CheckTopStatus/ui/CheckDataStatus";

export const TopLoosers = memo(() => {
  const loosers = useSelector(getLossersList);
  const isLoading = useSelector(getLossersLoading);
  const error = useSelector(getLossersError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingLoosers());
  }, [dispatch]);

  return (
    <>
      <CheckDataStatus
        isLoading={isLoading}
        error={error}
        title="Top Loosers"
        boxWidth={330}
        boxHeight={391}
      />
      <ContentBox>
        <Text title="Top Loosers" bordered align="center" size={18} />
        <TopsTable topData={loosers.slice(0, 10)} sentiment="negative" />
      </ContentBox>
    </>
  );
});
