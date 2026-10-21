import { cars } from '@entities/Car'
import { FilterId } from '@widgets/CarGrid/types'
import { useMemo, useState } from 'react'

export const useFilterCars = () => {
  const [selectedFilterId, setSelectedFilterId] = useState<FilterId>('all')
  const handleFilterChange = (id: FilterId) => {
    setSelectedFilterId(id)
  }
  const filtredCars = useMemo(
    () =>
      cars.filter((car) => {
        if (selectedFilterId === FilterId.All) return true

        return car.category === selectedFilterId
      }),
    [cars, selectedFilterId],
  )

  return { filtredCars, handleFilterChange, selectedFilterId }
}
