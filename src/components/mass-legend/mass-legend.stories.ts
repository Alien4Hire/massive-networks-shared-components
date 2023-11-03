import type { Meta, StoryObj } from '@storybook/web-components';
import { MassLegendItemType } from './mass-legend';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-legend',
  title: 'Components/mass-legend',
};



export const defaultArgs: {
  items: MassLegendItemType[];
} = {
  items: [
    {
      name: 'mapCircle',
      color: 'purple',
      title: 'Fiber - Building',
    },
    {
      name: 'mapCircle',
      color: 'green',
      title: 'Fiber - DataCenter',
    },
    {
      name: 'mapCircle',
      color: 'orange',
      title: 'Fiber - Cell Site',
    },
    {
      name: 'mapCircle',
      color: 'red',
      title: 'Fiber - POP',
    },
    {
      name: 'wifi',
      color: 'purple',
      title: 'Fiber - Wireless',
    },
    {
      name: 'mapCircle',
      color: 'purple',
      title: 'Ethernet - Copper',
    },
    {
      name: 'mapCircle',
      color: 'black',
      title: 'Ethernet - Coax',
    },

  ],
};

export default meta;

export const Default: Story = {
  
  args: {
    ...defaultArgs,
  },
};
