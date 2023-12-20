import type { Meta, StoryObj } from '@storybook/react';
import { Overview } from './Overview';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { ContentBox } from 'components/ContentBox';
import { Text } from 'components/Text';
import styles from './Overview.module.scss'
import { checkProps } from 'helpers/functions/checkProps';
import { convertData } from 'helpers/functions/convertData';
import { Link } from 'react-router-dom';



const meta = {
  title: 'Profile/Overview',
  component: Overview,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  decorators: [RouterDecorator, StoreDecorator]
  
  
} satisfies Meta<typeof Overview>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProfile = {
  symbol: "AAPL",
  price: 197.57,
  mktCap: 3072766696000,
  companyName: "Apple Inc.",
  currency: "USD",
  isin: "US0378331005",
  exchangeShortName: "NASDAQ",
  industry: "Consumer Electronics",
  website: "https://www.apple.com",
  ceo: "Mr. Timothy D. Cook",
  sector: "Technology",
  country: "US",
  fullTimeEmployees: "161000",
  address: "One Apple Park Way",
  city: "Cupertino",
  state: "CA",
  image: "https://financialmodelingprep.com/image-stock/AAPL.png",
  ipoDate: "1980-12-12",
}

export const OverviewStory = () => {
  const profile = mockProfile;

  return (
      <ContentBox>
        <Text title="Company Overview" align="center" />
        <ul className={styles.overviewList}>
          <li className={styles.overviewItem}>
            <span>Ticker:</span>
            <span>{profile?.symbol}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Country:</span>
            <span>{checkProps(profile?.country)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>ISIN:</span>
            <span>{checkProps(profile?.isin)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>State:</span>
            <span>{checkProps(profile?.state)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Company Name:</span>
            <span>{profile?.companyName}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>City:</span>
            <span>{checkProps(profile?.city)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Market Cap (mln {profile?.currency}):</span>
            <span>{convertData(profile?.mktCap)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>CEO:</span>
            <span>{checkProps(profile?.ceo)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Sector:</span>
            <span>{checkProps(profile?.sector)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Employees:</span>
            <span>
              {checkProps(Number(profile?.fullTimeEmployees).toLocaleString())}
            </span>
          </li>
          <li className={styles.overviewItem}>
            <span>Industry:</span>
            <span>{checkProps(profile?.industry)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>Website:</span>
            <Link to={String(profile?.website)} target="_blank">
              {checkProps(profile?.website)}
            </Link>
          </li>
          <li className={styles.overviewItem}>
            <span>Exchange:</span>
            <span>{checkProps(profile?.exchangeShortName)}</span>
          </li>
          <li className={styles.overviewItem}>
            <span>IPO date:</span>
            <span>{checkProps(profile?.ipoDate)}</span>
          </li>
        </ul>
      </ContentBox>
    
  );
};