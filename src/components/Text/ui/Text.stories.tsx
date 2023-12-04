import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';



const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Title: Story = {
  
  args: {
    title: 'Component Title'
  },
  
};

export const ComponentText: Story = {
  
  args: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  
};

export const TitleBordered: Story = {
  
  args: {
    title: 'Component Title',
    bordered: true
  },
  
};

export const TitleAlignCenter: Story = {
  
  args: {
    title: 'Component Title',
    align: 'center'
  },
  
};

export const TitleAlignCenterBordered: Story = {
  
  args: {
    title: 'Component Title',
    align: 'center',
    bordered: true
  },
  
};





