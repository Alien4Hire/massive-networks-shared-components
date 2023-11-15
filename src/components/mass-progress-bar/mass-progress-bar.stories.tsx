import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/mass-progress-bar',
  component: 'mass-progress-bar',
};

export default meta;

export const ZeroPercentProgress: Story = {
  args: {
    progress: 0,
    isVisible: true,
  },
};

export const FiftyPercentProgress: Story = {
  args: {
    progress: 50,
    isVisible: true,
  },
};

export const HundredPercentProgress: Story = {
  args: {
    progress: 100,
    isVisible: true,
  },
};
