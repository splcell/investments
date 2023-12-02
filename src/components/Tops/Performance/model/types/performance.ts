import { SectorPerformance } from "components/Tops/model/types/tops";

export interface PerformanceSchema{
  sectors: SectorPerformance[];
  isLoading: boolean
  error: string | undefined
}