import { Active } from "components/Tops/model/types/tops";

export interface MostActiveSchema{
  tickers: Active[];
  isLoading: boolean;
  error: string | undefined;
}