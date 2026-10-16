import { useAppDispatch } from '@app/store'
import { clearCar, clearConfiguration } from '@entities/Order'
import { LocationMap } from '@widgets/Map'
import { SelectLocation } from '@widgets/SelectLocation'
import { useEffect, type FC } from 'react'

export const LocationPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearCar())
    dispatch(clearConfiguration())
  }, [])

  return (
    <div className="pt-8">
      <SelectLocation />
      <LocationMap />
    </div>
  )
}
