import { useAppDispatch } from '@app/store'
import { clearConfiguration } from '@entities/Order'
import { CarGrid } from '@widgets/CarGrid'
import { useEffect, type FC } from 'react'

export const ModelPage: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(clearConfiguration())
  }, [])

  return (
    <div className="pt-8 max-sm:pt-2">
      <CarGrid />
    </div>
  )
}
