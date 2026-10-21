import { FilterId } from '@widgets/CarGrid/types'
import type { Filter } from '@widgets/FillerCars/types'

export const filters: Filter[] = [
  {
    id: FilterId.All,
    label: 'All models',
  },
  {
    id: FilterId.Economy,
    label: 'Economy',
  },
  {
    id: FilterId.Premium,
    label: 'Premium',
  },
]
