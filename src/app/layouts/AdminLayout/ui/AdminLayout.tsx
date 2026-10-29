import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const AdminLayout: FC = () => {
  return (
    <div className="from-[ #f5f6f8] flex h-screen bg-linear-to-r to-[#f5f6f8]">
      <Outlet />
    </div>
  )
}
