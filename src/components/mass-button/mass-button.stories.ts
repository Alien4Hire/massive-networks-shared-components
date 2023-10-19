import { html } from 'lit-html';

export default {
  title: 'Components/mass-button',
  component: 'mass-button',
  argTypes: {
    isRounded: { control: 'boolean' },
    type: { control: 'text' },
    iconName: { control: 'text' },
    size: {control: 'text'},
    isDropdown: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  }
};

const Template = (args) => html`
  <mass-button .type="${args.type}" .isRounded="${args.isRounded}" .isDropdown="${args.isDropdown}" .isDisabled="${args.isDisabled}" .size="${args.size}" .iconName="${args.iconName}"
    >Button Text</mass-button>
`;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  type: "default",
  isRounded: false,
  iconName: ''
};

export const DarkButton = Template.bind({});
DarkButton.args = {
  type: "dark",
  isRounded: false,
  iconName: ''
};

export const GithubButton = Template.bind({});
GithubButton.args = {
  type: "github",
  isRounded: false,
  iconName: 'github',
  size: 'large'
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  ...DefaultButton.args,
  isRounded: true,
  type: 'green'
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  ...DefaultButton.args,
  iconName: 'warning'
};

export const RoundedButtonWithIcon = Template.bind({});
RoundedButtonWithIcon.args = {
  ...DefaultButton.args,
  isRounded: true,
  iconName: 'warning'
};

export const ButtonWithDropdownIcon = Template.bind({});
ButtonWithDropdownIcon.args = {
  ...DefaultButton.args,
  isDropdown: true,
  isRounded: false,
  iconName: 'expand_more'
};

export const ButtonThatIsDisabled = Template.bind({});
ButtonThatIsDisabled.args = {
  ...DefaultButton.args,
  isDisabled: true,
  isRounded: false,
};
