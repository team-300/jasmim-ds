import React, { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

import { Icon } from '.'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  application?: 'on-white' | 'on-dark'
  isSelected?: boolean
  isClosable?: boolean
  size?: 'sm' | 'md'
  title: string
}

export const Chip: React.FC<ChipProps> = ({
  application = 'on-white',
  size = 'md',
  isSelected = false,
  isClosable = false,
  title,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'flex cursor-pointer items-center justify-center gap-[6px] rounded-full',
        {
          'border-[1.3px] border-transparent-dark-3 text-gray-8':
            application === 'on-white',
          'border-[1.3px] border-transparent-light-3 text-white':
            application === 'on-dark',

          'hover:bg-transparent-dark-1':
            !isSelected && application === 'on-white',
          'hover:bg-transparent-light-3':
            !isSelected && application === 'on-dark',

          'border-[1.5px] !border-brand-medium-2 bg-brand-light-1 !text-body-2-medium text-brand-medium-2':
            isSelected && application === 'on-white',
          'bg-white !text-body-2-medium !text-gray-8':
            isSelected && application === 'on-dark',

          'h-8 px-4 text-body-3-regular': size === 'sm',
          'h-11 px-[18px] text-body-2-regular': size === 'md',

          '!pr-3': isClosable && isSelected,
        },
      )}
      {...rest}
    >
      {title}
      {isClosable && isSelected && (
        <Icon className="icon-close-sm text-[24px]" />
      )}
    </button>
  )
}
