import { OrderStepper } from '@shared/ui/OrderStepper'
import { Header } from '@widgets/Header'
import { OrderInfo } from '@widgets/OrderInfo'
import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const OrderPage: FC = () => {
  return (
    <div>
      <Header isInnerPage />
      <OrderStepper />
      <div className="flex justify-between px-16">
        <Outlet />
        <OrderInfo />
      </div>
    </div>
  )
}
