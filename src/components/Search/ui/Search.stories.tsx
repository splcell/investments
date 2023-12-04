import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};