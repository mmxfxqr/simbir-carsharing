import { Sidebar } from '@widgets/index'
import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

export const RootLayout: FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 pl-16 pt-8">
        <Outlet />
      </main>
    </div>
  )
}
