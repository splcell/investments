import { memo, useCallback } from "react";
import styles from "./NewsItem.module.scss";
import { GlobalNews } from "../GlobalNews/model/types/globalNews";
import { NewsLink } from "components/Links";
import { SentimentNews } from "../SentimentNews/model/types/sentimentNews";
import { Link } from "react-router-dom";
import cn from 'classnames';
import { PressRelease } from "../CompanyNews/model/types/pressRelease";
import { PriceTarget } from "../CompanyNews/model/types/priceTarget";
import { checkProps } from "helpers/functions/checkProps";

interface NewsItemProps {
  globalNews?: GlobalNews;
  sentimentNews?: SentimentNews;
  pressReleases?: PressRelease;
  priceTargets?: PriceTarget;
}

export const NewsItem = memo(({ globalNews, sentimentNews, pressReleases, priceTargets }: NewsItemProps) => {



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

    if (pressReleases) {
      return (
        <li className={styles.newsWrapper}>
          <NewsLink to="">{pressReleases.title}</NewsLink>
          <div className={styles.newsBottom}>
            <span className={styles.newsDate}>
              Date: {pressReleases.date.split("T")[0]}
            </span>
          </div>
        </li>
      );
    }

    if (priceTargets) {
      return (
        <li className={styles.newsWrapper}>
          <NewsLink to="">{priceTargets.newsTitle}</NewsLink>
          <div className={styles.newsBottom}>
            <span className={styles.newsDate}>
              Published: {priceTargets.publishedDate.split("T")[0]}
            </span>
            <NewsLink to={priceTargets.newsURL} className={styles.newsSource}>
              Source: {priceTargets.newsPublisher}
            </NewsLink>
            <span className={styles.whenPosted}>Price when Posted: <span>{checkProps(priceTargets.priceWhenPosted.toFixed(2))}</span></span>
            <span className={cn(styles.tickerWrapper, {
              [styles.positiveTarget]: priceTargets.adjPriceTarget > priceTargets.priceWhenPosted,
              [styles.negativeTarget]: priceTargets.adjPriceTarget < priceTargets.priceWhenPosted
            })}>Price target: {checkProps(priceTargets.adjPriceTarget)}</span>
            <span className={styles.sentimentWrapper}>Analyst Company: <span className={styles.analystCompanyName}>{checkProps(priceTargets.analystCompany)}</span></span>
          </div>
        </li>
      );
    }
  }, [globalNews, sentimentNews, pressReleases, priceTargets]);

  return <>{renderNews()}</>;
});

