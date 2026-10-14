import type { RootState } from '@app/store/store'

export const selectOrderCity = (state: RootState) => state.order.city
export const selectOrderAdress = (state: RootState) => state.order.address
export const selectOrderLocation = (state: RootState) => state.order.location
export const selectOrderCar = (state: RootState) => state.order.car
export const selectOrderCost = (state: RootState) => state.order.cost
export const selectOrderColorCost = (state: RootState) => state.order.colorCost
export const selectOrderRentDurationCost = (state: RootState) =>
  state.order.rentDurationCost
export const selectOrderSelectedServicesCost = (state: RootState) =>
  state.order.selectedServicesCost
export const selectOrderCostRange = (state: RootState) => state.order.costRange
export const selectOrderColor = (state: RootState) => state.order.selectedColor
export const selectOrderRentDuration = (state: RootState) =>
  state.order.rentDuration
export const selectOrderRentDurationMinutes = (state: RootState) =>
  state.order.rentDurationMinutes
export const selectOrderRent = (state: RootState) => state.order.selectedRate
export const selectOrderAdditionalServices = (state: RootState) =>
  state.order.additionalServices
