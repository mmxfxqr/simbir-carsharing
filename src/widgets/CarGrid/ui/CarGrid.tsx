import { useAppDispatch, useAppSelector } from '@app/store'
import { selectOrderModel, setCost, setModel } from '@entities/Order'
import { useFilterCars } from '@widgets/CarGrid/hook/useFilterCars'
import { CarCard } from '@widgets/CarGrid/ui/CarCard'
import { FilterCars } from '@widgets/FillerCars'
import { type FC } from 'react'

export const CarGrid: FC = () => {
  const { filtredCars, handleFilterChange, selectedFilterId } = useFilterCars()
  const selectedModel = useAppSelector(selectOrderModel)
  const dispatch = useAppDispatch()

  const handleCarCardClick = (brand: string, model: string, cost: string) => {
    dispatch(setModel(`${brand}, ${model}`))
    dispatch(setCost(cost))
  }

  return (
    <div>
      <FilterCars
        selectedFilterId={selectedFilterId}
        onFilterChange={handleFilterChange}
      />
      <div className="mt-12 grid max-w-184 min-w-0 grid-cols-2 gap-px max-xl:grid-cols-1 max-sm:mt-4">
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
