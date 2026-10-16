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
        { name: 'Red', extraCost: 0, plate: 'А 482 МК 77' },
        { name: 'Blue', extraCost: 500, plate: 'В 715 РТ 50' },
        { name: 'Black', extraCost: 0, plate: 'Е 306 ОХ 78' },
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
        { name: 'Red', extraCost: 500, plate: 'К 194 АВ 16' },
        { name: 'Blue', extraCost: 0, plate: 'М 628 ЕК 23' },
        { name: 'Black', extraCost: 0, plate: 'О 357 НС 54' },
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
        { name: 'Red', extraCost: 0, plate: 'Р 861 ТУ 66' },
        { name: 'Blue', extraCost: 300, plate: 'С 243 КМ 116' },
        { name: 'White', extraCost: 0, plate: 'Т 579 ВЕ 190' },
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
        { name: 'Red', extraCost: 0, plate: 'У 632 КА  77' },
        { name: 'Black', extraCost: 0, plate: 'Х 418 МР 174' },
        { name: 'White', extraCost: 500, plate: 'А 927 РС  77' },
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
        { name: 'Red', extraCost: 1000, plate: 'В 153 ХК 63' },
        { name: 'Black', extraCost: 0, plate: 'Е 746 АО 72' },
        { name: 'White', extraCost: 500, plate: 'К 289 РВ 25' },
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
        { name: 'Red', extraCost: 1500, plate: 'М 564 ТК 36' },
        { name: 'Black', extraCost: 0, plate: 'О 831 АЕ 42' },
        { name: 'White', extraCost: 1000, plate: 'Р 672 НМ 14' },
      ],
      tariffs: { perMinute: 18, perDay: 3999 },
      additionalServices: createAdditionalServices(2500, 2000, 3000),
    },
  },
]
