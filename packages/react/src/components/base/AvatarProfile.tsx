import React from 'react'
import clsx from 'clsx'

// TODO arrumar typescript
// @ts-ignore
import placeholderImg from '../../assets/placeholder.svg'

export interface AvatarProfileProps {
  size?: 'sm' | 'lg'
  avatarUrl?: string
  avatarName?: string
}

export const AvatarProfile: React.FC<AvatarProfileProps> = ({
  size = 'sm',
  avatarName,
  avatarUrl = placeholderImg,
}) => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = event.target as HTMLImageElement
    target.src = placeholderImg
  }

  return (
    <img
      src={avatarUrl}
      className={clsx(
        'rounded-full border-gray-3',
        size === 'sm' && 'h-11 w-11 border',
        size === 'lg' && 'h-36 w-36 border-[2.91px]',
      )}
      alt={avatarName || 'Avatar'}
      onError={handleImageError}
    />
  )
}

AvatarProfile.displayName = 'AvatarProfile'
