import { useAppDispatch, useAppSelector } from '@app/store'
import type { Car } from '@entities/Car/types'
import { selectOrderCar, setCar, setCostRange } from '@entities/Order'
import { useFilterCars } from '../hook/useFilterCars'
import { CarCard } from '@widgets/CarGrid/ui/CarCard'
import { FilterCars } from '@widgets/FillerCars'
import { type FC } from 'react'

export const CarGrid: FC = () => {
  const { filtredCars, handleFilterChange, selectedFilterId } = useFilterCars()
  const selectedModel = useAppSelector(selectOrderCar)
  const dispatch = useAppDispatch()

  const handleCarCardClick = (car: Car) => {
    dispatch(setCar(car))
    dispatch(setCostRange(car.cost))
  }

  return (
    <div>
      <FilterCars
        selectedFilterId={selectedFilterId}
        onFilterChange={handleFilterChange}
      />
      <div className="mt-12 grid max-h-168.5 w-full max-w-185 min-w-0 grid-cols-2 gap-px overflow-x-hidden overflow-y-auto max-xl:grid-cols-1 max-sm:mt-4">
        {filtredCars.map((car) => (
          <CarCard
            key={car.model}
            isSelected={selectedModel?.model === `${car.model}`}
            onCardClick={handleCarCardClick}
            {...car}
          />
        ))}
      </div>
    </div>
  )
}
