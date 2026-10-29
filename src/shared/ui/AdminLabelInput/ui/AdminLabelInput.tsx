import clsx from 'clsx'
import type { AdminInputProps } from '../types'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const MAX_INPUT_LENGTH = 150

export const AdminLabelInput: FC<AdminInputProps> = ({
  label,
  value,
  className,
  isDisabled,
  ...props
}) => {
  const inputClassName = clsx(
    'box-border block w-full appearance-none text-[11px] leading-[13px] outline-none',
    className,
  )

  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-admin-black text-[10.5px]">{label}</h6>
      <div
        className={twMerge(
          'border-admin-gray text-admin-blue w-full rounded-[3px] border px-[11.65px] py-[7px]',
        )}
      >
        <input
          {...props}
          name={label}
          value={value}
          className={inputClassName}
          disabled={isDisabled}
          maxLength={MAX_INPUT_LENGTH}
        />
      </div>
    </div>
  )
}
