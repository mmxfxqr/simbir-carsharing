import elantra from '@assets/cars/Elantra.png'
import lexus from '@assets/cars/Lexus.png'
import camry from '@assets/cars/Camry.png'
import creta from '@assets/cars/Creta.png'
import sonata from '@assets/cars/Sonata.png'
import i30n from '@assets/cars/i30N.png'
import type { Car } from '@widgets/CarGrid/types'

export const cars: Car[] = [
  {
    image: elantra,
    brand: 'Hyundai',
    model: 'Elantra',
    cost: '12 000 - 25 000 ₽',
    category: 'economy',
  },
  {
    image: i30n,
    brand: 'Hyundai',
    model: 'i30 N',
    cost: '10 000 - 32 000 ₽',
    category: 'economy',
  },
  {
    image: creta,
    brand: 'Hyundai',
    model: 'Creta',
    cost: '12 000 - 25 000 ₽',
    category: 'economy',
  },
  {
    image: sonata,
    brand: 'Hyundai',
    model: 'Sonata',
    cost: '10 000 - 32 000 ₽',
    category: 'economy',
  },
  {
    image: camry,
    brand: 'Toyota',
    model: 'Camry 3.5',
    cost: '15 000 - 35 000 ₽',
    category: 'premium',
  },
  {
    image: lexus,
    brand: 'Lexus',
    model: 'IS 250',
    cost: '18 000 - 40 000 ₽',
    category: 'premium',
  },
]
