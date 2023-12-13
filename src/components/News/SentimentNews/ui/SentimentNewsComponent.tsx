import { memo, useEffect } from "react";
import styles from "./SentimentNewsComponent.module.scss";
import { ContentBox } from "components/ContentBox";
import {
  getSentimentNews,
  getSentimentNewsError,
  getSentimentNewsStatus,
} from "../model/selectors/sentimentNewsSelectors";
import { Text } from "components/Text";
import { fetchingSentimentNews } from "../model/services/fetchingSentimentNews";
import { useAppDispatch } from "hooks/hooks";
import { NewsItem } from "components/News/NewsItem/NewsItem";
import { useSelector } from "react-redux";
import { CheckDataStatus } from "components/CheckTopStatus/ui/CheckDataStatus";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const SentimentNewsComponent = memo(() => {
  const sentimentNews = useSelector(getSentimentNews);
  const isLoading = useSelector(getSentimentNewsStatus);
  const error = useSelector(getSentimentNewsError);
  const dispatch = useAppDispatch();

 

  useEffect(() => {
    dispatch(fetchingSentimentNews());
  }, [dispatch]);


  return (
    <CheckDataHoc isLoading={isLoading} error={error} title="Sentiment News" boxWidth={860} boxHeight={370}>
      <ContentBox>
        <Text
          title="Sentiment News"
          className={styles.sentimentTitle}
          bordered
        />
        <ul className={styles.sentimentsList}>
          {sentimentNews.slice(0, 10).map((news) => (
            <NewsItem key={news.title} sentimentNews={news} />
          ))}
        </ul>
      </ContentBox>
    </CheckDataHoc>
  );
});
