export type {TopLooserSchema} from './model/types/topLoosers'
export {fetchingLoosers} from './model/services/fetchingLoosers'
export {TopLoosersReducer, TopLoosersActions} from './model/slice/topLoosersSlice'
export {getLossersList, getLossersLoading, getLossersError} from './model/selectors/topLoosersSelectors'