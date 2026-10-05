import { HomeInfo } from '@widgets/HomeInfo'
import type { FC } from 'react'

export const HomePage: FC = () => {
  return (
    <div className="flex justify-between h-full">
      <HomeInfo />
    </div>
  )
}
