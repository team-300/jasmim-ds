import type { Meta, StoryObj } from '@storybook/react'

import { AtentionButton } from '../components/base'

export default {
  title: 'Base/AtentionButton',
  component: AtentionButton,
  argTypes: {
    variation: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof AtentionButton>

export const Default: StoryObj<typeof AtentionButton> = {
  args: {
    variation: 'primary',
    icon: 'icon-cash-sm',
    title: 'Sacar saldo',
    fullSize: false,
    disabled: false,
  },
}
