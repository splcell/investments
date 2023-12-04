import type { Meta, StoryObj } from '@storybook/react';

import { NewsItem } from './NewsItem';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { GlobalNewsComponent } from '../GlobalNews/ui/GlobalNewsComponent';
import { GlobalNews } from '../GlobalNews/model/types/globalNews';
import { useSelector } from 'react-redux';
import { getSentimentNews } from '../SentimentNews/model/selectors/sentimentNewsSelectors';
import { SentimentNews } from '../SentimentNews/model/types/sentimentNews';



const meta = {
  title: 'News/NewsItem',
  component: NewsItem,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof NewsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const globalData: GlobalNews =
  {
    image: 'https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/12/04/bd226e73-00cf-4d76-9fdc-599fafdfa64c_ef684159.jpg?itok=aQ90EsEY',
    publishedDate: '2023-12-04T19:30:23.000Z',
    site: 'scmp',
    text: '',
    title: 'India’s ruling BJP wins big in state polls but can it extend victory into 2024 national elections?',
    url: ''
  }

const sentimentNewsPositive: SentimentNews = {
  image: '',
  publishedDate: '2023-12-04T11:59:16.000Z',
  site: 'finance',
  text: '',
  title: 'Uber Will Join The S&P 500 Index. The Stock Is Jumping.',
  url: '', 
  sentiment: 'Positive',
  symbol: 'BLDR'
}

const sentimentNewsNegative: SentimentNews = {
  image: '',
  publishedDate: '2023-12-04T11:59:16.000Z',
  site: 'finance',
  text: '',
  title: 'Uber Will Join The S&P 500 Index. The Stock Is Jumping.',
  url: '', 
  sentiment: 'Negative',
  symbol: 'BLDR'
}

export const GlobalItem: Story = {
  
  args: {
    globalNews: globalData
  },
  decorators: [RouterDecorator, StoreDecorator]
};

export const SentimentItemPositive: Story = {
  
  args: {
    sentimentNews: sentimentNewsPositive
  },
  decorators: [RouterDecorator, StoreDecorator]
};

export const SentimentItemNegative: Story = {
  
  args: {
    sentimentNews: sentimentNewsNegative
  },
  decorators: [RouterDecorator, StoreDecorator]
};