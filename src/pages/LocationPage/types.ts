// types.ts
export type LocationPoint = {
  address: string
  coords: string
}

export type Location = {
  center: number[] 
  zoom?: number 
  addresses: Record<string, number[]> 
}

export type Locations = Record<string, Location>
