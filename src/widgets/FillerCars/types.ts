export interface FilterCarsProps {
  selectedFilterId: string
  onFilterChange: (id: string) => void
}
export interface Filter {
  id: string
  label: string
}