import { Sidebar } from '@widgets/Sidebar'
import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const RootLayout: FC = () => {
  return (
    <div className="flex h-screen">
      <div className="h-full w-16 shrink-0">
        <Sidebar />
      </div>
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  )
}
