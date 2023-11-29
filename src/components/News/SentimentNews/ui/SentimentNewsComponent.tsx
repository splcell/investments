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

const testData = [
  {
    symbol: "MSFT",
    publishedDate: "2023-10-10T21:10:53.000Z",
    title:
      "No Call Of Duty On Game Pass This Year, But Diablo IV May Arrive In 2024",
    image:
      "https://cdn.benzinga.com/files/images/story/2023/10/10/shutterstock_2093878507_1.jpg?optimize=medium&dpr=1&auto=webp&height=800&width=1456&fit=crop",
    site: "benzinga",
    text: "Activision Blizzard Inc (NASDAQ: ATVI) outlined its plans for Xbox Game Pass in the wake of the impending Microsoft Corp (NASDAQ: MSFT) acquisition, indicating it intends to start offering its games on the service in 2024. The acquisition is set to conclude shortly, but the company has made it clear that highly anticipated titles such as Call of Duty: Modern Warfare III and Diablo IV will not be available on Game Pass this year. See Also: Microsoft Announces Games Leaving Xbox Game Pass In Octob...",
    url: "https://www.benzinga.com/general/gaming/23/10/35171171/no-call-of-duty-on-game-pass-this-year-but-diablo-iv-may-arrive-in-2024",
    sentiment: "Positive",
    sentimentScore: 0.9812,
  },

  {
    symbol: "MSFT",
    publishedDate: "2023-10-10T21:10:53.000Z",
    title:
      "No Call Of Duty On Game Pass This Year, But Diablo IV May Arrive In 2024",
    image:
      "https://cdn.benzinga.com/files/images/story/2023/10/10/shutterstock_2093878507_1.jpg?optimize=medium&dpr=1&auto=webp&height=800&width=1456&fit=crop",
    site: "benzinga",
    text: "Activision Blizzard Inc (NASDAQ: ATVI) outlined its plans for Xbox Game Pass in the wake of the impending Microsoft Corp (NASDAQ: MSFT) acquisition, indicating it intends to start offering its games on the service in 2024. The acquisition is set to conclude shortly, but the company has made it clear that highly anticipated titles such as Call of Duty: Modern Warfare III and Diablo IV will not be available on Game Pass this year. See Also: Microsoft Announces Games Leaving Xbox Game Pass In Octob...",
    url: "https://www.benzinga.com/general/gaming/23/10/35171171/no-call-of-duty-on-game-pass-this-year-but-diablo-iv-may-arrive-in-2024",
    sentiment: "Positive",
    sentimentScore: 0.9812,
  },

  {
    symbol: "MSFT",
    publishedDate: "2023-10-10T21:10:53.000Z",
    title:
      "No Call Of Duty On Game Pass This Year, But Diablo IV May Arrive In 2024",
    image:
      "https://cdn.benzinga.com/files/images/story/2023/10/10/shutterstock_2093878507_1.jpg?optimize=medium&dpr=1&auto=webp&height=800&width=1456&fit=crop",
    site: "benzinga",
    text: "Activision Blizzard Inc (NASDAQ: ATVI) outlined its plans for Xbox Game Pass in the wake of the impending Microsoft Corp (NASDAQ: MSFT) acquisition, indicating it intends to start offering its games on the service in 2024. The acquisition is set to conclude shortly, but the company has made it clear that highly anticipated titles such as Call of Duty: Modern Warfare III and Diablo IV will not be available on Game Pass this year. See Also: Microsoft Announces Games Leaving Xbox Game Pass In Octob...",
    url: "https://www.benzinga.com/general/gaming/23/10/35171171/no-call-of-duty-on-game-pass-this-year-but-diablo-iv-may-arrive-in-2024",
    sentiment: "Positive",
    sentimentScore: 0.9812,
  },
];

export const SentimentNewsComponent = memo(() => {
  const sentimentNews = useSelector(getSentimentNews);
  const isLoading = useSelector(getSentimentNewsStatus);
  const error = useSelector(getSentimentNewsError);
  const dispatch = useAppDispatch();
  const [visibleNews, setVisibleNews] = useState<SentimentNews[]>([]);
  

  if (isLoading) {
    return (
      <ContentBox>
        <Text title="Sentiment News" className={styles.sentimentTitle} />
        <Text title="Loading..." />
      </ContentBox>
    );
  }

  // useEffect(() => {
  //   dispatch(fetchingSentimentNews())
  // }, [dispatch])

  return (
    <ContentBox>
      <Text title="Sentiment News" className={styles.sentimentTitle} bordered/>
      <ul className={styles.sentimentsList}>
        {testData.map((news) => (
          <NewsItem key={news.title} sentimentNews={news} />
        ))}
      </ul>
    </ContentBox>
  );
});
