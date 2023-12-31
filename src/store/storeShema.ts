import { CompanyInfoSchema } from "components/CompanyInfo";
import { CompanyNewsSchema, GlobalNewsSchema } from "components/News";
import { SentimentNewsSchema } from "components/News/SentimentNews/model/types/sentimentNews";
import { SearchSchema } from "components/Search";
import { MostActiveSchema } from "components/Tops/MostActive";
import { PerformanceSchema } from "components/Tops/Performance";
import { TopGainerSchema } from "components/Tops/TopGainers";
import { TopIndexesSchema } from "components/Tops/TopIndexes";
import { TopLooserSchema } from "components/Tops/TopLoosers";

export interface StoreSchema {
  globalNews: GlobalNewsSchema;
  sentimentNews: SentimentNewsSchema;
  mostActive: MostActiveSchema;
  gainers: TopGainerSchema;
  loosers: TopLooserSchema;
  indexes: TopIndexesSchema;
  performance: PerformanceSchema;
  search: SearchSchema;
  companyInfo: CompanyInfoSchema;
  companyNews: CompanyNewsSchema;
}
