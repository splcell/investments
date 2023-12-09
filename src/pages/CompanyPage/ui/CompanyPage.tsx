import { memo, useEffect } from "react";
import styles from "./CompanyPage.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ContentBox } from "components/ContentBox";
import 'react-tabs/style/react-tabs.scss';
import { useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "hooks/hooks";
import {Info, fetchingCompanyInfo } from "components/CompanyInfo";

const CompanyPage = memo(() => {
  const {ticker} = useParams<{ticker: string}>()
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(ticker){
      dispatch(fetchingCompanyInfo(ticker))
      setSearchParams({search: ticker})
    }

  }, [ticker, dispatch])

  console.log(searchParams.values())

  return (
    <div data-testid="company-page" className={styles.companyWrapper}>
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>Profile</Tab>
            <Tab onClick={() => setSearchParams({tab: 'reports'})}>Reports</Tab>
            <Tab>Ratios</Tab>
            <Tab>Dividends</Tab>
            <Tab>Events</Tab>
          </TabList>
          <TabPanel>
            <Info/>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
});

export default CompanyPage;
