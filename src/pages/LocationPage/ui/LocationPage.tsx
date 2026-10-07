import { useAppDispatch, useAppSelector } from '@app/store'
import { setLocation } from '@entities/Order'
import { Button } from '@shared/ui/Button'
import type { FC } from 'react'

export const LocationPage: FC = () => {
  const location = useAppSelector((s) => s.order.location)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>Локация: {location}</div>
      <Button
        onClick={() => {
          dispatch(setLocation('Москва'))
        }}
      >
        Мск
      </Button>
    </div>
  )
}
