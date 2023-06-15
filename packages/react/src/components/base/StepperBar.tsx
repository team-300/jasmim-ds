import React, { useState } from 'react'

import clsx from 'clsx'
import { Icon } from './Icon'

interface Step {
  title: string
}

export interface StepperBarProps {
  steps: Step[]
  currentStep?: number
}

export const StepperBar: React.FC<StepperBarProps> = ({
  steps,
  currentStep = 1,
}) => {
  const [currentStepBar, setCurrentStepBar] = useState(currentStep)

  return (
    <ul className="flex items-center gap-3">
      {steps.map((step, index) => (
        <li
          key={index + 1}
          className={clsx('flex cursor-pointer items-center gap-3', {
            'text-brand-medium-2': currentStepBar > index + 1,
          })}
          onClick={() => setCurrentStepBar(index + 1)}
        >
          <span
            className={clsx(
              'flex h-6 w-6 items-center justify-center rounded-full border border-gray-5 font-work-sans text-body-2-semibold text-gray-5',
              {
                'border-none bg-brand-pure': currentStepBar > index + 1,
                'border !border-brand-medium-2 !text-brand-medium-2':
                  currentStepBar === index + 1,
              },
            )}
          >
            {currentStepBar > index + 1 ? (
              <Icon icon="check" className="text-white" size={24} />
            ) : (
              index + 1
            )}
          </span>
          <span
            className={clsx('font-work-sans text-body-2-medium text-gray-5', {
              '!text-brand-medium-2': currentStepBar >= index + 1,
            })}
          >
            {step.title}
          </span>

          {index < steps.length - 1 && (
            <Icon
              icon="chev-r"
              className={clsx('text-gray-5', {
                '!text-brand-medium-2': currentStepBar > index + 1,
              })}
              size={16}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
