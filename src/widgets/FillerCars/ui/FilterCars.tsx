import { RadioButton } from '@shared/ui/RadioButton'
import { filters } from '../config/filters'
import type { FilterCarsProps } from '../types'
import type { FC } from 'react'

export const FilterCars: FC<FilterCarsProps> = ({
  selectedFilterId,
  onFilterChange,
}) => {
  return (
    <div className="flex gap-4 max-sm:flex-col">
      {filters.map((filter) => (
        <RadioButton
          key={filter.id}
          {...filter}
          checked={selectedFilterId === filter.id}
          onChange={() => onFilterChange(filter.id)}
        />
      ))}
    </div>
  )
}
