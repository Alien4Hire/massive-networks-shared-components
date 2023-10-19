/** @type { import('@storybook/web-components').Preview } */
import {defineCustomElements} from '../loader';
import '../src/common/scss/global.scss'

defineCustomElements();

export const parameters = {
  controls: { hideNoControlsWarning: true }
}

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    rem: {
      sizes: [
        { value: 12, title: 'XX-Small' },
        { value: 14, title: 'X-Small' },
        { value: 16, title: 'Normal' },
        { value: 24, title: 'Large' },
        { value: 32, title: 'X-Large' },
        { value: 40, title: '2X-Large' },
        { value: 48, title: '3X-Large' },
        { value: 96, title: '4X-Large' },
        { value: 160, title: '5X-Large' },
      ]
    },
  },
};

export default preview;
