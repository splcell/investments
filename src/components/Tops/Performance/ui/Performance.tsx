import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo, useEffect } from "react";
import { TopsTable } from "../../TopsTable/ui/TopsTable";
import { useSelector } from "react-redux";
import {
  getPerfomanceError,
  getPerfomanceSectors,
  getPerfomanceStatus,
} from "../model/selectors/performanceSelectors";
import { useAppDispatch } from "hooks/hooks";
import { fetchingSectorsPerformance } from "../model/services/fetchingSectorsPerformance";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const Performance = memo(() => {
  const sectors = useSelector(getPerfomanceSectors);
  const isLoading = useSelector(getPerfomanceStatus);
  const error = useSelector(getPerfomanceError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingSectorsPerformance());
  }, [dispatch]);

  
  return (
    <CheckDataHoc isLoading={isLoading} error={error} title="Sector Performance" align="center" boxWidth={330} boxHeight={391}>
      <ContentBox>
        <Text title="Sector Performance" bordered align="center" size={18} />
        <TopsTable sectorPerformance={sectors} />
      </ContentBox>
    </CheckDataHoc>
  );
});
