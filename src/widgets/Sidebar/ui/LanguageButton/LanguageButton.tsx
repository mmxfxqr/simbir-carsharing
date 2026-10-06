import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageButton: FC = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = () => {
    const language = i18n.language === 'ru' ? 'en' : 'ru'
    localStorage.setItem('language', language)
    i18n.changeLanguage(language)
  }

  return (
    <button
      className="text-primary hover::border-white h-12 w-12 rounded-full px-2 font-bold transition-colors hover:border hover:text-white active:border active:border-white"
      onClick={handleLanguageChange}
    >
      {i18n.language === 'ru' ? 'Рус' : 'Eng'}
    </button>
  )
}
