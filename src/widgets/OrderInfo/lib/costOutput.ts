import type { Nullable } from '@shared/types'
import { formatCost, formatCostRange } from '@widgets/OrderInfo/lib/formatPrice'
import type { TFunction } from 'i18next'

export const costOutput = (cost: Nullable<string | number>, t: TFunction) => {
  return typeof cost === 'number' ? formatCost(cost) : formatCostRange(cost, t)
}
