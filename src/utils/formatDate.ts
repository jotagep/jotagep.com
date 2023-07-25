export default function formatDate(date: Date, locale: string = 'en-GB') {
  return Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeZone: 'Europe/Madrid',
  }).format(date)
}
