import type { OrderStepState } from '@widgets/OrderInfo/types'
import { OrderInfoItem } from '@widgets/OrderInfo/ui/OrderInfoItem'
import type { FC } from 'react'

export const OrderInfoList: FC<OrderStepState> = ({ location, model }) => {
  const items = [
    { title: 'Пункт выдачи', value: location },
    { title: 'Модель', value: model },
  ]

  return (
    <>
      {items.map(
        ({ title, value }) =>
          value && <OrderInfoItem key={title} title={title} value={value} />,
      )}
    </>
  )
}
