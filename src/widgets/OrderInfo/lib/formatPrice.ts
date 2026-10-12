import type { Nullable } from '@shared/types'

export const formatPrice = (price: Nullable<string>) => {
  const formatedPrice = price?.replace('-', 'до')

  return `от ${formatedPrice}`
}
