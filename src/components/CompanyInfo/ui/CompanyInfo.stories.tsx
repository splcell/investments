import type { Meta, StoryObj } from '@storybook/react';
import { CompanyInfo } from './CompanyInfo';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { ContentBox } from 'components/ContentBox';
import styles from './CompanyInfo.module.scss';
import cn from 'classnames'



const meta = {
  title: 'Profile/CompanyInfo',
  component: CompanyInfo,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  decorators: [RouterDecorator, StoreDecorator]
  
  
} satisfies Meta<typeof CompanyInfo>;

export default meta;
type Story = StoryObj<typeof meta>;


const mockProfile = {
  symbol: "MSFT",
  price: 197.57,
  mktCap: 3072766696000,
  companyName: "Microsoft Corporation.",
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
  image: "https://financialmodelingprep.com/image-stock/MSFT.png",
  ipoDate: "1980-12-12",
  changes: -0.54,
}

export const OverviewStory = () => {
  const profile = mockProfile;
  const changePercent = ((profile.changes / profile.price) * 100).toFixed(2)

  return (
      <ContentBox>
        <div className={styles.infoInner}>
        <img src={profile?.image} alt={profile?.companyName} className={styles.logo} />
        <span className={styles.name}>{profile?.companyName}</span>
        <div className={styles.priceInfo}>
          <span className={styles.price}>{profile?.price.toFixed(2)} {profile?.currency}</span>
          <span className={cn(styles.changes, {
            [styles.positive]: profile?.changes && profile.changes > 0,
            [styles.negative]: profile?.changes && profile.changes < 0
          })}>{profile?.changes} ({profile?.changes && profile?.changes !== 0 ? changePercent : 0} %)</span>
        </div>
      </div>
      </ContentBox>
    
  );
};