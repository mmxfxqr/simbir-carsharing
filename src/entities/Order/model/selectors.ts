import type { RootState } from '@app/store/store'
import { calculateRentDurationCost } from '@widgets/ConfigurationRatePick/lib/calculateRentDurationCost'

export const selectOrderCity = (state: RootState) => state.order.city
export const selectOrderAdress = (state: RootState) => state.order.address
export const selectOrderLocation = (state: RootState) => state.order.location
export const selectOrderCar = (state: RootState) => state.order.car
export const selectOrderCost = (state: RootState) => state.order.cost
export const selectOrderColorCost = (state: RootState) => state.order.colorCost
export const selectOrderSelectedServicesCost = (state: RootState) =>
  state.order.selectedServicesCost
export const selectOrderCostRange = (state: RootState) => state.order.costRange
export const selectOrderColor = (state: RootState) => state.order.selectedColor
export const selectOrderFromDate = (state: RootState) => state.order.fromDate
export const selectOrderRentDuration = (state: RootState) =>
  state.order.rentDuration
export const selectOrderRentDurationMinutes = (state: RootState) =>
  state.order.rentDurationMinutes
export const selectOrderSelectedRate = (state: RootState) =>
  state.order.selectedRate
export const selectOrderAdditionalServices = (state: RootState) =>
  state.order.selectedAdditionalServices
export const selectOrderRentDurationCost = (state: RootState) => {
  const duration = selectOrderRentDurationMinutes(state)
  const rate = selectOrderSelectedRate(state)
  const car = selectOrderCar(state)

  if (duration == null || duration <= 0 || rate == null || !car) {
    return null
  }

  return calculateRentDurationCost(duration, rate, car.config.tariffs)
}
export const selectOrderTotalCost = (state: RootState) => {
  const { cost, colorCost, selectedServicesCost } = state.order
  const rentDurationCost = selectOrderRentDurationCost(state)

  return (
    (cost ?? 0) +
    (colorCost ?? 0) +
    (rentDurationCost ?? 0) +
    (selectedServicesCost ?? 0)
  )
}
export const selectOrder = (state: RootState) => state.order.order
export const selectOrderState = (state: RootState) => state.order
