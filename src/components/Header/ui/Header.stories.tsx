import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';


const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  //@ts-ignore
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};
