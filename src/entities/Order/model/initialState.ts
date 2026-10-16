import type { OrderState } from '@entities/Order/types'
import { locations } from '@pages/LocationPage/config/location'

export const initialState: OrderState = {
  city: Object.keys(locations)[0],
  address: null,
  location: null,
  car: null,
  selectedColor: null,
  rentDuration: null,
  rentDurationMinutes: null,
  fromDate: null,
  selectedRate: null,
  selectedAdditionalServices: null,
  cost: null,
  colorCost: null,
  selectedServicesCost: null,
  rentDurationCost: null,
  costRange: null,
  configuration: null,
}
