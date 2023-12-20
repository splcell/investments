import type { Meta, StoryObj } from '@storybook/react';
import { CompanyInfo } from './CompanyInfo';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';



const meta = {
  title: 'Profile/CompanyInfo',
  component: CompanyInfo,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof CompanyInfo>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  
  args: {
    
  },
  decorators: [RouterDecorator, StoreDecorator]
};