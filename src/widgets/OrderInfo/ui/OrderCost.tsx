import { formatPrice } from '@widgets/OrderInfo/lib/formatPrice'
import type { OrderPriceProps } from '@widgets/OrderInfo/types'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const OrderCost: FC<OrderPriceProps> = ({ cost }) => {
  const { t } = useTranslation()

  return (
    <div className="text-dark my-8 flex text-[16px] max-sm:text-sm">
      <h1 className="mr-1 font-medium">{t('cost')}</h1>
      <h1 className="font-normal">{formatPrice(cost, t)}</h1>
    </div>
  )
}
