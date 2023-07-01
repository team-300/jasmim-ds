import type { Meta, StoryObj } from '@storybook/react'

import { Chip } from '../components/base'

export default {
  title: 'Base/Chip',
  component: Chip,
  argTypes: {
    application: {
      options: ['on-white', 'on-dark'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof Chip>

export const Default: StoryObj<typeof Chip> = {
  args: {
    application: 'on-white',
    isSelected: true,
    isClosable: true,
    size: 'sm',
    title: 'Chip',
  },
}
