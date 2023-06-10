import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../components/base'

export default {
  title: 'Base/Icon',
  component: Icon,
  args: {
    size: 48,
  },
  argTypes: {},
} as Meta<typeof Icon>

export const Default: StoryObj<typeof Icon> = {
  args: {
    icon: 'settings',
    color: 'black',
  },
}
