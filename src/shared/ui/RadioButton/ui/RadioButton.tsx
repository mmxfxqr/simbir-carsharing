import type { RadioButtonProps } from '@shared/ui/RadioButton/types'
import type { FC } from 'react'

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  id,
  checked,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-2 text-[14px]"
    >
      <input
        className="border-gray checked:border-primary size-3 h-3 w-3 appearance-none rounded-full border-2 checked:border-[3px]"
        type="radio"
        name="flexRadioDefault"
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <span className="text-dark text-[14px] font-light">{label}</span>
    </label>
  )
}
