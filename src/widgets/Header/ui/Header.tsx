import type { HeaderProps } from '@widgets/Header/types'
import clsx from 'clsx'
import mapPoint from '@assets/homepage/mapPoint.svg'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Header: FC<HeaderProps> = ({ isInnerPage }) => {
  const { t } = useTranslation()

  return (
    <div
      className={clsx(
        'flex items-center justify-between max-md:flex-col max-md:items-end max-md:px-4 max-md:pt-4',
        isInnerPage && 'border-b border-b-[#EEE] px-16 py-8',
      )}
    >
      <h1 className="text-primary text-3xl font-bold max-md:mb-2">
        Need for drive
      </h1>
      <div className="text-gray flex gap-2 text-[14px]">
        <img src={mapPoint} />
        <h1>{t('Ulyanovsk')}</h1>
      </div>
    </div>
  )
}
