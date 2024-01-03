import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'Components/Chart',
  component: Chart,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof Chart>;

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
    type: 'column',
    color: ['#4e4e4e']
  },
  decorators: [RouterDecorator, StoreDecorator]
};