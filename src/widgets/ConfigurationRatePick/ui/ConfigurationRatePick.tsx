import { RadioButton } from '@shared/ui/RadioButton'
import { useConfigurationRatePick } from '@widgets/ConfigurationRatePick/hooks/useConfigurationRatePick'
import {
  RateType,
  type ConfigurationRatePickProps,
} from '@widgets/ConfigurationRatePick/types'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationRatePick: FC<ConfigurationRatePickProps> = ({
  tariffs,
}) => {
  const { t } = useTranslation()
  const { handleRadioClick, selectedTariff, tariffsArr } =
    useConfigurationRatePick({ tariffs })

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
              name === RateType.PerMinute
                ? `${t('perMinute')}, ${price} ${t('₽/minute')}`
                : `${t('perDay')}, ${price} ${t('₽/day')}`
            }

            checked={selectedTariff === name}
            onChange={() => handleRadioClick(name as RateType)}
          />
        ))}
      </div>
    </div>
  )
}
