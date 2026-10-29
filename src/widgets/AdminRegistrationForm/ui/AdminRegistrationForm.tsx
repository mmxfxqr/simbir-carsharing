import { AdminRoutePath } from '@app/config/routePath'
import { AdminLabelInput } from '@shared/ui/AdminLabelInput'
import { Button } from '@shared/ui/Button'
import { useState, type FC } from 'react'
import { Link } from 'react-router-dom'

export const AdminRegistrationForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <form
      className="bg-admin-white flex w-full flex-col overflow-hidden rounded-[9px] shadow-[0_3.5px_35px_0_#5a61691a,0_5px_5px_0_#5a61690f]"
      onSubmit={(event) => event.preventDefault()}
    >
      <h1 className="text-admin-blue pt-[19.5px] pb-4.75 text-center text-[17.5px]">
        Регистрация
      </h1>
      <div className="flex flex-col gap-3.75 py-[16.5px] pr-4.5 pl-4.25">
        <div className="flex flex-col gap-[15.5px]">
          <AdminLabelInput
            label="Почта"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <AdminLabelInput
            label="Пароль"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <AdminLabelInput
            label="Подтвердите пароль"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.currentTarget.value)}
          />
        </div>
        <Button type="submit" variant="secondary" className="w-full">
          Зарегистрироваться
        </Button>
        <p className="text-admin-black text-center text-[10.5px]">
          Уже есть аккаунт?{' '}
          <Link
            to={`/admin/${AdminRoutePath.Login}`}
            className="text-admin-primary hover:underline"
          >
            Войти
          </Link>
        </p>
      </div>
    </form>
  )
}
