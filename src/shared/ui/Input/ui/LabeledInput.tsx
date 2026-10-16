import type { LabeledInputProps } from '@shared/ui/Input/types'
import type { FC } from 'react'

export const LabeledInput: FC<LabeledInputProps> = ({ label, children }) => {
  return (
    <div className="grid w-fit grid-cols-[1rem_14rem] items-center gap-x-4 max-sm:gap-2">
      <h1 className="w-fit text-right">{label}</h1>
      {children}
    </div>
  )
}
