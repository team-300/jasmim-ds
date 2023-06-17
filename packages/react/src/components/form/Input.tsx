import React, { InputHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { Controller } from 'react-hook-form'
import { Icon } from '../base'

export interface InputProps extends InputHTMLAttributes<HTMLElement> {
  name: string
  control: any
  label?: string
  error?: string
  mask?: any
  viewPassword?: boolean
  isPassword?: boolean
  handleViewPassoword?: () => void
}

export const Input: React.FC<InputProps> = ({
  isPassword,
  label,
  error,
  name,
  control,
  mask,
  handleViewPassoword,
  viewPassword,
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col">
      {label && (
        <label className="mb-[6px] font-medium text-gray-6" htmlFor={name}>
          {label}
        </label>
      )}

      <div className="relative flex w-full items-center">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              type={
                isPassword ? (viewPassword ? 'text' : 'password') : rest.type
              }
              id={name}
              value={mask ? mask(field.value) : field.value}
              onChange={field.onChange}
              className={clsx(
                {
                  'bg-[#FCEDEF] ring-2 ring-danger-pure': error,
                  'focus:ring-brand-medium-2': !error,
                },
                'relative w-full rounded-md border border-gray-4 px-4 py-3 font-nunito-sans text-black outline-0 transition-all duration-200 placeholder:text-[#A0A6AD] hover:border-gray-3 focus:ring-2',
              )}
              {...rest}
            />
          )}
        />

        {isPassword && (
          <div className="absolute right-3 z-50">
            <button
              type="button"
              onClick={handleViewPassoword}
              className="flex cursor-pointer items-center justify-center p-1"
            >
              {viewPassword ? (
                <Icon icon="eye-show" size={24} className="text-gray-5" />
              ) : (
                <Icon icon="eye-hide" size={24} className="text-gray-5" />
              )}
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-[6px] flex items-center gap-[6px]">
          <Icon icon="alert" size={16} className="text-danger-medium-2" />
          <div>
            <p className="font-nunito-sans text-danger-medium-2">{error}</p>
          </div>
        </div>
      )}
    </div>
  )
}
