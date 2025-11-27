export const activeColorClasses = {
  green: 'bg-green-200 text-green-800',
  red: 'bg-red-200 text-red-800',
  blue: 'bg-blue-200 text-blue-800',
  sky: 'bg-sky-200 text-sky-800',
  yellow: 'bg-yellow-200 text-yellow-800',
  gray: 'bg-gray-200 text-gray-800',
  white: 'bg-gray-200 text-gray-800',
  black: 'bg-gray-800 text-gray-200',
  orange: 'bg-orange-200 text-orange-800',
} as const

export type ColorBadge = keyof typeof activeColorClasses

export const hoverColorClasses: Record<ColorBadge, string> = {
  green: 'hover:bg-green-200 hover:text-green-800',
  red: 'hover:bg-red-200 hover:text-red-800',
  blue: 'hover:bg-blue-200 hover:text-blue-800',
  sky: 'hover:bg-sky-200 hover:text-sky-800',
  yellow: 'hover:bg-yellow-200 hover:text-yellow-800',
  gray: 'hover:bg-gray-200 hover:text-gray-800',
  white: 'hover:bg-gray-200 hover:text-gray-800',
  black: 'hover:bg-gray-800 hover:text-gray-200',
  orange: 'hover:bg-orange-200 hover:text-orange-800',
}
