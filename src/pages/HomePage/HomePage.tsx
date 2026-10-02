import React from 'react'
import {useTranslation} from 'react-i18next'

export const HomePage: React.FC = () => {
  const {t} = useTranslation()

  return (
    <h1 className="text-3xl font-bold underline text-primary">
      {t('welcome')}
    </h1>
  )
}
