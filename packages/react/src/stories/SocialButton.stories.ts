import type { Meta, StoryObj } from '@storybook/react'

import { SocialButton } from '../components/base'

export default {
  title: 'Base/SocialButton',
  component: SocialButton,
  args: {
    children: 'Social Button',
  },
  argTypes: {
    variation: {
      options: ['google', 'facebook'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof SocialButton>

export const Default: StoryObj<typeof SocialButton> = {
  args: {
    variation: 'google',
  },
}
