import type { Car } from '@entities/Car/types'
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
    setAddress: (state, action: PayloadAction<Nullable<string>>) => {
      state.address = action.payload
    },
    setCar: (state, action: PayloadAction<Nullable<Car>>) => {
      state.car = action.payload
    },
    setCost: (state, action: PayloadAction<Nullable<string>>) => {
      state.cost = action.payload
    },
    clearCar: (state) => {
      state.car = null
    },
  },
})

export const {
  setLocation,
  setCity,
  setAddress,
  setCar,
  setCost,
  clearCar,
} = orderSlice.actions

export const orderReducer = orderSlice.reducer
