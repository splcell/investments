import { memo, useCallback, useEffect, useRef, useState } from "react";
import styles from "./SentimentNewsComponent.module.scss";
import { ContentBox } from "components/ContentBox";
import {
  getSentimentNews,
  getSentimentNewsError,
  getSentimentNewsStatus,
} from "../model/selectors/sentimentNewsSelectors";
import { SentimentNews } from "../model/types/sentimentNews";
import { Text } from "components/Text";
import cn from "classnames";
import { fetchingSentimentNews } from "../model/services/fetchingSentimentNews";
import { useAppDispatch } from "hooks/hooks";
import { NewsItem } from "components/News/NewsItem/NewsItem";
import { useSelector } from "react-redux/es/hooks/useSelector";



export const SentimentNewsComponent = memo(() => {
  const sentimentNews = useSelector(getSentimentNews);
  const isLoading = useSelector(getSentimentNewsStatus);
  const error = useSelector(getSentimentNewsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingSentimentNews())
  }, [dispatch])
  

  if (isLoading) {
    return (
      <ContentBox>
        <Text title="Sentiment News" className={styles.sentimentTitle} />
        <Text title="Loading..." align="center"/>
      </ContentBox>
    );
  }

  if(error){
    return (
      <ContentBox>
        <Text title="Sentiment News" className={styles.sentimentTitle} />
        <Text title="News not Found" align="center"/>
      </ContentBox>
    )
  }

  console.log(sentimentNews)

  return (
    <ContentBox>
      <Text title="Sentiment News" className={styles.sentimentTitle} bordered/>
      <ul className={styles.sentimentsList}>
        {sentimentNews.slice(0, 10).map((news) => (
          <NewsItem key={news.title} sentimentNews={news} />
        ))}
      </ul>
    </ContentBox>
  );
});
