// my-component.stories.ts

import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'mass-select-field',
  title: 'Design System/Elements/Form Fields/Select Field',
  args: {
    inputId: 'input00',
    label: 'label',
    type: 'light',
    isDisabled: false,
    hasError: false,
    errorMessage: 'No this is wrong',
    options: [
      { name: 'FirsVal', value: 'First Text' },
      { name: 'SecondVal', value: 'Second Text' },
      { name: 'ThirdVal', value: 'Third Text' },
    ],
  },
};

export default meta;

const Template = args =>
  `<mass-select-field input-id="${args.inputId}"- label-position=${args.labelPosition} label="${args.label}" type="${args.type}" is-disabled="${args.isDisabled}" error-message="${args.errorMessage}" has-error="${
    args.hasError
  }" options='${JSON.stringify(args.options)}'></mass-select-field>`;

type Story = StoryObj;

let runningIdNumber = 1;
const inputIdBase = 'pick_from_my_options';

const label = 'Label';

const type = 'light'; // false for dark theme

const isDisabled = false;

const hasError = false;

const errorMessage = 'This is an error message';

export const Light: Story = Template.bind({});

Light.args = {
  ...meta.args,
  inputId: inputIdBase + runningIdNumber++,
  labelPosition: 'left'
};

export const Dark: Story = Template.bind({});

Dark.args = {
  inputId: inputIdBase + runningIdNumber++,
  label,
  type: 'dark',
  isDisabled,
  hasError,
  errorMessage,
};

export const Disabled: Story = Template.bind({});

Disabled.args = {
  inputId: inputIdBase + runningIdNumber++,
  label,
  type,
  isDisabled: true,
  hasError,
  errorMessage,
};

export const ErrorState: Story = Template.bind({});

ErrorState.args = {
  inputId: inputIdBase + runningIdNumber++,
  label,
  type,
  isDisabled: false,
  hasError: true,
  errorMessage,
};
