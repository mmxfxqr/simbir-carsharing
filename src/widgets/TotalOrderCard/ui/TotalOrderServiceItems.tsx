import type { TotalOrderServiceItemsProps } from '@widgets/TotalOrderCard/types'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const TotalOrderServiceItems: FC<TotalOrderServiceItemsProps> = ({
  services,
}) => {
  const { t } = useTranslation()

  if (!services) return null

  return (
    <div className="flex flex-col gap-2">
      {services.map((service) =>
        service === 'Full tank' ? (
          <div key={service} className="flex text-sm font-light">
            <h1 className="mr-1 font-bold">{t('Order fuel')}</h1>
            100%
          </div>
        ) : service === 'Child seat' ? (
          <div className="flex text-sm font-light">
            <h1 className="mr-1 font-bold">{t('Child seat')}</h1>
            {t('Yes')}
          </div>
        ) : (
          <div className="flex text-sm font-light">
            <h1 className="mr-1 font-bold">{t('Right-hand drive')}</h1>
            {t('Yes')}
          </div>
        ),
      )}
    </div>
  )
}
