import leftArrow from '@assets/slider/left.svg'
import rightArrow from '@assets/slider/right.svg'

export interface NavigationButtonAtr {
  direction: string
  image: string
  position: string
  alt: string
}

export const navigationButtonAtr: NavigationButtonAtr[] = [
  {
    direction: 'prev',
    image: leftArrow,
    position: 'left-0',
    alt: 'Назад',
  },
  {
    direction: 'next',
    image: rightArrow,
    position: 'right-0',
    alt: 'Вперед',
  },
]
