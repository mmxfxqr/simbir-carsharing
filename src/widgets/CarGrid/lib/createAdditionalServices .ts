import type { CarConfig } from '@widgets/CarGrid/types'

export const createAdditionalServices = (
  fullTankCost: number,
  childSeatCost: number,
  rightHandDriveCost: number,
): CarConfig['additionalServices'] => ({
  fullTank: {
    name: 'Полный бак',
    cost: fullTankCost,
    available: true,
  },
  childSeat: {
    name: 'Детское кресло',
    cost: childSeatCost,
    available: true,
  },
  rightHandDrive: {
    name: 'Правый руль',
    cost: rightHandDriveCost,
    available: true,
  },
})
