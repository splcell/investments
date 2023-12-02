import { IndexesInfo } from "components/Tops/model/types/tops";

export interface TopIndexesSchema{
  indexes: IndexesInfo[];
  isLoading: boolean;
  error: string | undefined
}