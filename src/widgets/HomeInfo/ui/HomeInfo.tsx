import { HomeInfoFooter } from './HomeInfoFooter'
import { HomeInfoBody } from './HomeInfoBody'
import { HomeInfoHeader } from './HomeInfoHeader'
import type { FC } from 'react'

export const HomeInfo: FC = () => {
  return (
    <div className="flex h-screen w-full flex-1 flex-col justify-between py-8 pr-16">
      <HomeInfoHeader />
      <HomeInfoBody />
      <HomeInfoFooter />
    </div>
  )
}
