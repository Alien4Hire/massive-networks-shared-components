import type { Meta, StoryObj } from '@storybook/web-components';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-text-field',
  title: 'Components/mass-input-field', 
};

const defaultArgs = {
  inputId: 'inputId',
  labelText: 'Label',
  inputPlaceholderText: 'Placeholder',
  inputType: 'text',
  inputValue: '',
  isDisabled: false,
  maxLength: 50,
  labelPosition: 'top'
}

export default meta;

export const Default: Story = {
  args: {
    ...defaultArgs,
  }
}
export const DefaultWithHelpText: Story = {
  args: {
    ...Default.args,
    helpText: 'This is help text'
  }
}

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    isDisabled: true
  }
}

export const DisabledWithHelpText: Story = {
  args: {
    ...Disabled.args,
    helpText: 'This is help text'
  }
}

export const WithErrorMessage: Story = {
  args: {
    ...defaultArgs,
    isValid: false,
    errorText: 'Error explanation text'
  }
}

export const WithErrorMessageAndHelpText: Story = {
  args: {
    ...WithErrorMessage.args,
    helpText: 'This is help text'
  }
}

export const WithSuccessMessage: Story = {
  args: {
    ...defaultArgs,
    isValid: true,
    successText: 'Success explanation text'
  }
}

export const WithSuccessMessageAndHelpText: Story = {
  args: {
    ...WithSuccessMessage.args,
    helpText: 'This is help text'
  }
}

export const LabelOnTheLeft: Story = {
  args: {
    ...defaultArgs,
    labelPosition: 'left'
  }
};
