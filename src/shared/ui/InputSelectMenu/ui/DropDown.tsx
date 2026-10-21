import type { DropDownProps } from '@shared/ui/InputSelectMenu/types'
import type { FC } from 'react'
import '../index.css'

export const DropDown: FC<DropDownProps> = ({ filteredVariants, onSelect }) => {
  return (
    <div className="absolute top-full left-0 z-10 w-full">
      <div className="relative">
        <div className="dropdown-scrollbar max-h-26.5 w-full overflow-y-auto border border-t-0 border-white bg-white">
          {filteredVariants.map((variant) => (
            <button
              key={variant}
              type="button"
              className="hover:text-primary block w-full px-2 py-1 text-left transition-colors"
              onMouseDown={() => onSelect(variant)}
            >
              {variant}
            </button>
          ))}
        </div>

        <div className="pointer-events-none absolute top-px right-1.5 h-full w-0.5 bg-white" />
      </div>
    </div>
  )
}
