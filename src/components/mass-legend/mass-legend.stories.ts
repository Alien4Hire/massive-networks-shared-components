import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-legend',
  title: 'Components/mass-legend',
};

const defaultArgs: {
  items: {
    name: string;
    color: string;
    title: string;
  }[];
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
      title: 'Wireless - Fixed',
    },
    {
      name: 'mapCircle',
      color: 'purple',
      title: 'Ethernet - Copper',
    },
    {
      name: 'mapCircle',
      color: 'white',
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
