import type { Meta, StoryObj } from '@storybook/web-components';
// import * as iconList from './icon-list/icon-list';

type Story = StoryObj;

const meta: Meta = {
  component: 'mass-icon',
};

const argTypes = {
  iconName: {
    control: {
      type: 'select',
    },
    options: ['warning', 'error',  'yard', 'search']
  },
  iconStyle: {
    control: {
      type: 'select',
    },
    options: ['outlined', 'sharp', 'rounded']
  },
  color: {
    control: {
      type: 'select',
    },
    options: [
      'neutral-00-white',
      'neutral-10',
      'neutral-20',
      'neutral-60',
      'neutral-70',
      'neutral-80',
      'neutral-90',
      'neutral-100-black',
      'neutral-transparent-black-10',
      'neutral-transparent-black-20',
      'primary-20',
      'primary-30',
      'primary-40',
      'primary-50',
      'primary-60',
      'semantic-positive-01',
      'semantic-positive-02',
      'semantic-positive-03',
      'semantic-negative-01',
      'semantic-negative-02',
      'semantic-negative-03',
      'semantic-warning-01',
      'semantic-warning-02',
      'semantic-warning-03',

    ]
  },
  weight: {
    control: {
      type: 'select',
    },
    options: [100, 400, 700]
  },
  opticalSize: {
    control: {
      type: 'select',
    },
    options:[16, 24, 32, 48, 64]
  },
  fill: {
    control: {
      type: 'select',
    },
    options: [0, 1]
  },
  grade: {
    control: {
      type: 'select',
    },
    options: [-25, 0, 100]
  },
}

const defaultArgs = {
  color: 'neutral-100-black',
  iconName: 'yard',
  iconAltText: 'Excavation',
  isPresentational: false,
  iconStyle: "rounded", // rounded | sharp | outlined
  opticalSize: 16, // 16 | 24 | 32 | 48 | 64
  weight: 400, // 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  fill: 0, // 0 | 1
  grade: 0, // -25 | 0 | 100
}

export default meta;

export const RoundedIcon: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconStyle: "rounded"
  }
}

export const SharpIcon: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconStyle: "sharp"
  }
}

export const OutlinedIcon: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconStyle: "outlined"
  }
}
