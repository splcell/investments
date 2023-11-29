import { memo } from "react";
import styles from './GlobalNewsComponent.module.scss'
import { GlobalNews } from "../model/types/globalNews";
import { ContentBox } from "components/ContentBox";
import { NewsItem } from "components/News/NewsItem/NewsItem";
import { Text } from "components/Text";


const testNews: GlobalNews[] = [ {
  "publishedDate" : "2022-06-20T06:00:12.000Z",
  "title" : "Next US election may prove most dangerous time for Taiwan, warns veteran US diplomat Chas Freeman",
  "image" : "https://storage.scmp.com/d8/cors_uploads/2022/06/03/1%20WEB%20TEXT_Taiwan%20gun%20training.mp4",
  "site" : "scmp",
  "text" : "Richard Nixon’s former interpreter says Beijing may view the election of a supporter of Taiwan’s independence as something it must respond to...",
  "url" : "https://www.scmp.com/news/china/military/article/3182292/next-us-election-may-prove-most-dangerous-time-taiwan-warns?utm_source=rss_feed"
}, {
  "publishedDate" : "2022-06-20T05:20:39.000Z",
  "title" : "EU seeks to release Ukrainian grain stuck due to Russia’s sea blockade",
  "image" : "https://storage.scmp.com/d8/cors_uploads/2022/06/15/WEB%20Ukraine.mp4",
  "site" : "scmp",
  "text" : "The EU supports efforts by the United Nations to broker a deal to resume Ukraine’s sea exports in return for easing Russian food and fertiliser export...",
  "url" : "https://www.scmp.com/news/world/russia-central-asia/article/3182308/eu-seeks-release-ukrainian-grain-stuck-due-russias?utm_source=rss_feed"
}, {
  "publishedDate" : "2022-06-20T04:05:18.000Z",
  "title" : "Ukraine war: Rabat urges ‘fair trial’ for Moroccan appealing death penalty",
  "image" : "https://storage.scmp.com/d8/cors_uploads/2022/06/18/WEB%20TEXT_train%20carriage.mp4",
  "site" : "scmp",
  "text" : "Brahim Saadoun, a Moroccan citizen born in 2000, was sentenced to death on June 9 along with two British men by a court in Donetsk, a self-proclaimed...",
  "url" : "https://www.scmp.com/news/world/russia-central-asia/article/3182306/ukraine-war-rabat-urges-fair-trial-moroccan?utm_source=rss_feed"
}
]

export const GlobalNewsComponent = memo(() => {
  return (
    <ContentBox>
      <Text title={'Global News'} className={styles.newsTitle} bordered/>
      <ul className={styles.newsList}>
        {testNews.map(news => (
          <NewsItem key={news.text} globalNews={news}/>
        ))}
      </ul>
    </ContentBox>
  );
});
