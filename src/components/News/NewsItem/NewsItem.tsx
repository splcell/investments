import { memo, useCallback } from "react";
import styles from "./NewsItem.module.scss";
import { GlobalNews } from "../GlobalNews/model/types/globalNews";
import { NewsLink } from "components/Links";
import { SentimentNews } from "../SentimentNews/model/types/sentimentNews";
import { Link } from "react-router-dom";
import cn from 'classnames';

interface NewsItemProps {
  globalNews?: GlobalNews;
  sentimentNews?: SentimentNews;
}

export const NewsItem = memo(({ globalNews, sentimentNews }: NewsItemProps) => {
  const renderNews = useCallback(() => {
    if (globalNews) {
      return (
        <li className={styles.newsWrapper}>
          <NewsLink to="">{globalNews.title}</NewsLink>
          <div className={styles.newsBottom}>
            <span className={styles.newsDate}>
              Published: {globalNews.publishedDate.split("T")[0]}
            </span>
            <NewsLink to={globalNews.url} className={styles.newsSource}>
              Source: {globalNews.site}
            </NewsLink>
          </div>
        </li>
      );
    }

    if (sentimentNews) {
      return (
        <li className={styles.newsWrapper}>
          <NewsLink to="">{sentimentNews.title}</NewsLink>
          <div className={styles.newsBottom}>
            <span className={styles.newsDate}>
              Published: {sentimentNews.publishedDate.split("T")[0]}
            </span>
            <NewsLink to={sentimentNews.url} className={styles.newsSource}>
              Source: {sentimentNews.site}
            </NewsLink>
            <span className={styles.tickerWrapper}>Ticker: <Link to={`/company/${sentimentNews.symbol}`} className={styles.ticker}>{sentimentNews.symbol}</Link></span>
            <span className={styles.sentimentWrapper}>Sentiment: <span className={cn(styles.sentiment, {
              [styles.negative]: sentimentNews.sentiment === 'Negative',
              [styles.positive]: sentimentNews.sentiment === 'Positive',
              [styles.neutral]: sentimentNews.sentiment === 'Neutral'
            })}>{sentimentNews.sentiment}</span></span>
          </div>
        </li>
      );
    }
  }, [globalNews, sentimentNews]);

  return <>{renderNews()}</>;
});

