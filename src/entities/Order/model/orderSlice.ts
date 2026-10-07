import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface OrderState {
  location: string | null
  model: string | null
  configuration: string | null
}

const initialState: OrderState = {
  location: null,
  model: null,
  configuration: null,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
  },
})

export const { setLocation } = orderSlice.actions

export const orderReducer = orderSlice.reducer
