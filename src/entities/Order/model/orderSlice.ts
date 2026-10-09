import { initialState } from './initialState'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Nullable } from '@shared/types'

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
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload
    },
  },
})

export const { setLocation, setCity, setAddress, setModel } = orderSlice.actions

export const orderReducer = orderSlice.reducer
