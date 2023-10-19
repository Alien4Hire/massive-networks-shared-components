import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-question-toggle',
  decorators: [(Story: any) => html` <div style="max-width: 624px;width:100%">${Story()}</div> `],
};

const defaultArgs = {
  iconName: 'emoji_people',
  defaultValue: '',
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  labelId: 'lorem',
  optionsGroupName: 'yesNo',
  optionOneLabel: 'No',
  optionOneValue: 'no',
  optionOneId: 'ipsum',
  optionTwoLabel: 'Yes',
  optionTwoValue: 'yes',
  optionTwoId: 'delor',
};

export default meta;

export const Unselected: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Selected: Story = {
  args: {
    ...defaultArgs,
    defaultValue: 'yes',
  },
};
