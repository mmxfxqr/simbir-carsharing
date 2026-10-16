import type { Car } from '@entities/Car/types'
import type { Nullable } from '@shared/types'
import type { RateType } from '@widgets/ConfigurationRatePick/types'

export interface Order extends OrderState {
  id: string
}

export interface OrderState {
  city: string
  address: Nullable<string>
  location: Nullable<string>
  car: Nullable<Car>
  selectedColor: Nullable<string>
  rentDuration: Nullable<string>
  rentDurationMinutes: Nullable<number>
  fromDate: Nullable<string>
  selectedRate: Nullable<RateType>
  selectedAdditionalServices: Nullable<string[]>
  cost: Nullable<number>
  colorCost: Nullable<number>
  selectedServicesCost: Nullable<number>
  rentDurationCost: Nullable<number>
  costRange: Nullable<string>
  configuration: Nullable<string>
  order: Nullable<Order>
}
