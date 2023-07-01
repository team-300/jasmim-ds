import React, { ButtonHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { Icon } from './Icon'

export interface AtentionButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  variation?: 'primary' | 'secondary'
  icon?: string
  title: string
  fullSize?: boolean
}

export const AtentionButton: React.FC<AtentionButtonProps> = ({
  children,
  icon,
  variation = 'primary',
  fullSize = false,
  title,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        {
          'text-gray-8 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 disabled:bg-transparent-dark-1 disabled:text-gray-7':
            variation === 'primary',
          'text-brand-medium-2 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2':
            variation === 'secondary',
          'w-full': fullSize,
        },
        `flex items-center justify-center gap-[14px] rounded-lg border-[1.3px] border-gray-3 py-4 pl-5 pr-2 font-work-sans text-body-1-medium transition-all duration-200 disabled:opacity-40`,
      )}
      {...rest}
    >
      {icon && (
        <Icon
          className={clsx(
            `${icon} text-[24px]`,
            variation === 'primary' ? 'text-gray-7' : 'text-brand-medium-2',
          )}
        />
      )}

      {title && <p className="flex-1 text-left">{title}</p>}
      <Icon
        className={clsx(
          'icon-chev-r text-[32px]',
          variation === 'primary' ? 'text-gray-5' : 'text-brand-medium-2',
        )}
      />
    </button>
  )
}
