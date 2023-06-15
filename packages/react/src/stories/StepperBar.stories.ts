import type { Meta, StoryObj } from '@storybook/react'

import { StepperBar } from '../components/base'

export default {
  title: 'Base/StepperBar',
  component: StepperBar,
} as Meta<typeof StepperBar>

export const Default: StoryObj<typeof StepperBar> = {
  args: {
    steps: [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }],
    currentStep: 1,
  },
}
