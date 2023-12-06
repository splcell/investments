import type { Meta, StoryObj } from '@storybook/react';
import { TopGainers } from './TopGainers';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'widgets/TopGainers',
  component: TopGainers,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof TopGainers>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};