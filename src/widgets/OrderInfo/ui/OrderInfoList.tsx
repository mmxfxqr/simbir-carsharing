import type { OrderStepState } from '@widgets/OrderInfo/types'
import { OrderInfoItem } from '@widgets/OrderInfo/ui/OrderInfoItem'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const OrderInfoList: FC<OrderStepState> = ({ location, model }) => {
  const { t } = useTranslation()

  const items = [
    { title: t('Pickup point'), value: location },
    { title: t('Model'), value: model },
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
