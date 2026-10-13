import type { InputProps } from '@shared/ui/Input/types'
import clsx from 'clsx'
import type { FC } from 'react'
import { IMaskInput } from 'react-imask'

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
    'border-b-gray box-border w-full appearance-none border-b outline-none',
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
    />
  )
}
