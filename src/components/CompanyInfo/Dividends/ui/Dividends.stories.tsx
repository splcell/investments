import type { Meta, StoryObj } from '@storybook/react';
import { Dividends } from './Dividends';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { useSelector } from 'react-redux';
import { getDividend } from 'components/CompanyInfo/model/selectors/companyInfoSelectors';
import { useEffect, useState } from 'react';
import { ContentBox } from 'components/ContentBox';
import { Chart } from 'components/Chart';
import { SeeAllLink } from 'components/Links';
import styles from './Dividends.module.scss'
import { Text } from 'components/Text';



const meta = {
  title: 'Profile/Dividends',
  component: Dividends,
  parameters: {
    
    layout: 'fullscreen',

  },
  
  tags: ['autodocs'],
  decorators: [RouterDecorator, StoreDecorator]
  
  
} satisfies Meta<typeof Dividends>;

export default meta;
type Story = StoryObj<typeof meta>;

const dividendsMock = [
  {
    adjDividend: 0.42,
    date: "2024-01-25",
    declarationDate: "2023-12-14",
    dividend: 0.42,
    label: "January 25, 24",
    paymentDate: "2024-03-01",
    recordDate: "2024-01-26"
  },

  {
    adjDividend: 0.41,
    date: "2023-11-09",
    declarationDate: "2023-10-04",
    dividend: 0.41,
    label: "November 09, 23",
    paymentDate: "2023-12-04",
    recordDate: "2023-11-10"
  },

  {
    adjDividend: 0.41,
    date: "2023-11-09",
    declarationDate: "2023-08-04",
    dividend: 0.41,
    label: "November 09, 23",
    paymentDate: "2023-10-04",
    recordDate: "2023-09-10"
  }
]

export const DividendsInfo = () => {
  const dividendsInfo = dividendsMock;
  const [chartData, setChartData] = useState<any[]>([]);
  const chartColor: string[] = ["#434348"];


  useEffect(() => {
    const newChartData: any[] = [];
    for (let i = 0; i < dividendsInfo.length; i++) {
      newChartData.unshift([
        new Date(dividendsInfo[i].date).getTime(),
        dividendsInfo[i].adjDividend,
      ]);
    }

    setChartData(newChartData);
  }, [dividendsInfo]);

  if (!dividendsInfo || dividendsInfo.length === 0) {
    return null;
  }

  console.log(chartData);

  return (
    <ContentBox>
      <Text title="Dividends" align="center" />
      <div className={styles.dividendInner}>
        <Chart
          chartData={chartData}
          text={'Company Name Dividends (currency)'}
          type="column"
          color={chartColor}
          rangeSelectorStatus={false}
          navigatorStatus={false}
          scrollBarStatus={false}
          width={900}
          pointWidth={40}
        />
        <div className={styles.dividendInfo}>
          <Text title="Last payment" align="center" size={17} />
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span>Date:</span>
              <span>{dividendsInfo[0].date}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Dividend:</span>
              <span>{dividendsInfo[0].dividend.toFixed(2)}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Adjusted Dividend:</span>
              <span>{dividendsInfo[0].adjDividend.toFixed(2)}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Payment Date:</span>
              <span>{dividendsInfo[0].paymentDate}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Record Date:</span>
              <span>{dividendsInfo[0].recordDate}</span>
            </li>
            <li className={styles.infoItem}>
              <span>Declaration Date:</span>
              <span>{dividendsInfo[0].declarationDate}</span>
            </li>
          </ul>
          <SeeAllLink path="">See full Dividends Info</SeeAllLink>
        </div>
      </div>
    </ContentBox>
  );
}

export const Primary: Story = {
  
  render: () => <DividendsInfo />
  
};