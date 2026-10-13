import elantra from '@assets/cars/Elantra.png'
import lexus from '@assets/cars/Lexus.png'
import camry from '@assets/cars/Camry.png'
import creta from '@assets/cars/Creta.png'
import sonata from '@assets/cars/Sonata.png'
import i30n from '@assets/cars/i30N.png'
import { createAdditionalServices } from '@widgets/CarGrid/lib/createAdditionalServices '
import type { Car } from '@entities/Car/types'

export const cars: Car[] = [
  {
    image: elantra,
    brand: 'Hyundai',
    model: 'Elantra',
    cost: '12 000 - 25 000 ₽',
    category: 'economy',
    config: {
      colors: [
        { name: 'Красный', extraCost: 0 },
        { name: 'Голубой', extraCost: 500 },
        { name: 'Чёрный', extraCost: 0 },
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
        { name: 'Красный', extraCost: 500 },
        { name: 'Голубой', extraCost: 0 },
        { name: 'Чёрный', extraCost: 0 },
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
        { name: 'Красный', extraCost: 0 },
        { name: 'Голубой', extraCost: 300 },
        { name: 'Белый', extraCost: 0 },
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
        { name: 'Красный', extraCost: 0 },
        { name: 'Чёрный', extraCost: 0 },
        { name: 'Белый', extraCost: 500 },
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
        { name: 'Красный', extraCost: 1000 },
        { name: 'Чёрный', extraCost: 0 },
        { name: 'Белый', extraCost: 500 },
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
        { name: 'Красный', extraCost: 1500 },
        { name: 'Чёрный', extraCost: 0 },
        { name: 'Белый', extraCost: 1000 },
      ],
      tariffs: { perMinute: 18, perDay: 3999 },
      additionalServices: createAdditionalServices(2500, 2000, 3000),
    },
  },
]
