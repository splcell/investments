import type { Meta, StoryObj } from '@storybook/react';

import { NewsLink } from './NewsLink';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';




const meta = {
  title: 'Links/NewsLink',
  component: NewsLink,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof NewsLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const News: Story = {
  
  args: {
    children: 'News Title',
    to: '',
    className: 'newsLink'
  },
  decorators: [RouterDecorator]
};