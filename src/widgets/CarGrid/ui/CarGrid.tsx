import { useAppDispatch, useAppSelector } from '@app/store'
import { selectOrderModel, setModel } from '@entities/Order'
import { useFilterCars } from '@widgets/CarGrid/hook/useFilterCars'
import { CarCard } from '@widgets/CarGrid/ui/CarCard'
import { FilterCars } from '@widgets/FillerCars'
import { type FC } from 'react'

export const CarGrid: FC = () => {
  const { filtredCars, handleFilterChange, selectedFilterId } = useFilterCars()
  const selectedModel = useAppSelector(selectOrderModel)
  const dispatch = useAppDispatch()

  const handleCarCardClick = (brand: string, model: string) => {
    dispatch(setModel(`${brand}, ${model}`))
  }

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
