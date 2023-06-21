import React, { ButtonHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { Icon } from './Icon'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  size: 'lg' | 'md' | 'sm'
  variation?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  appearance?: 'square' | 'circle'
  mode?: 'light' | 'dark'
  icon: string
}

export const IconButton: React.FC<IconButtonProps> = ({
  size,
  icon,
  variation = 'primary',
  mode = 'light',
  appearance = 'square',
  ...rest
}) => {
  const buttonSizes = {
    lg: 'p-2',
    md: 'p-[6px]',
    sm: 'p-[6px]',
  }

  const iconSizes = {
    lg: 'text-[40px]',
    md: 'text-[32px]',
    sm: 'text-[22px]',
  }

  const variations = {
    background: {
      primary: {
        light: 'bg-gray-8 hover:bg-gray-7 focus:bg-black disabled:bg-gray-8',
        dark: 'bg-white hover:bg-gray-3 focus:bg-gray-5',
      },
      secondary: {
        light:
          'bg-white border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 disabled:bg-transparent-dark-1',
        dark: 'border-[1.3px] border-transparent-light-3 hover:bg-transparent-light-1 focus:bg-transparent-light-2',
      },
      tertiary: {
        light:
          // TODO remover token bg-brand-medium-2
          'bg-brand-pure hover:bg-brand-medium-1 focus:bg-brand-medium-2 disabled:bg-brand-medium-1',
        dark: 'hover:bg-transparent-light-1 focus:bg-transparent-light-2',
      },
      quaternary: {
        light: 'hover:bg-transparent-dark-1 focus:bg-transparent-dark-2',
        dark: '',
      },
    },
    iconColor: {
      primary: {
        light: 'text-white',
        dark: 'text-gray-8',
      },
      secondary: {
        light: 'text-gray-7',
        dark: 'text-white',
      },
      tertiary: {
        light: 'text-black',
        dark: 'text-white',
      },
      quaternary: {
        light: 'text-gray-6',
        dark: '',
      },
    },
  }

  return (
    <button
      className={clsx(
        'flex items-center justify-center transition-all duration-200 disabled:opacity-[0.4]',
        // Appearance
        appearance === 'square' && size !== 'sm' && 'rounded-lg',
        appearance === 'square' && size === 'sm' && 'rounded-md',
        appearance === 'circle' && 'rounded-full',
        // Size
        buttonSizes[size],
        // Variatons
        variations.background[variation][mode],
      )}
      {...rest}
    >
      <Icon
        className={`${icon} ${variations.iconColor[variation][mode]} ${iconSizes[size]}`}
      />
    </button>
  )
}

IconButton.displayName = 'IconButton'
