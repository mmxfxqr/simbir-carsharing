import type { Nullable } from '@shared/types'
import type { TFunction } from 'i18next'

export const formatPrice = (price: Nullable<string>, t: TFunction) => {
  const formattedPrice = price?.replace(/\s*-\s*/, ` ${t('to')} `)

  return `${t('from')} ${formattedPrice ?? ''}`.trim()
}
