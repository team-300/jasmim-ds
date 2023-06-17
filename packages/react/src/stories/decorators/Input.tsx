import React from 'react'
import { action } from '@storybook/addon-actions'
import { FormProvider, useForm } from 'react-hook-form'

const StorybookFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export const withRHF = (Story: React.FC) => (
  <StorybookFormProvider>
    <Story />
  </StorybookFormProvider>
)
