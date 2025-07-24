import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const languages = [
    { code: 'pt', flag: '🇧🇷', label: t('language.pt') },
    { code: 'en', flag: '🇺🇸', label: t('language.en') },
    { code: 'es', flag: '🇪🇸', label: t('language.es') }
  ]

  return (
    <div className="absolute top-4 right-4 z-20">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
        <span className="text-white text-lg">🌐</span>
        <select 
          value={i18n.language} 
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-transparent text-white border-none outline-none cursor-pointer text-2xl"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default LanguageSwitcher