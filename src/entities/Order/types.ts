import type { Nullable } from '@shared/types'

export interface OrderState {
  location: Nullable<string>
  model: Nullable<string>
  configuration: Nullable<string>
}
