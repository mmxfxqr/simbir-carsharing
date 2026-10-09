import { LocationMap } from '@widgets/Map'
import { SelectLocation } from '@widgets/SelectLocation'
import type { FC } from 'react'

export const LocationPage: FC = () => {
  return (
    <div>
      <SelectLocation/>
      <LocationMap />
    </div>
  )
}
