import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from '../components/base'

export default {
  title: 'Base/IconButton',
  component: IconButton,
  args: {},
  argTypes: {
    variation: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    appearance: {
      options: ['square', 'circle'],
      control: { type: 'inline-radio' },
    },
    mode: {
      options: ['light', 'dark'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof IconButton>

export const Primary: StoryObj<typeof IconButton> = {
  args: {
    icon: 'icon-settings',
    variation: 'primary',
    appearance: 'circle',
    size: 'md',
    mode: 'light',
  },
}

export const Secondary: StoryObj<typeof IconButton> = {
  args: {
    icon: 'icon-settings',
    variation: 'secondary',
    appearance: 'circle',
    size: 'md',
    mode: 'light',
  },
}

export const Tertiary: StoryObj<typeof IconButton> = {
  args: {
    icon: 'icon-settings',
    variation: 'tertiary',
    appearance: 'circle',
    size: 'md',
    mode: 'light',
  },
}
export const Quaternary: StoryObj<typeof IconButton> = {
  args: {
    icon: 'icon-settings',
    variation: 'quaternary',
    appearance: 'circle',
    size: 'md',
    mode: 'light',
  },
}
