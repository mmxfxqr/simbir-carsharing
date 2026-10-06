import { HomeInfoFooter } from './HomeInfoFooter'
import { HomeInfoBody } from './HomeInfoBody'
import type { FC } from 'react'
import { Header } from '@widgets/Header'

export const HomeInfo: FC = () => {
  return (
    <div className="flex h-screen w-full flex-1 flex-col justify-between px-16 py-8 max-md:justify-normal max-md:p-0">
      <Header />
      <HomeInfoBody />
      <HomeInfoFooter />
    </div>
  )
}
