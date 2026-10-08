import { RoutePath } from '@app/config/routePath'
import { Button } from '@shared/ui/Button'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const HomeInfoBody: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleBookClick = () => {
    navigate(`/${RoutePath.Order}`)
  }

  return (
    <div className="flex flex-col max-md:mt-8.5 max-md:items-center">
      <div className="max-md:px-4">
        <h1 className="text-dark text-[70px] leading-16.5 font-bold max-md:mb-1.5 max-md:text-[32px] max-md:leading-8">
          {t('Carsharing')}
        </h1>
        <h1 className="text-primary mb-8.5 text-[70px] leading-16.5 font-bold max-md:mb-4 max-md:text-[32px] max-md:leading-8">
          Need for drive
        </h1>
        <h1 className="text-gray text-[26px] font-light max-md:text-[18px]">
          {t('Minute-by-minute car rental in your city')}
        </h1>
      </div>
      <Button
        className="mt-15 w-full max-w-62.5 max-md:mt-8 max-md:max-w-[320px]"
        onClick={handleBookClick}
      >
        {t('Book')}
      </Button>
    </div>
  )
}
