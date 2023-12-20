import type { Meta, StoryObj } from '@storybook/react';
import { Chart  as CompanyChart } from '../../../Chart/index';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'Components/CompanyChart',
  component: CompanyChart,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof CompanyChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const chartData = [
[1674691200000, 0.41], [1683763200000, 0.41],[1690416000000, 0.41],
[1699488000000, 0.41], [1706140800000, 0.42]
]

export const Primary: Story = {

  args: {
    chartData: chartData,
    text: 'Text',
    type: 'area',
  },
  decorators: [RouterDecorator, StoreDecorator]
};