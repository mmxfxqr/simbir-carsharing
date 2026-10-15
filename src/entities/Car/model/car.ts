import { elantra, lexus, camry, creta, i30n, sonata } from '@assets/cars'
import { createAdditionalServices } from '@widgets/CarGrid/lib/createAdditionalServices '
import type { Car } from '@entities/Car'

export const cars: Car[] = [
  {
    image: elantra,
    brand: 'Hyundai',
    model: 'Elantra',
    cost: '12 000 - 25 000 ₽',
    category: 'economy',
    config: {
      colors: [
        { name: 'Red', extraCost: 0 },
        { name: 'Blue', extraCost: 500 },
        { name: 'Black', extraCost: 0 },
      ],
      tariffs: { perMinute: 7, perDay: 1999 },
      additionalServices: createAdditionalServices(700, 1000, 2000),
    },
  },
  {
    image: i30n,
    brand: 'Hyundai',
    model: 'i30 N',
    cost: '10 000 - 32 000 ₽',
    category: 'economy',
    config: {
      colors: [
        { name: 'Red', extraCost: 500 },
        { name: 'Blue', extraCost: 0 },
        { name: 'Black', extraCost: 0 },
      ],
      tariffs: { perMinute: 10, perDay: 2499 },
      additionalServices: createAdditionalServices(500, 1000, 2000),
    },
  },
  {
    image: creta,
    brand: 'Hyundai',
    model: 'Creta',
    cost: '12 000 - 25 000 ₽',
    category: 'economy',
    config: {
      colors: [
        { name: 'Red', extraCost: 0 },
        { name: 'Blue', extraCost: 300 },
        { name: 'White', extraCost: 0 },
      ],
      tariffs: { perMinute: 8, perDay: 2199 },
      additionalServices: createAdditionalServices(1200, 1000, 3000),
    },
  },
  {
    image: sonata,
    brand: 'Hyundai',
    model: 'Sonata',
    cost: '10 000 - 32 000 ₽',
    category: 'economy',
    config: {
      colors: [
        { name: 'Red', extraCost: 0 },
        { name: 'Black', extraCost: 0 },
        { name: 'White', extraCost: 500 },
      ],
      tariffs: { perMinute: 9, perDay: 2299 },
      additionalServices: createAdditionalServices(1200, 2000, 3000),
    },
  },
  {
    image: camry,
    brand: 'Toyota',
    model: 'Camry 3.5',
    cost: '15 000 - 35 000 ₽',
    category: 'premium',
    config: {
      colors: [
        { name: 'Red', extraCost: 1000 },
        { name: 'Black', extraCost: 0 },
        { name: 'White', extraCost: 500 },
      ],
      tariffs: { perMinute: 15, perDay: 3499 },
      additionalServices: createAdditionalServices(2500, 2000, 3000),
    },
  },
  {
    image: lexus,
    brand: 'Lexus',
    model: 'IS 250',
    cost: '18 000 - 40 000 ₽',
    category: 'premium',
    config: {
      colors: [
        { name: 'Red', extraCost: 1500 },
        { name: 'Black', extraCost: 0 },
        { name: 'White', extraCost: 1000 },
      ],
      tariffs: { perMinute: 18, perDay: 3999 },
      additionalServices: createAdditionalServices(2500, 2000, 3000),
    },
  },
]
