import type { Meta, StoryObj } from '@storybook/react'

import { NavButton } from '../components/base'

export default {
  title: 'Base/NavButton',
  component: NavButton,
  argTypes: {
    application: {
      options: ['on-dark', 'on-white'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['md', 'sm'],
      control: { type: 'inline-radio' },
    },
    kind: {
      options: ['back-single', 'back-full', 'back-arrow', 'close'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof NavButton>

export const BackSingle: StoryObj<typeof NavButton> = {
  args: {
    application: 'on-white',
    kind: 'back-single',
    size: 'md',
  },
}
export const BackFull: StoryObj<typeof NavButton> = {
  args: {
    application: 'on-white',
    kind: 'back-full',
    size: 'md',
  },
}

export const BackArrow: StoryObj<typeof NavButton> = {
  args: {
    application: 'on-white',
    kind: 'back-arrow',
    size: 'md',
  },
}

export const Close: StoryObj<typeof NavButton> = {
  args: {
    application: 'on-white',
    kind: 'close',
    size: 'md',
  },
}
