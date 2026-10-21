import type { RadioButtonProps } from '@shared/ui/RadioButton/types'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  name,
  id,
  checked,
  onChange,
}) => {
  const { t } = useTranslation()

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-2 text-sm max-sm:text-xs"
    >
      <input
        className="border-gray checked:border-primary size-3 h-3 w-3 appearance-none rounded-full border-2 checked:border-[3px]"
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <span
        className={twMerge(
          'text-gray text-sm font-light max-sm:text-xs',
          checked && 'text-dark',
        )}
      >
        {t(`${label}`)}
      </span>
    </label>
  )
}
