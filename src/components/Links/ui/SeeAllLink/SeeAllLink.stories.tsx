import type { Meta, StoryObj } from '@storybook/react';

import { SeeAllLink } from './SeeAllLink';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'Links/SeeAllLink',
  component: SeeAllLink,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof SeeAllLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SeeAll: Story = {
  
  args: {
    children: 'News Title',
    className: 'newsLink',
    path: ''
  },
  decorators: [RouterDecorator, StoreDecorator]
};

export const CustomMargin: Story = {
  
  args: {
    children: 'News Title',
    className: 'newsLink',
    path: '',
    marginTop: 20
  },
  decorators: [RouterDecorator, StoreDecorator]
};