import { cars } from '@widgets/CarGrid/config/cars'
import { useMemo, useState } from 'react'

export const useFilterCars = () => {
  const [selectedFilterId, setSelectedFilterId] = useState<string>('1')
  const handleFilterChange = (id: string) => {
    setSelectedFilterId(id)
  }
  const filtredCars = useMemo(
    () =>
      cars.filter((car) => {
        if (selectedFilterId === '1') {
          return true
        } else if (selectedFilterId === '2') {
          return car.category === 'economy'
        }

        return car.category === 'premium'
      }),
    [cars, selectedFilterId],
  )

  return { filtredCars, handleFilterChange, selectedFilterId }
}
