import type { FC } from 'react'
import type { InputProps } from '../types'
import { InputField } from './InputField'
import { InputClearButton } from './InputClearButton'
import { LabeledInput } from './LabeledInput'

export const Input: FC<InputProps> = ({
  inputRef,
  label,
  onClearClick,
  value,
  isDisabled,
  isLabeled,
  ...props
}) => {
  const input = (
    <div className="relative w-full">
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
