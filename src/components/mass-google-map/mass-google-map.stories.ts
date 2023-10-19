import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-google-map',
  title: 'Components/mass-google-map', 
};

const defaultArgs = {
};

export default meta;

export const Default: Story = {
  args: {
    ...defaultArgs,
  }
};

export const WithInitialCoordinates: Story = {
  args: {
    ...defaultArgs,
    latitude: 37.7749,
    longitude: -122.4194,
  }
};

// Add more stories as needed
