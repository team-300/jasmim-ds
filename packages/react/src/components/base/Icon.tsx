import React from 'react'

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
}

export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
  return <i className={className} {...rest} />
}

Icon.displayName = 'Icon'
