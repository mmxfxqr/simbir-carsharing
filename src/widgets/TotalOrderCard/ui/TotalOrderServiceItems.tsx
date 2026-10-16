import type { TotalOrderServiceItemsProps } from '@widgets/TotalOrderCard/types'
import { TotalOrderTextItem } from '@widgets/TotalOrderCard/ui/TotalOrderTextItem'
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
          <TotalOrderTextItem labelValue={t('Order fuel')} value="100%" />
        ) : service === 'Child seat' ? (
          <TotalOrderTextItem labelValue={t('Child seat')} value={t('Yes')} />
        ) : (
          <TotalOrderTextItem
            labelValue={t('Right-hand drive')}
            value={t('Yes')}
          />
        ),
      )}
    </div>
  )
}
