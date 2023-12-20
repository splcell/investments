import type { Meta, StoryObj } from '@storybook/react';
import { KeyRatios } from './KeyRatios';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { ContentBox } from 'components/ContentBox';
import styles from './KeyRatios.module.scss'
import { Text } from 'components/Text';



const meta = {
  title: 'Profile/KeyRatios',
  component: KeyRatios,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  decorators: [RouterDecorator, StoreDecorator]
  
  
} satisfies Meta<typeof KeyRatios>;

export default meta;
type Story = StoryObj<typeof meta>;

const ratiosMock = [
  {
    dividendYielPercentageTTM: 0.48084223313256064,
    peRatioTTM: 31.77462936625599,
    payoutRatioTTM: 0.1549048920047425,
    currentRatioTTM: 0.9880116717592975,
    returnOnAssetsTTM: 0.27509834563776475,
    returnOnEquityTTM: 1.6078406995296408,
    totalDebtToCapitalizationTTM: 0.6412597988847455,
    interestCoverageTTM: 29.062039155860667,
    freeCashFlowPerShareTTM: 6.383821361723765,
    priceBookValueRatioTTM: 49.59257515173945,
    priceToBookRatioTTM: 49.59257515173945,
    priceToSalesRatioTTM: 8.016923949541464,
    dividendPerShareTTM: 0.95
  }
]

export const KeyRatiosStory = () => {
  const ratios = ratiosMock;
  

  const ratiosData: { [key: string]: number } = {};

  ratios.forEach((ratio) => {
    ratiosData["Dividend Yield %"] =
      +ratio.dividendYielPercentageTTM.toFixed(2);
    ratiosData[`Dividend per Share (currency)`] =
      +ratio.dividendPerShareTTM.toFixed(2);
    ratiosData["P/E"] = ratio.peRatioTTM && +ratio.peRatioTTM.toFixed(2);
    ratiosData["P/B"] =
      ratio.priceToBookRatioTTM && +ratio.priceToBookRatioTTM.toFixed(2);
    ratiosData["P/S"] =
      ratio.priceToSalesRatioTTM && +ratio.priceToSalesRatioTTM.toFixed(2);
    ratiosData["Payout Ratio"] =
      ratio.payoutRatioTTM && +ratio.payoutRatioTTM.toFixed(2);
    ratiosData["Current Ratio"] =
      ratio.currentRatioTTM && +ratio.currentRatioTTM.toFixed(2);
    ratiosData["ROE%"] =
      +ratio.returnOnEquityTTM && Math.floor(ratio.returnOnEquityTTM * 100);
    ratiosData["ROA%"] =
      +ratio.returnOnAssetsTTM && Math.floor(ratio.returnOnAssetsTTM * 100);
    ratiosData["Total Debt / Capitalization"] =
      ratio.totalDebtToCapitalizationTTM &&
      +ratio.totalDebtToCapitalizationTTM.toFixed(2);
    ratiosData["Interest Coverage"] =
      +ratio.interestCoverageTTM && +ratio.interestCoverageTTM.toFixed(2);
    ratiosData["Free Cash Flow per Share"] =
      +ratio.freeCashFlowPerShareTTM &&
      +ratio.freeCashFlowPerShareTTM.toFixed(2);
  });

  return (
      <ContentBox>
        <Text title="Key Ratios (TTM)" align="center" />
        <ul className={styles.ratioslist}>
          {Object.entries(ratiosData).map(([key, value]) => (
            <li key={value} className={styles.ratiosItem}>
              <span>{key}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        
      </ContentBox>
  
  )};