import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@jasmim-ds/react'

export default {
  title: 'Base/Button',
  component: Button,
  args: {
    children: 'Button'
  },
  argTypes: {
    onClick: {
      action: 'click'
    }
  }
} as Meta

export const Primary: StoryObj = {}
