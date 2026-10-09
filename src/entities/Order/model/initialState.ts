import type { OrderState } from '@entities/Order/types'
import { locations } from '@pages/LocationPage/config/location'

export const initialState: OrderState = {
  city: Object.keys(locations)[0],
  address: null,
  location: null,
  model: null,
  configuration: null,
}
