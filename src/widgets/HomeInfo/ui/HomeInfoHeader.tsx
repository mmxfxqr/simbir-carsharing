import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const HomeInfoHeader: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl text-primary font-bold">Need for drive</h1>
      <div className="flex gap-2 text-gray text-[14px]">
        <img src="/homepage/mapPoint.svg" />
        <h1>{t('ulyanovsk')}</h1>
      </div>
    </div>
  )
}
