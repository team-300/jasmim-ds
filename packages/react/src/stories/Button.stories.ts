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
    application: {
      options: ['on-white', 'on-dark'],
      control: { type: 'inline-radio' },
    },
    variation: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quintinary',
        'danger',
      ],
      control: { type: 'inline-radio' },
    },
    fullSize: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {
  args: {
    application: 'on-white',
    variation: 'primary',
    size: 'md',
    fullSize: false,
    isLoading: false,
  },
}
export const Secondary: StoryObj<typeof Button> = {
  args: {
    application: 'on-white',
    variation: 'secondary',
    size: 'md',
    fullSize: false,
    isLoading: false,
  },
}
export const Tertiary: StoryObj<typeof Button> = {
  args: {
    application: 'on-white',
    variation: 'tertiary',
    size: 'md',
    fullSize: false,
    isLoading: false,
  },
}
export const PrimaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    application: 'on-white',
    variation: 'primary',
    size: 'md',
    fullSize: false,
    isLoading: false,
    leftIcon: 'settings',
  },
}

export const PrimaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    application: 'on-white',
    variation: 'primary',
    size: 'md',
    fullSize: false,
    isLoading: false,
    rightIcon: 'settings',
  },
}
