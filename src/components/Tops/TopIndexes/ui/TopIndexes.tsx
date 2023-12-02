import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo, useEffect } from "react";
import { TopsTable } from "../../TopsTable/ui/TopsTable";
import { useSelector } from "react-redux";
import {
  getIndexesError,
  getIndexesList,
  getIndexesStatus,
} from "../model/selectors/topIndexesSelectors";
import { useAppDispatch } from "hooks/hooks";
import { fetchingIndexes } from "../model/services/fetchingIndexes";
import { CheckDataStatus } from "components/CheckTopStatus/ui/CheckDataStatus";

export const TopIndexes = memo(() => {
  const indexes = useSelector(getIndexesList);
  const isLoading = useSelector(getIndexesStatus);
  const error = useSelector(getIndexesError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingIndexes());
  }, [dispatch]);

  return (
    <>
      <CheckDataStatus
        isLoading={isLoading}
        error={error}
        title="Market Indexes"
        boxWidth={330}
        boxHeight={391}
      />
      <ContentBox>
        <Text title="Market Indexes" bordered align="center" size={18} />
        <TopsTable indexes={indexes.slice(0, 10)} />
      </ContentBox>
    </>
  );
});
