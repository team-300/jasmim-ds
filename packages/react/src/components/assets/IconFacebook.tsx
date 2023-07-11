export interface IconFacebookProps {
  width?: number
  height?: number
  className?: string
}

export function IconFacebook({ width, height, className }: IconFacebookProps) {
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
        fill="#1877F2"
        d="M22 12.902c0-5.534-4.48-10.025-10-10.025S2 7.368 2 12.902c0 4.852 3.44 8.892 8 9.825v-6.818H8v-3.007h2v-2.506a3.508 3.508 0 013.5-3.509H16v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3v6.967c5.05-.501 9-4.772 9-9.975z"
      ></path>
    </svg>
  )
}
