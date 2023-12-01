import { Looser } from "components/Tops/model/types/tops";

export interface TopLooserSchema {
  loosers: Looser[];
  isLoading: boolean;
  error: string | undefined;
}
