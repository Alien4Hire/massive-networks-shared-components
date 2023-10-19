import { Meta } from '@storybook/web-components';

export default {
    title: 'Global Styles/Link',
    argTypes: {
      text: { control: 'text' },
      isDisabled: { control: 'boolean' },
      linkToUrl: { control: 'text' },
      icon: { control: 'boolean' },
    },
  } as Meta;
  
  interface LinkArgs {
    text: string;
    isDisabled?: boolean;
    linkToUrl: string;
    icon?: boolean;
  }

export const DefaultLink = (args: LinkArgs) => {
    return `<a href="${args.linkToUrl}" ${args.isDisabled ? 'class="disabled"' : ''}>${args.text}</a>`;
  };
  
  DefaultLink.args = {
    text: "My Link",
    linkToUrl: "https://www.google.com",
    icon: false
  };

export const LinkWithIcon = (args: LinkArgs) => {
    const iconMarkup = args.icon ? '<span class="material-symbols-outlined">open_in_new</span>' : '';
    return `<a href="${args.linkToUrl}" ${args.isDisabled ? 'class="disabled"' : ''}>${args.text}${iconMarkup}</a>`;
  };
  
  LinkWithIcon.args = {
    text: "My Link",
    linkToUrl: "https://www.google.com",
    icon: true
  };

export const LinkWithText = (args: LinkArgs) => {
  return `This is a Link surrounded by text. <a href="${args.linkToUrl}" ${args.isDisabled ? 'class="disabled"' : ''}>${args.text}</a>`;
};

LinkWithText.args = {
  text: "My Link",
  linkToUrl: "https://www.google.com"
};

export const DisabledLink = (args: LinkArgs) => {
  return `<a href="${args.linkToUrl}" class="disabled">${args.text}</a>`;
};

DisabledLink.args = {
  text: "My Link",
  linkToUrl: "#",
  isDisabled: true
};
