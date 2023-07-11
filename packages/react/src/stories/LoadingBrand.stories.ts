import type { Meta, StoryObj } from '@storybook/react'

import { LoadingBrand } from '../components/base'

export default {
  title: 'Base/LoadingBrand',
  component: LoadingBrand,
  argTypes: {},
} as Meta<typeof LoadingBrand>

export const Default: StoryObj<typeof LoadingBrand> = {
  args: {
    text: 'Carregando...',
  },
}
