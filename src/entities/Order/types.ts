import type { Nullable } from '@shared/types'

export interface OrderState {
  city: string
  address: Nullable<string>
  location: Nullable<string>
  model: Nullable<string>
  configuration: Nullable<string>
}
