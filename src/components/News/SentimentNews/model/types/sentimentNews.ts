import { GlobalNews } from "components/News/GlobalNews/model/types/globalNews";

export interface SentimentNews extends GlobalNews {
  symbol?: string;
  sentiment?: string;
}

export interface SentimentNewsSchema{
  news: SentimentNews[];
  isLoading: boolean;
  error: string | undefined;
  
}

