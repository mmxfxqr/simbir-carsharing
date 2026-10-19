import type { FC } from 'react'
import type { InputProps } from '../types'
import { InputField } from './InputField'
import { InputClearButton } from './InputClearButton'
import { LabeledInput } from './LabeledInput'
import { twMerge } from 'tailwind-merge'

export const Input: FC<InputProps> = ({
  inputRef,
  label,
  onClearClick,
  value,
  isDisabled,
  isLabeled,
  containerClassname,
  ...props
}) => {
  const input = (
    <div
      className={twMerge(
        'border-b-gray relative w-full border-b',
        containerClassname,
      )}
    >
      <InputField
        {...props}
        inputRef={inputRef}
        label={label}
        value={value}
        isDisabled={isDisabled}
      />

      {value !== undefined && value !== '' && (
        <InputClearButton onClick={onClearClick} />
      )}
    </div>
  )

  if (isLabeled && label) {
    return <LabeledInput label={label}>{input}</LabeledInput>
  }

  return input
}
