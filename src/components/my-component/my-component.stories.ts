// my-component.stories.ts

import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'my-component', 
};

export default meta;

type Story = StoryObj;

const first = 'Stencil';
const middle = 'with';
const last = 'Storybook';

export const FirstOnly: Story = {
  args: {
    first,
  }
}

export const MiddleOnly: Story = {
  args: {
    middle,
  }
}

export const LastOnly: Story = {
  args: {
    last,
  }
}

export const AllTogetherNow: Story = {
  args: {
    first,
    middle,
    last,
  }
}