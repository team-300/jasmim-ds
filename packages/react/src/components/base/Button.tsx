import React, { ButtonHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { Loading } from './Loading'
import { Icon } from './Icon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  size: 'lg' | 'md' | 'sm'
  variation?: 'primary' | 'secondary' | 'tertiary'
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
          'h-14 px-7': size === 'lg',
          'h-12 px-5': size === 'md',
          'h-10 px-4': size === 'sm',
          'w-full': fullSize,
          'bg-brand-pure hover:bg-brand-medium-1 focus:bg-brand-medium-2 text-body-1-semibold':
            variation === 'primary',
          'border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 text-body-2-medium':
            variation === 'secondary',
          'text-brand-medium-2 hover:text-brand-dark focus:text-brand-pure disabled:text-gray-7 text-body-2-medium':
            variation === 'tertiary',
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
