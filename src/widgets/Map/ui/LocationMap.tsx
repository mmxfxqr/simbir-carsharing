import type { FC } from 'react'
import { Map, Placemark } from '@pbe/react-yandex-maps'
import { locations } from '@pages/LocationPage/config/location'
import { useAppSelector } from '@app/store'
import { selectOrderAdress, selectOrderCity } from '@entities/Order'
import { useTranslation } from 'react-i18next'

export const LocationMap: FC = () => {
  const { t } = useTranslation()
  const city = useAppSelector(selectOrderCity)
  const selectectedAdress = useAppSelector(selectOrderAdress)
  const adresses = Object.entries(locations[city].addresses)
  const cityData = locations[city]
  const center = selectectedAdress
    ? cityData.addresses[selectectedAdress]
    : cityData.center

  return (
    <div>
      <h1 className="text-dark mb-4 text-sm font-light">
        {t('Select on the map:')}
      </h1>
      <div className="max h-88 w-184 max-xl:h-62.5 max-xl:w-75 max-sm:h-37.5 max-sm:w-50 [&_.ymaps-layers-pane]:grayscale">
        <Map
          key={`${city}-${selectectedAdress}`}
          width="100%"
          height="100%"
          defaultState={{ center: center, zoom: 12 }}
        >
          {adresses.map(([, coordinates], index) => (
            <Placemark
              key={index}
              geometry={coordinates}
              options={{ preset: 'islands#darkGreenCircleIcon' }}
            />
          ))}
        </Map>
      </div>
    </div>
  )
}
