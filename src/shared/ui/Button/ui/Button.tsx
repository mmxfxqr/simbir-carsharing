import type { ButtonProps } from '@shared/ui/Button/types'
import { Spinner } from '@shared/ui/Spinner'
import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        clsx(
          'bg-primary flex h-12 items-center justify-center rounded-lg text-[18px] font-medium text-white hover:brightness-90 focus:brightness-90 active:brightness-80',
          disabled && 'bg-white',
          className,
        ),
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
