import { ContentBox } from "components/ContentBox";
import { memo } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from './CompanyNews.module.scss'
import { useSelector } from "react-redux";
import { getCompanyNews } from "components/CompanyInfo";
import { NewsItem } from "components/News/NewsItem/NewsItem";
import { GlobalNews } from "components/News/GlobalNews/model/types/globalNews";
import { SeeAllLink } from "components/Links";

export const CompanyNews = memo(() => {

  const companyNews = useSelector(getCompanyNews)

  console.log(companyNews)

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
              <NewsItem key={news.title} globalNews={news}/>
            ))}
          </ul>
          <SeeAllLink path="">
            See all Company News
          </SeeAllLink>
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </ContentBox>
  )
})