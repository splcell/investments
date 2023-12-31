import { memo, useEffect } from "react";
import styles from "./GlobalNewsComponent.module.scss";
import { ContentBox } from "components/ContentBox";
import { NewsItem } from "components/News/NewsItem/NewsItem";
import { Text } from "components/Text";
import { useAppDispatch } from "hooks/hooks";
import { useSelector } from "react-redux";
import {
  getGlobalNews,
  getGlobalNewsError,
  getGlobalNewsStatus,
} from "../model/selectors/globalNewsSelectors";
import { fetchingGlobalNews } from "../model/services/fetchingGlobalNews";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";

export const GlobalNewsComponent = memo(() => {
  const globalNews = useSelector(getGlobalNews);
  const isLoading = useSelector(getGlobalNewsStatus)
  const error = useSelector(getGlobalNewsError);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchingGlobalNews());
  }, [dispatch]);

  return (
    <CheckDataHoc isLoading={isLoading} error={error} title="Global News" boxWidth={860} boxHeight={370}>
      <ContentBox>
        <Text title={"Global News"} className={styles.newsTitle} bordered />
        <ul className={styles.newsList}>
          {globalNews.slice(0, 10).map((news) => (
            <NewsItem key={news.text} globalNews={news} />
          ))}
        </ul>
      </ContentBox>
    </CheckDataHoc>
  );
});
