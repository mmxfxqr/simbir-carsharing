import { RoutePath } from '@app/config/routePath'
import { useAppSelector } from '@app/store'
import { selectOrderLocation, selectOrderCar } from '@entities/Order'
import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ConfigurationGuard: FC = () => {
  const location = useAppSelector(selectOrderLocation)
  const car = useAppSelector(selectOrderCar)
  const isConfigurationAvailable = Boolean(location && car)

  return isConfigurationAvailable ? (
    <Outlet />
  ) : (
    <Navigate to={RoutePath.Location} replace />
  )
}
