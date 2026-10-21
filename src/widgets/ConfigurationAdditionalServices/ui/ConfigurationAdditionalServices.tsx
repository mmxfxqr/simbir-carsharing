import { CheckboxWithLabel } from '@shared/ui/CheckboxWithLabel'
import { useConfigurationAdditionalServices } from '../hooks/useConfigurationAdditionalServices'
import type { ConfigurationAdditionalServicesProps } from '../types'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationAdditionalServices: FC<
  ConfigurationAdditionalServicesProps
> = ({ additionalServices }) => {
  const { t } = useTranslation()
  const { handleServiceChange, services, selectedAditionalServices } =
    useConfigurationAdditionalServices({ additionalServices })

  return (
    <div>
      <h1 className="text-dark mb-4 text-sm font-light max-sm:text-xs">
        Доп услуги
      </h1>

      <div className="flex flex-col gap-2">
        {services.map((service) => (
          <CheckboxWithLabel
            key={service.name}
            label={`${t(service.name)}, ${service.cost} ₽`}
            checked={selectedAditionalServices?.includes(service.name) || false}
            onChange={(checked) => handleServiceChange(service.name, checked)}
            labelClassname="max-sm:text-xs"
          />
        ))}
      </div>
    </div>
  )
}
