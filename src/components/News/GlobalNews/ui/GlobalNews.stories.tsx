import type { Meta, StoryObj } from '@storybook/react';
import { GlobalNewsComponent } from './GlobalNewsComponent';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'News/GlobalNews',
  component: GlobalNewsComponent,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof GlobalNewsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};

