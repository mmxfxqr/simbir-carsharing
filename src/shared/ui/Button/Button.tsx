import type { ButtonProps } from '@shared/ui/Button/types'
import { Spinner } from '@shared/ui/Spinner'
import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'bg-primary text-white rounded-lg h-12 text-[18px] font-medium hover:brightness-90 focus:brightness-90 active:brightness-80 flex items-center justify-center',
        className,
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
