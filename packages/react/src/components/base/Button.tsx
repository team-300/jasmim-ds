import React, { ButtonHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { Loading } from './Loading'
import { Icon } from './Icon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  size: 'lg' | 'md' | 'sm'
  application?: 'on-white' | 'on-dark'
  variation?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'quintinary'
    | 'danger'
  leftIcon?: string
  rightIcon?: string
  fullSize?: boolean
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  leftIcon,
  rightIcon,
  fullSize,
  variation = 'primary',
  application = 'on-white',
  isLoading = false,
  ...rest
}) => {
  const iconSizes = {
    lg: 'text-[28px]',
    md: 'text-[24px]',
    sm: 'text-[16px]',
  }

  const loadingSizes = {
    lg: 'w-7 h-7',
    md: 'w-6 h-6',
    sm: 'w-4 h-4',
  }
  return (
    <button
      className={clsx(
        {
          'h-14 px-7 text-body-1-semibold': size === 'lg',
          'h-11 px-5 text-body-2-medium': size === 'md',
          'h-[34px] px-3 text-body-3-medium': size === 'sm',
          'w-full': fullSize,

          'bg-brand-medium-1 text-black hover:bg-brand-pure focus:bg-brand-medium-2 disabled:bg-brand-pure':
            variation === 'primary' && application === 'on-white',
          'bg-white text-gray-8 hover:bg-gray-3 focus:bg-gray-5 disabled:bg-gray-3':
            variation === 'primary' && application === 'on-dark',

          'border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 disabled:bg-transparent-dark-1':
            variation === 'secondary' && application === 'on-white',
          'border-[1.3px] text-white border-transparent-light-3 hover:bg-transparent-light-1/[0.08] focus:bg-transparent-light-2/[0.14] disabled:bg-transparent-light-1/[0.08]':
            variation === 'secondary' && application === 'on-dark',

          '!px-0 text-brand-medium-2 hover:text-brand-dark focus:text-brand-pure disabled:text-gray-7':
            variation === 'tertiary' && application === 'on-white',
          '!px-0 text-white hover:text-gray-4 focus:text-gray-5 disabled:text-gray-4':
            variation === 'tertiary' && application === 'on-dark',

          '!px-0 text-gray-7 hover:text-gray-8 focus:text-black disabled:text-gray-7':
            variation === 'quaternary',
          'bg-gray-8 text-white hover:bg-gray-7 focus:bg-black disabled:bg-gray-8':
            variation === 'quintinary',
          'border-[1.3px] border-danger-pure text-danger-pure hover:text-danger-medium-2 hover:border-danger-medium-2 focus:bg-danger-light focus:border-danger-dark focus:text-danger-dark disabled:text-danger-dark':
            variation === 'danger',
          'disabled:!opacity-100': variation === 'primary' && isLoading,
        },
        `flex items-center justify-center gap-2 rounded-md transition-all duration-200 disabled:opacity-[0.4]`,
      )}
      disabled={isLoading}
      {...rest}
    >
      {leftIcon && <Icon className={`icon-${leftIcon} ${iconSizes[size]}`} />}

      {isLoading && (
        <Loading
          className={loadingSizes[size]}
          spinColor={variation === 'primary' ? 'black' : 'green'}
          elipseColor={variation === 'primary' ? 'success' : 'gray'}
        />
      )}

      {children && <p>{children}</p>}

      {rightIcon && <Icon className={`icon-${rightIcon} ${iconSizes[size]}`} />}
    </button>
  )
}

Button.displayName = 'Button'
