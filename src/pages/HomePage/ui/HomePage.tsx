import { HomeInfo } from '@widgets/HomeInfo'
import { HomeSlider } from '@widgets/HomeSlider'
import type { FC } from 'react'

export const HomePage: FC = () => {
  return (
    <div className="flex h-full justify-between">
      <HomeInfo />
      <HomeSlider />
    </div>
  )
}
