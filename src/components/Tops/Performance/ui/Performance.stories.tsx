import type { Meta, StoryObj } from '@storybook/react';
import { Performance } from './Performance';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'widgets/Performance',
  component: Performance,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof Performance>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};