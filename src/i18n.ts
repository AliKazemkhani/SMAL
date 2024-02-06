import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationDE from './locales/de.json'
import translationEN from './locales/en.json'

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['path', 'navigator'],
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
