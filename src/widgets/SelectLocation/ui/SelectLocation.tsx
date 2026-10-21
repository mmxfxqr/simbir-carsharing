import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderAdress,
  selectOrderCity,
  setAddress,
  setCity,
  setLocation,
} from '@entities/Order'
import { locations } from '@pages/LocationPage'
import { InputSelectionMenu } from '@shared/ui/InputSelectMenu'
import { useEffect, type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SelectLocation: FC = () => {
  const { t } = useTranslation()
  const city = useAppSelector(selectOrderCity)
  const dispatch = useAppDispatch()
  const selectedCity = useAppSelector(selectOrderCity)
  const selectedAddress = useAppSelector(selectOrderAdress)

  useEffect(() => {
    console.log(selectedCity, selectOrderAdress)
  }, [selectedCity, selectOrderAdress])

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
        variants={Object.keys(locations)}
        onSelect={handleSelectCityValue}
        defaultValue={selectedCity || ''}
      />
      <InputSelectionMenu
        key={city}
        label={t('Pickup point')}
        variants={Object.keys(locations[city].addresses || '')}
        onSelect={handleSelecteAdressValue}
        isDisabled={!city}
        defaultValue={selectedAddress || ''}
      />
    </div>
  )
}
