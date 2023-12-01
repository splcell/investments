import { memo, useEffect } from "react";
import styles from "./GlobalNewsComponent.module.scss";
import { GlobalNews } from "../model/types/globalNews";
import { ContentBox } from "components/ContentBox";
import { NewsItem } from "components/News/NewsItem/NewsItem";
import { Text } from "components/Text";
import { useAppDispatch } from "hooks/hooks";
import { useSelector } from "react-redux";
import { getGlobalNews, getGlobalNewsError, getGlobalNewsStatus } from "../model/selectors/globalNewsSelectors";
import { GlobalNewsActions } from "../model/slice/globalNewsSlice";
import { fetchingGlobalNews } from "../model/services/fetchingGlobalNews";



export const GlobalNewsComponent = memo(() => {
  const globalNews = useSelector(getGlobalNews)
  const isLoading = useSelector(getGlobalNewsStatus)
  const error = useSelector(getGlobalNewsError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchingGlobalNews())
  }, [dispatch])

  if(isLoading){
    return(
      <ContentBox>
      <Text title="Global News" className={styles.newsTitle} bordered />
      <Text title="Loading..." className={styles.newsTitle} align="center" />
    </ContentBox>
    )
  }

  if(error){
    return(
      <ContentBox>
      <Text title="Global News" className={styles.newsTitle} bordered />
      <Text title="News not Found" className={styles.newsTitle} align="center" />
    </ContentBox>
    )
  }

  return (
    <ContentBox>
      <Text title={"Global News"} className={styles.newsTitle} bordered />
      <ul className={styles.newsList}>
        {globalNews.slice(0, 10).map((news) => (
          <NewsItem key={news.text} globalNews={news} />
        ))}
      </ul>
    </ContentBox>
  );
});
