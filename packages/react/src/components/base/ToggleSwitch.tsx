import clsx from 'clsx'
import React, { useState } from 'react'

export interface ToggleSwitchProps {
  label: string
  labelDir?: 'left' | 'right'
  description?: string
  disabled?: boolean
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  labelDir = 'left',
  description,
  disabled = false,
}: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center gap-3',
        labelDir === 'left' && 'justify-between',
      )}
      onClick={() => !disabled && setIsOn(!isOn)}
    >
      {labelDir === 'left' && (
        <div>
          <p
            className={clsx(
              'text-body-2-regular',
              !disabled ? 'text-gray-8' : 'text-gray-5',
            )}
          >
            {label}
          </p>
          {description && (
            <p
              className={clsx(
                'font-nunito-sans text-body-3-regular',
                !disabled ? 'text-gray-6' : 'text-gray-5',
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}

      <div
        className={clsx(
          'flex h-6 w-[42px] cursor-pointer items-center rounded-full px-[3px] transition duration-300',
          isOn && 'justify-end bg-brand-medium-2',
          !disabled ? 'bg-gray-4' : 'bg-gray-3',
        )}
      >
        <div className="h-[18px] w-[18px] rounded-full bg-white"></div>
      </div>
      {labelDir === 'right' && (
        <div>
          <p
            className={clsx(
              'text-body-3-regular ',
              !disabled ? 'text-gray-8' : 'text-gray-5',
            )}
          >
            {label}
          </p>
        </div>
      )}
    </div>
  )
}
