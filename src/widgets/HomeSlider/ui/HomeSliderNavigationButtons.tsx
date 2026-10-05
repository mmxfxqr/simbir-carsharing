import type { HomeSliderNavigationButtonsProps } from '@widgets/HomeSlider/types'
import type { FC } from 'react'

export const HomeSliderNavigationButtons: FC<
  HomeSliderNavigationButtonsProps
> = ({ emblaApi }) => {
  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  return (
    <>
      <button
        className="absolute left-0 top-0 z-5 h-full w-16 flex items-center justify-center hover:bg-primary/20"
        onClick={goToPrev}
      >
        <img src="/slider/left.svg" alt="Назад" />
      </button>

      <button
        className="absolute right-0 top-0 z-5 h-full w-16 flex items-center justify-center hover:bg-primary/20"
        onClick={goToNext}
      >
        <img src="/slider/right.svg" alt="Вперёд" />
      </button>
    </>
  )
}
