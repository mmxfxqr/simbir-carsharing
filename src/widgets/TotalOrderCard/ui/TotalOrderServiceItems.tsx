import { TOTAL_ORDER_SERVICE_CONFIG } from '@widgets/TotalOrderCard/config/totalOrderServiceConfig'
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
      {services.map((service) => (
        <TotalOrderTextItem
          key={service}
          labelValue={t(TOTAL_ORDER_SERVICE_CONFIG[service].labelValue)}
          value={t(TOTAL_ORDER_SERVICE_CONFIG[service].value)}
        />
      ))}
    </div>
  )
}
