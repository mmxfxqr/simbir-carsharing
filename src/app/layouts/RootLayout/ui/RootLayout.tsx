import { Sidebar } from '@widgets/Sidebar'
import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const RootLayout: FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 pl-16">
        <Outlet />
      </main>
    </div>
  )
}
