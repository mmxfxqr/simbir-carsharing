import { Button } from '@shared/ui/Button'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const HomeInfoBody: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col">
      <h1 className="text-dark font-bold text-[70px] leading-16.5">
        {t('carsharing')}
      </h1>
      <h1 className="text-primary font-bold text-[70px] leading-16.5 mb-8.5">
        Need for drive
      </h1>
      <h1 className="text-gray font-light text-[26px]">
        {t('minute-by-minute')}
      </h1>
      <Button className="max-w-62.5 mt-15">{t('book')}</Button>
    </div>
  )
}
