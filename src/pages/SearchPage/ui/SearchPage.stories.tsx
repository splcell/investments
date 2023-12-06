import type { Meta, StoryObj } from '@storybook/react';
import SearchPage  from './SearchPage';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'pages/SearchPage',
  component: SearchPage,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator],
};