import { useAppDispatch, useAppSelector } from '@app/store'
import { selectOrderCar, selectOrderCostRange, setCost } from '@entities/Order'
import { convertRangeToMinValue } from '@pages/OrderPage/lib/convertRangeToMinValue'
import { ConfigurationAdditionalServices } from '@widgets/ConfigurationAdditionalServices'
import { ConfigurationColorList } from '@widgets/ConfigurationColorList'
import { ConfigurationDatePick } from '@widgets/ConfigurationDatePick'
import { ConfigurationRatePick } from '@widgets/ConfigurationRatePick'
import { useEffect, type FC } from 'react'

export const ConfigurationPage: FC = () => {
  const car = useAppSelector(selectOrderCar)
  const costRange = useAppSelector(selectOrderCostRange)
  const startValue = convertRangeToMinValue(costRange)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (startValue) dispatch(setCost(startValue))
  }, [])

  if (!car) return null

  return (
    <div className="flex flex-col gap-8 pt-8 max-sm:max-w-40 max-sm:gap-4">
      <ConfigurationColorList colors={car.config.colors} />
      <ConfigurationDatePick />
      <ConfigurationRatePick tariffs={car.config.tariffs} />
      <ConfigurationAdditionalServices
        additionalServices={car.config.additionalServices}
      />
    </div>
  )
}
