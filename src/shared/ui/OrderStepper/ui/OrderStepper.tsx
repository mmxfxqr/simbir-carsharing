import { orderSteps } from '../config/orderSteps'
import type { FC } from 'react'
import { OrderStep } from '@shared/ui/OrderStepper/ui/OrderStep'
import { useAppSelector } from '@app/store'
import { selectOrder } from '@entities/Order'

export const OrderStepper: FC = () => {
  const order = useAppSelector(selectOrder)

  if (order) {
    return (
      <h1 className="pt-2 pl-16 text-sm font-bold">Заказ номер {order.id}</h1>
    )
  }

  return (
    <div className="flex border-y border-[#EEE] py-2 pl-16 max-sm:p-2">
      {orderSteps.map((order, index) => (
        <OrderStep
          key={order}
          isLast={index === orderSteps.length - 1}
          order={order}
        />
      ))}
    </div>
  )
}
