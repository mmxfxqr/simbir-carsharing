import type { Car } from '@entities/Car/types'
import type { ValueOf } from '@shared/types'

export interface CarCardProps extends Car {
  onCardClick: (car: Car) => void
  isSelected: boolean
}

export const FilterId = {
  All: 'all',
  Premium: 'premium',
  Economy: 'economy',
} as const

export type FilterId = ValueOf<typeof FilterId>
