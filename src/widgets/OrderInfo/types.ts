import type { Nullable } from '@shared/types'

export interface OrderInfoItemProps {
  title: string
  value: Nullable<string>
}

export interface OrderPriceProps {
  cost: Nullable<string>
}

export interface OrderStepState {
  location: Nullable<string>
  model: Nullable<string>
}
