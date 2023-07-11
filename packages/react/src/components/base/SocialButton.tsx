import React, { ButtonHTMLAttributes } from 'react'

import { IconGoogle } from '../assets/IconGoogle'
import { IconFacebook } from '../assets/IconFacebook'

export interface SocialButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  variation: 'google' | 'facebook'
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  variation,
  children,
  ...rest
}) => {
  return (
    <button
      className="h-11 border-[1.3px] focus:bg-transparent-dark-2 hover:bg-transparent-dark-1 border-gray-4 px-7 w-full flex items-center justify-center rounded-lg transition-all duration-200 disabled:opacity-[0.4]"
      {...rest}
    >
      {variation === 'google' ? (
        <IconGoogle width={24} height={24} />
      ) : (
        <IconFacebook width={24} height={24} />
      )}

      {children && (
        <span className="flex-1 text-body-2-medium text-gray-8">
          {children}
        </span>
      )}
    </button>
  )
}

SocialButton.displayName = 'SocialButton'
