import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  size: 'lg' | 'md' | 'sm' | 'tn'
  variation?: 'primary' | 'secondary' | 'tertiary'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
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
  return (
    <button
      className={clsx(
        {
          'h-14 px-7': size === 'lg',
          'h-12 px-5': size === 'md',
          'h-10 px-4': size === 'sm',
          'h-8 px-3': size === 'tn',
          'w-full': fullSize,
          'bg-brand-pure hover:bg-brand-medium-1 focus:bg-brand-medium-2':
            variation === 'primary',
          'border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2':
            variation === 'secondary',
          'text-brand-medium-2 hover:text-brand-dark focus:text-brand-pure disabled:text-gray-7':
            variation === 'tertiary',
          'disabled:!opacity-100': variation === 'primary' && isLoading,
        },
        `flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 disabled:opacity-[0.4]`,
      )}
      disabled={isLoading}
      {...rest}
    >
      {leftIcon && leftIcon}

      {/* {isLoading && (
        <Loading
          className="w-7"
          spinColor={variation === 'primary' ? 'black' : 'green'}
          elipseColor={variation === 'primary' ? 'success' : 'gray'}
        />
      )} */}

      {children && <p>{children}</p>}

      {rightIcon && rightIcon}
    </button>
  )
}

Button.displayName = 'Button'
