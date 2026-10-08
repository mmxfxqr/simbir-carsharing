import type { InputSelectionFieldProps } from '@shared/ui/InputSelectMenu/types'
import type { FC } from 'react'
import clearIcon from '@assets/order/clear-input.svg'

export const InputSelectionField: FC<InputSelectionFieldProps> = ({
  label,
  value,
  inputRef,
  isDisabled,
  onClearClick,
  ...props
}) => {
  return (
    <>
      <input
        name={label}
        ref={inputRef}
        className="border-b-gray box-border w-full border-b outline-none"
        value={value}
        disabled={isDisabled}
        {...props}
      />
      {value && (
        <button
          className="absolute right-1.5 bottom-2 size-2"
          onClick={onClearClick}
        >
          <img src={clearIcon} />
        </button>
      )}
    </>
  )
}
