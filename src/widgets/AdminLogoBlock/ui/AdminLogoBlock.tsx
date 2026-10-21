import type { FC } from 'react'
import adminLogo from '@assets/admin/auth/AdminLogo.svg'

export const AdminLogoBlock: FC = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={adminLogo} />
      <h1 className="text-admin-blue text-2xl">Need for drive</h1>
    </div>
  )
}
