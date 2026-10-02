import React from 'react'
import {useTranslation} from 'react-i18next'

export const LanguageButton: React.FC = () => {
  const {i18n} = useTranslation()

  const changeLanguage = () => {
    const language = i18n.language === 'ru' ? 'en' : 'ru'
    localStorage.setItem('language', language)
    i18n.changeLanguage(language)
  }
  return (
    <button
      className="w-12 h-12 text-primary rounded-full transition-colors hover:text-white hover:border hover::border-white active:border active:border-white  "
      onClick={changeLanguage}
    >
      {i18n.language === 'ru' ? 'Рус' : 'Eng'}
    </button>
  )
}
