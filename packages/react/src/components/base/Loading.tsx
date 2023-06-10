import React from 'react'
import { colors as colorsTokens } from '@jasmim-ds/tokens'

interface LoadingProps {
  className?: string
  spinColor?: 'black' | 'green'
  elipseColor?: 'gray' | 'success'
}

export const Loading: React.FC<LoadingProps> = ({
  className,
  spinColor = 'black',
  elipseColor = 'gray',
}) => {
  const colors = {
    spinColors: {
      black: colorsTokens.black,
      green: colorsTokens['brand-pure'],
      white: colorsTokens.white,
    },
    eliseColors: {
      gray: colorsTokens['gray-3'],
      'dark-gray': colorsTokens['gray-7'],
      success: colorsTokens['brand-light-2'],
    },
  }
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className={`animate-spin ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-6.8343e-07 14C-7.4779e-09 6.26801 6.26801 -3.80722e-06 14 -3.13127e-06C21.732 -2.45532e-06 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 -1.35938e-06 21.732 -6.8343e-07 14ZM25.2 14C25.2 7.81441 20.1856 2.8 14 2.8C7.81441 2.8 2.8 7.81441 2.8 14C2.8 20.1856 7.81441 25.2 14 25.2C20.1856 25.2 25.2 20.1856 25.2 14Z"
        fill={colors.eliseColors[elipseColor]}
      />
      <path
        d="M26.6 14C27.3732 14 28.0073 13.3716 27.9301 12.6023C27.7018 10.3272 26.9188 8.13498 25.6406 6.22202C24.1022 3.91973 21.9157 2.12531 19.3576 1.06568C16.7994 0.00605676 13.9845 -0.27119 11.2687 0.269003C8.553 0.809195 6.05844 2.14256 4.10051 4.1005C2.14257 6.05844 0.8092 8.553 0.269006 11.2687C-0.271188 13.9845 0.00605872 16.7994 1.06568 19.3576C2.12531 21.9157 3.91973 24.1022 6.22201 25.6406C8.13498 26.9188 10.3272 27.7018 12.6023 27.9301C13.3716 28.0073 14 27.3732 14 26.6C14 25.8268 13.3708 25.209 12.6036 25.1126C10.8833 24.8964 9.22985 24.2828 7.77761 23.3125C5.93578 22.0818 4.50025 20.3326 3.65255 18.2861C2.80485 16.2395 2.58305 13.9876 3.0152 11.815C3.44736 9.6424 4.51406 7.64675 6.0804 6.0804C7.64675 4.51405 9.6424 3.44736 11.815 3.0152C13.9876 2.58305 16.2395 2.80484 18.2861 3.65255C20.3326 4.50025 22.0818 5.93578 23.3125 7.77761C24.2828 9.22986 24.8964 10.8833 25.1126 12.6036C25.209 13.3708 25.8268 14 26.6 14Z"
        fill={colors.spinColors[spinColor]}
      />
    </svg>
  )
}
