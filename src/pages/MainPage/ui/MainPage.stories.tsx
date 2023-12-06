import type { Meta, StoryObj } from '@storybook/react';
import MainPage  from './MainPage';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};