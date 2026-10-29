import { AdminLogoBlock } from '@widgets/AdminLogoBlock'
import { AdminLoginForm } from '@widgets/AdminLoginForm'
import type { FC } from 'react'

export const AdminLoginPage: FC = () => {
  return (
    <div className="absolute top-41.75 left-[50%] flex w-full max-w-[376.5px] -translate-x-1/2 flex-col items-center gap-4">
      <AdminLogoBlock />
      <AdminLoginForm />
    </div>
  )
}
