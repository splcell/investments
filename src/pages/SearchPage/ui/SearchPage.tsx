import { SearchTable } from "Tables/SearchTable";
import { ContentBox } from "components/ContentBox";
import { SearchActions, getFullResults, getSearchQuery } from "components/Search";
import { Text } from "components/Text";
import { useAppDispatch } from "hooks/hooks";
import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {useSearchParams } from "react-router-dom";

const SearchPage = memo(() => {
  const searchQuery = useSelector(getSearchQuery)
  const query = localStorage.getItem('query')
  const [searchParams, setSearchParams] = useSearchParams()
  const searchResults = useSelector(getFullResults)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(query){
      setSearchParams({query: query})
    }
  }, [query])

  useEffect(() => {
    if(searchQuery){
      setSearchParams({query: searchQuery})
    }
  }, [searchQuery])

  const clearResults = useCallback(() => {
    dispatch(SearchActions.cleanQuery());
    dispatch(SearchActions.cleanResults());
  }, [dispatch]);

  return(
    <div className="container">
      <ContentBox>
        <Text title="Search Results" bordered/>
        {searchResults.length > 0 ? <SearchTable results={searchResults} onClick={clearResults} tableWidth={1370}/> : <Text text="Results not Found"/>}
      </ContentBox>
    </div>
  )
})

export default SearchPage