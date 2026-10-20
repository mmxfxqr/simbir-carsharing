import type { Service } from '@entities/Order/types'
import type { Nullable } from '@shared/types'

export interface TotalOrderTextItemProps {
  labelValue: string
  value: string
}
export interface TotalOrderServiceItemsProps {
  services: Nullable<Service[]>
}
