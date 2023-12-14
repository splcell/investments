import { ContentBox } from "components/ContentBox";
import { memo, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./CompanyNews.module.scss";
import { useSelector } from "react-redux";
import {
  getCompanyError,
  getCompanyNews,
  getCompanyStatus,
} from "components/CompanyInfo";
import { NewsItem } from "components/News/NewsItem/NewsItem";
import { GlobalNews } from "components/News/GlobalNews/model/types/globalNews";
import { SeeAllLink } from "components/Links";
import {
  getPressReleases,
  getPressReleasesError,
  getPressReleasesStatus,
  getPriceTargets,
  getPriceTargetsError,
  getPriceTargetsStatus,
} from "../model/selectors/companyNewsSelectors";
import { useAppDispatch } from "hooks/hooks";
import { useParams } from "react-router-dom";
import { fetchingPressReleases } from "../model/services/fetchingPressReleases";
import { fetchingPriceTargets } from "../model/services/fetchingPriceTargets";
import { Text } from "components/Text";
import { PressRelease } from "../model/types/pressRelease";
import { PriceTarget } from "../model/types/priceTarget";

export const CompanyNews = memo(() => {
  const {ticker} = useParams<{ticker: string}>()
  const companyNews = useSelector(getCompanyNews);
  const companyNewsLoading = useSelector(getCompanyStatus);
  const companyNewsError = useSelector(getCompanyError);
  const pressReleases = useSelector(getPressReleases);
  const pressReleasesStatus = useSelector(getPressReleasesStatus);
  const pressReleasesError = useSelector(getPressReleasesError);
  const priceTargets = useSelector(getPriceTargets);
  const priceTargetsStatus = useSelector(getPriceTargetsStatus);
  const priceTargetsError = useSelector(getPriceTargetsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(ticker){
      dispatch(fetchingPressReleases(ticker))
      dispatch(fetchingPriceTargets(ticker))
    }
  }, [dispatch, ticker])

  console.log(pressReleases, priceTargets)

  return (
    <ContentBox>
      <Tabs>
        <TabList>
          <Tab>Company News</Tab>
          <Tab>Press Releases</Tab>
          <Tab>Price Targets</Tab>
        </TabList>
        <TabPanel>
          <ul>
            {companyNews.map((news: GlobalNews) => (
              <NewsItem key={news.title} globalNews={news} />
            ))}
          </ul>
          <SeeAllLink path="">See all Company News</SeeAllLink>
        </TabPanel>
        <TabPanel>
        <ul>
            {pressReleases.length > 0 ? pressReleases.slice(0, 10).map((release: PressRelease) => (
              <NewsItem key={release.title} pressReleases={release} />
            )): <Text title="Press Releases not Found"/>}
        </ul>
        {pressReleases.length > 10 && <SeeAllLink path="">See all Press Releases</SeeAllLink>}
        </TabPanel>
        <TabPanel>
        <ul>
            {priceTargets.length > 0 ? priceTargets.slice(0, 10).map((target: PriceTarget) => (
              <NewsItem key={target.priceTarget} priceTargets={target} />
            )): <Text title="Price Targets not Found"/>}
        </ul>
        {priceTargets.length > 10 && <SeeAllLink path="">See all Price Targets</SeeAllLink>}
        </TabPanel>
      </Tabs>
    </ContentBox>
  );
});
