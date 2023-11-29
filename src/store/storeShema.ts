import { GlobalNewsSchema } from "components/News";
import { SentimentNewsSchema } from "components/News/SentimentNews/model/types/sentimentNews";

export interface StoreSchema{
  globalNews: GlobalNewsSchema,
  sentimentNews: SentimentNewsSchema
}