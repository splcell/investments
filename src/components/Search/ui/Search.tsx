import { memo, useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Search.module.scss";
import Autosuggest from "react-autosuggest";
import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { SearchLink } from "components/Links";
import { ContentBox } from "components/ContentBox";
import { SearchTable } from "Tables/SearchTable";

export interface SearchData {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

export const Search = memo(() => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchData[]>([]);

  async function getSearchData(search: string) {
    return await fetch(
      `https://financialmodelingprep.com/api/v3/search?query=${search.toLowerCase()}&limit=10&exchange=NASDAQ,NYSE&apikey=04b10667f5be090522dc21fe9e833341`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          // const result = data.filter(
          //   (item: Searchdata) =>
          //     item.symbol.includes(search) || item.name.includes(search)
          // );

          setSearchResults(data);
        }
        // return [];
      });
  }

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearResults = useCallback(() => {
    setSearchResults([]);
    setSearch("");
  }, []);

  useEffect(() => {
    if (search.trim() !== "") {
      getSearchData(search);
    }

    if (search.trim() === "") {
      setSearchResults([]);
      setSearch("");
    }
  }, [search]);

  const resultsRender = useMemo(() => {
    if (searchResults.length > 0) {
      return (
        <ContentBox className={styles.searchBox}>
          <SearchTable results={searchResults} onClick={clearResults}/>
        </ContentBox>
      );
    }

    return null;
  }, [searchResults]);

  return (
    <label className={styles.resultsWrapper} htmlFor="search">
      <input
        type="search"
        value={search}
        onChange={onChangeSearch}
        className={styles.input}
        placeholder="Search company ticker or name"
        id="search"
      />
      {resultsRender}
    </label>
  );
});
