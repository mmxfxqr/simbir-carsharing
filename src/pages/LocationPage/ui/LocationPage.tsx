import { LocationMap } from '@widgets/Map'
import { SelectLocation } from '@widgets/SelectLocation'
import type { FC } from 'react'

export const LocationPage: FC = () => {
  return (
    <div className="px-16 pt-8">
      <SelectLocation/>
      <LocationMap />
    </div>
  )
}
