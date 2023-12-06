import type { Meta, StoryObj } from '@storybook/react';
import {SearchTable}  from './SearchTable';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { SearchData } from 'components/Search';



const meta = {
  title: 'tables/SearchTable',
  component: SearchTable,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof SearchTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const results: SearchData[] = [
  
  {
    symbol: 'DAL', 
    name: 'Delta Air Lines, Inc.', 
    currency: 'USD', 
    stockExchange: 'New York Stock Exchange', 
    exchangeShortName: 'NYSE'
  },

  {
    symbol: 'DALS', 
    name: 'DA32 Life Science Tech Acquisition Corp.', 
    currency: 'USD', 
    stockExchange: 'NASDAQ Capital Market', 
    exchangeShortName: 'NASDAQ'
  },

  
  {
    symbol: 'DALN', 
    name: 'DallasNews Corporation', 
    currency: 'USD', 
    stockExchange: 'NASDAQ Capital Market', 
    exchangeShortName: 'NASDAQ'
  },

  {
    symbol: 'DALI', 
    name: 'First Trust Dorsey Wright DALI 1 ETF', 
    currency: 'USD', stockExchange: 'NASDAQ Global Market', 
    exchangeShortName: 'NASDAQ'
  },

  {
    symbol: 'DALCX', 
    name: 'Dean Mid Cap Value Fund No-Load', 
    currency: 'USD', stockExchange: 'NASDAQ', 
    exchangeShortName: 'NASDAQ'
  }
]

export const Primary: Story = {
  
  args: {
    results
  },
  decorators: [RouterDecorator, StoreDecorator],
  
};