import React from 'react'
import clsx from 'clsx'

export interface StatusBadgeProps {
  variation: 'success' | 'danger' | 'warning' | 'neutral'
  fullWidth?: boolean
  title: string
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  variation = 'neutral',
  fullWidth = false,
  title,
}) => {
  return (
    <div
      className={clsx(
        'flex items-center rounded-full border border-gray-2 bg-white px-4 py-[5.5px]',
        fullWidth ? 'w-full' : 'w-fit',
      )}
    >
      <span
        className={clsx(
          'inline-flex h-2 w-2 rounded-full',
          variation === 'success' && 'bg-brand-medium-2',
          variation === 'warning' && 'bg-warning-pure',
          variation === 'danger' && 'bg-danger-pure',
          variation === 'neutral' && 'bg-gray-5',
        )}
      />
      <span className="pl-2 font-work-sans text-body-3-regular text-gray-8">
        {title}
      </span>
    </div>
  )
}
