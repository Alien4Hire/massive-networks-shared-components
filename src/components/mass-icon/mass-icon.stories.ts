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
    'white',
    'black',
    'purple',
    'green',
    'orange',
    'red'
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

export const FiberBuilding: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconName: "mapCircle",
    color: 'purple'
  }
}

export const FiberDatCenter: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconName: "mapCircle",
    color: 'green'
  }
}

export const FiberCellSite: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconName: "mapCircle",
    color: 'orange'
  }
}

export const FiberPOP: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconName: "mapCircle",
    color: 'red'
  }
}

export const EthernetWireless: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconName: "wifi",
    color: 'purple'
  }
}

export const EthernetCopper: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconName: "mapCircle",
    color: 'purple'
  }
}

export const EthernetCoax: Story = {
  argTypes,
  args: {
    ...defaultArgs,
    iconName: "mapCircle",
    color: 'black'
  }
}
