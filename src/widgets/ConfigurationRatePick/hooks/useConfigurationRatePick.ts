import { useAppDispatch, useAppSelector } from '@app/store'
import { selectOrderSelectedRate, setSelectedRate } from '@entities/Order'
import {
  RateType,
  type ConfigurationRatePickProps,
} from '@widgets/ConfigurationRatePick/types'

export const useConfigurationRatePick = ({
  tariffs,
}: ConfigurationRatePickProps) => {
  const selectedTariff = useAppSelector(selectOrderSelectedRate)
  const dispatch = useAppDispatch()
  const tariffsArr = Object.entries(tariffs)

  const handleRadioClick = (name: RateType) => {
    dispatch(setSelectedRate(name))
  }

  return { handleRadioClick, tariffsArr, selectedTariff }
}
