import type { Meta, StoryObj } from '@storybook/react'

import { StatusBadge } from '../components/base'

export default {
  title: 'Base/StatusBadge',
  component: StatusBadge,
  argTypes: {
    variation: {
      options: ['success', 'danger', 'warning', 'neutral'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof StatusBadge>

export const Default: StoryObj<typeof StatusBadge> = {
  args: {
    variation: 'success',
    fullWidth: false,
    title: 'Status Badge',
  },
}
