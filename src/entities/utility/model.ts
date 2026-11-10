export interface Utility {
  id: number
  name: string
  description: string
  imageUrl: string
  videoUrl: string
  tariffRate: number
  consumptionNorm: number
  measurementUnit: string
  likesCount: number
}

export function selectUtilities(utilities: readonly Utility[], maxTariff: number | null): Utility[] {
  return utilities.filter((utility) => maxTariff === null || utility.tariffRate <= maxTariff)
}

export function nextUtilityId(utilities: readonly Utility[], currentId: number): number | undefined {
  if (!utilities.length) return undefined
  const index = utilities.findIndex((utility) => utility.id === currentId)
  return utilities[(index + 1) % utilities.length].id
}

export const formatNumber = (value: number): string => new Intl.NumberFormat('ru-RU', {
  maximumFractionDigits: 3,
}).format(value)
