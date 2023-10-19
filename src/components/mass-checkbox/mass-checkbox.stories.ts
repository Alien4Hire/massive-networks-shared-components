// my-component.stories.ts

import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'mass-checkbox-group',
};

export default meta;

type Story = StoryObj;


export const Checked: Story = {
  args: {
    checked: true,
    text: 'Option 1'
  }
}

export const Unchecked: Story = {
  args: {
    checked: false,
    text: 'Option 2'
  }
}

export const UncheckedError: Story = {
  args: {
    checked: false,
    isError: true,
    errorMsg: 'There is an error',
    text: 'Option 1'
  }
}

export const UncheckedDisableError: Story = {
  args: {
    checked: false,
    isError: true,
    isDisabled: true,
    errorMsg: 'There is an error',
    text: 'Option 1'
  }
}

export const Disabled: Story = {
  args: {
    checked: false,
    isDisabled: true,
    text: 'Option 1'
  }
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    isDisabled: true,
    text: 'Option 1'
  }
}

export const GroupCheckbox: Story = {
  args: {
    label: 'Checkbox Group',
    checked: [false, true, false, false],
    text: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  }
}

export const GroupCheckboxDisabled: Story = {
  args: {
    label: 'Checkbox Group',
    checked: [false, true, false, false],
    text: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    isDisabled: true,
  }
}
