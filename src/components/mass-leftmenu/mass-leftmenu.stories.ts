import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  component: 'mass-leftmenu',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template = () => html`
  <mass-leftmenu>
    <ul>
      <li>Location 1</li>
      <li style="margin-top:6px">Location 2</li>
      <li style="margin-top:6px">Location 3</li>
    </ul>
  </mass-leftmenu>
`;

export const Default: StoryObj = Template.bind({});
