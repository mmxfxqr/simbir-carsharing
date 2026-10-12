import { RoutePath } from '@app/config/routePath'
import { useAppSelector } from '@app/store'
import { selectOrderLocation, selectOrderModel } from '@entities/Order'
import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ConfigurationGuard: FC = () => {
  const location = useAppSelector(selectOrderLocation)
  const model = useAppSelector(selectOrderModel)

  return location && model ? (
    <Outlet />
  ) : (
    <Navigate to={RoutePath.Location} replace />
  )
}
