import type { Meta, StoryObj } from '@storybook/react';
import { MostActive } from './MostActive';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'widgets/MostActive',
  component: MostActive,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof MostActive>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};