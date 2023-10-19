// mass-textarea.stories.ts

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html'

const meta: Meta = {
  component: 'mass-textarea',
  decorators: [
    (Story: any) => html`
      <div style="height: 128px; width: 295px;">
        ${Story()}
      </div>
    `,
  ],
};

export default meta;

type Story = StoryObj;


export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  }
}

export const WithText: Story = {
  args: {
    value: 'Hello World!',
    label: 'Label',
  }
}

export const ErrorState: Story = {
  args: {
    isError: true,
    errorMsg: 'This is an error',
    label: 'Label',
  }
}

export const DisabledState: Story = {
  args: {
    isDisabled: true,
  }
}
