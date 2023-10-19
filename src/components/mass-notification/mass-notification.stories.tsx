import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-notification',
  args: {
    headingLevel: 2,
    headingText: "Title",
    iconName: "test",
    priority: "low",
  },
  render: function() {
    return html`
    <mass-notification heading-text="Title" priority="low">
        <p>This is a test.</p>
      </mass-notification>`
  }
};

export default meta;

const Template = (args) => `<mass-notification heading-text="${args.headingText}" priority="${args.priority}" icon-name="${args.iconName}" heading-level="${args.headingLevel}"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p></mass-notification>`;

export const LowPriority: Story = Template.bind({})

LowPriority.args = {
    priority: "low",
    headingText: "Title",
    headingLevel: 1,
    iconName: "gas_meter"
  }


export const MediumPriority: Story = Template.bind({}) 

MediumPriority.args = {
    priority: "medium",
    headingText: "Title",
    headingLevel: 2,
    iconName: "info"
  }


export const HighPriority: Story = Template.bind({}) 

HighPriority.args = {
    priority: "high",
    headingText: "Title",
    headingLevel: 3,
    iconName: "warning"
  }
