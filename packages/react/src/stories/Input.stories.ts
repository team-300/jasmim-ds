import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../components/form'
import { withRHF } from './decorators/Input'

export default {
  title: 'Form/Input',
  component: Input,
  decorators: [withRHF],
  args: {},
  // argTypes: {
  //   variation: {
  //     options: ['primary', 'secondary', 'tertiary', 'quaternary'],
  //     control: { type: 'inline-radio' },
  //   },
  //   size: {
  //     options: ['sm', 'md', 'lg'],
  //     control: { type: 'inline-radio' },
  //   },
  //   appearance: {
  //     options: ['square', 'circle'],
  //     control: { type: 'inline-radio' },
  //   },
  //   mode: {
  //     options: ['light', 'dark'],
  //     control: { type: 'inline-radio' },
  //   },
  // },
} as Meta<typeof Input>

export const Default: StoryObj<typeof Input> = {
  args: {
    type: 'text',
    label: 'Nome completo',
    name: 'name',
    placeholder: 'Digite seu nome',
    error: '',
  },
}
