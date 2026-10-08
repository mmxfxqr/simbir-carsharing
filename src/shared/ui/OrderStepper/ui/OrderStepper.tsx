import { orderSteps } from '../config/orderSteps'
import type { FC } from 'react'
import { OrderStep } from '@shared/ui/OrderStepper/ui/OrderStep'

export const OrderStepper: FC = () => {
  return (
    <div className="flex border-y border-[#EEE] py-2 pl-16">
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
