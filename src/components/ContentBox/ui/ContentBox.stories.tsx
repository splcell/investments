import type { Meta, StoryObj } from '@storybook/react';

import { ContentBox } from './ContentBox';


const meta = {
  title: 'Components/ContentBox',
  component: ContentBox,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    children: 'Title',
  },
};

