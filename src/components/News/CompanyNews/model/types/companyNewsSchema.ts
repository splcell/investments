import { PressRelease } from './pressRelease';
import { PriceTarget } from './priceTarget';


export interface CompanyNewsSchema{
  pressReleases: PressRelease[];
  priceTargets: PriceTarget[];
  pressReleasesStatus: boolean;
  pressReleasesError: string | undefined
  priceTargetsStatus: boolean
  priceTargetsError: string | undefined
}