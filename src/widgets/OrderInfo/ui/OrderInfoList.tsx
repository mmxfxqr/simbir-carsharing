import type { OrderStepState } from '../types'
import { OrderInfoItem } from './OrderInfoItem'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const OrderInfoList: FC<OrderStepState> = ({
  location,
  model,
  color,
  rentDuration,
  selectedRate,
  selectedAdditionalServices,
}) => {
  const { t } = useTranslation()

  const items = [
    { title: t('Pickup point'), value: location },
    { title: t('Model'), value: model },
    { title: t('Color'), value: color },
    { title: t('Rental duration'), value: rentDuration },
    { title: t('Rate'), value: selectedRate },
  ]

  return (
    <>
      {items.map(
        ({ title, value }) =>
          value && <OrderInfoItem key={title} title={title} value={t(value)} />,
      )}
      {selectedAdditionalServices &&
        selectedAdditionalServices.map((service) => (
          <OrderInfoItem key={service} title={t(service)} value={t('Yes')} />
        ))}
    </>
  )
}
