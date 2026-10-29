import type { FC } from 'react'
import { AdminLogoBlock } from '@widgets/AdminLogoBlock'
import { AdminRegistrationForm } from '@widgets/AdminRegistrationForm'

export const AdminRegistrationPage: FC = () => {
  return (
    <div className="absolute top-41.75 left-1/2 flex w-[calc(100%_-_32px)] max-w-[376.5px] -translate-x-1/2 flex-col items-center gap-4">
      <AdminLogoBlock />
      <AdminRegistrationForm />
    </div>
  )
}
