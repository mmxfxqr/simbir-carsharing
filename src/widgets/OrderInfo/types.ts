import type { Nullable } from '@shared/types'
import type { RateType } from '@widgets/ConfigurationRatePick/types'

export interface OrderInfoItemProps {
  title: string
  value: Nullable<string>
}

export interface OrderPriceProps {
  cost: Nullable<string | number>
}

export interface OrderStepState {
  location: Nullable<string>
  model: Nullable<string>
  color: Nullable<string>
  rentDuration: Nullable<string>
  selectedRate: Nullable<RateType>
  selectedAdditionalServices: Nullable<string[]>
}
