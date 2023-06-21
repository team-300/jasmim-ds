import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../components/base'

export default {
  title: 'Base/Icon',
  component: Icon,
  argTypes: {},
} as Meta<typeof Icon>

export const Default: StoryObj<typeof Icon> = {
  args: {
    className: 'icon-settings text-black text-[40px]',
  },
}
