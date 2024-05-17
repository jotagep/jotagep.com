import { defaultLang, type Language, ui } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

const getTranslationFromKey = (lang: Language, keys: string[]) => {
  let translation: (typeof ui)[keyof typeof ui] | string = ui[lang]
  for (const k of keys) {
    if (translation[k]) {
      translation = translation[k]
    } else {
      translation = ''
      break
    }
  }
  return translation as string
}

export function useTranslations(lang: Language) {
  return function t(key: NestedKeys<(typeof ui)[typeof defaultLang]>): string {
    const keys = key.split('.') as Array<string>
    let translation = getTranslationFromKey(lang, keys)
    if (!translation) {
      translation = getTranslationFromKey(defaultLang, keys)
    }
    return translation
  }
}
