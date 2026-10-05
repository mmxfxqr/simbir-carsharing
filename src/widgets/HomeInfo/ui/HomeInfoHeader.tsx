import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const HomeInfoHeader: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-primary text-3xl font-bold">Need for drive</h1>
      <div className="text-gray flex gap-2 text-[14px]">
        <img src="/homepage/mapPoint.svg" />
        <h1>{t('ulyanovsk')}</h1>
      </div>
    </div>
  )
}
