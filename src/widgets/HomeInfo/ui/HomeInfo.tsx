import { HomeInfoFooter } from './HomeInfoFooter'
import { HomeInfoBody } from './HomeInfoBody'
import { HomeInfoHeader } from './HomeInfoHeader'
import type { FC } from 'react'

export const HomeInfo: FC = () => {
  return (
    <div className="w-full pr-16 flex flex-col justify-between py-8">
      <HomeInfoHeader />
      <HomeInfoBody />
      <HomeInfoFooter />
    </div>
  )
}
