import type { OrderState } from '@entities/Order/types'
import { locations } from '@pages/LocationPage/config/location'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Nullable } from '@shared/types'

const initialState: OrderState = {
  city: Object.keys(locations)[0],
  address: null,
  location: null,
  model: null,
  configuration: null,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Nullable<string>>) => {
      state.location = action.payload
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.address = null
      state.city = action.payload
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload
    },
  },
})

export const { setLocation, setCity, setAddress } = orderSlice.actions

export const orderReducer = orderSlice.reducer
