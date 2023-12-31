import type { Meta, StoryObj } from '@storybook/react';
import { CompanyNews } from './CompanyNews';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'News/CompanyNews',
  component: CompanyNews,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof CompanyNews>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};