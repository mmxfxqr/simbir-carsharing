import { useAppDispatch, useAppSelector } from '@app/store'
import { setAddress, setCity, setLocation } from '@entities/Order'
import { locations } from '@pages/LocationPage/config/location'
import { InputSelectionMenu } from '@shared/ui/InputSelectMenu'
import type { FC } from 'react'

export const SelectLocation: FC = () => {
  const location = useAppSelector((state) => state.order.location)
  const city = useAppSelector((state) => state.order.city)

  const dispatch = useAppDispatch()

  const handleSelectCityValue = (value: string) => {
    dispatch(setLocation(null))
    dispatch(setCity(value))
  }
  const handleSelecteAdressValue = (value: string) => {
    console.log(value)
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
      <h1>{location}</h1>
    </div>
  )
}
