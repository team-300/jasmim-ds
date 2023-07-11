export interface IconGoogleProps {
  width?: number
  height?: number
  className?: string
}

export function IconGoogle({ width, height, className }: IconGoogleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        fill="#4285F4"
        fillRule="evenodd"
        d="M21.601 13.104c0-.709-.064-1.39-.182-2.045h-9.418v3.868h5.382a4.6 4.6 0 01-1.995 3.018v2.509h3.231c1.891-1.74 2.982-4.305 2.982-7.35z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#34A853"
        fillRule="evenodd"
        d="M12.003 22.877c2.7 0 4.964-.895 6.618-2.422l-3.232-2.51c-.895.6-2.04.955-3.386.955-2.604 0-4.809-1.759-5.595-4.123H3.067v2.591a9.996 9.996 0 008.936 5.51z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#FBBC05"
        fillRule="evenodd"
        d="M6.405 14.778c-.2-.6-.313-1.241-.313-1.9 0-.66.113-1.3.313-1.9V8.387h-3.34A9.996 9.996 0 002 12.877c0 1.614.386 3.141 1.063 4.492l3.341-2.591z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#EA4335"
        fillRule="evenodd"
        d="M12.003 6.854c1.468 0 2.786.505 3.823 1.496l2.868-2.869c-1.732-1.613-3.995-2.604-6.69-2.604a9.996 9.996 0 00-8.937 5.509l3.34 2.591c.787-2.364 2.992-4.123 5.596-4.123z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
