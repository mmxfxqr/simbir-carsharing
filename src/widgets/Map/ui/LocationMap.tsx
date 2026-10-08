import type { FC } from 'react'
import { Map, Placemark } from '@pbe/react-yandex-maps'
import { locations } from '@pages/LocationPage/config/location'
import { useAppSelector } from '@app/store'
export const LocationMap: FC = () => {
  const city = useAppSelector((state) => state.order.city)
  const selectectedAdress = useAppSelector((state) => state.order.address)
  const adresses = Object.entries(locations[city].addresses)
  const cityData = locations[city]
  const center = selectectedAdress
    ? cityData.addresses[selectectedAdress]
    : cityData.center

  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">
        Выбрать на карте:
      </h1>
      <div className="h-88 w-184 [&_.ymaps-layers-pane]:grayscale">
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
              // properties={{ iconCaption: name }}
              options={{ preset: 'islands#darkGreenCircleIcon' }}
            />
          ))}
        </Map>
      </div>
    </div>
  )
}
