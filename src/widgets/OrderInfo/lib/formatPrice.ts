import type { Nullable } from '@shared/types'
import type { TFunction } from 'i18next'

export const formatConstRange = (price: Nullable<string>, t: TFunction) => {
  const formattedPrice = price?.replace(/\s*-\s*/, ` ${t('to')} `)

  return `${t('from')} ${formattedPrice ?? ''}`.trim()
}

export const formatCost = (cost: number) => {
  const lCost = new Intl.NumberFormat('ru-RU').format(cost)

  return `${lCost} ₽`
}
