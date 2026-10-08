import { useInputSelect } from '@shared/ui/InputSelectMenu/hook/useInputSelect'
import type { SelectProps } from '../types'
import { InputSelectionField } from './InputSelectionField'
import clsx from 'clsx'
import type { FC } from 'react'
import { DropDown } from '@shared/ui/InputSelectMenu/ui/DropDown'

export const InputSelectionMenu: FC<SelectProps> = ({
  label,
  classname,
  variants,
  onSelect,
  isDisabled,
}) => {
  const {
    value,
    inputRef,
    filteredVariants,
    handleBlur,
    handleChange,
    handleClearClick,
    handleFocus,
    handleSelect,
    isFocused,
  } = useInputSelect({ variants, onSelect })

  return (
    <div
      className={clsx(
        'text-dark relative flex text-[14px] font-light',
        classname,
      )}
    >
      <h1 className="mr-4 flex w-24 shrink-0 justify-end">{label}</h1>

      <div className="relative w-56">
        <InputSelectionField
          inputRef={inputRef}
          label={label}
          onClearClick={handleClearClick}
          value={value}
          isDisabled={isDisabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {filteredVariants?.length > 0 && isFocused && (
          <DropDown
            filteredVariants={filteredVariants}
            onSelect={handleSelect}
          />
        )}
      </div>
    </div>
  )
}
