import type { Car } from '@entities/Car/types'
import { initialState } from './initialState'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Nullable } from '@shared/types'
import type { RateType } from '@widgets/ConfigurationRatePick/types'
import type { Order, Service } from '@entities/Order/types'
import { cityInitialValue } from '@pages/LocationPage'

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
    setCost: (state, action: PayloadAction<Nullable<number>>) => {
      state.cost = action.payload
    },
    setColorCost: (state, action: PayloadAction<Nullable<number>>) => {
      state.colorCost = action.payload
    },
    setRentDurationCost: (state, action: PayloadAction<Nullable<number>>) => {
      state.rentDurationCost = action.payload
    },
    setSelectedServicesCost: (
      state,
      action: PayloadAction<Nullable<number>>,
    ) => {
      state.selectedServicesCost = action.payload
    },
    setCostRange: (state, action: PayloadAction<Nullable<string>>) => {
      state.costRange = action.payload
    },
    setSelectedColor: (state, action: PayloadAction<Nullable<string>>) => {
      state.selectedColor = action.payload
    },
    setRentDuration: (state, action: PayloadAction<Nullable<string>>) => {
      state.rentDuration = action.payload
    },
    setRentDurationMinutes: (
      state,
      action: PayloadAction<Nullable<number>>,
    ) => {
      state.rentDurationMinutes = action.payload
    },
    setFromDate: (state, action: PayloadAction<Nullable<string>>) => {
      state.fromDate = action.payload
    },
    setToDate: (state, action: PayloadAction<Nullable<string>>) => {
      state.toDate = action.payload
    },
    setSelectedRate: (state, action: PayloadAction<Nullable<RateType>>) => {
      state.selectedRate = action.payload
    },
    setAdditionalServices: (
      state,
      action: PayloadAction<Nullable<Service[]>>,
    ) => {
      state.selectedAdditionalServices = action.payload
    },
    setOrder: (state, action: PayloadAction<Nullable<Order>>) => {
      state.order = action.payload
    },
    clearLocation: (state) => {
      state.location = null
      state.city = cityInitialValue
      state.address = null
    },
    clearCar: (state) => {
      if (state.car) {
        state.car = null
      }
    },
    clearConfiguration: (state) => {
      if (state.cost) {
        state.cost = null
        state.colorCost = null
        state.rentDurationCost = null
        state.selectedServicesCost = null
        state.rentDuration = null
        state.rentDurationMinutes = null
        state.fromDate = null
        state.toDate = null
        state.selectedColor = null
        state.selectedRate = null
        state.selectedAdditionalServices = null
      }
    },
    clearOrder: () => initialState,
  },
})

export const {
  setLocation,
  setCity,
  setAddress,
  setCar,
  setCost,
  setColorCost,
  setRentDurationCost,
  setFromDate,
  setToDate,
  setSelectedServicesCost,
  setCostRange,
  setRentDuration,
  setRentDurationMinutes,
  setSelectedColor,
  setSelectedRate,
  setAdditionalServices,
  setOrder,
  clearLocation,
  clearCar,
  clearConfiguration,
  clearOrder,
} = orderSlice.actions

export const orderReducer = orderSlice.reducer
