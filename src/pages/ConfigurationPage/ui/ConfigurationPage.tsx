import { useAppSelector } from '@app/store'
import { selectOrderCar } from '@entities/Order'
import { ConfigurationAdditionalServices } from '@widgets/ConfigurationAdditionalServices'
import { ConfigurationColorList } from '@widgets/ConfigurationColorList'
import { ConfigurationDatePick } from '@widgets/ConfigurationDatePick'
import { ConfigurationRatePick } from '@widgets/ConfigurationRatePick'
import type { FC } from 'react'

export const ConfigurationPage: FC = () => {
  const car = useAppSelector(selectOrderCar)

  if (car) {
    return (
      <div className="flex flex-col gap-8 pt-8">
        <ConfigurationColorList colors={car.config.colors} />
        <ConfigurationDatePick />
        <ConfigurationRatePick tariffs={car.config.tariffs} />
        <ConfigurationAdditionalServices
          additionalServices={car.config.additionalServices}
        />
      </div>
    )
  }
}
