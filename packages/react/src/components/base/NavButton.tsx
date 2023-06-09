import React, { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'
import { Icon } from './Icon'

// import { IconBase } from './Icon'

export interface NavButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  application?: 'on-white' | 'on-dark'
  kind?: 'back-single' | 'back-full' | 'back-arrow' | 'close'
  size?: 'md' | 'sm'
}

export const NavButton: React.FC<NavButtonProps> = ({
  application = 'on-white',
  kind = 'back-full',
  size = 'md',
  ...rest
}) => {
  return (
    <button
      type="button"
      className={clsx('group flex items-center transition-all duration-300', {
        'h-10 gap-[6px] pr-4 font-medium ': kind === 'back-full',
        'text-gray-5 hover:text-gray-6':
          kind === 'back-full' && application === 'on-white',
        'text-white hover:text-gray-4 focus:text-gray-5':
          kind === 'back-full' && application === 'on-dark',
        'border-gray-3 hover:border-none hover:bg-transparent-dark-1 focus:border-none focus:bg-transparent-dark-2':
          ['back-single', 'back-arrow', 'close'].includes(kind) &&
          application === 'on-white',
        'border-transparent-light-1 hover:border-none hover:bg-transparent-light-1 focus:border-none focus:bg-transparent-light-2':
          ['back-single', 'back-arrow', 'close'].includes(kind) &&
          application === 'on-dark',
        'justify-center rounded-lg border ': [
          'back-single',
          'back-arrow',
          'close',
        ].includes(kind),
        'h-10 w-10':
          ['back-single', 'back-arrow', 'close'].includes(kind) &&
          size === 'md',
        'h-8 w-8':
          ['back-single', 'back-arrow', 'close'].includes(kind) &&
          size === 'sm',
      })}
      {...rest}
    >
      {kind === 'back-full' && (
        <>
          <Icon className="icon-arrow-r rotate-180 text-gray-5 transition-all duration-300 group-hover:text-gray-6 text-[20px]" />
          Voltar
        </>
      )}

      {kind === 'back-arrow' && (
        <Icon
          className={clsx('rotate-180 icon-arrow-r', {
            'text-gray-5': application === 'on-white',
            'text-gray-6': application === 'on-dark',
            'text-[28px]': size === 'md',
            'text-[22.4px]': size === 'sm',
          })}
        />
      )}

      {kind === 'back-single' && (
        <Icon
          className={clsx('icon-chev-l text-gray-5', {
            'text-[28px]': size === 'md',
            'text-[22.4px]': size === 'sm',
          })}
        />
      )}

      {kind === 'close' && (
        <Icon
          className={clsx('icon-close-md text-gray-5', {
            'text-[28px]': size === 'md',
            'text-[22.4px]': size === 'sm',
          })}
        />
      )}
    </button>
  )
}
