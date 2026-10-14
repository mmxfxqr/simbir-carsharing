import type { CarConfig } from '@entities/Car/types'

export const createAdditionalServices = (
  fullTankCost: number,
  childSeatCost: number,
  rightHandDriveCost: number,
): CarConfig['additionalServices'] => ({
  fullTank: {
    name: 'Full tank',
    cost: fullTankCost,
    available: true,
  },
  childSeat: {
    name: 'Child seat',
    cost: childSeatCost,
    available: true,
  },
  rightHandDrive: {
    name: 'Right-hand drive',
    cost: rightHandDriveCost,
    available: true,
  },
})
