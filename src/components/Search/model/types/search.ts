export interface SearchData {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

export interface SearchSchema {
  searchResults: SearchData[];
  fullResults: SearchData[]
  query: string;
}
