import type { OrderState } from '@entities/Order/types'
import { cityInitialValue } from '@pages/LocationPage'

export const initialState: OrderState = {
  city: cityInitialValue,
  address: null,
  location: null,
  car: null,
  selectedColor: null,
  rentDuration: null,
  rentDurationMinutes: null,
  fromDate: null,
  toDate: null,
  selectedRate: null,
  selectedAdditionalServices: null,
  cost: null,
  colorCost: null,
  selectedServicesCost: null,
  rentDurationCost: null,
  costRange: null,
  configuration: null,
  order: null,
}
