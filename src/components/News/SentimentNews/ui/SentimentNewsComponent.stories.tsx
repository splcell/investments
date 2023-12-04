import type { Meta, StoryObj } from '@storybook/react';

import { SentimentNewsComponent } from './SentimentNewsComponent';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';




const meta = {
  title: 'News/SentimentNews',
  component: SentimentNewsComponent,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof SentimentNewsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};