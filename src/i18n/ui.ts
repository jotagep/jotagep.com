import translationEn from './locales/en/translation.json'
import translationEs from './locales/es/translation.json'

export const languages = {
  en: 'English',
  es: 'Español',
}

export const langCodes = {
  en: 'en-US',
  es: 'es-ES',
}

export type Language = keyof typeof languages

export const locales = Object.keys(languages) as Array<Language>

export const localesWithoutDefault = locales.slice(1)

export const defaultLang = 'en'

export const ui = {
  en: translationEn,
  es: translationEs,
} as const
