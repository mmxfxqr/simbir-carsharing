import type { ButtonProps } from '@shared/ui/Button/types'
import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'bg-primary text-white rounded-lg h-12 text-[18px] font-medium  ',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
