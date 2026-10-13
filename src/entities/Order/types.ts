import type { Car } from '@entities/Car/types'
import type { Nullable } from '@shared/types'

export interface OrderState {
  city: string
  address: Nullable<string>
  location: Nullable<string>
  car: Nullable<Car>
  cost: Nullable<string>
  configuration: Nullable<string>
}
