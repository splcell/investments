import type { Meta, StoryObj } from '@storybook/react';
import { MinMax } from './MinMax';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { ContentBox } from 'components/ContentBox';
import styles from './MinMax.module.scss';



const meta = {
  title: 'Profile/MinMax',
  component: MinMax,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  decorators: [RouterDecorator, StoreDecorator]
  
  
} satisfies Meta<typeof MinMax>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockMetrics = {
  dividendYielTTM: 0,
  volume: 128538401,
  yearHigh: 199.62,
  yearLow: 124.17
}

export const MinMaxStory = () => {
  const metrics = mockMetrics;
  const price = 197.57

  const calcProgressWidth =
    (Number(price) / Number(metrics?.yearHigh)) * 100 + "%";

  return (
      <ContentBox>
        <div className={styles.minMax}>
          <p className={styles.minmaxDescr}>
            52 Week Low {metrics?.yearLow.toFixed(2)} (currency)
          </p>
          <div className={styles.minmaxProgress}>
            <span
              style={{
                width: `${calcProgressWidth}`,
                background: "#4e4e4e",
                borderRadius: "0.5rem",
                height: "1.5rem",
                display: "flex",
                fontSize: "17px",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              {Number(calcProgressWidth.replace("%", "")).toFixed()}%
            </span>
          </div>
          <p className={styles.minmaxDescr}>
            52 Week High {metrics?.yearHigh.toFixed(2)} (currency)
          </p>
        </div>
      </ContentBox>
  );
};