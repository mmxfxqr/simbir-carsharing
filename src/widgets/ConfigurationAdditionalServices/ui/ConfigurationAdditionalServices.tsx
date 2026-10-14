import { CheckboxWithLabel } from '@shared/ui/CheckboxWithLabel'
import type { ConfigurationAdditionalServicesProps } from '@widgets/ConfigurationAdditionalServices/types'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationAdditionalServices: FC<
  ConfigurationAdditionalServicesProps
> = ({ additionalServices }) => {
  const { t } = useTranslation()
  const { childSeat, fullTank, rightHandDrive } = additionalServices

  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleServiceChange = (name: string, checked: boolean) => {
    setSelectedServices((prev) => {
      if (checked) {
        return [...prev, name]
      }

      return prev.filter((serviceName) => serviceName !== name)
    })
  }

  const services = [fullTank, childSeat, rightHandDrive]

  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">Доп услуги</h1>

      <div className="flex flex-col gap-2">
        {services.map((service) => (
          <CheckboxWithLabel
            key={service.name}
            label={`${t(service.name)}, ${service.cost} ₽`}
            checked={selectedServices.includes(service.name)}
            onChange={(checked) => handleServiceChange(service.name, checked)}
          />
        ))}
      </div>
    </div>
  )
}
