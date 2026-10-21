import { AdminLabelInput } from '@shared/ui/AdminLabelInput'
import type { AdminLoginFormInputsProps } from '../types'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const AdminLoginFormInputs: FC<AdminLoginFormInputsProps> = ({
  email,
  onEmailChange,
  onPasswordChange,
  password,
}) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-[15.5px]">
      <AdminLabelInput
        label={t('Email')}
        value={email}
        type="email"
        onChange={(e) => onEmailChange(e.currentTarget.value)}
      />
      <AdminLabelInput
        label={t('Password')}
        value={password}
        type="password"
        onChange={(e) => onPasswordChange(e.currentTarget.value)}
      />
    </div>
  )
}
