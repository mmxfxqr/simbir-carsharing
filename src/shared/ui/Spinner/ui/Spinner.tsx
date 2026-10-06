import type { SpinnerProps } from '@shared/ui/Spinner/types'
import clsx from 'clsx'
import type { FC } from 'react'

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        'border-t-primary h-6 w-6 animate-spin rounded-full border-3 border-white',
        className,
      )}
    />
  )
}
