export interface NavigationButtonAtr {
  direction: string
  image: string
  position: string
  alt: string
}

export const navigationButtonAtr: NavigationButtonAtr[] = [
  {
    direction: 'prev',
    image: '/slider/left.svg',
    position: 'left-0',
    alt: 'Назад',
  },
  {
    direction: 'next',
    image: '/slider/right.svg',
    position: 'right-0',
    alt: 'Вперед',
  },
]
