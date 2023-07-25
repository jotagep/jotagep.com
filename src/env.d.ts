/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'astro-i18next'
declare module 'uniqid'
declare module 'locale-emoji'
interface Page<T = any> {
  /** resultado */
  data: T[]
  /** metadatos */
  /** el recuento del primer elemento de la página, a partir de 0 */
  start: number
  /** el recuento del último elemento de la página, a partir de 0 */
  end: number
  /** el número total de resultados */
  total: number
  /** el número de la página actual, a partir de 1 */
  currentPage: number
  /** el número de elementos por página (predeterminado: 25) */
  size: number
  /** el número de la última página */
  lastPage: number
  url: {
    /** la url de la página actual */
    current: string
    /** la url de la página anterior (si hay alguna) */
    prev: string | undefined
    /** la url de la página siguiente (si hay alguna) */
    next: string | undefined
  }
}
