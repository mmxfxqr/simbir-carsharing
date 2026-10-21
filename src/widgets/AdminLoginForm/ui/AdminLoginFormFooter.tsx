import { AdminRoutePath } from '@app/config/routePath'
import { Button } from '@shared/ui/Button'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const AdminLoginFormFooter: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-between">
      <Link to={AdminRoutePath.Registration} className="text-admin-primary">
        {t('Request access')}
      </Link>
      <Button variant="secondary" className="w-full max-w-27.5">
        Войти
      </Button>
    </div>
  )
}
