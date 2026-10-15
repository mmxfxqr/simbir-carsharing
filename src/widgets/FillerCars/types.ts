import type { FilterId } from '@widgets/CarGrid/types'

export interface FilterCarsProps {
  selectedFilterId: FilterId
  onFilterChange: (id: FilterId) => void
}
export interface Filter {
  id: FilterId
  label: string
}
