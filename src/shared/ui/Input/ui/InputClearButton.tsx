import type { InputClearButtonProps } from '@shared/ui/Input/types'
import type { FC } from 'react'
import clearIcon from '@assets/order/clear-input.svg'

export const InputClearButton: FC<InputClearButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="absolute top-1/2 right-1.5 size-2 -translate-y-1/2"
      onClick={onClick}
      aria-label="Очистить поле"
    >
      <img src={clearIcon} alt="" />
    </button>
  )
}
