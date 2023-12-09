import { memo, useCallback, useEffect, useMemo } from "react";
import styles from "./Search.module.scss";
import { ContentBox } from "components/ContentBox";
import { SearchTable } from "Tables/SearchTable";
import { useSelector } from "react-redux";
import {
  getSearchQuery,
  getSearchResults,
} from "../model/selectors/searchSelectors";
import { useAppDispatch } from "hooks/hooks";
import { SearchActions } from "../model/slice/searchSlice";
import { fetchingSearchResults } from "../model/services/fetchingSearchResults";
import { SeeAllLink } from "components/Links";

export const Search = memo(() => {
  const searchResults = useSelector(getSearchResults);
  const query = useSelector(getSearchQuery);
  const dispatch = useAppDispatch();

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(SearchActions.setQuery(e.target.value));
    },
    [dispatch]
  );

  const clearResults = useCallback(() => {
    dispatch(SearchActions.cleanQuery());
    dispatch(SearchActions.cleanResults());
  }, [dispatch]);

  useEffect(() => {
    if (query.trim() !== "") {
      dispatch(fetchingSearchResults(query));
      localStorage.setItem('query', query)
    }

    if (query.trim() === "") {
      dispatch(SearchActions.cleanQuery());
      dispatch(SearchActions.cleanResults());
    }
  }, [query]);

  const resultsRender = useMemo(() => {
    if (searchResults.length > 0) {
      return (
        <ContentBox className={styles.searchBox}>
          <SearchTable
            results={searchResults.slice(0, 10)}
            onClick={clearResults}
          />
          {searchResults.length > 10 && (
            <SeeAllLink path={`/search`} marginTop={10}>See All Results</SeeAllLink>
          )}
        </ContentBox>
      );
    }

    return null;
  }, [searchResults]);


  return (
    <label className={styles.resultsWrapper} htmlFor="search">
      <input
        type="search"
        value={query}
        onChange={onChangeSearch}
        className={styles.input}
        placeholder="Search company ticker or name (Example: MSFT)"
        id="search"
        autoComplete="off"
      />
      {resultsRender}
    </label>
  );
});
