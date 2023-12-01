export type { TopGainerSchema } from "./model/types/topGainers";
export { fetchingGainers } from "./model/services/fetchingGainers";
export {
  TopGainersReducer,
  TopGainersActions,
} from "./model/slice/topGainersSlice";
export {
  getGainersList,
  getGainersLoading,
  getGainersError,
} from "./model/selectors/topGainersSelectors";
