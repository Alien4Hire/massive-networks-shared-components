import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-image',
  args: {
    src: 'https://via.placeholder.com/150',
    shape: 'square',
    overlay: false,
  },
  render: function() {
    return html`
      <mass-image src="${meta.args.src}" shape="${meta.args.shape}" ?overlay="${meta.args.overlay}"></mass-image>
    `
  }
};

export default meta;

const Template = (args) => `<mass-image src="${args.src}" shape="${args.shape}" ?overlay="${args.overlay}"></mass-image>`;

export const BasicImage: Story = Template.bind({});

BasicImage.args = {
    shape: 'round',
    overlay: false
};

export const RoundImage: Story = Template.bind({});

RoundImage.args = {
    src: 'https://res.cloudinary.com/dghsmwkfq/image/upload/v1670086178/dinosaur_xzmzq3.png',
    shape: 'rounded',
    overlay: false
};

export const SquareImage: Story = Template.bind({});

SquareImage.args = {
    src: 'https://res.cloudinary.com/dghsmwkfq/image/upload/v1670086178/dinosaur_xzmzq3.png',
    shape: 'square',
    overlay: false
};

export const RoundedImage: Story = Template.bind({});

RoundedImage.args = {
    src: 'https://res.cloudinary.com/dghsmwkfq/image/upload/v1670086178/dinosaur_xzmzq3.png',
    shape: 'rounded',
    overlay: false
};

export const RoundImageWithOverlay: Story = Template.bind({});

RoundImageWithOverlay.args = {
    src: 'https://res.cloudinary.com/dghsmwkfq/image/upload/v1670086178/dinosaur_xzmzq3.png',
    shape: 'round',
    overlay: true
};

// ... You can create more variations for square and rounded with overlay as well.
