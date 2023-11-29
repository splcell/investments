export interface GlobalNews {
  publishedDate: string;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
}



export interface GlobalNewsSchema{
  news: GlobalNews[];
  isLoading: boolean;
  error: string | undefined
}
