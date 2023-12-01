import { Gainer } from "components/Tops/model/types/tops";

export interface TopGainerSchema{
  gainers: Gainer[];
  isLoading: boolean;
  error: string | undefined
}