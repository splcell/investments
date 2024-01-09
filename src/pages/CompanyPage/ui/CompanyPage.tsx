import { memo, useEffect } from "react";
import styles from "./CompanyPage.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.scss';
import {useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "hooks/hooks";
import {CompanyChart, Description, Dividends, Info, KeyRatios, Overview, fetchingCompanyInfo } from "components/CompanyInfo";
import { MinMax } from "components/CompanyInfo/MinMax/ui/MinMax";
import { CompanyNews } from "components/News";
import { Balance, Income } from "components/Reports";


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

  return (
    <div data-testid="company-page" className={styles.companyWrapper}>
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Reports</Tab>
            <Tab>Ratios</Tab>
            <Tab>Dividends</Tab>
            <Tab>Events</Tab>
          </TabList>
          <TabPanel>
            <Info/>
            <CompanyChart />
            <MinMax />
            <Overview />
            <KeyRatios />
            <Dividends />
            <Description />
            <CompanyNews />
          </TabPanel>
          <TabPanel>
          <Tabs>
          <TabList>
            <Tab>Balance Sheet</Tab>
            <Tab>Income Statement</Tab>
            <Tab>Cash Flow Statement</Tab>
          </TabList>
          <TabPanel>
            <Balance />
          </TabPanel>
          <TabPanel>
            <Income />
          </TabPanel>
          <TabPanel></TabPanel>
          </Tabs>
          
          
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
