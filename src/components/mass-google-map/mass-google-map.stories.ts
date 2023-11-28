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
      name: 'markerPurple',
      color: 'purple',
      title: 'Fiber - Building',
    },
    {
      name: 'markerGreen',
      color: 'green',
      title: 'Fiber - DataCenter',
    },
    {
      name: 'markerOrange',
      color: 'orange',
      title: 'Fiber - Cell Site',
    },
    {
      name: 'markerRed',
      color: 'red',
      title: 'Fiber - POP',
    },
    {
      name: 'wifi',
      color: 'purple',
      title: 'Fiber - Wireless',
    },
    {
      name: 'markerPurple',
      color: 'purple',
      title: 'Ethernet - Copper',
    },
    {
      name: 'markerWhite',
      color: 'black',
      title: 'Ethernet - Coax',
    },
  ],
};

const defaultArgs = {};

export default meta;

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithDefaultLocation: Story = {
  args: {
    ...defaultArgs,
    center: { lat: 39.9654502, lng: -105.1241617 },
    latitude: 39.9654502,
    longitude: -122.4194,
  },
};

export const WithMultipleCoordinates: Story = {
  args: {
    ...defaultArgs,
    center: { lat: 39.9654502, lng: -105.1241617 },
    searchResults: [
      {
        id: '1',
        name: '',
        address: '1255 TREAT BLVD',
        city: 'WALNUT CREEK',
        state: 'CA',
        postalCode: '94597',
        lat: 37.9277412,
        lng: -122.0589753,
        distance: '0',
        CID: '2049',
        isDC: 0,
        isPOP: 0,
        isCELL: 0,
        fiberReady: 1,
        coaxReady: 1,
        wirelessReady: 0,
        ethernetReady: 0,
        target: '1',
        lit: '1',
        paths: '4',
      },
    ],
    handleGetQuote : (detail) => {
      console.log('handleGetQuote', detail)
    }
  },
};

export const WithLegend: Story = {
  args: {
    ...defaultArgs,
    legend: legendDefaultArgs.items,
  },
};
