import type { Meta, StoryObj } from '@storybook/react';

import { Preloader } from './Preloader';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';




const meta = {
  title: 'Components/Preloader',
  component: Preloader,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof Preloader>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  
  args: {
    
  },
  
};