import type { Meta, StoryObj } from '@storybook/react';

import { CheckDataStatus } from './CheckDataStatus';
import { Preloader } from 'components/Preloader';


const meta = {
  title: 'Components/CheckDataStatus',
  component: CheckDataStatus,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  
  
} satisfies Meta<typeof CheckDataStatus>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Loading: Story = {
  //@ts-ignore
  args: {
    isLoading: true,
    error: undefined,
    title: 'Component Name',
    align: 'left'
  },
};



export const Error: Story = {
  //@ts-ignore
  args: {
    isLoading: false,
    error: 'Data not Found',
    title: 'Component Name',
    align: 'left'

  },
};

export const CustomSizes: Story = {
  //@ts-ignore
  args: {
    isLoading: true,
    error: undefined,
    title: 'Component Name',
    align: 'left',
    boxWidth: 300,
    boxHeight: 500
  },
};

