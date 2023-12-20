import type { Meta, StoryObj } from '@storybook/react';
import CompanyPage  from './CompanyPage';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'pages/CompanyPage',
  component: CompanyPage,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof CompanyPage>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  parameters: {
    ticker: 'AAPL'
  },
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};