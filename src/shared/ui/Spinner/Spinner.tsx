import type { SpinnerProps } from '@shared/ui/Spinner/types'
import clsx from 'clsx'
import type { FC } from 'react'

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        'w-6 h-6 border-3 border-white border-t-primary rounded-full animate-spin',
        className,
      )}
    />
  )
}
