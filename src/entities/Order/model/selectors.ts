import type { RootState } from "@app/store/store"

export const selectOrderCity = (state: RootState) => state.order.city
export const selectOrderAdress = (state: RootState) => state.order.address
export const selectOrderLocation = (state: RootState) => state.order.location
