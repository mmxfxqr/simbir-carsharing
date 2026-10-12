import { formatPrice } from '@widgets/OrderInfo/lib/formatPrice'
import type { OrderPriceProps } from '@widgets/OrderInfo/types'
import type { FC } from 'react'

export const OrderCost: FC<OrderPriceProps> = ({ cost }) => {
  return (
    <div className="text-dark my-8 flex text-[16px]">
      <h1 className="font-medium">Цена:</h1>
      <h1 className="font-normal">{formatPrice(cost)}</h1>
    </div>
  )
}
