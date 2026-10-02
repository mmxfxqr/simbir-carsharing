import React from 'react'
import {useTranslation} from 'react-i18next'

export const HomePage: React.FC = () => {
  const {t} = useTranslation()

  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold underline text-primary">
        {t('welcome')}
      </h1>
      <img src="https://usefulpix.com/ph/900x600/EF4444" className=""></img>
    </div>
  )
}
