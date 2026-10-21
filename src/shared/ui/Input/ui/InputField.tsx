import type { InputProps } from '@shared/ui/Input/types'
import clsx from 'clsx'
import type { FC } from 'react'
import { IMaskInput } from 'react-imask'

const MAX_INPUT_LENGTH = 150

export const InputField: FC<InputProps> = ({
  label,
  mask,
  inputRef,
  isDisabled,
  onAccept,
  className,
  ...props
}) => {
  const inputClassName = clsx(
    'box-border max-w-[206px] w-full appearance-none  outline-none',
    className,
  )

  if (mask) {
    return (
      <IMaskInput
        {...props}
        mask={mask}
        inputRef={inputRef}
        className={inputClassName}
        value={String(props.value ?? '')}
        disabled={isDisabled}
        onAccept={onAccept}
        maxLength={MAX_INPUT_LENGTH}
      />
    )
  }

  return (
    <input
      {...props}
      name={label}
      ref={inputRef}
      className={inputClassName}
      disabled={isDisabled}
      maxLength={MAX_INPUT_LENGTH}
    />
  )
}
