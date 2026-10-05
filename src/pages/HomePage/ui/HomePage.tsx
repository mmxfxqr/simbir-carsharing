import { HomeInfo } from '@widgets/HomeInfo'
import { HomeSlider } from '@widgets/HomeSlider'
import type { FC } from 'react'

export const HomePage: FC = () => {
  return (
    <div className="flex justify-between h-full">
      <HomeInfo />

      <HomeSlider />
    </div>
  )
}
