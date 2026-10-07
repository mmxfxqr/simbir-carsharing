import { Header } from '@widgets/Header'
import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const OrderPage: FC = () => {
  return (
    <div>
      <Header isInnerPage />
      <Outlet />
    </div>
  )
}
