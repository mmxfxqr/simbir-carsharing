import { RoutePath } from '@app/config/routePath'
import { useAppSelector } from '@app/store'
import {
  selectOrderCar,
  selectOrderColor,
  selectOrderLocation,
  selectOrderRentDuration,
  selectOrderSelectedRate,
  selectOrderTotalCost,
} from '@entities/Order'
import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const TotalGuard: FC = () => {
  const location = useAppSelector(selectOrderLocation)
  const car = useAppSelector(selectOrderCar)
  const totalCost = useAppSelector(selectOrderTotalCost)
  const color = useAppSelector(selectOrderColor)
  const rentDuration = useAppSelector(selectOrderRentDuration)
  const selectedTariff = useAppSelector(selectOrderSelectedRate)
  const isTotalAvailable = Boolean(
    location && car && totalCost && color && rentDuration && selectedTariff,
  )

  return isTotalAvailable ? (
    <Outlet />
  ) : (
    <Navigate to={RoutePath.Location} replace />
  )
}
