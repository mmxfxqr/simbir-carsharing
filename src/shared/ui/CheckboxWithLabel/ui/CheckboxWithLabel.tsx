import checkboxCheck from '@assets/order/checkboxCheck.svg'
import type { CheckboxWithLabelProps } from '@shared/ui/CheckboxWithLabel/types'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'

export const CheckboxWithLabel: FC<CheckboxWithLabelProps> = ({
  label,
  onChange,
  checked,
}) => {
  return (
    <label className="flex w-fit cursor-pointer items-center gap-2">
      <span className="relative flex size-3 shrink-0 items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className={twMerge(
            'border-gray size-3 appearance-none rounded-none border',
            checked && 'border-primary',
          )}
        />

        {checked && (
          <img
            src={checkboxCheck}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-px size-3"
          />
        )}
      </span>

      <span
        className={twMerge(
          'text-gray text-[14px] leading-none font-light',
          checked && 'text-dark',
        )}
      >
        {label}
      </span>
    </label>
  )
}
