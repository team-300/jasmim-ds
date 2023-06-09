import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../components/base'

export default {
  title: 'Base/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'md',
  },
  argTypes: {
    variation: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'inline-radio',
    },
    fullSize: {
      control: 'boolean',
    },
    size: {
      options: ['tn', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {
  args: {
    variation: 'primary',
    size: 'md',
    fullSize: false,
  },
}
export const Secondary: StoryObj<typeof Button> = {
  args: {
    variation: 'secondary',
    size: 'md',
    fullSize: false,
  },
}
export const Tertiary: StoryObj<typeof Button> = {
  args: {
    variation: 'tertiary',
    size: 'md',
    fullSize: false,
  },
}
