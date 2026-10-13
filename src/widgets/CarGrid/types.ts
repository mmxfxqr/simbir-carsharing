import type { Car } from "@entities/Car/types"

export interface CarCardProps extends Car {
  onCardClick: (car: Car) => void
  isSelected: boolean
}
