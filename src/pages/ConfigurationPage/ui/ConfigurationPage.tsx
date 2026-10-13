import { useAppSelector } from '@app/store'
import { selectOrderCar } from '@entities/Order'
import { ConfigurationColorList } from '@widgets/ConfigurationColorList'
import { ConfigurationDatePick } from '@widgets/ConfigurationDatePick'
import type { FC } from 'react'

export const ConfigurationPage: FC = () => {
  const car = useAppSelector(selectOrderCar)

  if (car) {
    return (
      <div className="flex flex-col gap-8 pt-8">
        <ConfigurationColorList colors={car.config.colors} />
        <ConfigurationDatePick />
      </div>
    )
  }
}
