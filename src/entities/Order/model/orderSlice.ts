import type { OrderState } from '@entities/Order/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Nullable } from '@shared/types'

const initialState: OrderState = {
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
  },
})

export const { setLocation } = orderSlice.actions

export const orderReducer = orderSlice.reducer
