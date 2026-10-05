import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold underline text-primary">
        {t('welcome')}
      </h1>
    </div>
  )
}
