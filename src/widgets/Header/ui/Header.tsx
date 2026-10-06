import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-between max-md:flex-col max-md:items-end max-md:px-4 max-md:pt-4">
      <h1 className="text-primary text-3xl font-bold max-md:mb-2">
        Need for drive
      </h1>
      <div className="text-gray flex gap-2 text-[14px]">
        <img src="/homepage/mapPoint.svg" />
        <h1>{t('Ulyanovsk')}</h1>
      </div>
    </div>
  )
}
