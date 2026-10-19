import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderAdress,
  selectOrderCity,
  setAddress,
  setCity,
  setLocation,
} from '@entities/Order'
import { location } from '@pages/LocationPage/config/location'
import { InputSelectionMenu } from '@shared/ui/InputSelectMenu'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SelectLocation: FC = () => {
  const { t } = useTranslation()
  const city = useAppSelector(selectOrderCity)
  const dispatch = useAppDispatch()
  const selectedCity = useAppSelector(selectOrderCity)
  const selectedAddress = useAppSelector(selectOrderAdress)

  const handleSelectCityValue = (value: string) => {
    dispatch(setLocation(null))
    dispatch(setCity(value))
  }
  const handleSelecteAdressValue = (value: string) => {
    dispatch(setAddress(value))
    dispatch(setLocation(`${city}, ${value}`))
  }

  return (
    <div className="mb-11.25">
      <InputSelectionMenu
        label={t('City')}
        classname="mb-2"
        variants={Object.keys(location)}
        onSelect={handleSelectCityValue}
        defaultValue={selectedCity || ''}
      />
      <InputSelectionMenu
        key={city}
        label={t('Pickup point')}
        variants={Object.keys(location[city].addresses || {})}
        onSelect={handleSelecteAdressValue}
        isDisabled={!city}
        defaultValue={selectedAddress || ''}
      />
    </div>
  )
}
