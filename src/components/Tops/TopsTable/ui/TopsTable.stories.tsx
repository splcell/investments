import type { Meta, StoryObj } from '@storybook/react';
import { TopsTable } from './TopsTable';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { Gainer, IndexesInfo, SectorPerformance } from 'components/Tops/model/types/tops';



const meta = {
  title: 'tables/TopsTable',
  component: TopsTable,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof TopsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const gainers: Gainer[] = [
  {
    change: 1.86,
    changesPercentage: 64.1379,
    name: "Chanson International Holding",
    price: 4.76,
    symbol: "CHSN"
  },

  
  {
    symbol: 'FRBK', 
    name: 'Republic First Bancorp, Inc.', 
    change: 0.0477, price: 0.1322, 
    changesPercentage: 56.4497
  },

  {
    symbol: 'CNET', 
    name: 'ZW Data Action Technologies Inc.', 
    change: 0.37, price: 1.07, 
    changesPercentage: 52.8572
  }
]

const sectors: SectorPerformance[] = [
  {
    sector: 'Basic Materials', 
    changesPercentage: '-0.77081%'
  },

  {
    sector: 'Communication Services', 
    changesPercentage: '0.27519%'
  },

  {
    sector: 'Consumer Cyclical', 
    changesPercentage: '0.62327%'
  }
]

const indexes: IndexesInfo[] = [
  {
    symbol: '^W2DOW', 
    name: 'Dow Jones Global ex-U.S. Index', 
    price: 264.36, 
    changesPercentage: -0.3768, 
    change: -1
  },

  
  {
    symbol: 'XMADN.IS', 
    name: 'BIST MADENCILIK', 
    price: 6522.59, 
    changesPercentage: -1.6976, 
    change: -112.6401
  },

  {
    symbol: '^W5000', 
    name: 'Wilshire 5000 Total Market Index', 
    price: 42053.2, 
    changesPercentage: 0, 
    change: 0
  }
]

export const TypeGainer: Story = {
  
  args: {
    topData: gainers
  },
  decorators: [RouterDecorator, StoreDecorator]
};

export const TypeGainerPositive: Story = {
  
  args: {
    topData: gainers,
    sentiment: 'positive'
  },
  decorators: [RouterDecorator, StoreDecorator]
};

export const TypeGainerNegative: Story = {
  
  args: {
    topData: gainers,
    sentiment: 'negative'
  },
  decorators: [RouterDecorator, StoreDecorator]
};

export const TypeSectorPerformance: Story = {
  
  args: {
    sectorPerformance: sectors
  },
  decorators: [RouterDecorator, StoreDecorator]
};

export const TypeIndexes: Story = {
  
  args: {
    indexes: indexes
  },
  decorators: [RouterDecorator, StoreDecorator]
};