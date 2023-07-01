import React, { useState } from 'react'
import clsx from 'clsx'

function Placeholder() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 45 44"
    >
      <g clipPath="url(#clip0_1_5)">
        <path fill="#E9EBF0" d="M0.087 0H44.087V44H0.087z"></path>
        <path
          fill="#fff"
          d="M37.255 35.111a3.424 3.424 0 00-.896-.472c-2.462-.891-5.295-2.19-8.498-3.895-.93-.496-1.508-1.425-1.508-2.433v-1.8c0-.109.048-.208.113-.299.491-.697 1.031-1.176 1.47-2.23.407-.976.382-1.826.64-2.928.312.327.973-.663 1.23-2.982.087-.785-.287-1.145-.743-1.076-.07.011-.13-.043-.123-.11l.183-1.622a6.61 6.61 0 00.09-1.086c0-3.772-2.877-6.708-7.107-6.828h-.039c-3.884-.28-7.107 3.057-7.107 6.828 0 .37.031.732.09 1.085l.184 1.624c.007.066-.054.12-.124.11-.455-.07-.83.29-.743 1.075.257 2.32.919 3.309 1.23 2.982.258 1.102.243 1.886.65 2.861.44 1.055.97 1.6 1.46 2.297.065.09.113.19.113.3v1.799c0 1.008-.578 1.937-1.508 2.433-3.203 1.704-6.036 3.004-8.498 3.895-.321.116-.626.27-.896.472-.835.628-1.336 1.59-1.331 2.623L5.619 44h32.936l.032-6.266c.005-1.033-.496-1.995-1.332-2.623z"
          opacity="0.8"
        ></path>
      </g>
      <path stroke="#E9EBF0" d="M0.587 0.5H43.587V43.5H0.587z"></path>
      <defs>
        <clipPath id="clip0_1_5">
          <path fill="#fff" d="M0.087 0H44.087V44H0.087z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export interface AvatarProfileProps {
  size?: 'sm' | 'lg'
  avatarUrl?: string
  avatarName?: string
}

export const AvatarProfile: React.FC<AvatarProfileProps> = ({
  size = 'sm',
  avatarName,
  avatarUrl,
}) => {
  const [isLoaded, setIsLoaded] = useState(true)

  return isLoaded && !!avatarUrl !== false ? (
    <img
      src={avatarUrl}
      className={clsx(
        'rounded-full border-gray-3',
        size === 'sm' && 'h-11 w-11 border',
        size === 'lg' && 'h-36 w-36 border-[2.91px]',
      )}
      alt={avatarName || 'Avatar'}
      onError={() => setIsLoaded(false)}
      onLoad={() => setIsLoaded(true)}
    />
  ) : (
    <div
      className={clsx(
        'rounded-full border-gray-3 overflow-hidden',
        size === 'sm' && 'h-11 w-11 border',
        size === 'lg' && 'h-36 w-36 border-[2.91px]',
      )}
    >
      <div className="scale-[1.1]">
        <Placeholder />
      </div>
    </div>
  )
}

AvatarProfile.displayName = 'AvatarProfile'
