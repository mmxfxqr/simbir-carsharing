import { RoutePath } from '@app/config/routePath'
import { useAppSelector } from '@app/store'
import { selectOrderLocation } from '@entities/Order'
import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ModelGuard: FC = () => {
  const location = useAppSelector(selectOrderLocation)

  return location ? <Outlet /> : <Navigate to={RoutePath.Location} replace />
}
