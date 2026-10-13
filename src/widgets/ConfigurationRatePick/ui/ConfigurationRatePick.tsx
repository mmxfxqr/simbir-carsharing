import { RadioButton } from '@shared/ui/RadioButton'
import type {
  ConfigurationRatePickProps,
  RateType,
} from '@widgets/ConfigurationRatePick/types'
import { useState, type FC } from 'react'

export const ConfigurationRatePick: FC<ConfigurationRatePickProps> = ({
  tariffs,
}) => {
  const [selectedTariff, setSelectedTariff] = useState<RateType>('perMinute')
  const tariffsArr = Object.entries(tariffs)

  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">Тариф</h1>
      <div className="flex flex-col gap-2">
        {tariffsArr.map(([name, price]) => (
          <RadioButton
            key={name}
            id={name}
            name="tariff"
            label={`Поминутно, ${price}₽/мин`}
            checked={selectedTariff === name}
            onChange={() => setSelectedTariff(name as RateType)}
          />
        ))}
      </div>
    </div>
  )
}
