import type { Meta, StoryObj } from '@storybook/react'

import { AvatarProfile } from '../components/base'

export default {
  title: 'Base/AvatarProfile',
  component: AvatarProfile,
  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof AvatarProfile>

export const Default: StoryObj<typeof AvatarProfile> = {
  args: {
    size: 'sm',
    avatarName: 'Lucas Barque',
    avatarUrl: 'https://github.com/lucasbarque.png',
  },
}
