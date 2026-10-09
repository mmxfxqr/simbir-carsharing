import { RadioButton } from '@shared/ui/RadioButton'
import { filters } from '@widgets/FillerCars/config/filters'
import type { FilterCarsProps } from '@widgets/FillerCars/types'
import type { FC } from 'react'

export const FilterCars: FC<FilterCarsProps> = ({
  selectedFilterId,
  onFilterChange,
}) => {
  return (
    <div className="flex gap-4">
      {filters.map((filter) => (
        <RadioButton
          {...filter}
          checked={selectedFilterId === filter.id}
          onChange={() => onFilterChange(filter.id)}
        />
      ))}
    </div>
  )
}
