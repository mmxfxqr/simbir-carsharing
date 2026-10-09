import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderCity,
  setAddress,
  setCity,
  setLocation,
} from '@entities/Order'
import { locations } from '@pages/LocationPage/config/location'
import { InputSelectionMenu } from '@shared/ui/InputSelectMenu'
import type { FC } from 'react'

export const SelectLocation: FC = () => {
  const city = useAppSelector(selectOrderCity)

  const dispatch = useAppDispatch()

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
        label="Город"
        classname="mb-2"
        variants={Object.keys(locations)}
        onSelect={handleSelectCityValue}
      />
      <InputSelectionMenu
        key={city}
        label="Пункт выдачи"
        variants={Object.keys(locations[city].addresses || {})}
        onSelect={handleSelecteAdressValue}
        isDisabled={Boolean(!city)}
      />
    </div>
  )
}
