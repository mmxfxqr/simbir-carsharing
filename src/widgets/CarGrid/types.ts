type CategotyCarByCost = 'economy' | 'premium'

export interface Car {
  image: string
  brand: string
  model: string
  cost: string
  category: CategotyCarByCost
}

export interface CarCardProps extends Car {
  onCardClick: (brand: string, model: string) => void
  isSelected: boolean
}
