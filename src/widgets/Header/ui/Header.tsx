import type { HeaderProps } from '@widgets/Header/types'
import clsx from 'clsx'
import mapPoint from '@assets/homepage/mapPoint.svg'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const Header: FC<HeaderProps> = ({ isInnerPage }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <div
      className={clsx(
        'flex items-center justify-between max-md:flex-col max-md:items-end max-md:px-4 max-md:pt-4',
        isInnerPage && 'border-b border-b-[#EEE] px-16 py-8',
      )}
    >
      <a
        className="text-primary text-3xl font-bold max-md:mb-2"
        onClick={handleLogoClick}
      >
        Need for drive
      </a>
      <div className="text-gray flex gap-2 text-[14px]">
        <img src={mapPoint} />
        <h1>{t('Ulyanovsk')}</h1>
      </div>
    </div>
  )
}
