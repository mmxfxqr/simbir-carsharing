import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderCost,
  selectOrderRentDurationCost,
  selectOrderRentDurationMinutes,
  setCost,
  setRentDurationCost,
  setSelectedRate,
} from '@entities/Order'
import type { Nullable } from '@shared/types'
import { RadioButton } from '@shared/ui/RadioButton'
import type {
  ConfigurationRatePickProps,
  RateType,
} from '@widgets/ConfigurationRatePick/types'
import { useEffect, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationRatePick: FC<ConfigurationRatePickProps> = ({
  tariffs,
}) => {
  const { t } = useTranslation()
  const cost = useAppSelector(selectOrderCost)
  const rentCost = useAppSelector(selectOrderRentDurationCost)
  const rentDurationMinutes = useAppSelector(selectOrderRentDurationMinutes)
  const dispatch = useAppDispatch()
  const [selectedTariff, setSelectedTariff] = useState<Nullable<RateType>>(null)
  const tariffsArr = Object.entries(tariffs)

  useEffect(() => {
    if (
      rentDurationMinutes == null ||
      rentDurationMinutes <= 0 ||
      selectedTariff == null ||
      cost == null
    ) {
      return
    }

    const newRentCost =
      selectedTariff === 'perMinute'
        ? rentDurationMinutes * tariffs.perMinute
        : Math.ceil(rentDurationMinutes / 1440) * tariffs.perDay

    dispatch(setCost(cost - (rentCost ?? 0) + newRentCost))
    dispatch(setRentDurationCost(newRentCost))
  }, [selectedTariff, rentDurationMinutes, cost, rentCost, tariffs, dispatch])

  const handleRadioClick = (name: RateType) => {
    setSelectedTariff(name)
    dispatch(setSelectedRate(name))
  }

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
