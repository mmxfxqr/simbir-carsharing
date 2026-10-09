import { useAppDispatch, useAppSelector } from '@app/store'
import { selectOrderModel, setModel } from '@entities/Order'
import { cars } from '@widgets/CarGrid/config/cars'
import { CarCard } from '@widgets/CarGrid/ui/CarCard'
import { FilterCars } from '@widgets/FillerCars'
import { useMemo, useState, type FC } from 'react'

export const CarGrid: FC = () => {
  const [selectedFilterId, setSelectedFilterId] = useState<string>('1')
  const selectedModel = useAppSelector(selectOrderModel)
  const dispatch = useAppDispatch()
  const handleFilterChange = (id: string) => {
    setSelectedFilterId(id)
  }
  const handleCarCardClick = (brand: string, model: string) => {
    dispatch(setModel(`${brand}, ${model}`))
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

  return (
    <div>
      <FilterCars
        selectedFilterId={selectedFilterId}
        onFilterChange={handleFilterChange}
      />
      <h1>{selectedModel}</h1>
      <div className="mt-12 grid w-full max-w-184 grid-cols-2 gap-px">
        {filtredCars.map((car) => (
          <CarCard
            key={car.model}
            isSelected={selectedModel === `${car.brand}, ${car.model}`}
            onCardClick={handleCarCardClick}
            {...car}
          />
        ))}
      </div>
    </div>
  )
}
