export interface Slide {
  id: number
  path: string
  title: string
  desc: string
  buttonGradient: string
}

export const slides: Slide[] = [
  {
    id: 1,
    path: '/slider/slider-1.png',
    title: 'Бесплатная парковка',
    desc: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    buttonGradient: 'bg-linear-to-r from-[#13493F] to-[#0C7B1B]',
  },
  {
    id: 2,
    path: '/slider/slider-2.png',
    title: 'Страховка',
    desc: 'Полная страховка страховка автомобиля',
    buttonGradient: 'bg-linear-to-r from-[#132949] to-[#0C7B67]',
  },
  {
    id: 3,
    path: '/slider/slider-3.png',
    title: 'Бензин',
    desc: 'Полный бак на любой заправке города за наш счёт',
    buttonGradient: 'bg-linear-to-r from-[#493013] to-[#7B0C3B]',
  },
  {
    id: 4,
    path: '/slider/slider-4.png',
    title: 'Обслуживание',
    desc: 'Автомобиль проходит еженедельное ТО',
    buttonGradient: 'bg-linear-to-r from-[#281349] to-[#720C7B]',
  },
]
