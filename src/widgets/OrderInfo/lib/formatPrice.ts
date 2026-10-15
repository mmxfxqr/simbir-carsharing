import type { Nullable } from '@shared/types'
import type { TFunction } from 'i18next'

export const formatCostRange = (price: Nullable<string>, t: TFunction) => {
  const formattedPrice = price?.replace(/\s*-\s*/, ` ${t('to')} `)

  return `${t('from')} ${formattedPrice ?? ''}`.trim()
}

export const formatCost = (cost: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(cost)
}
