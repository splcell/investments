import { GlobalNewsSchema } from "components/News";
import { SentimentNewsSchema } from "components/News/SentimentNews/model/types/sentimentNews";
import { MostActiveSchema } from "components/Tops/MostActive";
import { TopGainerSchema } from "components/Tops/TopGainers";
import { TopLooserSchema } from "components/Tops/TopLoosers";


export interface StoreSchema{
  globalNews: GlobalNewsSchema,
  sentimentNews: SentimentNewsSchema,
  mostActive: MostActiveSchema,
  gainers: TopGainerSchema,
  loosers: TopLooserSchema
}