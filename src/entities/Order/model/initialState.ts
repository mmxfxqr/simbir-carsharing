import type { OrderState } from '@entities/Order/types'
import { locations } from '@pages/LocationPage/config/location'

export const initialState: OrderState = {
  city: Object.keys(locations)[0],
  address: null,
  location: null,
  car: null,
  cost: null,
  configuration: null,
}
