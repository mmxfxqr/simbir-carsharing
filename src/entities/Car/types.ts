type CategotyCarByCost = 'economy' | 'premium'

export interface Car {
  image: string
  brand: string
  model: string
  cost: string
  category: CategotyCarByCost
  config: CarConfig
}
export type CarColor = {
  name: string
  extraCost: number
  plate: string
}

export type AdditionalService = {
  name: string
  cost: number
  available: boolean
}

export type CarConfig = {
  colors: CarColor[]
  tariffs: {
    perMinute: number
    perDay: number
  }
  additionalServices: {
    fullTank: AdditionalService
    childSeat: AdditionalService
    rightHandDrive: AdditionalService
  }
}
