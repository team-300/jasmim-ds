import type { Meta, StoryObj } from '@storybook/react'

import { ToggleSwitch } from '../components/base'

export default {
  title: 'Base/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<typeof ToggleSwitch>

export const LabelLeft: StoryObj<typeof ToggleSwitch> = {
  args: {
    label: 'Label',
    description: 'Description',
    disabled: false,
    labelDir: 'left',
  },
}
