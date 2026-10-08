import type { DropDownProps } from '@shared/ui/InputSelectMenu/types'
import type { FC } from 'react'

export const DropDown: FC<DropDownProps> = ({
  filteredVariants,
  onSelect,
}) => {
  return (
    <div className="absolute top-full left-0 z-10 w-full bg-white">
      {filteredVariants?.map((variant) => (
        <button
          key={variant}
          type="button"
          className="block w-full px-2 py-1 text-left hover:bg-gray-100"
          onMouseDown={() => onSelect(variant)}
        >
          {variant}
        </button>
      ))}
    </div>
  )
}
