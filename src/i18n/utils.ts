import { defaultLang, type Language, type LanguageKeys, ui } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export const extractedVariables = (template: string) =>
  (template.match(/{(\w+)}/g) || []).map((v: string) => v.slice(1, -1))

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

const getTranslationFromKey = (
  lang: Language,
  keys: string[],
  params: Record<string, string> = {},
) => {
  let translation: (typeof ui)[keyof typeof ui] | string = ui[lang]
  for (const k of keys) {
    if (translation[k]) {
      translation = translation[k]
    } else {
      translation = ''
      break
    }
  }

  if (isString(translation)) {
    Object.entries(params).forEach(([key, value]) => {
      translation = (translation as string).replace(`{${key}}`, value)
    })
  }

  return translation as string
}

export function useTranslations(lang: Language) {
  return function t(
    key: LanguageKeys,
    params: Record<string, string> = {},
  ): string {
    const keys = key.split('.') as Array<string>
    let translation = getTranslationFromKey(lang, keys, params)
    if (!translation) {
      translation = getTranslationFromKey(defaultLang, keys, params)
    }
    return translation
  }
}
