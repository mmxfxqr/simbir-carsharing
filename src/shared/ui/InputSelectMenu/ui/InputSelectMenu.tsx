import { useInputSelect } from '@shared/ui/InputSelectMenu/hook/useInputSelect'
import type { SelectProps } from '../types'
import clsx from 'clsx'
import type { FC } from 'react'
import { DropDown } from '@shared/ui/InputSelectMenu/ui/DropDown'
import { Input } from '@shared/ui/Input/ui/Input'

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
      <h1 className="mr-4 flex w-[18px] shrink-0 justify-end max-sm:w-12">
        {label}
      </h1>

      <div className="relative w-56 max-lg:max-w-30">
        <Input
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
