import { RadioButton } from '@shared/ui/RadioButton'
import type {
  ConfigurationRatePickProps,
  RateType,
} from '@widgets/ConfigurationRatePick/types'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationRatePick: FC<ConfigurationRatePickProps> = ({
  tariffs,
}) => {
  const { t } = useTranslation()
  const [selectedTariff, setSelectedTariff] = useState<RateType>('perMinute')
  const tariffsArr = Object.entries(tariffs)

  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">{t('Rate')}</h1>
      <div className="flex flex-col gap-2">
        {tariffsArr.map(([name, price]) => (
          <RadioButton
            key={name}
            id={name}
            name="tariff"
            label={
              name === 'perMinute'
                ? `${t('By the minute')}, ${price} ${t('₽/minute')}`
                : `${t('For a day')}, ${price} ${t('₽/day')}`
            }

            checked={selectedTariff === name}
            onChange={() => setSelectedTariff(name as RateType)}
          />
        ))}
      </div>
    </div>
  )
}
