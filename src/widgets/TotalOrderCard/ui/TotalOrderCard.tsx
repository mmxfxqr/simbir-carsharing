import { useAppSelector } from '@app/store'
import {
  selectOrder,
  selectOrderAdditionalServices,
  selectOrderCar,
  selectOrderColor,
  selectOrderFromDate,
} from '@entities/Order'
import { TotalOrderTextItem } from './TotalOrderTextItem'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { TotalOrderServiceItems } from '@widgets/TotalOrderCard/ui/TotalOrderServiceItems'

export const TotalOrderCard: FC = () => {
  const { t } = useTranslation()
  const selectedCar = useAppSelector(selectOrderCar)
  const carModel = `${selectedCar?.brand}, ${selectedCar?.model}`
  const selectedColor = useAppSelector(selectOrderColor)
  const carColor =
    selectedColor === t('Any')
      ? selectedCar?.config.colors[0]
      : selectedCar?.config.colors.find((color) => color.name === selectedColor)
  const services = useAppSelector(selectOrderAdditionalServices)
  const fromDate = useAppSelector(selectOrderFromDate)
  const order = useAppSelector(selectOrder)

  return (
    <div className="flex w-full items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-4">
      <div className="flex flex-col gap-2">
        {order && (
          <h1 className="mb-2 text-2xl font-normal">Ваш заказ подтверждён</h1>
        )}
        <h1 className="text-lg font-normal max-sm:text-sm">{carModel}</h1>
        <div className="border-gray box-border flex h-6 w-fit items-center justify-center rounded-sm border px-2 py-1 text-sm leading-4 font-normal max-sm:text-xs">
          {carColor?.plate}
        </div>
        <TotalOrderServiceItems services={services} />
        <TotalOrderTextItem
          labelValue={t('Available from')}
          value={fromDate || ''}
        />
      </div>
      <img
        src={selectedCar?.image}
        className="block max-h-29 w-full max-w-[256px] object-contain max-lg:max-w-50"
      />
    </div>
  )
}
