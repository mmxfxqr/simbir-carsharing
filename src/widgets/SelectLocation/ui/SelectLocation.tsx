import { useAppDispatch, useAppSelector } from '@app/store'
import { setLocation } from '@entities/Order'
import { InputSelectionMenu } from '@shared/ui/InputSelectMenu'
import { locations } from '@widgets/SelectLocation/config/locations'
import { useState, type FC } from 'react'

export const SelectLocation: FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>(
    Object.keys(locations)[0],
  )

  const location = useAppSelector((state) => state.order.location)
  const dispatch = useAppDispatch()
  const handleSelectCityValue = (value: string) => {
    dispatch(setLocation(null))
    setSelectedCity(value)
  }
  const handleSelecteAdressValue = (value: string) => {
    dispatch(setLocation(`${selectedCity}, ${value}`))
  }

  return (
    <div>
      <InputSelectionMenu
        label="Город"
        classname="mb-2"
        variants={Object.keys(locations)}
        onSelect={handleSelectCityValue}
      />
      <InputSelectionMenu
        key={selectedCity}
        label="Пункт выдачи"
        variants={Object.keys(locations[selectedCity] || {})}
        onSelect={handleSelecteAdressValue}
        isDisabled={Boolean(!selectedCity)}
      />
      <h1>{location}</h1>
    </div>
  )
}
