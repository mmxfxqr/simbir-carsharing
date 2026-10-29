import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const AdminLoginFormHeader: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full text-center">
      <h1 className="text-admin-blue pt-[19.5px] pb-4.75 text-[17.5px]">
        {t('Login')}
      </h1>
    </div>
  )
}
