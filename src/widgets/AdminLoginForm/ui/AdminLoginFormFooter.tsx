import { AdminRoutePath } from '@app/config/routePath'
import { Button } from '@shared/ui/Button'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

export const AdminLoginFormFooter: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        to={`/admin/${AdminRoutePath.Registration}`}
        className="text-admin-primary text-[10.5px]"
      >
        Регистрация
      </Link>
      <Button variant="secondary" className="w-full max-w-27.5">
        Войти
      </Button>
    </div>
  )
}
