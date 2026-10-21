import { store } from '@app/store'
import { YMaps } from '@pbe/react-yandex-maps'
import i18n from '@shared/i18n/i18n'
import type { FC, PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <YMaps
          query={{ lang: 'ru_RU', apikey: import.meta.env.VITE_Y_MAPS_API_KEY }}
        >
          {children}
        </YMaps>
      </Provider>
    </I18nextProvider>
  )
}
