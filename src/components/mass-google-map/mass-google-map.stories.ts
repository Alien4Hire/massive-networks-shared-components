import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-google-map',
  title: 'Components/mass-google-map', 
};

const legendDefaultArgs: {
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

const defaultArgs = {
};

export default meta;

export const Default: Story = {
  args: {
    ...defaultArgs,
  }
};

export const WithDefaultLocation: Story = {
  args: {
    ...defaultArgs,
    center: { lat: 37.7849, lng: -122.4294 },
    latitude: 37.7749,
    longitude: -122.4194,
  }
};

export const WithMultipleCoordinates: Story = {
  args: {
    ...defaultArgs,
    center: { lat: 37.7849, lng: -122.4294 },
    coordinates: [
      { lat: 37.7749, lng: -124.4194 },
      { lat: 37.7849, lng: -122.4294 } 
    ]
  }
};

export const WithLegend: Story = {
  args: {
    ...defaultArgs,
    legend: legendDefaultArgs.items,
  }
};

