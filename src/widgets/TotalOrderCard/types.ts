import type { Nullable } from '@shared/types'
import { TOTAL_ORDER_SERVICES } from './config/totalOrderServiceConfig'

export interface TotalOrderTextItemProps {
  labelValue: string
  value: string
}
export interface TotalOrderServiceItemsProps {
  services: Nullable<TotalOrderService[]>
}

export type TotalOrderService =
  (typeof TOTAL_ORDER_SERVICES)[keyof typeof TOTAL_ORDER_SERVICES]
export type TotalOrderServiceConfig = Record<
  TotalOrderService,
  { labelValue: string; value: string }
>
