import { Button } from '@shared/ui/Button'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const HomeInfoBody: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col">
      <h1 className="text-dark text-[70px] leading-16.5 font-bold">
        {t('carsharing')}
      </h1>
      <h1 className="text-primary mb-8.5 text-[70px] leading-16.5 font-bold">
        Need for drive
      </h1>
      <h1 className="text-gray text-[26px] font-light">
        {t('minute-by-minute')}
      </h1>
      <Button className="mt-15 max-w-62.5">{t('book')}</Button>
    </div>
  )
}
